import React, { Fragment, PureComponent } from 'react';
import { Upload, Button, Icon, message, Modal, Form, Input, Card, Table, } from 'antd';
import reqwest from 'reqwest';

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '西湖区湖底公园1号'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

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

class UploadList extends PureComponent {
  state = {
    visible: false,
    fileList: [],
    uploading: false,
  }

  handle = () => { // 打开弹窗
    this.setState({
      visible: true,
    });
  }

  handleCancel = () => { // 关闭弹窗
    this.setState({
      visible: false,
    })
  }

  sure = () => {
    const { form } = this.props;
    const { fileList } = this.state;
    const fileNames = ['ChineseNm'];
    form.validateFields(fileNames,(err, values) => {
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
      formData.set("ChineseNm",values.ChineseNm); // 设置参数
      formData.set("userId","111"); // 设置参数
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

  renderTable = () => {
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];
    return (
      <Card title="上传组件">
        <Button type="primary" onClick={this.handle}>上传</Button>
        <Table
          dataSource={dataSource}
          columns={columns}
        />
      </Card>
    )
  }

  render() {
    const { visible, uploading, fileList } = this.state;
    const { form } = this.props;
    const { getFieldDecorator } = form;
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
      <Fragment>
        {this.renderTable()}
        {
          visible ? (
            <Modal
              title="上传内容"
              visible={visible}
              // onOk={sure}
              onOk={this.sure}
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
          ) : null
        }

      </Fragment>
    )
  }
}
export default Form.create()(UploadList);