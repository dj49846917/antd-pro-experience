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

class Edit extends PureComponent {
  handleCancel = () => {
    const { changeState } = this.props;
    changeState(false);
  }

  renderEdit = () => {
    const { visible, form, getChildForm, sure, rowData } = this.props;
    const { getFieldDecorator } = form;
    getChildForm(form);
    return (
      <Modal
        title="编辑"
        visible={visible}
        onOk={sure}
        onCancel={this.handleCancel}
        width="40%"
      >
        <Form>
          <Form.Item
            label="指标"
            {...formItemLayout}
          >
            {getFieldDecorator('ChineseNm', {
              initialValue: rowData.ChineseNm ? rowData.ChineseNm : '',
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
              initialValue: rowData.EnglistNm ? rowData.EnglistNm : '',
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
              initialValue: rowData.point ? rowData.point : '',
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
export default Form.create()(Edit);