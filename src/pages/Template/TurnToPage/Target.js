import React, { Fragment, PureComponent } from 'react';
import { Card } from 'antd';

class Target extends PureComponent {
  state = {
    data: '',
  }

  // 接收参数使用: this.props.location.state
  componentDidMount() {
    const { location } = this.props;
    const { state } = location;
    console.log(state);
    this.setState({
      data: state,
    });
  }

  turn = () => {
    const { data } = this.state;
    return (
      <Card title="ant design获取跳转参数页面">
        <div>
          <div>
            <span>ID:</span>
            <span>{data.userId}</span>
          </div>
          <div>
            <span>用户名:</span>
            <span>{data.userName}</span>
          </div>
        </div>
      </Card>
    )
  }

  render() {
    return (
      <Fragment>
        {this.turn()}
      </Fragment>
    )
  }
}

export default Target;