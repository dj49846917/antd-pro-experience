import React, { Fragment, PureComponent } from 'react';
import { Card, Spin, Tabs } from 'antd';
import { connect } from 'dva';
import CommonDom from './CommonDom';
import BalanceSheet from './BalanceSheet';

const { TabPane } = Tabs;
const Uuid = "001";

class DynamicTable extends PureComponent {
  state = {
    RetList: [], // tab表头数据
    TableList: {}, // 具体Table的数据
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const param = {
      Uuid: Uuid,
    }
    dispatch({ type: "dynamictable/TabList", payload: param }).then(res => {
      this.setState({
        RetList: res.ResponseBody.RetList,
      })
    }).then(() => {
      const { RetList } = this.state;
      const params = {
        Uuid: Uuid,
        ReportStyleNo: RetList.length !== 0 ? RetList[0].ReportStyleNo : '',
      }
      dispatch({ type: "dynamictable/TableList", payload: params }).then(res => {
        this.setState({
          TableList: res.ResponseBody,
        })
      })
    })
  }

  callback = (key) => { // tab页签切换
    const { dispatch } = this.props;
    const param = {
      ReportStyleNo: key,
      Uuid: Uuid,
    }
    dispatch({ type: "dynamictable/TableList", payload: param }).then(res => {
      this.setState({
        TableList: res.ResponseBody,
      })
    })
  }

  renderList = () => {
    const { TableList, RetList } = this.state;
    return (
      <CommonDom
        TableList={TableList}
        RetList={RetList}
      >
        <BalanceSheet
          TableList={TableList}
          RetList={RetList}
        />
      </CommonDom>
    )
  }

  renderTab = () => { // 渲染Tab页签
    const { RetList } = this.state;
    const { loading } = this.props;
    return (
      <Card title="动态表格">
        {/* ------------------------------设置初始值和选中Tab页签------------------------------------*/}
        <Spin spinning={loading}>
          <Tabs defaultActiveKey={RetList.length !== 0 ? RetList[0].ReportStyleNo : null} onChange={this.callback}>
            {
              RetList && RetList.map(item => (
                <TabPane tab={item.DisplayNm} key={item.ReportStyleNo}>
                  {this.renderList()}
                </TabPane>
              ))
            }
          </Tabs>
        </Spin>
      </Card>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderTab()}
      </Fragment>
    )
  }
}
function mapStateToProps(state) {
  return {
    loading: state.loading.effects["dynamictable/TabList"],
    tabList: state.dynamictable.tabList,
    dataSource: state.dynamictable.dataSource,
  }
};

export default connect(mapStateToProps)(DynamicTable);