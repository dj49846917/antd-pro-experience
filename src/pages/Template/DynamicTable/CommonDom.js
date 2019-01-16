import React, { Fragment, PureComponent } from 'react';
import styles from './index.css';

class CommonDom extends PureComponent {
  CommonPart = (data) => { // 抽离公共模块
    const dom = data.map((item, index) => {
      return (
        <div key={index}>
          {this.renderCell(item)}
        </div>
      )
    })
    return dom;
  }

  renderCell = (parent) => { // 渲染每一列，根据每个数组的对象个数展示不同的样式
    const dom = parent.map((item, index) => {
      switch (parent.length) {
        case 1:
          return (
            <div key={index} className={styles.One}>{item.DisplayValue}</div>
          )
        case 2:
          return (
            <div key={index} className={styles.Two}>{item.DisplayValue}</div>
          )
        case 3:
          return (
            <div key={index} className={styles.Three}>{item.DisplayValue}</div>
          )
        default:
          return (
            <div key={index} className={styles.Three}>{item.DisplayValue}</div>
          )
      }
    })
    return dom;
  }

  renderHeader = (type) => { // 渲染头和尾
    const { TableList, RetList } = this.props;
    if (type === 'head') {
      const { ReportHeads } = TableList;
      if (ReportHeads) {
        const dom = this.CommonPart(ReportHeads);
        return dom;
      }
    } else {
      const { ReportTails } = TableList;
      if (ReportTails) {
        const dom = this.CommonPart(ReportTails);
        return dom;
      }
    }

  }

  renderCommonDom = () => { // 渲染内容
    const { children } = this.props;
    return (
      <div>
        {this.renderHeader('head')}
        {children}
        {this.renderHeader('foot')}
      </div>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderCommonDom()}
      </Fragment>
    )
  }
}
export default CommonDom;