import React, { PureComponent, Fragment } from 'react';
import { Form, Button, Input, Row, Col, Card } from 'antd';
import moment from 'moment';
import RenderDate from '@/my-components/own/RenderDate';
import { getFormItemLayout } from '@/utils/layout';

const colLayout = getFormItemLayout(2);
const formItemLayout = getFormItemLayout(1);

class TestDate extends PureComponent {
  sure = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
	  const params = values;
	  params.time1 = moment(params.time1).format('YYYYMMDD');
	  params.time2 = moment(params.time2).format('YYYYMMDD');
	  params.time3 = moment(params.time3).format('YYYYMMDD');
	  console.log('values', params);
    })
  }

  renderSelect = () => {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Card title="日期组件封装">
        <Form>
          <Row>
            <RenderDate
              form={form}
              label='创建时间'
              field='time1'
              columnLayout={2}
			  required
              width="100%"
            />
			<RenderDate
              form={form}
              label='更新时间'
              field='time2'
              columnLayout={2}
              width="100%"
			  required
			  dateFormat="YYYY/MM/DD"
            />
			<RenderDate
              form={form}
              label='更新时间'
              field='time3'
              columnLayout={0}
              width="100%"
			  required
			  initialValue={moment('20180412')}
            />
			<RenderDate
              form={form}
              label='更新时间'
              field='time4'
              width="100%"
			  required
			  fromBefore
			  initialValue={moment('20180412')}
            />
			<RenderDate
              form={form}
              label='更新时间'
              field='time5'
              width="100%"
			  required
			  fromNow
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
export default Form.create()(TestDate);