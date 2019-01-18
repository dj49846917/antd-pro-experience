import React from 'react';
import { Table } from 'antd';

class DjTable extends Table {
  render() {
    const { ...rest } = this.props;
    return <Table {...rest} />
  }
}
export default DjTable;
