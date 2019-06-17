import React from 'react';
import { Input } from 'antd';

class DjInput extends Input{
  render(){
    const { ...code } = this.props;
    return <Input { ...code } />
  }
}
export default DjInput;