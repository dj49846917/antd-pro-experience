import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from 'bpmn-js-properties-panel';
import customTranslate from '../utils/customTranslate/customTranslate';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import { useLayoutEffect, useRef } from 'react';
import diagramXML from '../utils/diagram';
import './index.less';

type Props = {}

function Base({ }: Props) {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    initBpmn()
  }, [])

  const initBpmn = () => {
    let bpmnModeler = new BpmnModeler({
      container: containerRef.current,
      propertiesPanel: {
        parent: '#js-properties-panel'
      },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        { translate: ['value', customTranslate] }
      ]
    });
    bpmnModeler.importXML(diagramXML);
  }

  return (
    <div className='bpmn-container'>
      <div className='bpmn-main' ref={containerRef}></div>
      <div id='js-properties-panel' className='bpmn-panel'></div>
    </div>
  )
}

export default Base

/**
 * 
 * 需要的包：
 *  "bpmn-js": "^10.3.0",
    "bpmn-js-properties-panel": "^1.11.2",
    "camunda-bpmn-moddle": "^7.0.1",

   在global.less中引入样式
    @import '~bpmn-js/dist/assets/diagram-js.css';
    @import '~bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
    @import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
    @import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
    @import '~bpmn-js-properties-panel/dist/assets/properties-panel.css';

   在src/typing.d.ts声明包：
    declare module 'bpmn-js/lib/Modeler';
    declare module 'bpmn-js-properties-panel';
 * 
 */