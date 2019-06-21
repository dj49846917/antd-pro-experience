import React, { Fragment, PureComponent } from 'react';
import request from '@/utils/request';
import { Table, Radio, Card, Modal } from 'antd';
import styles from '@/pages/Template/TablePaginationBefore/index.less';

class Customer extends PureComponent {
  state = {
    value: '', // 行选中的值
    rowData: {}, // 行数据
    dataSource: {}, // 接口返回数据
    pagination: {
      total: 0,
      pageSize: 10,
      current: 1,
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { pagination } = this.state;
    const param = {
      userId: "001",
    }
    // 接口地址在mock/cusomer.js
    request('/api/template/source006',{
      method: 'POST',
      body: param,
    }).then(res=>{
      console.log('222', res);
      if(res){
        if(res.fault.faultCode !== 'AAAAAAA'){
          Modal.error({
            content: '接口报错'
          })
        }else{
          const newPagination = pagination;
          newPagination.total = res.ResponseBody.Total;
          newPagination.pageSize = res.ResponseBody.PageSize;
          newPagination.current = res.ResponseBody.Current;
          this.setState({
            dataSource: res.ResponseBody,
            pagination: newPagination
          })
        }
      }else{
        return;
      }
    })
  }

  onChangeValue = (e) => { // 选中
    this.setState({
      value: e.target.value,
    })
  }

  // 分页方法
  changePage = (page) => {
    const { pagination, dataSource } = this.state;
    const { Total } = dataSource;
    const param = pagination;
    param.total = Total;
    param.pageSize = page.pageSize;
    param.current = page.current;
    this.setState({
      pagination: param,
    });
  }

  showPagination = (total, pageSize, current) => { // 展示总数
    const totalPage = Math.ceil(total / pageSize);
    return `总共${total}条数据,第${current}/${totalPage}页`
  }

  renderTable = () => {
    const { value, pagination } = this.state;
    const columns = [
      {
        title: '选择',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          <span>
            <Radio.Group value={value} onChange={(e) => this.onChangeValue(e, record)}>
              <Radio value={record.Uuid} />
            </Radio.Group>
          </span>
        )
      },
      {
        title: '客户名称',
        dataIndex: 'custNm',
        key: 'custNm',
      },
      {
        title: '客户编号',
        dataIndex: 'custNo',
        key: 'custNo',
      },
      {
        title: '证件类型',
        dataIndex: 'zjlx',
        key: 'zjlx',
      },
      {
        title: '证件号码',
        dataIndex: 'zjhm',
        key: 'zjhm',
      }
    ]
    const { dataSource } = this.state;
    const { Total, RetList } = dataSource;

    // 展示总数
    const showTotal = () => {
      return this.showPagination(Number(Total), Number(pagination.pageSize), Number(pagination.current));
    }
    return (
      <Table
        pagination={{
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal,
        }}
        dataSource={RetList}
        columns={columns}
        bordered
        rowKey="Uuid"
        onChange={this.changePage}
        onRow={(record) => ({
          onClick: () => {
            this.props.callback(record)
            this.setState({
              value: record.Uuid,
              rowData: record,
            })
          }
        })}
      />
    )
  }

  render() {
    return (
      <Card className={styles.tableBox}>
        {this.renderTable()}
      </Card>
    )
  }
}

export default Customer;