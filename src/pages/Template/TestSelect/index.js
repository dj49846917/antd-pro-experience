import React, { PureComponent, Fragment } from 'react';
import { Form, Button, Input, Row, Col } from 'antd';
import RenderSelect from '@/pages/Template/package/own/RenderSelect';

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

class TestSelect extends PureComponent {
  state = {
    data: [
      {
        'userId': '001',
        'name': '张三',
        'sex': '男',
        'age': '20',
      },
      {
        'userId': '002',
        'name': '李四',
        'sex': '男',
        'age': '20',
      },
      {
        'userId': '003',
        'name': '王麻子',
        'sex': '男',
        'age': '20',
      }
    ]
  }

  sure = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      console.log('values', values);
    })
  }

  renderSelect = () => {
    const { data } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div>
        <Form>
          <Row>
            <Col span={8}>
              <RenderSelect
                list={data}
                form={form}
                label='姓名'
                field='xm'
                required
                titleProp='name'
                valueProp='userId'
                // initialValue={data[0].name}
                width="100%"
              />
            </Col>
            <Col span={8}>
              <Form.Item
                label="指标"
                {...formItemLayout}
              >
                {getFieldDecorator('ChineseNm', {
                  rules: [{
                    required: true, message: '请输入',
                  }],
                })(
                  <Input placeholder='请输入' />
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button type="primary" onClick={this.sure}>确定</Button>

      </div>
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
export default Form.create()(TestSelect);