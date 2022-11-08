import { Constant } from "@/constant"
import { TableListParamsBackType, TableListParamsType, TableListType } from "@/pages/template/table/TablePaginationBefore/type"
import { commonParams } from "@/pages/template/table/utils"
import { CommonResponseType } from "@/types"
import { Drequest } from "@/utils/request"
import DataSource from "./data"

const tableApi = {
  // 前端分页
  getTableList: (options: TableListParamsType): Promise<CommonResponseType> => {
    // return Drequest(`${Constant.BASE_URL}/business/table/list`, {
    //   method: 'POST',
    //   body: JSON.stringify(commonParams(options)),
    // })
    return new Promise((resolve, reject) => {
      if (!localStorage.getItem(Constant.TABLE_LIST)) {
        localStorage.setItem(Constant.TABLE_LIST, JSON.stringify(DataSource))
      }
      resolve(JSON.parse(localStorage.getItem(Constant.TABLE_LIST) as string))
    })
  },
  // 后端分页
  getList: (options: TableListParamsBackType): Promise<CommonResponseType> => {
    return new Promise((resolve, reject) => {
      if (!localStorage.getItem(Constant.TABLE_LIST)) {
        localStorage.setItem(Constant.TABLE_LIST, JSON.stringify(DataSource))
      }
      const result = JSON.parse(localStorage.getItem(Constant.TABLE_LIST) as string)
      const pageCount = Math.ceil(result.data.total / options.pageSize)
      if (pageCount < 1) {
        resolve({
          ...result,
          data: {
            pageSize: options.pageSize,
            list: [],
            total: 0,
            current: 1
          }
        })
        return
      }
      if (options.pageIndex === 1) {
        resolve({
          ...result,
          data: {
            pageSize: options.pageSize,
            list: result.data.list.filter((x: TableListType, i: number) => (i < (options.pageIndex * options.pageSize))),
            total: result.data.total,
            current: options.pageIndex
          }
        })
        return
      }
      resolve({
        ...result,
        data: {
          pageSize: options.pageSize,
          list: result.data.list.filter((x: TableListType, i: number) => i >= ((options.pageIndex - 1) * options.pageSize) && i < (options.pageIndex * options.pageSize)),
          total: result.data.total,
          current: options.pageIndex
        }
      })
    })
  },
}

export default tableApi