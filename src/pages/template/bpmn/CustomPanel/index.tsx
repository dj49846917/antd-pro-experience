import { CommonParamType } from '@/types'
import { Button, Form } from 'antd'
import { memo, useEffect, useReducer, useRef, useState } from 'react'

import BpmnJSModeler from 'bpmn-js/lib/Modeler';
import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from 'bpmn-js-properties-panel';

import customTranslate from '../utils/customTranslate/customTranslate'
import { initialState, Process, reducer } from './Context'
import styles from './index.less'
import Panel from './Panel'
import camundaModdleDescriptor from '../utils/camundaModdleDescriptor';

// 导出xml
export function exportProgressXml(obj: CommonParamType, type: string) {
  obj.saveXML({ format: true }).then((result: { xml: any; }) => {
    const { xml } = result;
    download(type, xml);
  }).catch((err: any) => {
    console.log("err", err)
  })
}

export const download = (type: string, data: string | number | boolean, name?: string) => {
  let dataTrack = '';
  const a = document.createElement('a');

  switch (type) {
    case 'xml':
      dataTrack = 'bpmn';
      break;
    case 'svg':
      dataTrack = 'svg';
      break;
    default:
      break;
  }

  a.setAttribute('href', `data:application/bpmn20-xml;charset=UTF-8,${encodeURIComponent(data)}`);
  a.setAttribute('target', '_blank');
  a.setAttribute('dataTrack', `diagram:download-${dataTrack}`);
  a.setAttribute('download', name || `diagram.${dataTrack}`);

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

function CustomPanel() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const containerRef = useRef<any>(null);
  const uploadRef = useRef<any>(null)
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

  const exportFile = () => {
    exportProgressXml(bpmnjsModeler, 'xml')
  }
  // 点击确定
  const save = async () => {
    const result = await form.validateFields()
  }
  // 点击导入xml
  const openFile = () => {
    uploadRef?.current?.click()
  }

  // 导入操作
  const importLocalFile = () => {
    const file = uploadRef?.current?.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      bpmnjsModeler.importXML(this.result)
    };
  }

  return (
    <Process.Provider value={{ state, dispatch, form, bpmnjsModeler }}>
      <div className={styles['bpmn-container']}>
        <div className={styles['bpmn-btn']}>
          <Button onClick={openFile}>导入xml</Button>
          <Button onClick={exportFile}>导出XML</Button>
          <Button onClick={save}>保存</Button>
          <Button onClick={lookXML}>预览xml</Button>
          <input type="file" id="files" ref={uploadRef} style={{ display: 'none' }} accept=".xml, .bpmn" onChange={importLocalFile} />
        </div>
        <div className={styles['bpmn-main']}>
          <div className={styles['bpmn-modeler']} ref={containerRef}></div>
          <Panel />
        </div>
      </div>
    </Process.Provider>
  )
}

export default memo(CustomPanel)