import { Button, Card, Table } from 'antd';
import { useState } from 'react';
import { columns, dataSource } from './data';
import ModalChild from './ModalChild';

function NormalModal() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Card title="获取子组件弹框的功能" bordered>
        <Button type="primary" onClick={() => setVisible(true)}>
          添加
        </Button>
        <Table pagination={false} dataSource={dataSource} columns={columns} bordered />
      </Card>
      <ModalChild visible={visible} />
    </div>
  );
}

export default NormalModal;
