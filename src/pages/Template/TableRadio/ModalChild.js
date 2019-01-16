import React, { Fragment, PureComponent } from 'react';
import { Modal, Form, Input } from 'antd';

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

class ModalChild extends PureComponent {
  handleCancel = () => {
    const { changeState } = this.props;
    changeState(false);
  }

  renderAdd = () => {
    const { visible, form, getChildForm,sure } = this.props;
    const { getFieldDecorator } = form;
    getChildForm(form);
    return (
      <Modal
        title="添加"
        visible={visible}
        onOk={sure}
        onCancel={this.handleCancel}
        width="40%"
      >
        <Form>
          {/* <Form.Item
            label="组别"
            {...formItemLayout}
          >
            {getFieldDecorator('ClassifyNm', {
              rules: [{
                required: true, message: '请输入',
              }],
            })(
              <Input placeholder='请输入' />
            )}
          </Form.Item> */}
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
          <Form.Item
            label="选项"
            {...formItemLayout}
          >
            {getFieldDecorator('EnglistNm', {
              rules: [{
                required: true, message: '请输入',
              }],
            })(
              <Input placeholder='请输入' />
            )}
          </Form.Item>
          <Form.Item
            label="评分"
            {...formItemLayout}
          >
            {getFieldDecorator('point', {
              rules: [{
                required: true, message: '请输入',
              }],
            })(
              <Input placeholder='请输入' />
            )}
          </Form.Item>
        </Form>
      </Modal>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderAdd()}
      </Fragment>
    )
  }
}
export default Form.create()(ModalChild);