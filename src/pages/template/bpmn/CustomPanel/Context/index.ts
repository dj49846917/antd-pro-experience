import { CommonParamType } from "@/types"
import { FormInstance } from "antd"
import { createContext } from "react"

export type ProcessAction = {
  type: ActionType,
  payload: ProcessStateType
}

export enum ActionType {
  changeCurrentElement = "setCurrentElement",
  changeActiveTab = "setActiveTab"
}

export type ProcessStateType = {
  currentElement: CommonParamType,
  activeTab: string
}

export const initialState: ProcessStateType = {
  currentElement: {},
  activeTab: "0"
}

type ProcessProps = {
  state: ProcessStateType,
  dispatch: React.Dispatch<ProcessAction>,
  form: FormInstance<any>,
  bpmnjsModeler: CommonParamType
}

export const Process = createContext<ProcessProps>({
  dispatch: () => { },
  state: initialState,
  form: null as any,
  bpmnjsModeler: {}
});

export const reducer = (state: ProcessStateType, action: ProcessAction) => {
  switch (action.type) {
    case ActionType.changeCurrentElement:
      return { ...state, currentElement: action.payload.currentElement }
    case ActionType.changeActiveTab:
      return { ...state, activeTab: action.payload.activeTab }
    default:
      return { ...state, currentElement: action.payload.currentElement }
  }
}