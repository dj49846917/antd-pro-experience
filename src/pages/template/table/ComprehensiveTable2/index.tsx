import tableApi from "@/services/table"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { PageContainer } from "@ant-design/pro-components"
import { Button, Divider, Form, message, Popconfirm, Table, TablePaginationConfig } from "antd"
import { useEffect, useState } from "react"
import { PageInfo, TableListParamsBackType, TableListType } from "../TablePaginationBefore/type"
import Detail from "./Detail"
import { DicType } from '@/types'
import moment from "moment"

function ComprehensiveTable2() {
  const [loading, setLoading] = useState(false)
  const [visible, setVisible] = useState(false)
  const [dicList, setDicList] = useState<DicType[]>([])
  const [activeRow, setActiveRow] = useState<TableListType>({} as TableListType)
  const [activeType, setActiveType] = useState<'add' | 'edit'>('add')
  const [dataSource, setDataSource] = useState<PageInfo>({
    list: [],
    total: 0,
    current: 1,
    pageSize: 10
  })
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
    setLoading(true)
    const result = await tableApi.getList(params)
    setLoading(false)
    if (result && result.success) {
      setDataSource({
        list: result.data.list,
        total: result.data.total,
        current: result.data.current,
        pageSize: result.data.pageSize
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
    setDicList(newDicList)
  }

  const showTotal = () => {
    const totalPage = Math.ceil(dataSource.total / dataSource.pageSize);
    return `总共${dataSource.total}条数据,第${dataSource.current}/${totalPage}页`
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
  const action = (activeType: 'add' | 'edit', record?: TableListType) => {
    setActiveType(activeType)
    if (activeType === 'add') {
      setVisible(true)
    }
    if (activeType === 'edit') {
      setVisible(true)
      console.log('record', record)
      if (record?.ReportYearMonth) {
        (record.ReportYearMonth as any) = moment(record?.ReportYearMonth)
      }
      setActiveRow(record as TableListType)
      form.setFieldsValue(record)
    }
  }
  // 删除按钮
  const deleteAction = async (record: TableListType) => {
    setLoading(true)
    const result = await tableApi.deleteList(record.id)
    setLoading(false)
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
        const list = dicList.filter(x => (x.constantValue === text && x.parentId === 'node_status'))
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
        const list = dicList.filter(x => (x.constantValue === text && x.parentId === 'complate_condition'))
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
      <Button type="primary" onClick={() => action('add')}>新增</Button>
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
      <Detail
        activeRow={activeRow}
        form={form}
        initData={initData}
        loading={loading}
        visible={visible}
        changeVisible={setVisible}
        changeLoading={setLoading}
        activeType={activeType}
        dicList={dicList}
      />
    </PageContainer>
  )
}

export default ComprehensiveTable2