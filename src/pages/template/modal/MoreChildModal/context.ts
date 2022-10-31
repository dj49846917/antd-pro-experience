import { createContext } from "react";
import { DataSource } from "../NormalModal/data";
type ProcessAction = {
  type: ActionType,
  payload: ModalStateType
}

type ModalProps = {
  state: ModalStateType,
  dispatch: React.Dispatch<ProcessAction>
}

type ModalStateType = {
  visible: boolean,                       // 打开一级弹窗
  secVisible: boolean,                    // 打开评分弹窗
  dataSource: DataSource[],               // 数据源
  activeRow: DataSource,                  // 选中的数据
  activeType: 'add' | 'edit' | 'delete',  // 选中的按钮类型
}

export enum ActionType {
  changeVisible = "setVisible",           // 修改一级弹窗
  changeSecVisible = "setSecVisible",     // 修改二级弹窗
  changeDataSource = "setDataSource",     // 数据源
  changeActiveRow = "setActiveRow",       // 选中的数据
  changeActiveType = "setActiveType",     // 选中的按钮类型
}

export const initialState: ModalStateType = {
  visible: false,
  secVisible: false,
  dataSource: [],
  activeRow: {} as DataSource,
  activeType: 'add'
}

export const ModalContext = createContext<ModalProps>({
  dispatch: () => { },
  state: initialState
})

export const reducer = (state: ModalStateType, action: ProcessAction) => {
  switch (action.type) {
    case ActionType.changeVisible:
      return { ...state, visible: action.payload.visible }
    case ActionType.changeSecVisible:
      return { ...state, secVisible: action.payload.secVisible }
    case ActionType.changeDataSource:
      return { ...state, dataSource: action.payload.dataSource }
    case ActionType.changeActiveRow:
      return { ...state, activeRow: action.payload.activeRow }
    case ActionType.changeActiveType:
      return { ...state, activeType: action.payload.activeType }
    default:
      return { ...state, dataSource: action.payload.dataSource }
  }
}