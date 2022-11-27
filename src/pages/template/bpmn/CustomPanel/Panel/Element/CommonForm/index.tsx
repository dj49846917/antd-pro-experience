import { Form, Input } from 'antd'
import React, { memo, useContext } from 'react'
import { Process } from '../../../Context'
import styles from '../index.less'

function CommonForm() {
  const { state } = useContext(Process)
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    window.bpmnInstance.modeling.updateProperties(state.currentElement, {
      name: e.target.value || undefined
    })
  }

  return (
    <div className={styles.list_item}>
      <div className={styles.list_item_content}>
        <Form.Item name="id" label="节点id" rules={[{ required: true }]}>
          <Input placeholder='请输入节点Id' disabled />
        </Form.Item>
        <Form.Item name="name" label="节点名称" rules={[{ required: true }]}>
          <Input placeholder='请输入节点名称' onChange={changeValue} />
        </Form.Item>
      </div>
    </div>
  )
}

export default memo(CommonForm)