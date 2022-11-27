import { Collapse } from 'antd'
import { memo, useContext } from 'react'
import { Process } from '../../../Context'
import CommonForm from '../CommonForm'
import styles from '../index.less'

function UserElement() {
  const { state } = useContext(Process)
  return (
    <>
      {state.activeTab === '0' && (
        <Collapse defaultActiveKey={['1']} className={styles.list}>
          <Collapse.Panel header="节点信息" key="1">
            <CommonForm />
          </Collapse.Panel>
        </Collapse>
      )}
    </>
  )
}

export default memo(UserElement)