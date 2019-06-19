import React, { PureComponent } from 'react';
import { InputNumber, Form, Col } from 'antd';
import { getFormItemLayout, getOneFormItemLayout } from '@/utils/layout';

/**
 * @description   金额组件
 * 
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
 * @param precision: 	        非必传，		  数值精度，小数精度 (number,默认2位)
 * @param allowMinus: 	      非必传，		  允许为负数 (boolean, 默认为不允许)
 * 
 */
class MoneyInputNumber extends PureComponent {
  constructor(props) {
    super(props);
    const {
      integerPrecision = 13,
      decimalsPrecision = 2
    } = this.props;
    this.integer = integerPrecision; // 整数位数
    this.decimals = decimalsPrecision; // 小数位数
  }

  // 自定义校验
  /**
   * @param rule：        规则(没什么用)
   * @param real:         输入的值
   * @param callback:     回调函数
   * 
   */
  validaterItem = (rule, real, callback) => {
    const { allowMinus, label } = this.props;
    const value = real;
    // 判断值是否存在
    if (!value) {
      callback();
      return;
    }
    if(!allowMinus){
      if(parseFloat(value)<0){
        callback(`${label}不能为负数`);
        return;
      }
    }
    callback();
  }

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
      precision,
      ...rest
    } = this.props;
    return (
      <Form.Item label={label} {...rest} {...formItemLayout}>
        {getFieldDecorator(field, {
          initialValue: typeof initialValue === 'function' ? initialValue() : initialValue, // 判断初始值的类型
          validateFirst: true,
          rules: [
            {
              required,
              message: `请输入${label}`,
            },
            // 自定义校验，参照antd的form组件自定义校验
            {
              validator: this.validaterItem
            }
          ],
        })(
          <InputNumber
            style={{ width }}
            disabled={disabled}
            precision={this.decimals} // 小数精度
            formatter={ // 转换为金额格式，带千分符
              value => {
                return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','); // 这句正则就是转换成金额的千分符
              }
            }
            // 注意: parser不写也没有关系，不知道为什么
            parser={
              value => {
                let newValue = value;
                if (value.indexOf('.') > 0) {
                  // 这句的意思是把带金额的千分符去掉，转成正常的金额格式
                  // 如 const a = '40,000.00' 
                  // const b = a.replace(/\$\s?|(,*)/g, ''); 输出结果'40000.00'
                  const integerVal = newValue.split('.')[0].replace(/\$\s?|(,*)/g, '').substr(0, this.integer);
                  const decimalsVal = newValue.split('.')[1].replace(/\$\s?|(,*)/g, '').substr(0, this.decimals);
                  newValue = `${integerVal}.${decimalsVal}`
                } else {
                  newValue = value.replace(/\$\s?|(,*)/g, '').substr(0, this.integer);
                }
                return newValue
              }
            }
          />
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