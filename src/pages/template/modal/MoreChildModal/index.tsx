import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Card, Divider, Popconfirm, Spin, Table } from 'antd'
import { useEffect, useState } from 'react'
import { useIntl } from 'umi'
import normalModalInfo, { DataSource } from '../NormalModal/data'
import Detail from './Detail'

function MoreChildModal() {
  const [visible, setVisible] = useState(false)
  const [activeRow, setActiveRow] = useState<DataSource>({} as DataSource)
  const [list, setList] = useState<DataSource[]>([])
  const [loading, setLoading] = useState(false)
  const [actionType, setActionType] = useState<'add' | 'edit' | 'delete'>("add")
  const intl = useIntl()
  useEffect(() => {
    setLoading(true)
    setList(normalModalInfo.dataSource)
    setLoading(false)
  }, [])
  // 按钮操作
  const action = (type: 'add' | 'edit' | 'delete', record?: DataSource) => {
    setActionType(type)
    if (type === 'add') {
      setVisible(true)
    }
    if (type === 'edit') {
      setVisible(true)
      setActiveRow(record as DataSource)
    }
    if (type === 'delete') {
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
      <Card title={intl.formatMessage({ id: 'menu.template.modal.more-child-modal', defaultMessage: '弹窗在子页面和孙页面' })} bordered>
        <Button type='primary' onClick={() => action("add")}>添加</Button>
        <Table
          dataSource={list}
          columns={columns}
          bordered
          rowKey="id"
        />
      </Card>
      {visible && <Detail
        activeRow={activeRow}
        actionType={actionType}
        sureAction={addSure}
        visible={visible}
        closeModal={(show: boolean) => setVisible(show)}
      />}
    </Spin>
  )
}

export default MoreChildModal