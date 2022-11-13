import { FormInstance, FormItemProps } from "antd"
import { DataNode } from "antd/lib/tree"
// 数据字典返回类型
export type DicType = {
    constantKey: string,
    constantValue: string,
    parentId: string,
    id: string,
    label?: string,
    value?: string,
    [key: string]: any
}
// 通用类型
export type CommonParamType = {
    [key: string]: any
}
// tree的类型
export interface TreeDataNode extends DataNode {
    id?: number,
    value?: string,
    childdren?: any
}
// 通用接口返回数据格式
export interface CommonResponseType {
    code: number,
    data: any,
    message: string,
    success: boolean,
    timestamp: string,
    traceId: string,
    [key: string]: any
}

export type EditTableSelectType = {
    [key: string]: {
        text: string,
        status: string
    }
}

export interface FormBaseCommom extends FormItemProps {
    colcount: number,     // 展示一行几列    1表示1行1列
    colposition: number,  // 当前表单的位置   1表示上面colCount值一行几列的第几个表单
    placehoder?: string,   // 提示内容   默认：请输入
    name: string,         // 表单的唯一标识
    disabled?: boolean,
    readOnly?: boolean,
    form?: FormInstance<any>,
}