import { PageContainer } from "@ant-design/pro-components"
import { Button, message, Radio, RadioChangeEvent, Table } from "antd"
import { useEffect, useState } from "react"
import normalModalInfo, { DataSource } from "@/pages/template/modal/NormalModal/data"
import ModalChild from "@/pages/template/table/TableRadio/ModalChild"

type Props = {}

function TableRadio({ }: Props) {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState<DataSource[]>([])
  const [activeRow, setActiveRow] = useState<DataSource>({} as DataSource)
  const [activeKey, setActiveKey] = useState("")
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setLoading(true)
    setList(normalModalInfo.dataSource)
    setLoading(false)
  }, [])

  // 查看
  const watch = () => {
    if (JSON.stringify(activeRow) === '{}') {
      message.info("请选择一条数据再查看");
      return;
    }
    setVisible(true)
  }
  // 点击每一列
  const onChangeValue = (e: RadioChangeEvent) => {
    setActiveKey(e.target.value)
  }

  const sure = (result: DataSource) => {
    setList((data) => {
      return [result, ...data]
    })
  }

  const columns = [
    {
      title: '选择',
      dataIndex: 'action',
      key: 'action',
      render: (text: string, record: DataSource) => (
        <span>
          <Radio.Group value={activeKey} onChange={onChangeValue}>
            <Radio value={record.id} />
          </Radio.Group>
        </span>
      )
    },
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
  ];

  return (
    <PageContainer
      loading={loading}
    >
      <Button type='primary' onClick={watch}>查看</Button>
      <Table
        pagination={false}
        dataSource={list}
        columns={columns}
        rowKey="id"
        bordered
        onRow={(record: DataSource) => ({
          onClick: () => {
            setActiveKey(record.id)
            setActiveRow(record)
          }
        })}
      />
      <ModalChild
        visible={visible}
        sureAction={sure}
        activeRow={activeRow}
        closeModal={(show: boolean) => {
          setVisible(show)
        }}
      />
    </PageContainer>
  )
}

export default TableRadio