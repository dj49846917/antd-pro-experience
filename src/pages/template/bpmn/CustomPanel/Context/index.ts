import { createContext } from "react"

export type ProcessAction = {
  type: ActionType,
  payload: ProcessStateType
}

export enum ActionType {
  changeFiledVisible = "setFiledVisible",
}

export type ProcessStateType = {
  filedVisible: boolean,
}

export const initialState: ProcessStateType = {
  filedVisible: false,
}

type ProcessProps = {
  state: ProcessStateType,
  dispatch: React.Dispatch<ProcessAction>
}

export const Process = createContext<ProcessProps>({
  dispatch: () => { },
  state: initialState
});

export const reducer = (state: ProcessStateType, action: ProcessAction) => {
  switch (action.type) {
    case ActionType.changeFiledVisible:
      return { ...state, filedVisible: action.payload.filedVisible }
    default:
      return { ...state, filedVisible: action.payload.filedVisible }
  }
}