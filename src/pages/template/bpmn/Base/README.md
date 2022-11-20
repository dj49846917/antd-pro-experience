# 需要用到的包

```
  "bpmn-js": "^10.3.0",
  "bpmn-js-properties-panel": "^1.11.2",
  "camunda-bpmn-moddle": "^7.0.1",
```

# 在 global.less 中引入样式

```
    @import '~bpmn-js/dist/assets/diagram-js.css';
    @import '~bpmn-js/dist/assets/bpmn-font/css/bpmn.css';
    @import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-codes.css';
    @import '~bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
    @import '~bpmn-js-properties-panel/dist/assets/properties-panel.css';
```

# 在 src/typing.d.ts 声明:

```
    declare module 'bpmn-js/lib/Modeler';
    declare module 'bpmn-js-properties-panel';
```

# 常用 api 文档：

- [api 文档](https://my.oschina.net/miyuefe/blog/5029662)
- [中文文档](https://github.com/LinDaiDai/bpmn-chinese-document)
- [官方 demo](https://github.com/bpmn-io/bpmn-js-examples)
