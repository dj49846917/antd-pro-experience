import { PageContainer } from "@ant-design/pro-components"
import { useEffect, useState } from "react"
import normalModalInfo, { DataSource } from "@/pages/template/modal/NormalModal/data"
import { Table } from "antd"

type Props = {}

const temp = {};
const mergeCells = (text: string, array: DataSource[], columns: string) => {
  let i = 0;
  if (text !== temp[columns]) {
    temp[columns] = text;
    array.forEach((item) => {
      if (item.ClassifyNm === temp[columns]) {
        i += 1;
      }
    });
  }
  return i;
}

function MergeCell({ }: Props) {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState<DataSource[]>([])
  useEffect(() => {
    setLoading(true)
    setList(normalModalInfo.dataSource)
    setLoading(false)
  }, [])

  const columns = [ // 列
    {
      title: '组别',
      dataIndex: 'ClassifyNm',
      key: 'ClassifyNm',
      onCell: (record: DataSource) => ({
        rowSpan: mergeCells(record.ClassifyNm, list, 'ClassifyNm')
      })
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
  ];

  return (
    <PageContainer
      loading={loading}
    >
      <Table
        pagination={false}
        dataSource={list}
        columns={columns}
        bordered
        rowKey="id"
      />
    </PageContainer>
  )
}

export default MergeCell