import React, { Fragment, PureComponent } from 'react';
import { Upload, Button, Icon, message, Modal, Form, Input } from 'antd';
import reqwest from 'reqwest';

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

class UploadParam extends PureComponent {
  state = {
    fileList: [],
    uploading: false,
  }

  handleCancel = () => {
    const { changeVisible } = this.props;
    changeVisible(false);
  }

  handleUpload = () => {
    const { form } = this.props;
    const { fileList } = this.state;
    form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
      if (err) {
        return;
      }
      const formData = new FormData();
      fileList.forEach((file) => {
        formData.append('files[]', file);
      });

      this.setState({
        uploading: true,
      });
      formData.set("ChineseNm",values.ChineseNm);
      formData.set("userId","111");
      reqwest({
        url: '//jsonplaceholder.typicode.com/posts/',
        method: 'post',
        processData: false,
        data: formData,
        success: () => {
          this.setState({
            fileList: [],
            uploading: false,
          });
          message.success('upload successfully.');
        },
        error: () => {
          this.setState({
            uploading: false,
          });
          message.error('upload failed.');
        },
      });
    });
  }

  renderUpload = () => {
    const { visible, form, getform, sure } = this.props;
    const { getFieldDecorator } = form;
    // getform(form);

    const { uploading, fileList } = this.state;
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };
    return (
      <Modal
        title="上传内容"
        visible={visible}
        // onOk={sure}
        onOk={this.handleUpload}
        onCancel={this.handleCancel}
        confirmLoading={uploading}
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
        </Form>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> Select File
          </Button>
        </Upload>
      </Modal>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderUpload()}
      </Fragment>
    )
  }
}
export default Form.create()(UploadParam);