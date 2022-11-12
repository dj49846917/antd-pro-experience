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