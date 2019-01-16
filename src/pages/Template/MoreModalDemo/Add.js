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

class Add extends PureComponent {
  handleCancel = () => {
    const { changeAddState } = this.props;
    changeAddState(false);
  }

  renderAdd = () => {
    const { visibleAdd, form, getAddForm, sureAdd } = this.props;
    const { getFieldDecorator } = form;
    getAddForm(form);
    return (
      <Modal
        title="添加"
        visible={visibleAdd}
        onOk={sureAdd}
        onCancel={this.handleCancel}
        width="40%"
      >
        <Form>
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
export default Form.create()(Add);