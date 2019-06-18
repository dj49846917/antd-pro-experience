import React, { PureComponent, Fragment } from 'react';
import { Form, Button, Input, Row, Col, Card } from 'antd';
import RenderSelect from '@/my-components/own/RenderSelect';
import { getFormItemLayout } from '@/utils/layout';

const colLayout = getFormItemLayout(2);
const formItemLayout = getFormItemLayout(1);

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
      <Card title="下拉框组件封装">
        <Form>
          <Row>
            <RenderSelect
              list={data}
              form={form}
              label='姓名'
              field='xm'
              required
              titleProp='name'
              valueProp='userId'
              columnLayout={2}
              mode='multiple'
              width="100%"
            />
            <RenderSelect
              list={data}
              form={form}
              label='姓名'
              field='xm2'
              required
              titleProp='name'
              valueProp='userId'
              columnLayout={2}
              width="100%"
            />
            <RenderSelect
              list={data}
              form={form}
              label='姓名'
              field='xm3'
              required
              titleProp='name'
              valueProp='userId'
              width="100%"
              disabled
            />
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
export default Form.create()(TestSelect);