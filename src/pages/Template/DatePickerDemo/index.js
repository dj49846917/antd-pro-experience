import moment from 'moment';
import React, { PureComponent, Fragment } from 'react';
import { Form, Button, DatePicker, Col, Row } from 'antd';

const formItemLayout = { // 布局
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
};

const { RangePicker } = DatePicker;

class DatePickerDemo extends PureComponent {
  /**
   * 传入参数时，还需要转换时间格式
   * 
   * values.format();
   * 
   */
  submit = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log('value', values);
        const param = {
          date: values.date.format('YYYYMMDD'),
          date2: values.date2.format('YYYY-MM-DD'),
          data3: values.date3.format('YYYY-MM-DD'),
          data4: values.date4[0].format('YYYYMMDD'),
          data5: values.date4[1].format('YYYY/MM/DD'),
        }
        console.log('param', param);
      }
    })
  }

  renderFromcheck = () => {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const data3 = '20180412';
    return (
      <Form>
        <Row>
          <Col md={12}>
            <Form.Item
              label="日期(默认)"
              {...formItemLayout}
            >
              {getFieldDecorator('date', {
                rules: [
                  { required: true }
                ]
              })(
                <DatePicker />
              )}
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              label="日期(展示指定格式)"
              {...formItemLayout}
            >
              {getFieldDecorator('date2', {
                rules: [
                  { required: true }
                ]
              })(
                <DatePicker format='YYYY/MM/DD' />
              )}
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              label="日期(展示指定格式)"
              {...formItemLayout}
            >
              {getFieldDecorator('date3', {
                initialValue: moment(data3),
                rules: [
                  { required: true }
                ]
              })(
                <DatePicker format='YYYY-MM-DD' />
              )}
            </Form.Item>
          </Col>
          <Col md={12}>
            <Form.Item
              label="日期期间"
              {...formItemLayout}
            >
              {getFieldDecorator('date4', {
                rules: [
                  { required: true }
                ]
              })(
                <RangePicker format='YYYY-MM-DD' />
              )}
            </Form.Item>
          </Col>
        </Row>
        <Button onClick={this.submit}>提交</Button>
      </Form>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderFromcheck()}
      </Fragment>
    )
  }
}
export default Form.create()(DatePickerDemo);

