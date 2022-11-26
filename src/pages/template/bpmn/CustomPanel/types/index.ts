export enum EventType { // 流程编辑器的节点类型
  "STARTEVENT" = "bpmn:StartEvent", // 开始节点
  "SEQUENCEFLOW" = "bpmn:SequenceFlow", // 连线
  "USERTASK" = "bpmn:UserTask", // 用户任务
  "PARALLELGATEWAY" = "bpmn:ParallelGateway", // 网关
  "PROCESS" = "bpmn:Process", // 根节点
  "ENDEVENT" = "bpmn:EndEvent", // 结束节点
}