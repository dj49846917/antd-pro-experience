import React, { Fragment, PureComponent } from 'react';
import { Button } from 'antd';

class SetStateDemo extends PureComponent {
  state = {
    param: {
      userId: '001',
      name: '张三',
    }
  }

  changeState = () => {
    const name = "李四";
    const { param } = this.state;
    this.setState({
      param: {
        ...param,
        name,
      }
    })
  }

  renderDemo = () => {
    const { param: { name } } = this.state;
    return (
      <Fragment>
        <Button type="primary" onClick={this.changeState}>改变state的值</Button>
        <div>{name}</div>
      </Fragment>

    )
  }

  render() {
    return (
      <Fragment>
        {this.renderDemo()}
      </Fragment>
    )
  }
}
export default SetStateDemo;