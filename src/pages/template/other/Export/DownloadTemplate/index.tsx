import tableApi from "@/services/table"
import { DicType } from "@/types"
import { PageContainer } from "@ant-design/pro-components"
import { Button, Radio, Table, TablePaginationConfig } from "antd"
import { useEffect, useState } from "react"
import { PageInfo, TableListParamsBackType, TableListType } from "@/pages/template/table/TablePaginationBefore/type"
import * as XLSX from 'xlsx';
import * as XLSXStyle from 'xlsx-style';

type Props = {}

export const commonExportStyle = (sheet1: any, rowLength: number) => {
  const range = XLSX.utils.decode_range(sheet1['!ref']);
  const arr = []
  for (let i = 0; i < rowLength; i++) {
    arr.push({ wch: 30 })
  }
  sheet1["!cols"] = arr  // 设置列宽
  for (let i = range.s.c; i < range.e.c + 1; i++) {
    for (let j = range.s.r; j < range.e.r + 1; j++) {
      let cell_address = {
        c: i,
        r: j,
      };
      let column = XLSX.utils.encode_cell(cell_address);
      if (column === "A1" || column === "B1" || column === "C1" || column === "D1" || column === "E1" || column === "F1" || column === "G1"
        || column === "H1" || column === "I1" || column === "J1" || column === "K1" || column === "L1" || column === "M1" || column === "N1"
        || column === "O1" || column === "P1" || column === "Q1" || column === "R1" || column === "S1" || column === "T1" || column === "U1"
        || column === "V1" || column === "W1" || column === "X1" || column === "Y1" || column === "Z1") {
        sheet1[column].s = {
          font: {
            name: 'Calibri',
            sz: 11,
            bold: true,
            color: { rgb: "ffffff" }
          },
          fill: { fgColor: { rgb: "86bc25" } }
        };
      } else {
        sheet1[column].s = {
          font: {
            name: 'Calibri',
            sz: 11
          }
        };
      }
    }
  }
}

const workbook2blob = (workbook: XLSX.WorkBook) => {
  // 生成excel的配置项
  var wopts = {
    // 要生成的文件类型
    bookType: "xlsx",
    // // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    bookSST: false,
    type: "binary"
  };
  // @ts-ignore
  var wbout = XLSXStyle.write(workbook, wopts);
  // 将字符串转ArrayBuffer
  function s2ab(s: string) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }
  var blob = new Blob([s2ab(wbout)], {
    type: "application/octet-stream"
  });
  return blob;
};

const openDownloadDialog = (blob: string | Blob | MediaSource, fileName: string) => {
  if (typeof blob == "object" && blob instanceof Blob) {
    blob = URL.createObjectURL(blob); // 创建blob地址
  }
  var aLink = document.createElement("a");
  aLink.href = blob as string;
  // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，有时候 file///模式下不会生效
  aLink.download = fileName || "";
  var event;
  if (window.MouseEvent) event = new MouseEvent("click");
  //   移动端
  else {
    event = document.createEvent("MouseEvents");
    event.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  }
  aLink.dispatchEvent(event);
};

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

  const exportList = () => {
    let list = dataSource.list
    if (activeKey) {
      list = dataSource.list.filter(x => x.id === activeKey)
    }
    const sheet1 = XLSX.utils.json_to_sheet(list); // 设置数据
    // const titleList = columns.map(item=>{
    //   return item.title
    // })
    // const sheet1 = XLSX.utils.json_to_sheet([]);
    // XLSX.utils.sheet_add_aoa(sheet1, [titleList], { origin: "A1" }); // 添加标题
    // XLSX.utils.sheet_add_json(sheet1, dataSource.list, { origin: "A2" }); // 添加内容
    commonExportStyle(sheet1, 6);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, sheet1);
    const workbookBlob = workbook2blob(wb);
    openDownloadDialog(workbookBlob, `${Date.now()}.xlsx`);
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

/**
 * 直接设置数据
 * const sheet1 = XLSX.utils.json_to_sheet(dataSource.list);
 * 
 * 先设置标题
 *  const titleList = columns.map(item=>{
      return item.title
    })
    const sheet1 = XLSX.utils.json_to_sheet([]);
    XLSX.utils.sheet_add_aoa(sheet1, [titleList], { origin: "A1" }); // 添加标题
    XLSX.utils.sheet_add_json(sheet1, dataSource.list, { origin: "A2" }); // 添加内容
 * 
 */