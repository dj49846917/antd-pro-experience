import { ColProps } from "antd"

export type DataSource = {
  id: string,
  ClassifyNm: string,
  ChineseNm: string,
  EnglistNm: string,
  balance: string,
  point: string,
  day: string,
}

export type ColumnsType = {
  title: string,
  dataIndex: string,
  key: string
}

type MormalModalInfoType = {
  dataSource: DataSource[],
  columns: ColumnsType[],
  formItemLayout: { labelCol: ColProps, wrapperCol: ColProps }
}

const normalModalInfo: MormalModalInfoType = {
  dataSource: [],
  columns: [],
  formItemLayout: { labelCol: {}, wrapperCol: {} }
};
normalModalInfo.dataSource = [
  {
    id: "1",
    ClassifyNm: '基本情况',
    ChineseNm: '年龄',
    EnglistNm: '20',
    point: '50',
    balance: "50",
    day: "1"
  },
  {
    id: "2",
    ClassifyNm: '基本情况',
    ChineseNm: '婚姻状况',
    EnglistNm: '19',
    point: '40',
    balance: "40",
    day: "1"
  },
  {
    id: "3",
    ClassifyNm: '基本情况',
    ChineseNm: '职务',
    EnglistNm: '18',
    point: '60',
    balance: "120",
    day: "2"
  },
  {
    id: "4",
    ClassifyNm: '基本情况',
    ChineseNm: '从业年限',
    EnglistNm: '17',
    point: '70',
    balance: "210",
    day: "3"
  },
  {
    id: "5",
    ClassifyNm: '资产及收入情况',
    ChineseNm: '家庭固定资产',
    EnglistNm: '16',
    point: '80',
    balance: "80",
    day: "1"
  },
  {
    id: "6",
    ClassifyNm: '资产及收入情况',
    ChineseNm: '住房',
    EnglistNm: '15',
    point: '98',
    balance: "98",
    day: "1"
  },
  {
    id: "7",
    ClassifyNm: '资产及收入情况',
    ChineseNm: '本人年收入',
    EnglistNm: '14',
    point: '66',
    balance: "132",
    day: "2"
  },
  {
    id: "8",
    ClassifyNm: '资产及收入情况',
    ChineseNm: '家庭人均年收入',
    EnglistNm: '13',
    point: '72',
    balance: "72",
    day: "1"
  },
  {
    id: "9",
    ClassifyNm: '信用情况',
    ChineseNm: '最长逾期月数',
    EnglistNm: '12',
    point: '65',
    balance: "65",
    day: "1"
  },
  {
    id: "10",
    ClassifyNm: '信用情况',
    ChineseNm: '贷款记录',
    EnglistNm: '11',
    point: '73',
    balance: "73",
    day: "1"
  },
  {
    id: "11",
    ClassifyNm: '信用情况',
    ChineseNm: '付息记录',
    EnglistNm: '10',
    point: '54',
    balance: "54",
    day: "1"
  },
  {
    id: "12",
    ClassifyNm: '信用情况',
    ChineseNm: '是否农商行代发工资',
    EnglistNm: '19',
    point: '22',
    balance: "44",
    day: "2"
  },
];

normalModalInfo.columns = [
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

normalModalInfo.formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
};
export default normalModalInfo;
