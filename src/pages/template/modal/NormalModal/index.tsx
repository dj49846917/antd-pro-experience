import { Button, Card, Spin, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useIntl } from 'umi';
import normalModalInfo, { DataSource } from './data';
import ModalChild from './ModalChild';

function NormalModal() {
  const [visible, setVisible] = useState(false);
  const [list, setList] = useState<DataSource[]>([])
  const [loading, setLoading] = useState(false)
  const intl = useIntl();
  useEffect(() => {
    setLoading(true)
    setList(normalModalInfo.dataSource)
    setLoading(false)
  }, [])
  // 点击确定时的操作
  const sure = (result: DataSource) => {
    setList((data) => {
      return [result, ...data]
    })
  }

  return (
    <Spin spinning={loading}>
      <Card title={intl.formatMessage({ id: 'menu.template.modal.normal-modal', defaultMessage: '子组件弹窗' })} bordered>
        <Button type="primary" onClick={() => setVisible(true)}>
          添加
        </Button>
        <Table rowKey="id" dataSource={list} columns={normalModalInfo.columns} bordered />
      </Card>
      <ModalChild
        visible={visible}
        sureAction={sure}
        closeModal={(show: boolean) => {
          setVisible(show)
        }}
      />
    </Spin>
  );
}

export default NormalModal;
