import { useLayoutEffect } from 'react'
import MoveCanvasModule from 'diagram-js/lib/navigation/movecanvas'
import BpmnViewer from 'bpmn-js'
import diagramXML from '../utils/diagram';
import './index.less'

type Props = {}

function Viewer(props: Props) {
  useLayoutEffect(() => {
    initBpmn()
  }, [])

  const initBpmn = async () => {
    const viewer = new BpmnViewer({
      container: '#canvas',
      additionalModules: [MoveCanvasModule],
      overlays: {
        defaults: {
          show: { minZoom: 1 },
          scale: true
        }
      }
    });
    await viewer.importXML(diagramXML)
    viewer.get('canvas').zoom('fit-viewport');
    // 设置高亮节点
    viewer.get('canvas').addMarker("START_PROCESS", 'highlightNow');
    viewer.get('canvas').addMarker("sid-E49425CF-8287-4798-B622-D2A7D78EF00B", 'highlight');
    // let overlays = viewer.get('overlays');
    // // viewer设置颜色
    // overlays.add('START_PROCESS', 'note', {
    //   position: {
    //     bottom: 0,
    //     right: 0
    //   },
    //   scale: false,
    //   html: '<div class="diagram-note">提示信息1</div>'
    // });
  }

  return (
    <div id='canvas' className='bpmn-viewer'></div>
  )
}

export default Viewer