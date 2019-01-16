/**
 * 
 * 一个弹框放在子组件
 * 
 */

import React, { Fragment, PureComponent } from 'react';
import { Card, Button, Table, Radio, message } from 'antd';
import ModalChild from './ModalChild';

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
    ChineseNm: '本人年收入',
    EnglistNm: '20',
    point: '50',
    key: '7',
  },
  {
    ClassifyNm: '资产及收入情况',
    ChineseNm: '家庭人均年收入',
    EnglistNm: '20',
    point: '50',
    key: '8',
  },
  {
    ClassifyNm: '信用情况',
    ChineseNm: '最长逾期月数',
    EnglistNm: '20',
    point: '50',
    key: '9',
  },
  {
    ClassifyNm: '信用情况',
    ChineseNm: '贷款记录',
    EnglistNm: '20',
    point: '50',
    key: '10',
  },
  {
    ClassifyNm: '信用情况',
    ChineseNm: '付息记录',
    EnglistNm: '20',
    point: '50',
    key: '11',
  },
  {
    ClassifyNm: '信用情况',
    ChineseNm: '是否农商行代发工资',
    EnglistNm: '20',
    point: '50',
    key: '12',
  },
]

class TableRadio extends PureComponent {
  state = {
    visible: false,
    value: '',
    rowData: {},
  }

  watch = () => { // 将弹框打开
    const { rowData } = this.state;
    if (JSON.stringify(rowData) === '{}') {
      message.info("请选择一条数据再查看");
      return;
    }
    this.setState({
      visible: true,
    })
  }

  getChildForm = (form) => { // 获取子组件的form对象
    this.childForm = form;
  }

  changeState = (state) => { // 获取子组件传回的弹框状态
    this.setState({
      visible: state,
    })
  }

  sure = () => {
    this.childForm.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const newData = data;
        const param = values;
        param.ClassifyNm = '基本情况';
        newData.push(param);
        this.childForm.resetFields(); // 清空
        this.setState({
          visible: false,
        })
      }
    });
  }

  onChangeValue = (e) => { // 选中
    console.log("选中", e.target.value);
    this.setState({
      value: e.target.value,
    })
  }

  renderTable = () => {
    const { value } = this.state;
    const columns = [
      {
        title: '选择',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Radio.Group value={value} onChange={(e) => this.onChangeValue(e, record)}>
              <Radio value={record.key} />
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
      <Card title="单选查看一条数据" bordered>
        <Button type='primary' onClick={this.watch}>查看</Button>
        <Table
          pagination={false}
          dataSource={data}
          columns={columns}
          bordered
          onRow={(record) => ({
            onClick: () => {
              console.log(record.key);
              this.setState({
                value: record.key,
                rowData: record,
              })
            }
          })}
        />
      </Card>
    )
  }

  render() {
    const { visible } = this.state;
    // 引入的组件在不用的时候必须销毁
    return (
      <Fragment>
        {this.renderTable()}
        {
          visible ? (
            <ModalChild
              visible={visible}
              getChildForm={this.getChildForm}
              changeState={this.changeState}
              sure={this.sure}
            />
          ) : null
        }
      </Fragment>
    )
  }
}
export default TableRadio;