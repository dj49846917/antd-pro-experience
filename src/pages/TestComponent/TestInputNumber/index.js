import React, { PureComponent, Fragment } from 'react';
import { Form, Button, Input, Row, Col, Card } from 'antd';
import { getFormItemLayout } from '@/utils/layout';
import MoneyInputNumber from '@/my-components/own/MoneyInputNumber';

const colLayout = getFormItemLayout(2);
const formItemLayout = getFormItemLayout(1);

class TestInputNumber extends PureComponent {
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
      <Card title="金额组件封装">
        <Form>
          <Row>
            <Col {...colLayout}>
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
            <MoneyInputNumber
              columnLayout={2}
              initailValue={20}
              form={form}
              label="金额"
              field="money"
              width="100%"
              required
            />
            <MoneyInputNumber
              initailValue={20}
              form={form}
              label="金额"
              field="money"
              width="100%"
            />
          </Row>
        </Form>
        <Button type="primary" onClick={this.sure}>确定</Button>
      </Card>
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
export default Form.create()(TestInputNumber);