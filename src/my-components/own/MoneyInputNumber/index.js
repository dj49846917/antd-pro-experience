import React, { PureComponent } from 'react';
import { InputNumber, Form, Col } from 'antd';
import { getFormItemLayout, getOneFormItemLayout } from '@/utils/layout';

/**
 * @param label: 			        非必传， 			页签的标题 (string)
 * @param required： 		      非必传，			控制是否校验 (boolean)
 * @param width： 			      非必传，			控制组件的宽度
 * @param form： 			        必传，			  表单对象
 * @param initialValue： 	    非必传，			组件的初始值
 * @param field： 			      必传，				组件的输出值 (string)
 * @param disabled： 		      非必传，			控制输入框的disable状态
 * @param columnLayout: 	    必传，				布局列数 (number),默认为一行一列
 * @param integerPrecision: 	非必传，		  整数精度 (number,总共不超过15位)
 * @param decimalsPrecision: 	非必传，		  小数精度 (number,默认2位，总共不超过15位)
 * 
 */
class MoneyInputNumber extends PureComponent {
  showInputNumber = formItemLayout => {
    constructor(props) {
      super(props);
      const {
        integerPrecision = 13,
        decimalsPrecision = 2
      } = this.props;
      this.integer = integerPrecision; // 整数位数
      this.decimals = decimalsPrecision; // 小数位数
    }
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
    console.log(this.props);
    return (
      <Form.Item label={label} {...rest} {...formItemLayout}>
        {getFieldDecorator(field, {
          initialValue: typeof initialValue === 'function' ? initialValue() : initialValue, // 判断初始值的类型
          validateFirst: true,
          rules: [
            {
              required,
              message: `请输入${label}`,
            }
          ],
        })(
          <InputNumber style={{ width }} disabled={disabled} />
        )}
      </Form.Item>
    )
  }

  // 根据传入的columnLayout，展示是一行一列还是一行两列
  renderInputNumber = () => {
    const { columnLayout } = this.props;
    // 判断columnLayout是否传入，如果没传，展示一行一列，否则展示一行两列
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