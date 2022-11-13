import tableApi from "@/services/table"
import { DicType } from "@/types"
import { PageContainer } from "@ant-design/pro-components"
import { Button, Table, TablePaginationConfig } from "antd"
import { TableRowSelection } from "antd/lib/table/interface"
import { useEffect, useState } from "react"
import { PageInfo, TableListParamsBackType, TableListType } from "../TablePaginationBefore/type"
import * as XLSX from 'xlsx';
import * as XLSXStyle from 'xlsx-style';
import { commonExportStyle, openDownloadDialog, workbook2blob } from "../../other/Export/utils"

type Props = {}

function TableCheckbox(props: Props) {
  const [loading, setLoading] = useState(false)
  const [activeKey, setActiveKey] = useState<React.Key[]>([])
  const [dicList, setDicList] = useState<DicType[]>([])
  const [dataSource, setDataSource] = useState<PageInfo>({
    list: [],
    total: 0,
    current: 1,
    pageSize: 10
  })
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

  // 点击分页
  const changePage = (page: TablePaginationConfig) => {
    const params = {
      userId: "001",
      pageIndex: page.current as number,
      pageSize: page.pageSize as number
    }
    initData(params)
  }

  // 点击复选框
  const rowSelection: TableRowSelection<TableListType> = {
    selectedRowKeys: activeKey,
    onChange: (selectedRowKeys: React.Key[]) => {
      console.log("selectedRowKeys", selectedRowKeys)
      setActiveKey(selectedRowKeys)
    }
  };

  const rowAction = (record: TableListType) => {
    const newKey = JSON.parse(JSON.stringify(activeKey))
    if (activeKey.indexOf(record.id) > -1) {
      const list = newKey.filter((x: string) => x !== record.id)
      setActiveKey(list)
    } else {
      newKey.push(record.id)
      setActiveKey(newKey)
    }
  }

  const downTemp = () => {
    const titleList = columns.map(item => {
      return item.title
    })
    const sheet1 = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_aoa(sheet1, [titleList], { origin: "A1" }); // 添加标题
    commonExportStyle(sheet1, 6);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1);
    const workbookBlob = workbook2blob(wb);
    openDownloadDialog(workbookBlob, `${Date.now()}.xlsx`);
  }

  const exportList = () => {
    const arr: TableListType[] = []
    if (activeKey.length > 0) {
      dataSource.list.forEach(item => {
        activeKey.forEach(it => {
          if (item.id === it) {
            arr.push(item)
          }
        })
      })
    }

    const sheet1 = XLSX.utils.json_to_sheet(activeKey.length > 0 ? arr : dataSource.list); // 设置数据
    commonExportStyle(sheet1, 6);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1);
    const workbookBlob = workbook2blob(wb);
    openDownloadDialog(workbookBlob, `${Date.now()}.xlsx`);
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
  ]

  return (
    <PageContainer
      loading={loading}
    >
      <Button type="primary" onClick={downTemp}>下载模板</Button>
      <Button type="primary" onClick={exportList} style={{ marginLeft: '10px' }}>导出</Button>
      <Table
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
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
        onRow={(record: TableListType) => ({
          onClick: () => rowAction(record)
        })}
      />
    </PageContainer>
  )
}

export default TableCheckbox