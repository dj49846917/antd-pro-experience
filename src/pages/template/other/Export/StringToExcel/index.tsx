import tableApi from "@/services/table"
import { DicType } from "@/types"
import { PageContainer } from "@ant-design/pro-components"
import { Button, Radio, Table, TablePaginationConfig } from "antd"
import { useEffect, useState } from "react"
import { PageInfo, TableListParamsBackType, TableListType } from "@/pages/template/table/TablePaginationBefore/type"
import * as XLSX from 'xlsx';
import { commonExportStyle, openDownloadDialog, workbook2blob } from "../utils"
import axios from "axios"

type Props = {}

export const openExcel = (result: any, fileName?: string) => {
  const blob = new Blob([result], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  }) // for .xlsx files
  // 通过URL.createObjectURL生成文件路径
  const url = window.URL.createObjectURL(blob)
  // 创建a标签
  const ele = document.createElement("a")
  ele.style.display = 'none'
  // 设置href属性为文件路径，download属性可以设置文件名称
  ele.href = url
  ele.download = fileName ? fileName : '测试文件'
  // 将a标签添加到页面并模拟点击
  document.querySelectorAll("body")[0].appendChild(ele)
  ele.click()
  // 移除a标签
  ele.remove()
}

function DownloadTemplate(props: Props) {
  const [loading, setLoading] = useState(false)
  const [activeKey, setActiveKey] = useState("")
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

  const changePage = (page: TablePaginationConfig) => {
    const params = {
      userId: "001",
      pageIndex: page.current as number,
      pageSize: page.pageSize as number
    }
    initData(params)
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

  const exportList = async () => {
    const result = await axios({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("loginToken")}`,
      },
      responseType: 'blob',
      data: JSON.stringify({ "appId": "", "data": {}, "lang": "cn", "operator": "", "source": "PC", "traceId": "", "version": "1" }),
      url: `https://bdhtesthk.tax.deloitte.com.cn/fssc-mdm/segmentEnumValue/export`,
      method: "post",
    })
    openExcel(result.data)
  }

  const columns = [
    {
      title: '选择',
      dataIndex: 'action',
      key: 'action',
      render: (text: string, record: TableListType) => (
        <span>
          <Radio.Group value={activeKey} onChange={(e) => setActiveKey(e.target.value)}>
            <Radio value={record.id} />
          </Radio.Group>
        </span>
      )
    },
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
          onClick: () => {
            setActiveKey(record.id)
          }
        })}
      />
    </PageContainer>
  )
}

export default DownloadTemplate
// General
// Request URL: https://bdhtesthk.tax.deloitte.com.cn/fssc-mdm/segmentEnumValue/export
// Request Method: POST
// Status Code: 200 OK
// Remote Address: 203.107.54.190:443
// Referrer Policy: strict-origin-when-cross-origin

// Response Headers
// Access-Control-Allow-Credentials: true
// Access-Control-Allow-Origin: http://localhost:8000
// Connection: keep-alive
// Content-disposition: attachment;filename=export.xlsx
// Content-Type: application/vnd.ms-excel; charset=UTF-8
// Date: Mon, 14 Nov 2022 14:16:31 GMT
// Set-Cookie: aliyungf_tc=09ec8ef139102e12633e720a7b0d1396d7dd27df5494d4b568b4684620ad70f4; Path=/; HttpOnly
// Strict-Transport-Security: max-age=31536000
// Transfer-Encoding: chunked
// Vary: Origin

// Request Headers
// Accept: application/json
// Accept-Encoding: gzip, deflate, br
// Accept-Language: zh-CN,zh;q=0.9
// Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhYmJ5Y2hlbkBkZWxvaXR0ZS5jb20uY24iLCJzY29wZSI6WyJhbGwiXSwiZnVsbE5hbWUiOiJhYmJ5Y2hlbiIsImV4cCI6MTY2ODQzODA2MiwidXNlcklkIjoiMTAxMzg3MTQ4NjIyMTEzMTc3NiIsImF1dGhvcml0aWVzIjpbImJhc2UiXSwianRpIjoiMzMwZTNlMzYtZWZjNS00ZGNiLWFkYWMtMTM5OWMzNmRiOGE2IiwiZW1haWwiOiJhYmJ5Y2hlbkBkZWxvaXR0ZS5jb20uY24iLCJrZXkiOiJCREgxMDEzODcxNDg2MjIxMTMxNzc2UENwODgzU3p3d3JUIiwiY2xpZW50X2lkIjoiYmRoLWZzc2MifQ.ZBwhcbpn0CAeKoKZdfq5LJRlm9-DCUBXEvSxnIjm3GRMPEvQq-ayNE0Wj19a6IN3H9RYX1Jq8dJM7bb0WcIDl7I_z3uRShQpPTK5J-5lGpoPBEr1pLyU1PN3LQejy5uPce6iM38jojMRbhCul4JjIuRzyEBY9VjbD_p3-eSCCyxMX8BUCs4HWJAwA1dDp51Knbb69pRylwNP8S86k2WyHLmsL7d4ftyZe98PeJTvtr4kxv8Zj0ihDaDvqMRk3YmkTB9YP5um-xghtF3FqOnt-k9GhyjlfyNFnxe7jhAgkB1rQdVGRE1olh4WOGJaMRctt6Eo-wioJWLWUuTFjvY3TQ
// Connection: keep-alive
// Content-Length: 89
// Content-Type: application/json
// Host: bdhtesthk.tax.deloitte.com.cn
// Origin: http://localhost:8000
// Referer: http://localhost:8000/
// sec-ch-ua: "Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "Windows"
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: cors
// Sec-Fetch-Site: cross-site
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36