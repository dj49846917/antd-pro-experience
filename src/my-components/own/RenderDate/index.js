import React, { PureComponent } from 'react';
import { DatePicker, Form, Col } from 'antd';
import { getFormItemLayout, getOneFormItemLayout } from '@/utils/layout';

/**
 * @description   日期组件
 * 输入指定格式的日期
 * 
 * @param label: 			        非必传， 			页签的标题 (string)
 * @param required： 		      非必传，			控制是否校验 (boolean)
 * @param width： 			      非必传，			控制组件的宽度(object)
 * @param form： 			        必传，			  表单对象
 * @param initialValue： 	    非必传，			组件的初始值(object)
 * @param field： 			      必传，				组件的输出值 (string)
 * @param disabled： 		      非必传，			控制输入框的disable状态
 * @param columnLayout: 	    必传，				布局列数 (number),默认为一行一列
 * @param dateFormat: 	      非必传，		  日期格式 (string, 默认为YYYY-MM-DD)
 * @param fromNow: 	          非必传，		  仅能选择当前日期或之后
 * @param fromBefore: 	      非必传，		  仅能选择当前日期或之前
 * 
 */
class MoneyInputNumber extends PureComponent {
  showInputNumber = formItemLayout => {
    const {
      label,
      form,
      form: { getFieldDecorator },
      required,
      width,
      initialValue,
      field,
      disabled,
      columnLayout,
      ...rest
    } = this.props;
    // 计算当前日期或之前的日期
    const disabledDateBefore = !fromBefore ? null : current => {
      return current && current >= moment().endOf('day');
    }
    // 计算当前日期或之后的日期
    const disabledDateNow = !fromNow ? null : current => {
      return current && current < moment().startOf('day');
    }
    // 根据传入的日期类型，展示不同的日期
    const disabledDate = () => {
      // 当前日期之前
      if (fromBefore) {
        return disabledDateBefore;
      // 当前日期之后
      } else if (fromNow) {
        return disabledDateNow;
      } else {
        return null;
      }
    }
    return (
      <Form.Item label={label} {...rest} {...formItemLayout}>
        {getFieldDecorator(field, {
          initialValue: typeof initialValue === 'function' ? initialValue() : initialValue, // �жϳ�ʼֵ������
          validateFirst: true,
          rules: [
            {
              required,
              message: `请选择${label}`,
            },
          ],
        })(
          <DatePicker
            style={{ width }}
            disabled={disabled}
            format={dateFormat}
            disabledDate={disabledDate()}
            {...rest}
          />
        )}
      </Form.Item>
    )
  }

  // ���ݴ����columnLayout��չʾ��һ��һ�л���һ������
  renderInputNumber = () => {
    const { columnLayout } = this.props;
    // �ж�columnLayout�Ƿ��룬���û����չʾһ��һ�У�����չʾһ������
    if (columnLayout && columnLayout === 2) {
      const colLayout = getFormItemLayout(2);
      const formItemLayout = getFormItemLayout(1);
      return (
        <Col {...colLayout}>
          {this.showInputNumber(formItemLayout)}
        </Col>
      )
    } else {
      const colLayout = getOneFormItemLayout(1);
      const formItemLayout = getOneFormItemLayout();
      return (
        <Col {...colLayout}>
          {this.showInputNumber(formItemLayout)}
        </Col>
      )
    }

  }

  render() {
    return this.renderInputNumber();
  }
}
export default MoneyInputNumber;