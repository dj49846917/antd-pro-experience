import React, { Fragment, PureComponent } from 'react';
import { Table, Radio, Card } from 'antd';
import styles from '@/pages/Template/TablePaginationBefore/index.less';
import { connect } from 'dva';

class TablePaginationBefore extends PureComponent {
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
    dispatch({ type: "tablepaginationbefore/getList", payload: param });
  }

  onChangeValue = (e) => { // 选中
    this.setState({
      value: e.target.value,
    })
  }

  // 分页方法
  changePage = (page) => {
    const { pagination } = this.state;
    const { dataSource } = this.props;
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
    const { Total, RetList } = dataSource;

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
      <Card title="分页" className={styles.tableBox}>
        {this.renderTable()}
      </Card>
    )
  }
}
function mapStateToProps(state) {
  return {
    loading: state.loading.effects['tablepaginationbefore/getList'],
    dataSource: state.tablepaginationbefore.dataSource,
  }
};

export default connect(mapStateToProps)(TablePaginationBefore);