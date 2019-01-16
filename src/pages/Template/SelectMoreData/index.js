import React, { Fragment, PureComponent } from 'react';
import { Form, Button, Select } from 'antd';

const dataList = [
  {
    'enumKey': '001',
    'enumName': '张三',
    'age': '18',
    'sex': '男',
  },
  {
    'enumKey': '002',
    'enumName': '李四',
    'age': '19',
    'sex': '男',
  },
  {
    'enumKey': '003',
    'enumName': '王麻子',
    'age': '19',
    'sex': '男',
  },
  {
    'enumKey': '004',
    'enumName': '赵四',
    'age': '21',
    'sex': '女',
  }
]

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
};

const { Option } = Select;

class SelectMoreData extends PureComponent {
  submit = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('values', values);
      }
    })
  }

  handleSelect = (value, item) => {
    console.log('value', value);
    console.log(item.props.data);
  }

  renderSelect = () => {
    const { form: { getFieldDecorator } } = this.props;
    return (
      <Form style={{ position: 'relative' }} onSubmit={this.submit}>
        <Form.Item
          label="指标"
          {...formItemLayout}
        >
          {getFieldDecorator('ChineseNm', {
            rules: [{
              required: true, message: '请输入',
            }],
          })(
            <Select
              style={{ width: '300px' }}
              placeholder="请选择"
              // onSelect={this.handleSelect}
              onSelect={(value, data) => this.handleSelect(value, data)}
            >
              {dataList.map(item => (
                <Option
                  value={item.enumKey}
                  data={item}
                  key={item.enumKey}
                >{item.enumName}
                </Option>
              ))}
            </Select>
          )}
        </Form.Item>
        <Button type="primary" onClick={this.submit}>确定</Button>
      </Form>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderSelect()}
      </Fragment>
    )
  }
}

export default Form.create()(SelectMoreData);