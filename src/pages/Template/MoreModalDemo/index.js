
/**
 * 多个弹框在子组件
 * 
 */
import React, { Fragment, PureComponent } from 'react';
import { Card, Button, Table, Divider, Icon, Popconfirm, message } from 'antd';
import Edit from './Edit';
import Add from './Add';

class MoreModalDemo extends PureComponent {
  state = {
    visible: false, // 编辑弹出框
    visibleAdd: false, // 添加弹出框
    rowData: {},
    dataSource: [
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
    ],
  }

  edit = (rowData) => { // 将弹框打开
    this.setState({
      visible: true,
      rowData,
    })
  }

  add = () => { // 添加弹出框打开
    this.setState({
      visibleAdd: true,
    })
  }

  delete = (record) => { // 删除
    const { dataSource } = this.state;
    for (let i = 0; i < dataSource.length; i += 1) {
      if (dataSource[i].key === record.key) {
        dataSource.splice(i, 1);
      }
    }
    console.log(dataSource);
    this.setState({
      dataSource,
    })
  }

  getChildForm = (form) => { // 获取子组件(Edit)的form对象
    this.childForm = form;
  }

  getAddForm = (form) => { // 获取子组件(Add)的form对象
    this.addForm = form;
  }

  changeState = (state) => { // 获取子组件传回的弹框状态
    this.setState({
      visible: state,
    })
  }

  changeAddState = (state) => { // 获取子组件传回的弹框状态
    this.setState({
      visibleAdd: state,
    })
  }

  sure = () => { // 编辑弹出框确定保存
    this.childForm.validateFields((err, values) => {
      if (!err) {
        const { rowData, dataSource } = this.state;
        let newRowData = rowData;
        newRowData = values;
        // 以下为无接口本地逻辑，实际的话，只需要调编辑接口并在成功回调后调列表接口即可
        newRowData.ClassifyNm = '基本情况';
        newRowData.key = rowData.key;
        console.log(newRowData);
        for (let i = 0; i < dataSource.length; i += 1) {
          if (dataSource[i].key === newRowData.key) {
            dataSource[i] = newRowData;
          }
        }
        this.setState({
          visible: false,
          ...dataSource,
        });
        // console.log('Received values of form: ', values);

      }
    });
  }

  sureAdd = () => { // 添加弹出框数据带回
    this.addForm.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const { dataSource } = this.state;
        const param = values;
        param.ClassifyNm = '基本情况';
        dataSource.push(param);
        this.addForm.resetFields(); // 清空
        this.setState({
          visibleAdd: false,
        })
      }
    })
  }

  renderTable = () => {
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
      },
      {
        title: '标准得分',
        dataIndex: 'point',
        key: 'point',
      },
      {
        title: '操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={() => this.edit(record)}><Icon type="edit" />编辑</a>
            <Divider type="vertical" />
            <Popconfirm title="确定要删除吗?" onConfirm={() => this.delete(record)}>
              <a><Icon type="delete" />删除</a>
            </Popconfirm>
          </span>
        ),
      },
    ];
    const { dataSource } = this.state;
    return (
      <Card title="获取子组件弹框的功能" bordered>
        <Button type='primary' onClick={this.add}>添加</Button>
        <Table
          pagination={false}
          dataSource={dataSource}
          columns={columns}
          bordered
        />
      </Card>
    )
  }

  render() {
    const { visible, rowData, visibleAdd } = this.state;
    // 引入的组件在不用的时候必须销毁
    return (
      <Fragment>
        {this.renderTable()}
        {
          visible ? (
            // 编辑组件
            <Edit
              visible={visible}
              getChildForm={this.getChildForm}
              changeState={this.changeState}
              sure={this.sure}
              rowData={rowData}
            />
          ) : null
        }
        {
          visibleAdd ? (
            // 添加组件
            <Add
              visibleAdd={visibleAdd}
              getAddForm={this.getAddForm}
              changeAddState={this.changeAddState}
              sureAdd={this.sureAdd}
            />
          ) : null
        }
      </Fragment>
    )
  }
}
export default MoreModalDemo;