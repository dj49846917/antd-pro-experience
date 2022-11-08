import tableApi from "@/services/table"
import { PageContainer } from "@ant-design/pro-components"
import { Radio, Table, TablePaginationConfig } from "antd"
import { useEffect, useState } from "react"
import { PageInfo, TableListType } from "./type"

type Props = {}

function TablePaginationBefore(props: Props) {
  const [loading, setLoading] = useState(false)
  const [activeKey, setActiveKey] = useState("")
  const [dataSource, setDataSource] = useState<PageInfo>({
    list: [],
    total: 0,
    current: 1,
    pageSize: 10
  })
  useEffect(() => {
    setLoading(true)
    initData()
    setLoading(false)
  }, [])

  const initData = async () => {
    const params = {
      userId: "001"
    }
    setLoading(true)
    const result = await tableApi.getTableList(params)
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
  const columns = [
    {
      title: '选择',
      dataIndex: 'action',
      key: 'action',
      render: (text: string, record: TableListType) => (
        <span>
          <Radio.Group value={activeKey} onChange={(e) => setActiveKey(e.target.value)}>
            <Radio value={record.Uuid} />
          </Radio.Group>
        </span>
      )
    },
    {
      title: '财务报表类型',
      dataIndex: 'ReportNm',
      key: 'ReportNm',
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
    },
  ]

  const showTotal = () => {
    const totalPage = Math.ceil(dataSource.total / dataSource.pageSize);
    return `总共${dataSource.total}条数据,第${dataSource.current}/${totalPage}页`
  }

  const changePage = (page: TablePaginationConfig) => {
    setDataSource((info) => {
      return {
        ...info,
        current: page.current as number,
        pageSize: page.pageSize as number
      }
    })
  }

  return (
    <PageContainer
      loading={loading}
    >
      <Table
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal,
        }}
        dataSource={dataSource.list}
        columns={columns}
        bordered
        loading={loading}
        rowKey="Uuid"
        onChange={changePage}
        onRow={(record: TableListType) => ({
          onClick: () => {
            setActiveKey(record.Uuid)
          }
        })}
      />
    </PageContainer>
  )
}

export default TablePaginationBefore