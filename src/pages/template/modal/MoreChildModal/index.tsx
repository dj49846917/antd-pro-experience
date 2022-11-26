import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Card, Divider, Form, Popconfirm, Spin, Table } from 'antd'
import { useEffect, useReducer, useState } from 'react'
import { useIntl } from 'umi'
import normalModalInfo, { DataSource } from '@/pages/template/modal/NormalModal/data'
import { ActionType, initialState, ModalContext, reducer } from '@/pages/template/modal/MoreChildModal/context'
import Detail from '@/pages/template/modal/MoreChildModal/Detail'
import GrandSun from '@/pages/template/modal/MoreChildModal/GrandSun'

function MoreChildModal() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState(false)
  const [secForm] = Form.useForm()
  const [form] = Form.useForm()

  const intl = useIntl()
  useEffect(() => {
    setLoading(true)
    dispatch({ type: ActionType.changeDataSource, payload: { ...state, dataSource: normalModalInfo.dataSource } })
    setLoading(false)
  }, [])
  // 按钮操作
  const action = (type: 'add' | 'edit' | 'delete', record?: DataSource) => {
    dispatch({ type: ActionType.changeActiveType, payload: { ...state, activeType: type } })
    if (type === 'add') {
      form.resetFields()
      secForm.resetFields()
      dispatch({ type: ActionType.changeVisible, payload: { ...state, visible: true } })
    }
    if (type === 'edit') {
      dispatch({ type: ActionType.changeVisible, payload: { ...state, visible: true } })
      form.setFieldsValue(record)
      dispatch({ type: ActionType.changeActiveRow, payload: { ...state, activeRow: record as DataSource } })
    }
    if (type === 'delete') {
      dispatch({ type: ActionType.changeActiveRow, payload: { ...state, activeRow: {} as DataSource } })
      dispatch({ type: ActionType.changeDataSource, payload: { ...state, dataSource: state.dataSource.filter(x => x.id !== record?.id) } })
    }
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
    <ModalContext.Provider value={{ state, dispatch }}>
      <Spin spinning={loading}>
        <Card title={intl.formatMessage({ id: 'menu.modal.more-child-modal', defaultMessage: '弹窗在子页面和孙页面' })} bordered>
          <Button type='primary' onClick={() => action("add")}>添加</Button>
          <Table
            dataSource={state.dataSource}
            columns={columns}
            bordered
            rowKey="id"
          />
        </Card>
        {state.visible && <Detail form={form} secForm={secForm} />}
        {state.secVisible && <GrandSun form={form} secForm={secForm} />}
      </Spin>
    </ModalContext.Provider>
  )
}

export default MoreChildModal