import React, { Fragment, PureComponent } from 'react';
import { Table, Radio, Card } from 'antd';
import { connect } from 'dva';

class TablePagination extends PureComponent {
  state = {
    value: '', // 行选中的值
    rowData: {}, // 行数据
    pagination: {
      total: 0,
      pageSize: 10,
      current: 1,
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const param = {
      userId: "001",
    }
    dispatch({ type: "tablepagination/getList", payload: param }).then((res) => {
      console.log('res', res);
      // console.log('111', res.Total, res.PageSize, res.Current);
      this.setState({
        pagination: {
          total: Number(res.Total) || 0,
          pageSize: Number(res.PageSize) || 10,
          current: Number(res.Current) || 1,
        }
      })
    });
  }

  onChangeValue = (e) => { // 选中
    console.log("选中", e.target.value);
    this.setState({
      value: e.target.value,
    })
  }

  showPagination = (total, pageSize, current) => { // 展示总数
    console.log(total, pageSize, current);
    const totalPage = Math.ceil(total / pageSize);
    return `总共${total}条数据,第${current}/${totalPage}页`
  }

  // 分页方法
  changePage = (page) => {
    console.log('page',page);
    const { dispatch } = this.props;
    const param = {
      userId: "001",
      Current: page.current,
      PageSize: page.pageSize,
    }
    dispatch({ type: "tablepagination/getList", payload: param }).then((res) => {
      this.setState({
        pagination: {
          total: Number(res.Total) || 0,
          pageSize: Number(res.PageSize) || 10,
          current: Number(res.Current) || 1,
        }
      })
    });
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
        title: '财务报表类型',
        dataIndex: 'ReportNm',
        key: 'ReportNm',
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
      },
    ]
    const { loading, dataSource } = this.props;
    const { RetList, PageSize, Current, Total } = dataSource;
    const showTotal = () => {
      return this.showPagination(pagination.total, pagination.pageSize, pagination.current);
    }
    return (
      <Table
        pagination={{
          total: Number(Total),
          current: Number(Current),
          pageSize: Number(PageSize),
          showSizeChanger: true,
          showTotal,
        }}
        dataSource={RetList}
        columns={columns}
        bordered
        loading={loading}
        rowKey="Uuid"
        onChange={this.changePage}
        onRow={(record) => ({
          onClick: () => {
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
      <Card title="分页">
        {this.renderTable()}
      </Card>
    )
  }
}
function mapStateToProps(state) {
  return {
    loading: state.loading.effects['tablepagination/getList'],
    dataSource: state.tablepagination.dataSource,
  }
};

export default connect(mapStateToProps)(TablePagination);