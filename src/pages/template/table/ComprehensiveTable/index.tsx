import tableApi from "@/services/table"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { PageContainer } from "@ant-design/pro-components"
import { Button, Divider, Form, message, Popconfirm, Table, TablePaginationConfig } from "antd"
import { useEffect, useReducer, useState } from "react"
import { PageInfo, TableListParamsBackType, TableListType } from "../TablePaginationBefore/type"
import { ActionType, ComprehensiveTableContext, initialState, reducer } from "./context"
import Detail from "./Detail"
import { DicType } from '@/types'
import moment from "moment"

function ComprehensiveTable() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [form] = Form.useForm()
  useEffect(() => {
    const params = {
      userId: "001",
      pageIndex: 1,
      pageSize: 10
    }
    initData(params)
    initDic()
  }, [])

  const initData = async (params: TableListParamsBackType) => {
    dispatch({ type: ActionType.changeLoading, payload: { ...state, loading: true } })
    const result = await tableApi.getList(params)
    dispatch({ type: ActionType.changeLoading, payload: { ...state, loading: false } })
    if (result && result.success) {
      dispatch({
        type: ActionType.changeDataSource,
        payload: {
          ...state,
          dataSource: {
            list: result.data.list,
            total: result.data.total,
            current: result.data.current,
            pageSize: result.data.pageSize
          }
        }
      })
    }
  }

  const initDic = async () => {
    const params = ['node_status', 'complate_condition']
    const result = await tableApi.getDicList(params)
    const newDicList = result.data.map((item: DicType) => {
      return {
        ...item,
        label: item.constantKey,
        value: item.constantValue
      }
    })
    dispatch({ type: ActionType.changeDicList, payload: { ...state, dicList: newDicList } })
  }

  const showTotal = () => {
    const totalPage = Math.ceil(state.dataSource.total / state.dataSource.pageSize);
    return `总共${state.dataSource.total}条数据,第${state.dataSource.current}/${totalPage}页`
  }

  const changePage = (page: TablePaginationConfig) => {
    const params = {
      userId: "001",
      pageIndex: page.current as number,
      pageSize: page.pageSize as number
    }
    initData(params)
  }

  // 操作按钮
  const action = (actionType: 'add' | 'edit', record?: TableListType) => {
    if (actionType === 'add') {
      dispatch({ type: ActionType.changeVisible, payload: { ...state, visible: true } })
    }
    if (actionType === 'edit') {
      dispatch({ type: ActionType.changeVisible, payload: { ...state, visible: true } })
      console.log('record', record)
      if (record?.ReportYearMonth) {
        (record.ReportYearMonth as any) = moment(record?.ReportYearMonth)
      }
      dispatch({ type: ActionType.changeActiveRow, payload: { ...state, activeRow: record as TableListType } })
      form.setFieldsValue(record)
    }
  }
  // 删除按钮
  const deleteAction = async (record: TableListType) => {
    dispatch({ type: ActionType.changeLoading, payload: { ...state, loading: true } })
    const result = await tableApi.deleteList(record.id)
    dispatch({ type: ActionType.changeLoading, payload: { ...state, loading: true } })
    if (result && result.success) {
      message.success("删除成功")
      const params = {
        userId: "001",
        pageIndex: 1,
        pageSize: 10
      }
      initData(params)
    }
  }

  const columns = [
    {
      title: '财务报表类型',
      dataIndex: 'ReportNm',
      key: 'ReportNm',
      render: (text: string) => {
        const list = state.dicList.filter(x => (x.constantValue === text && x.parentId === 'node_status'))
        return list.length > 0 ? list[0].constantKey : ''
      }
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
        const list = state.dicList.filter(x => (x.constantValue === text && x.parentId === 'complate_condition'))
        return list.length > 0 ? list[0].constantKey : ''
      }
    },
    {
      title: '操作',
      key: 'action',
      render: (text: string, record: TableListType) => (
        <span>
          <a onClick={() => action("edit", record)}><EditOutlined />编辑</a>
          <Divider type="vertical" />
          <Popconfirm title="确定要删除吗?" onConfirm={() => deleteAction(record)}>
            <a><DeleteOutlined />删除</a>
          </Popconfirm>
        </span>
      ),
    },
  ]

  return (
    <PageContainer
    >
      <ComprehensiveTableContext.Provider value={{ state, dispatch }}>
        <Button type="primary" onClick={() => action('add')}>新增</Button>
        <Table
          pagination={{
            total: state.dataSource.total,
            current: state.dataSource.current,
            pageSize: state.dataSource.pageSize,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal,
          }}
          dataSource={state.dataSource.list}
          columns={columns}
          bordered
          loading={state.loading}
          rowKey="id"
          onChange={changePage}
        />
        <Detail form={form} initData={initData} />
      </ComprehensiveTableContext.Provider>
    </PageContainer>
  )
}

export default ComprehensiveTable