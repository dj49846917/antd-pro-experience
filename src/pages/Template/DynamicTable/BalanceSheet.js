import React, { Fragment, PureComponent } from 'react';
import { Table, Row, Col } from 'antd';

class BalanceSheet extends PureComponent {
  renderList = () => {
    const { TableList } = this.props;
    const { DataListNum, FncColumnStlList, FncFormatList } = TableList;
    // 组装行
    const columns = [];
    if (FncColumnStlList) { // 行列表
      FncColumnStlList.map(item => {
        const obj = {};
        obj.title = item.ColumnNm;
        obj.key = item.Uuid;
        obj.dataIndex = item.ColumnEngNm;
        columns.push(obj);
      })
    }

    // 组装每一列的数据
    const ListNum = Number(DataListNum); // 列表数量
    const ArrObj = {}; // 存放组装后的所有数组的对象
    if (FncFormatList && DataListNum) {
      for (let i = 1; i <= ListNum; i++) {
        ArrObj['List' + i] = []; // 动态创建多个数组
        FncFormatList.map(item => { // 给每个数组装入数据
          if (Number(item.ColumnNum) === i) {
            ArrObj['List' + i].push(item)
          }
        })
      }
    }

    if (DataListNum) {
      if (JSON.stringify(ArrObj) !== '{}') { // 判断这个装多个数组的对象是否为空对象
        const TableDom = [];
        for (let item in ArrObj) {
          for (let i = 1; i <= ListNum; i++) {
            if (item.indexOf(i) > 0) { // 判断对象中的list数组下标是不是和table数量的下标相同
               const tableObj = (
                <Col span={24 / ListNum} key={i}>
                  <Table columns={columns} dataSource={ArrObj[item]} bordered pagination={false} />
                </Col>
              )
              TableDom.push(tableObj);
            }
          }
        }
        return TableDom;
      }
    }
  }

  render() {
    return (
      <Fragment>
        <Row>
          {this.renderList()}
        </Row>
      </Fragment>
    )
  }
}
export default BalanceSheet;