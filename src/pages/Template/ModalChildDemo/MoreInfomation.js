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

class MoreInfomation extends PureComponent {
  handleCancel = () => {
    const { changeInfoState } = this.props;
    changeInfoState(false);
  }

  renderEdit = () => {
    const { visible, form, getInfoForm, sureInfo } = this.props;
    const { getFieldDecorator } = form;
    getInfoForm(form);
    return (
      <Modal
        title="得分标准"
        visible={visible}
        onOk={sureInfo}
        onCancel={this.handleCancel}
        width="30%"
      >
        <Form>
          <Form.Item
            label="余额"
            {...formItemLayout}
          >
            {getFieldDecorator('balance', {
              rules: [{
                required: true, message: '请输入',
              }],
            })(
              <Input placeholder='请输入' />
            )}
          </Form.Item>
          <Form.Item
            label="天数"
            {...formItemLayout}
          >
            {getFieldDecorator('day', {
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
        {this.renderEdit()}
      </Fragment>
    )
  }
}
export default Form.create()(MoreInfomation);