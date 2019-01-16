import React, { Fragment, PureComponent } from 'react';
import { Card, Button } from 'antd';
import { connect } from 'dva';

class Desk extends PureComponent {
  goTo = () => {
    const { dispatch } = this.props;
    const param = {
      userId: '0001',
      userName: '张三',
    }
    dispatch({type: 'deskpage/turntopage', payload: param});
  }

  turn = () => {
    return (
      <Card title="ant design跳转页面">
        <Button type="primary" onClick={this.goTo}>跳转</Button>
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

function mapStateToProps(state){
  return {

  }
}

export default connect(mapStateToProps)(Desk);