/**
 * 
 * 一个弹框放在子组件
 * 
 */

import React, { Fragment, PureComponent } from 'react';
import { Card, Button, Table, Form, Input } from 'antd';
import ModalChild from './ModalChild';

class TableSetData extends PureComponent {
  state = {
    visible: false,
    rowData: {},
    data: [
      {
        ClassifyNm: '基本情况',
        ChineseNm: '年龄',
        EnglistNm: '20',
        point: '50',
        numValue: '15',
        key: '1',
      },
      {
        ClassifyNm: '基本情况',
        ChineseNm: '婚姻状况',
        EnglistNm: '20',
        point: '50',
        numValue: '22',
        key: '2',
      },
      {
        ClassifyNm: '基本情况',
        ChineseNm: '职务',
        EnglistNm: '20',
        point: '50',
        numValue: '80',
        key: '3',
      },
      {
        ClassifyNm: '基本情况',
        ChineseNm: '从业年限',
        EnglistNm: '20',
        point: '50',
        numValue: '1000',
        key: '4',
      },
      {
        ClassifyNm: '资产及收入情况',
        ChineseNm: '家庭固定资产',
        EnglistNm: '20',
        point: '50',
        numValue: '200',
        key: '5',
      },
      {
        ClassifyNm: '资产及收入情况',
        ChineseNm: '住房',
        EnglistNm: '20',
        point: '50',
        numValue: '66',
        key: '6',
      },
      {
        ClassifyNm: '资产及收入情况',
        ChineseNm: '家庭人均年收入',
        EnglistNm: '20',
        point: '50',
        numValue: '12',
        key: '7',
      },
      {
        ClassifyNm: '信用情况',
        ChineseNm: '最长逾期月数',
        EnglistNm: '20',
        point: '50',
        numValue: '66',
        key: '8',
      },
      {
        ClassifyNm: '信用情况',
        ChineseNm: '贷款记录',
        EnglistNm: '20',
        point: '50',
        numValue: '10',
        key: '9',
      },
      {
        ClassifyNm: '信用情况',
        ChineseNm: '付息记录',
        EnglistNm: '20',
        point: '50',
        numValue: '324',
        key: '10',
      },
      {
        ClassifyNm: '信用情况',
        ChineseNm: '是否农商行代发工资',
        EnglistNm: '20',
        point: '50',
        numValue: '765',
        key: '11',
      },
    ]

  }

  add = (record) => { // 将弹框打开
    this.setState({
      visible: true,
      rowData: record,
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
        const result = String(Number(values.ClassifyNm) / Number(values.ChineseNm));
        console.log(result);
        const { rowData } = this.state;
        rowData.numValue = result;
        this.setState({
          visible: false,
          rowData,
        })
      }
    });
  }

  handleClick = () => {
    const { form  } = this.props;
    const { data } = this.state;
    form.validateFields((err, values) => {
        console.log('values',values);
        console.log('data', data);
    })
  }

  renderTable = () => {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { data } = this.state;
    const columns = [
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
        render: (text, record) => {
          return (
            <div>
              <Form onSubmit={this.handleClick}>
                <Form.Item
                  label="余额"
                >
                  {getFieldDecorator(`yue+${record.key}`, {
                    initialValue: record.numValue,
                    rules: [{
                      required: true,
                      message: '此项必填',
                    }],
                  })(
                    <Input placeholder='请输入' disabled />
                  )}
                </Form.Item>
              </Form>
              <Button type='primary' onClick={() => this.add(record)}>。。。</Button>
            </div>
          )
        }
      },
      {
        title: '标准得分',
        dataIndex: 'point',
        key: 'point',
      },
    ];
    return (
      <Card title="测试修改input初始值" bordered>
        <Button type="primary" onClick={this.handleClick}>确定</Button>
        <Table
          pagination={false}
          dataSource={data}
          columns={columns}
          bordered
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
export default Form.create()(TableSetData);