import { Constant } from "@/constant"
import { TableListParamsBackType, TableListParamsType, TableListType } from "@/pages/template/table/TablePaginationBefore/type"
import { commonParams } from "@/pages/template/table/utils"
import { CommonResponseType } from "@/types"
import { Drequest } from "@/utils/request"
import { reject } from "lodash"
import moment from "moment"
import DataSource from "./data"
import dicList from "./dicList"

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
    console.log("options", options)
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
  // 数据字典
  getDicList: (options: string[]): Promise<CommonResponseType> => {
    return new Promise((resolve, reject) => {
      if (!localStorage.getItem(Constant.DIC_LIST)) {
        localStorage.setItem(Constant.DIC_LIST, JSON.stringify(dicList))
      }
      resolve(JSON.parse(localStorage.getItem(Constant.DIC_LIST) as string))
    })
  },
  addList: (options: TableListType): Promise<CommonResponseType> => {
    return new Promise((resolve, reject) => {
      const res = JSON.parse(localStorage.getItem(Constant.TABLE_LIST) as string)
      const newObj = {
        ...options,
        id: Date.now().toString()
      }
      res.data.list.unshift(newObj)
      res.data.total = res.data.list.length
      localStorage.setItem(Constant.TABLE_LIST, JSON.stringify(res))
      resolve({
        code: 0,
        data: null,
        message: "操作成功",
        success: true,
        timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
        traceId: "8ad100f984516cc4018452271ca6000b",
      })
    })
  },
  editList: (options: TableListType): Promise<CommonResponseType> => {
    return new Promise((resolve, reject) => {
      const res = JSON.parse(localStorage.getItem(Constant.TABLE_LIST) as string)
      const newList = res.data.list.map((item: TableListType) => {
        if (item.id === options.id) {
          return options
        }
        return item
      })
      res.data.list = newList
      res.data.total = newList.length
      localStorage.setItem(Constant.TABLE_LIST, JSON.stringify(res))
      resolve({
        code: 0,
        data: null,
        message: "操作成功",
        success: true,
        timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
        traceId: "8ad100f984516cc4018452271ca6000b",
      })
    })
  },
  deleteList: (options: string): Promise<CommonResponseType> => {
    return new Promise((resolve, reject) => {
      const res = JSON.parse(localStorage.getItem(Constant.TABLE_LIST) as string)
      res.data.list = res.data.list.filter((x: TableListType) => x.id !== options)
      res.data.total = res.data.list.length
      localStorage.setItem(Constant.TABLE_LIST, JSON.stringify(res))
      resolve({
        code: 0,
        data: null,
        message: "操作成功",
        success: true,
        timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
        traceId: "8ad100f984516cc4018452271ca6000b",
      })
    })
  }
}

export default tableApi