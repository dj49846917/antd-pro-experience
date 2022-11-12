import tableApi from '@/services/table';
import { DicType } from '@/types';
import { PageContainer } from '@ant-design/pro-components';
import { Button, Form, Input, message, Modal, Table, TablePaginationConfig, Upload } from 'antd';
import { useEffect, useState } from 'react';
import {
  PageInfo,
  TableListParamsBackType,
} from '@/pages/template/table/TablePaginationBefore/type';
import { UploadOutlined } from '@ant-design/icons';
import { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import normalModalInfo from '@/pages/template/modal/NormalModal/data';

function UploadComponent() {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [dicList, setDicList] = useState<DicType[]>([]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [dataSource, setDataSource] = useState<PageInfo>({
    list: [],
    total: 0,
    current: 1,
    pageSize: 10,
  });
  useEffect(() => {
    const params = {
      userId: '001',
      pageIndex: 1,
      pageSize: 10,
    };
    initData(params);
    initDic();
  }, []);

  // 初始化数据
  const initData = async (params: TableListParamsBackType) => {
    setLoading(true);
    const result = await tableApi.getList(params);
    setLoading(false);
    if (result && result.success) {
      setDataSource({
        list: result.data.list,
        total: result.data.total,
        current: result.data.current,
        pageSize: result.data.pageSize,
      });
    }
  };

  // 数据字典
  const initDic = async () => {
    const params = ['node_status', 'complate_condition'];
    const result = await tableApi.getDicList(params);
    const newDicList = result.data.map((item: DicType) => {
      return {
        ...item,
        label: item.constantKey,
        value: item.constantValue,
      };
    });
    setDicList(newDicList);
  };

  const showTotal = () => {
    const totalPage = Math.ceil(dataSource.total / dataSource.pageSize);
    return `总共${dataSource.total}条数据,第${dataSource.current}/${totalPage}页`;
  };

  // 切换分页
  const changePage = (page: TablePaginationConfig) => {
    const params = {
      userId: '001',
      pageIndex: page.current as number,
      pageSize: page.pageSize as number,
    };
    initData(params);
  };

  // 点击确定
  const saveModal = async () => {
    const values = await form.validateFields();
    if (values) {
      const formData = new FormData();
      fileList.forEach((file) => {
        formData.append('files[]', file as RcFile);
      });
      setLoading(true);
      const result = await fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
        method: 'POST',
        body: formData,
      }).then((res) => res.json());
      setLoading(false);
      if (result) {
        setFileList([]);
        message.success('上传成功');
        setVisible(false);
        form.resetFields();
      }
    }
  };
  // 上传组件的表单设置
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  // 上传配置
  const uploadProps: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '财务报表类型',
      dataIndex: 'ReportNm',
      key: 'ReportNm',
      render: (text: string) => {
        const list = dicList.filter(
          (x) => x.constantValue === text && x.parentId === 'node_status',
        );
        return list.length > 0 ? list[0].constantKey : '';
      },
    },
    {
      title: '报表时间',
      dataIndex: 'ReportYearMonth',
      key: 'ReportYearMonth',
    },
    {
      title: '报表周期类型',
      dataIndex: 'ReportCycleTypeCd',
      key: 'ReportCycleTypeCd',
      render: (text: string) => {
        const list = dicList.filter(
          (x) => x.constantValue === text && x.parentId === 'complate_condition',
        );
        return list.length > 0 ? list[0].constantKey : '';
      },
    },
  ];

  return (
    <PageContainer>
      <Button type="primary" onClick={() => setVisible(true)}>
        导入
      </Button>
      <Table
        pagination={{
          total: dataSource.total,
          current: dataSource.current,
          pageSize: dataSource.pageSize,
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal,
        }}
        dataSource={dataSource.list}
        columns={columns}
        bordered
        loading={loading}
        rowKey="id"
        onChange={changePage}
      />
      <Modal
        confirmLoading={loading}
        title="导入"
        open={visible}
        onOk={saveModal}
        onCancel={() => setVisible(false)}
        width="40%"
      >
        <Form name="add_form" form={form} {...normalModalInfo.formItemLayout}>
          <Form.Item label="编号" name="id" rules={[{ required: true, message: '请输入' }]}>
            <Input placeholder="请输入" />
          </Form.Item>
          <Form.Item
            label="附件"
            name="file"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[{ required: true, message: '请选择' }]}
          >
            <Upload {...uploadProps}>
              <Button icon={<UploadOutlined />}>点击上传</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </PageContainer>
  );
}

export default UploadComponent;
