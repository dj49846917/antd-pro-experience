import React, { Fragment, PureComponent } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import MoreInfomation from './MoreInfomation';

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
  state = {
    visible: false,
    result: '',
  }

  handleCancel = () => { // 关闭弹窗
    const { changeAddState } = this.props;
    changeAddState(false);
  }

  showMore = () => { // 展示弹框
    const { form } = this.props;
    this.setState({
      visible: true,
    });
    form.resetFields();
  }

  getInfoForm = (form) => { // 获取子组件的form对象
    this.infoForm = form;
  }

  changeInfoState = (code) => { // 子组件点击取消关闭弹窗
    this.setState({
      visible: code,
    });
  }

  sureInfo = () => {
    this.infoForm.validateFields((err, values) => {
      console.log('Received values of form: ', values);
      const result = parseFloat(values.balance) / parseFloat(values.day);
      console.log('result', result);
      this.setState({
        result,
        visible: false,
      })
    });
  }

  renderAdd = () => {
    const { visibleAdd, form, getAddForm, sureAdd } = this.props;
    const { getFieldDecorator } = form;
    const { result } = this.state;
    getAddForm(form);
    return (
      <Modal
        title="添加"
        visible={visibleAdd}
        onOk={sureAdd}
        onCancel={this.handleCancel}
        width="40%"
      >
        <Form style={{ position: 'relative' }}>
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
              initialValue: result,
              rules: [{
                required: true, message: '请输入',
              }],
            })(
              <Input placeholder='请输入' disabled />
            )}
          </Form.Item>
          <Button type="primary" onClick={this.showMore} style={{ position: 'absolute', right: '74px', top: '130px' }}>...</Button>
        </Form>
      </Modal>
    )
  }

  render() {
    const { visible } = this.state;
    return (
      <Fragment>
        {this.renderAdd()}
        {
          visible ?
            <MoreInfomation
              visible={visible}
              getInfoForm={this.getInfoForm}
              changeInfoState={this.changeInfoState}
              sureInfo={this.sureInfo}
            /> : null
        }

      </Fragment>
    )
  }
}
export default Form.create()(Add);