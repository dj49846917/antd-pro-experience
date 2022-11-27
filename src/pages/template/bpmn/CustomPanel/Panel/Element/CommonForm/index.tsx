import { Form, Input } from 'antd'
import { memo } from 'react'
import styles from '../index.less'

type Props = {}

function CommonForm({ }: Props) {
  return (
    <div className={styles.list_item}>
      <div className={styles.list_item_content}>
        <Form.Item name="id" label="节点id" rules={[{ required: true }]}>
          <Input placeholder='请输入节点Id' disabled />
        </Form.Item>
        <Form.Item name="name" label="节点名称" rules={[{ required: true }]}>
          <Input placeholder='请输入节点名称' />
        </Form.Item>
      </div>
    </div>
  )
}

export default memo(CommonForm)