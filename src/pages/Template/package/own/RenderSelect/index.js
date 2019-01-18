import React, { PureComponent } from 'react';
import { Select, Form } from 'antd';

/**
 * @label: 非必传， 页签的标题
 * @list： 必传， 展示的列表数据
 * @required： 非必传，控制是否校验
 * @width： 非必传，控制组件的宽度
 * @initialValue： 非必传，组件的初始值
 * @field： 必传，组件的输出值
 * @disabled： 非必传，控制下拉框的disable状态
 * @ 该组件的使用，一定要传的参数是固定的userId，因为返回的数据就是固定的name，
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
                <Option key={item.userId}>{item.name}</Option>
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