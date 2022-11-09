// 列表入参
export type TableListParamsType = {
  userId: string
}

export interface TableListParamsBackType extends TableListParamsType {
  pageSize: number,
  pageIndex: number
}

export type TableListType = {
  ReportNm: string,
  ReportYearMonth: string,
  ReportCycleTypeCd: string,
  id: string
}

export type PageInfo = {
  list: TableListType[],
  total: number,
  pageSize: number,
  current: number
}