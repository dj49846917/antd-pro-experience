import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Card, Divider, Popconfirm, Spin, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useIntl } from 'umi'
import normalModalInfo, { DataSource } from '@/pages/template/modal/NormalModal/data'
import AddComponent from '@/pages/template/modal/MoreModal/Add'
import EditComponent from '@/pages/template/modal/MoreModal/Edit'

function MoreModal() {
  const [visible, setVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)
  const [activeRow, setActiveRow] = useState<DataSource>({} as DataSource)
  const [list, setList] = useState<DataSource[]>([])
  const [loading, setLoading] = useState(false)
  const intl = useIntl();
  useEffect(() => {
    setLoading(true)
    setList(normalModalInfo.dataSource)
    setLoading(false)
  }, [])
  // 按钮操作
  const action = (actionType: 'add' | 'edit' | 'delete', record?: DataSource) => {
    if (actionType === 'add') {
      setVisible(true)
    }
    if (actionType === 'edit') {
      setActiveRow(record as DataSource)
      setEditVisible(true)
    }
    if (actionType === 'delete') {
      setActiveRow({} as DataSource)
      setList((data) => data.filter(x => x.id !== record?.id))
    }
  }

  // 新增
  const addSure = (result: DataSource) => {
    setList((data) => {
      return [result, ...data]
    })
  }
  // 编辑
  const editSure = (result: DataSource) => {
    setList((data) => {
      return data.map(item => {
        if (item.id === result.id) {
          return result
        }
        return item
      })
    })
  }

  const columns = [
    {
      title: '组别',
      dataIndex: 'ClassifyNm',
      key: 'ClassifyNm',
    },
    {
      title: '指标',
      dataIndex: 'ChineseNm',
      key: 'ChineseNm',
    },
    {
      title: '选项',
      dataIndex: 'EnglistNm',
      key: 'EnglistNm',
    },
    {
      title: '标准得分',
      dataIndex: 'point',
      key: 'point',
    },
    {
      title: '操作',
      key: 'action',
      render: (text: string, record: DataSource) => (
        <span>
          <a onClick={() => action("edit", record)}><EditOutlined />编辑</a>
          <Divider type="vertical" />
          <Popconfirm title="确定要删除吗?" onConfirm={() => action("delete", record)}>
            <a><DeleteOutlined />删除</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <Spin spinning={loading}>
      <Card title={intl.formatMessage({ id: 'menu.modal.more-modal', defaultMessage: '多个子组件弹框' })} bordered>
        <Button type='primary' onClick={() => action("add")}>添加</Button>
        <Table
          dataSource={list}
          columns={columns}
          bordered
          rowKey="id"
        />
      </Card>
      {visible && <AddComponent sureAction={addSure} visible={visible} closeModal={(show: boolean) => setVisible(show)} />}
      {editVisible && <EditComponent sureAction={editSure} visible={editVisible} closeModal={(show: boolean) => setEditVisible(show)} activeRow={activeRow} />}
    </Spin>
  )
}

export default MoreModal