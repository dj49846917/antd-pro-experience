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
    value?: string,
    childdren?: any
}