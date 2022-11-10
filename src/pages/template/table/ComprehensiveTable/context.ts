import { DicType } from "@/types";
import { createContext } from "react";
import { PageInfo, TableListType } from "../TablePaginationBefore/type";
type ProcessAction = {
  type: ActionType,
  payload: ComprehensiveTableStateType
}

type ComprehensiveTableProps = {
  state: ComprehensiveTableStateType,
  dispatch: React.Dispatch<ProcessAction>
}

type ComprehensiveTableStateType = {
  visible: boolean,                       // 打开一级弹窗
  dataSource: PageInfo,                   // 数据源
  activeRow: TableListType,               // 选中的数据
  activeType: 'add' | 'edit' | 'delete',  // 选中的按钮类型
  dicList: DicType[],                     // 数据字典
  loading: boolean,                       // 加载中
}

export enum ActionType {
  changeVisible = "setVisible",           // 修改一级弹窗
  changeDataSource = "setDataSource",     // 数据源
  changeActiveRow = "setActiveRow",       // 选中的数据
  changeActiveType = "setActiveType",     // 选中的按钮类型
  changeDicList = "setDicList",           // 获取数据字典
  changeLoading = "setLoading",           // 设置loading
}

export const initialState: ComprehensiveTableStateType = {
  visible: false,
  dataSource: {
    list: [],
    total: 0,
    current: 1,
    pageSize: 10
  },
  activeRow: {} as TableListType,
  activeType: 'add',
  dicList: [],
  loading: false
}

export const ComprehensiveTableContext = createContext<ComprehensiveTableProps>({
  dispatch: () => { },
  state: initialState
})

export const reducer = (state: ComprehensiveTableStateType, action: ProcessAction) => {
  switch (action.type) {
    case ActionType.changeVisible:
      return { ...state, visible: action.payload.visible }
    case ActionType.changeDataSource:
      return { ...state, dataSource: action.payload.dataSource }
    case ActionType.changeActiveRow:
      return { ...state, activeRow: action.payload.activeRow }
    case ActionType.changeActiveType:
      return { ...state, activeType: action.payload.activeType }
    case ActionType.changeDicList:
      return { ...state, dicList: action.payload.dicList }
    case ActionType.changeLoading:
      return { ...state, loading: action.payload.loading }
    default:
      return { ...state, dataSource: action.payload.dataSource }
  }
}