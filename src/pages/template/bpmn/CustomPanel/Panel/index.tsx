import { utils } from '@/utils/utils'
import { Form, Tabs } from 'antd'
import { useEffect, useState, useContext, memo } from 'react'
import { Tab } from 'rc-tabs/lib/interface'
import { ActionType, Process } from '../Context'
import { EventType } from '../types'
import styles from './index.less'
import RootElement from './Element/Root'
import StartElement from './Element/Start'
import UserElement from './Element/User'
import EndElement from './Element/End'
import SequenceFlowElement from './Element/SequenceFlow'

type Props = {}

function Panel({ }: Props) {
  const { state, dispatch, form, bpmnjsModeler } = useContext(Process)
  const [tabInfo, setTabInfo] = useState<Tab[]>([])
  // const [activeTab, setActiveTab] = useState("0")

  useEffect(() => {
    if (!utils.isEmptyObject(bpmnjsModeler)) {
      const root = window.bpmnInstance.elementRegistry.filter((x: { type: EventType; }) => x.type === EventType.PROCESS)
      dispatch({ type: ActionType.changeCurrentElement, payload: { ...state, currentElement: root[0] } })
      bpmnjsModeler.on('selection.changed', (e: { newSelection: string | any[]; }) => {
        let current = {}
        if (e.newSelection.length > 0) {
          current = e.newSelection[0]
        } else {
          current = root[0]
        }
        dispatch({ type: ActionType.changeCurrentElement, payload: { ...state, currentElement: current } })
      });
    }
  }, [bpmnjsModeler])

  useEffect(() => {
    if (!utils.isEmptyObject(state.currentElement)) {
      const current = state.currentElement
      dispatch({ type: ActionType.changeActiveTab, payload: { ...state, activeTab: '0' } })
      if (current.type === EventType.PROCESS) {
        setTabInfo([{ key: '0', label: '基本信息' }])
      } else {
        setTabInfo([{ key: '0', label: '基本信息' }, { key: '1', label: '表单' }])
      }
    }
  }, [state.currentElement])

  const renderContent = () => {
    switch (state.currentElement.type) {
      case EventType.PROCESS:
        return <RootElement />
      case EventType.STARTEVENT:
        return <StartElement />
      case EventType.USERTASK:
        return <UserElement />
      case EventType.ENDEVENT:
        return <EndElement />
      case EventType.SEQUENCEFLOW:
        return <SequenceFlowElement />
      default:
        return <RootElement />
    }
  }

  return (
    <div className={styles['bpmn-panel']}>
      <div className={styles['bpmn-header']}>{state.currentElement?.id}</div>
      <Form
        form={form}
        autoComplete="off"
        layout="vertical"
        className={styles['bpmn-form']}
      >
        <Tabs
          className={styles['bpmn-tabs']}
          activeKey={state.activeTab}
          onChange={(e) => dispatch({ type: ActionType.changeActiveTab, payload: { ...state, activeTab: e } })}
          size='small'
          items={tabInfo}
        />
        {renderContent()}
      </Form>
    </div>
  )
}

export default memo(Panel)