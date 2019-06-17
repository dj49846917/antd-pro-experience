import React, { PureComponent } from 'react';
import { Select, Form } from 'antd';

/**
 * @param label: 非必传， 页签的标题 (string)
 * @param list： 必传， 展示的列表数据 (array)
 * @param required： 非必传，控制是否校验 (boolean)
 * @param width： 非必传，控制组件的宽度
 * @param initialValue： 非必传，组件的初始值
 * @param field： 必传，组件的输出值 (string)
 * @param disabled： 非必传，控制下拉框的disable状态
 * @param titleProp: 必传，展示下拉框的值
 * @param valueProp: 必传，绑定传出的值
 * 
 */

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

class RenderSelect extends PureComponent {
  renderSelect = () => {
    const {
      label,
      form: { getFieldDecorator },
      list,
      required,
      width,
      initialValue,
      field,
      disabled,
      titleProp,
      valueProp,
      ...rest
    } = this.props;
    console.log(this.props);
    return (
      <Form.Item label={label} {...rest} {...formItemLayout}>
        {getFieldDecorator(field, {
          initialValue: typeof initialValue === 'function' ? initialValue() : initialValue,
          validateFirst: true,
          rules: [
            {
              required,
              message: `请输入${label}}`,
            }
          ],
        })(
          <Select style={{width}}>
            {
              list ? list.map(item => (
                <Option key={item[valueProp]}>{item[titleProp]}</Option>
                )) : null
            }
          </Select>
        )}
      </Form.Item>
    )
  }

  render() {
    return this.renderSelect();
  }
}
export default RenderSelect;