const tableRes = {
    "ResponseHeader": {},
    "fault": {
        "faultCode": "AAAAAAA",
        "faultString": "AAAAAAA",
    },
    "ResponseBody": {
        "TableTailLineNum": "1", // 尾部的栏位数量
        "FncFormatList": [ // table主体内容
            {
                "BeginAmont": "0",
                "ProjectNm": "流动资产",
                "ProjectNo": "Z01010000",
                "ColumnNum": "1", // table的栏位数量
                "ReportStyleNo": "SZ01",
                "ProjectEditWayCd": "3",
                "LevelNum": "0", // 空格的数量
                "SequenceNum": "2",
                "DisplayAmont": "0",
            },
            {
                "BeginAmont": "99.00",
                "ProjectNm": "货币资金",
                "ProjectNo": "Z01010001",
                "ColumnNum": "1", // table的栏位数量
                "ReportStyleNo": "SZ01",
                "ProjectEditWayCd": "1",
                "LevelNum": "2", // 空格的数量
                "SequenceNum": "4",
                "DisplayAmont": "0",
            },
            {
                "BeginAmont": "99.00",
                "ProjectNm": "短期投资",
                "ProjectNo": "Z01010002",
                "ColumnNum": "1", // table的栏位数量
                "ReportStyleNo": "SZ01",
                "ProjectEditWayCd": "1",
                "LevelNum": "2", // 空格的数量
                "SequenceNum": "6",
                "DisplayAmont": "0",
            },
            {
                "BeginAmont": "99.00",
                "ProjectNm": "减：短期投资跌价准备",
                "ProjectNo": "Z01010003",
                "ColumnNum": "1", // table的栏位数量
                "ReportStyleNo": "SZ01",
                "ProjectEditWayCd": "1",
                "LevelNum": "3", // 空格的数量
                "SequenceNum": "7",
                "DisplayAmont": "0",
            },
            {
                "BeginAmont": "99.00",
                "ProjectNm": "短期投资净额",
                "ProjectNo": "Z01010004",
                "ColumnNum": "1", // table的栏位数量
                "ReportStyleNo": "SZ01",
                "ProjectEditWayCd": "1",
                "LevelNum": "2", // 空格的数量
                "SequenceNum": "7",
                "DisplayAmont": "0",
            },
            {
                "BeginAmont": "99.00",
                "ProjectNm": "流动负债",
                "ProjectNo": "Z02010000",
                "ColumnNum": "2", // table的栏位数量
                "ReportStyleNo": "SZ01",
                "ProjectEditWayCd": "3",
                "LevelNum": "0", // 空格的数量
                "SequenceNum": "102",
                "DisplayAmont": "0",
            },
            {
                "BeginAmont": "99.00",
                "ProjectNm": "短期借款",
                "ProjectNo": "Z02010001",
                "ColumnNum": "2", // table的栏位数量
                "ReportStyleNo": "SZ01",
                "ProjectEditWayCd": "3",
                "LevelNum": "2", // 空格的数量
                "SequenceNum": "103",
                "DisplayAmont": "0",
            },
            {
                "BeginAmont": "99.00",
                "ProjectNm": "应付票据",
                "ProjectNo": "Z02010002",
                "ColumnNum": "2", // table的栏位数量
                "ReportStyleNo": "SZ01",
                "ProjectEditWayCd": "3",
                "LevelNum": "4", // 空格的数量
                "SequenceNum": "104",
                "DisplayAmont": "0",
            },
        ],
        "DataListNum": "2", // table的个数
        "DisplayColumnNum": "2",
        "FncColumnStlList": [ // tr列表
            {
                "ColumnEngNm": "ProjectNm",
                "Uuid": "CS01",
                "ColumnNm": "项目",
                "ColumnNum": "1",
                "ReportStyleNo": "SZ01",
            },
            {
                "ColumnEngNm": "LineScondaryNo",
                "Uuid": "CS02",
                "ColumnNm": "行次",
                "ColumnNum": "2",
                "ReportStyleNo": "SZ01",
            },
            {
                "ColumnEngNm": "BeginAmont",
                "Uuid": "CS03",
                "ColumnNm": "期初数",
                "ColumnNum": "3",
                "ReportStyleNo": "SZ01",
            },
            {
                "ColumnEngNm": "EndAmont",
                "Uuid": "CS04",
                "ColumnNm": "期末数",
                "ColumnNum": "4",
                "ReportStyleNo": "SZ01",
            },
        ],
        "TableHeadColumnNum": "3", // 表格头行数
        "TableHeadLineNum": "3", // 表格头列数
        "TableTailColumnNum": "3", 
        "ReportHeads": [ // 表格头列表
            [
                { "DisplayValue": "" },
                { "DisplayValue": "资产负债表(年报)" },
                { "DisplayValue": "" }
            ],
            [
                { "DisplayValue": "" },
                { "DisplayValue": "2012年12月" },
                { "DisplayValue": "" }
            ],
            [
                { "DisplayValue": "编制单位: 2720536271" },
                { "DisplayValue": "填报日期: 2019年01月08日" },
                { "DisplayValue": "单位: 元" }
            ],
        ],
        "DisplayNm": "资产负债表",
        "ColumnNum": "2",
        "ReportStyleNo": "SZ01",
        "CurrNum": "104",
        "ReportTails":[
            [
                { "DisplayValue": "" },
                { "DisplayValue": "" },
                { "DisplayValue": "制表人: sys" }
            ]
        ]
    }
}

const tabRes = {
    "ResponseHeader": {},
    "fault": {
        "faultCode": "AAAAAAA",
        "faultString": "AAAAAAA",
    },
    "ResponseBody": {
        "RetList": [
            {
                "Uuid": "001",
                "DisplayNm": "资产负债表",
                "ReportStyleNo": "SZ01",
            },
            {
                "Uuid": "002",
                "DisplayNm": "利润及利润分配表",
                "ReportStyleNo": "SL01",
            },
            {
                "Uuid": "003",
                "DisplayNm": "现金流量表",
                "ReportStyleNo": "SX01",
            },
            {
                "Uuid": "004",
                "DisplayNm": "财务指标表",
                "ReportStyleNo": "SC01",
            }
        ]
    },
}

export default {
    'POST /api/template/source002': tabRes,
    'POST /api/template/source003': tableRes,
  }