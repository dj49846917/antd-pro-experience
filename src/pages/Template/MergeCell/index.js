import React, { Fragment, PureComponent } from 'react';
import { Card, Table } from 'antd';

const data = [
  {
    ClassifyNm: '基本情况',
    ChineseNm: '年龄',
    EnglistNm: '20',
    point: '50',
    key: '1',
  },
  {
    ClassifyNm: '基本情况',
    ChineseNm: '婚姻状况',
    EnglistNm: '20',
    point: '50',
    key: '2',
  },
  {
    ClassifyNm: '基本情况',
    ChineseNm: '职务',
    EnglistNm: '20',
    point: '50',
    key: '3',
  },
  {
    ClassifyNm: '基本情况',
    ChineseNm: '从业年限',
    EnglistNm: '20',
    point: '50',
    key: '4',
  },
  {
    ClassifyNm: '资产及收入情况',
    ChineseNm: '家庭固定资产',
    EnglistNm: '20',
    point: '50',
    key: '5',
  },
  {
    ClassifyNm: '资产及收入情况',
    ChineseNm: '住房',
    EnglistNm: '20',
    point: '50',
    key: '6',
  },
  {
    ClassifyNm: '资产及收入情况',
    ChineseNm: '家庭人均年收入',
    EnglistNm: '20',
    point: '50',
    key: '7',
  },
  {
    ClassifyNm: '信用情况',
    ChineseNm: '最长逾期月数',
    EnglistNm: '20',
    point: '50',
    key: '8',
  },
  {
    ClassifyNm: '信用情况',
    ChineseNm: '贷款记录',
    EnglistNm: '20',
    point: '50',
    key: '9',
  },
  {
    ClassifyNm: '信用情况',
    ChineseNm: '付息记录',
    EnglistNm: '20',
    point: '50',
    key: '10',
  },
  {
    ClassifyNm: '信用情况',
    ChineseNm: '是否农商行代发工资',
    EnglistNm: '20',
    point: '50',
    key: '11',
  },
]

const temp = {};
const mergeCells = (text, array, columns) => {
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

class MergeCell extends PureComponent {
  state = {
    dataSource: [],
  }

  componentDidMount() {
    this.setState({
      dataSource: data,
    })
  }

  mergeCell = () => {
    const { dataSource } = this.state;
    const columns = [ // 列
      {
        title: '组别',
        dataIndex: 'ClassifyNm',
        key: 'ClassifyNm',
        render: (text,row) => {
          const obj = {
            children: text,
            props: {},
          };
          obj.props.rowSpan = mergeCells(row.ClassifyNm, dataSource, 'ClassifyNm');
          return obj;
        }
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
      <Card title="合并单元格">
        <Table
          pagination={false}
          dataSource={dataSource}
          columns={columns}
          bordered
          rowKey="key"
        />
      </Card>
    )
  }

  render() {
    return (
      <Fragment>
        {this.mergeCell()}
      </Fragment>
    )
  }
}
export default MergeCell;