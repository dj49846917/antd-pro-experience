import { CommonParamType } from "@/types"

// 统一的参数封装
export function commonParams(params?: CommonParamType) {
    return {
        "data": {
            ...params,
        }
    }
}