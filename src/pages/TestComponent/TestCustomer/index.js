import React, { PureComponent, Fragment } from 'react';
import { Form, Button, Input, Row, Col, Card } from 'antd';
import CustomerList from '@/my-components/own/CustomerList';
import { getFormItemLayout } from '@/utils/layout';

const colLayout = getFormItemLayout(2);
const formItemLayout = getFormItemLayout(1);

class TestCustomer extends PureComponent {
	state={
		data: {}, // 客户组件选中的值
	}
	
  sure = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      console.log('values', values);
    })
  }

  renderCustomer = () => {
	  const { data } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Card title="客户组件测试">
        <Form>
          <Row>
            <CustomerList
              form={form}
              label='客户名称'
              field='custNm'
              initialValue="张三"
              required
              columnLayout={2}
              callback={(code)=>{
                this.setState({
					data: code
				})
              }}
            />
			<Col {...colLayout}>
              <Form.Item
                label="客户编号"
                {...formItemLayout}
              >
                {getFieldDecorator('custNo', {
					initialValue: data.custNo,
                  rules: [{
                    required: true, message: '请输入',
                  }],
                })(
                  <Input placeholder='请输入' disabled />
                )}
              </Form.Item>
            </Col>
			<Col {...colLayout}>
              <Form.Item
                label="证件类型"
                {...formItemLayout}
              >
                {getFieldDecorator('zjlx', {
					initialValue: data.zjlx,
                  rules: [{
                    required: true, message: '请输入',
                  }],
                })(
                  <Input placeholder='请输入' disabled />
                )}
              </Form.Item>
            </Col>
			<Col {...colLayout}>
              <Form.Item
                label="证件号码"
                {...formItemLayout}
              >
                {getFieldDecorator('zjhm', {
					initialValue: data.zjhm,
                  rules: [{
                    required: true, message: '请输入',
                  }],
                })(
                  <Input placeholder='请输入' disabled />
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button type="primary" onClick={this.sure}>确定</Button>
      </Card>
    )

  }

  render() {
    return (
      <Fragment>
        {this.renderCustomer()}
      </Fragment>
    )
  }
}
export default Form.create()(TestCustomer);