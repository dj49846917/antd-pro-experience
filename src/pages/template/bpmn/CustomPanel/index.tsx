import { CommonParamType } from '@/types'
import { Button, Form } from 'antd'
import { useEffect, useReducer, useRef, useState } from 'react'

import BpmnJSModeler from 'bpmn-js/lib/Modeler';
import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from 'bpmn-js-properties-panel';

import customTranslate from '../utils/customTranslate/customTranslate'
import { initialState, Process, reducer } from './Context'
import styles from './index.less'
import Panel from './Panel'
import camundaModdleDescriptor from '../utils/camundaModdleDescriptor';

function CustomPanel() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const containerRef = useRef(null);
  const [bpmnjsModeler, setBpmnjsModeler] = useState<CommonParamType>({});
  const [form] = Form.useForm()

  useEffect(() => {
    initBpmn()
  }, [])

  const initBpmn = async () => {
    const customTranslateModule = {
      translate: ['value', customTranslate],
    };
    let bpmnJSModeler = new BpmnJSModeler({
      additionalModules: [BpmnPropertiesPanelModule, BpmnPropertiesProviderModule, customTranslateModule, {
        zoomScroll: ["value", ''],
      }],
      container: containerRef.current,
      moddleExtensions: {
        camunda: camundaModdleDescriptor,
      },
    });
    setBpmnjsModeler(bpmnJSModeler)
    await bpmnJSModeler.createDiagram()
    window.bpmnInstance = {
      modeling: bpmnJSModeler.get('modeling'),
      elementRegistry: bpmnJSModeler.get("elementRegistry"),
      moddle: bpmnJSModeler.get("moddle"),
      bpmnFactory: bpmnJSModeler.get("bpmnFactory")
    }
  }

  return (
    <Process.Provider value={{ state, dispatch, form, bpmnjsModeler }}>
      <div className={styles['bpmn-container']}>
        <div className={styles['bpmn-btn']}>
          <Button>导出XML</Button>
          <Button>保存</Button>
          <Button>退出</Button>
        </div>
        <div className={styles['bpmn-main']}>
          <div className={styles['bpmn-modeler']} ref={containerRef}></div>
          <Panel />
        </div>
      </div>
    </Process.Provider>
  )
}

export default CustomPanel