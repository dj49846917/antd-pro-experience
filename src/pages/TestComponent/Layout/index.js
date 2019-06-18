import React, { PureComponent, Fragment } from 'react';
import { Form, Button, Input, Row, Col, Select, Card } from 'antd';
import { getFormItemLayout, getOneFormItemLayout } from '@/utils/layout';

// 一行两列组合
const colLayout = getFormItemLayout(2);
const formItemLayout = getFormItemLayout(1);

// 一行一列组合
const colOneLayout = getOneFormItemLayout(1);
const formItemOneLayout = getOneFormItemLayout();

class Layout extends PureComponent {
  sure = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      console.log('values', values);
    })
  }

  renderSelect = () => {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div>
        <Form>
		<Card title="一行两列">
          <Row>
			      <Col {...colLayout}>
              <Form.Item
                label="姓名"
                {...formItemLayout}
              >
                {getFieldDecorator('name', {
                  rules: [{
                    required: true, message: '请输入姓名',
                  }],
                })(
                  <Input placeholder='请输入姓名' />
                )}
              </Form.Item>
            </Col>
			      <Col {...colLayout}>
              <Form.Item
                label="年龄"
                {...formItemLayout}
              >
                {getFieldDecorator('age', {
                  rules: [{
                    required: true, message: '请输入年龄',
                  }],
                })(
                  <Input placeholder='请输入年龄' />
                )}
              </Form.Item>
            </Col>
			      <Col {...colLayout}>
              <Form.Item
                label="性别"
                {...formItemLayout}
              >
                {getFieldDecorator('sex', {
                  rules: [{
                    required: true, message: '请输入性别',
                  }],
                })(
                  <Input placeholder='请输入性别' />
                )}
              </Form.Item>
            </Col>
			      <Col {...colLayout}>
              <Form.Item
                label="爱好"
                {...formItemLayout}
              >
                {getFieldDecorator('intrest', {
                  rules: [{
                    required: true, message: '请选择爱好',
                  }],
                })(
                  <Select>
                    <Select.Option key="1" value="1">钓鱼</Select.Option>
                    <Select.Option key="2" value="2">唱歌</Select.Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
		  </Card>
		  <Card title="一行一列" style={{marginTop: '20px'}}>
		  <Row>
			<Col {...colOneLayout}>
              <Form.Item
                label="姓名"
                {...formItemOneLayout}
              >
                {getFieldDecorator('name', {
                  rules: [{
                    required: true, message: '请输入姓名',
                  }],
                })(
                  <Input placeholder='请输入姓名' />
                )}
              </Form.Item>
            </Col>
			      <Col {...colOneLayout}>
              <Form.Item
                label="年龄"
                {...formItemOneLayout}
              >
                {getFieldDecorator('age', {
                  rules: [{
                    required: true, message: '请输入年龄',
                  }],
                })(
                  <Input placeholder='请输入年龄' />
                )}
              </Form.Item>
            </Col>
			      <Col {...colOneLayout}>
              <Form.Item
                label="性别"
                {...formItemOneLayout}
              >
                {getFieldDecorator('sex', {
                  rules: [{
                    required: true, message: '请输入性别',
                  }],
                })(
                  <Input placeholder='请输入性别' />
                )}
              </Form.Item>
            </Col>
		  </Row>
		  </Card>
        </Form>
        <Button type="primary" onClick={this.sure}>提交</Button>
      </div>
    )

  }

  render() {
    return (
      <Card>
        {this.renderSelect()}
      </Card>
    )
  }
}
export default Form.create()(Layout);