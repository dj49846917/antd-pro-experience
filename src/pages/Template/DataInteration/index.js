/**
 * 
 * 一个弹框放在子组件
 * 
 */

import React, { Fragment, PureComponent } from 'react';
import { Card, Table } from 'antd';
import { connect } from 'dva';

class DataInteration extends PureComponent {
  componentDidMount() {
    const { dispatch } = this.props;
    const param = {
      userId: '001',
    }
    dispatch({ type: "datainteration/getList", payload: param });
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
    ];
    const { dataSource } = this.props;
    return (
      <Card title="数据交互" bordered>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
        />
      </Card>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderTable()}
      </Fragment>
    )
  }
}
function mapStateToProps(state) {
  return {
    loading: state.loading.effects['datainteration/getList'],
    dataSource: state.datainteration.dataSource,
  }
};

export default connect(mapStateToProps)(DataInteration);