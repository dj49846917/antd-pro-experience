import { EditableFormInstance, PageContainer, ProColumns, ProFormInstance } from '@ant-design/pro-components';
import {
  EditableProTable,
  ProForm,
} from '@ant-design/pro-components';
import { Button, FormInstance } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';
import { TableListType } from '../TablePaginationBefore/type';
import tableApi from '@/services/table';
import { DicType, EditTableSelectType } from '@/types';

function EditTableSave() {
  const [editableKeys, setEditableRowKeys] = useState<React.Key[]>([]);
  const formRef = useRef<ProFormInstance<any>>();
  const editorFormRef = useRef<EditableFormInstance<TableListType>>();
  const [loading, setLoading] = useState(false)
  const [reportNmOp, setReportNmOp] = useState<EditTableSelectType>({})
  const [reportCycleTypeCdOp, setReportCycleTypeCdOp] = useState<EditTableSelectType>({})
  const [dataSource, setDataSource] = useState<TableListType[]>([])

  useEffect(() => {
    initData()
    initDic()
  }, [])

  const initData = async () => {
    const params = {
      userId: "001"
    }
    setLoading(true)
    const result = await tableApi.getTableList(params)
    setLoading(false)
    if (result && result.success) {
      result.data.list.map((item: TableListType) => {
        return {
          ...item,
          ReportYearMonth: item.ReportYearMonth ? moment(item.ReportYearMonth) : null
        }
      })
      const idList = result.data.list.map((item: TableListType) => {
        return item.id
      })
      setEditableRowKeys(idList)
      setDataSource(result.data.list)
    }
  }

  const initDic = async () => {
    const params = ['node_status', 'complate_condition']
    const result = await tableApi.getDicList(params)
    const reportCycleTypeCdOpList: DicType[] = []
    const reportNmOpList: DicType[] = []
    result.data.forEach((item: DicType) => {
      if (item.parentId === 'node_status') {
        reportNmOpList.push(item)
      }
      if (item.parentId === 'complate_condition') {
        reportCycleTypeCdOpList.push(item)
      }
    })
    getCommonOptions(reportNmOpList, setReportNmOp)
    getCommonOptions(reportCycleTypeCdOpList, setReportCycleTypeCdOp)
  }

  const getCommonOptions = (arr: DicType[], action: React.Dispatch<React.SetStateAction<EditTableSelectType>>) => {
    let obj: EditTableSelectType = {}
    arr.forEach(item => {
      obj[item.constantValue] = {
        text: item.constantKey,
        status: item.constantValue
      }
    })
    action(obj)
  }

  const columns: ProColumns<TableListType>[] = [
    {
      title: '财务报表类型',
      dataIndex: 'ReportNm',
      valueType: 'select',
      valueEnum: reportNmOp,
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
    },
    {
      title: '报表时间',
      dataIndex: 'ReportYearMonth',
      valueType: 'dateTime',
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
    },
    {
      title: '报表周期类型',
      dataIndex: 'ReportCycleTypeCd',
      valueType: 'select',
      valueEnum: reportCycleTypeCdOp,
      formItemProps: () => {
        return {
          rules: [{ required: true, message: '此项为必填项' }],
        };
      },
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <a
          key="delete"
          onClick={() => {
            const tableDataSource = formRef.current?.getFieldValue('table') as TableListType[];
            formRef.current?.setFieldsValue({
              table: tableDataSource.filter((item) => item.id !== record.id),
            });
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  const saveAction = async (form: FormInstance<any> | undefined) => {
    const result = await form?.validateFields()
    if (result) {
      console.log("保存")
    }
  }

  return (
    <PageContainer loading={loading}>
      <ProForm<{
        table: TableListType[];
      }>
        formRef={formRef}
        initialValues={{
          table: dataSource,
        }}
        validateTrigger="onBlur"
        submitter={{
          // searchConfig: { submitText: '提交', resetText: '重置' }, // 设置底部按钮的文字
          // resetButtonProps: { style: { display: 'none' } }, // 隐藏重置按钮
          // submitButtonProps: { style: { display: 'none' } }, // 隐藏提交按钮
          render: (props, doms) => {
            console.log('props', props, doms);
            return [
              <Button type='primary' key="submit" onClick={() => saveAction(props.form)}>提交</Button>,
              <Button key='reset' onClick={() => props.form?.resetFields()}>重置</Button>
              // <button type="button" key="submit" onClick={() => props.form?.submit?.()}>
              //   提交
              // </button>,
              // <button type="button" key="rest" onClick={() => props.form?.resetFields()}>
              //   重置
              // </button>,
            ];
          },
        }}
      >
        <EditableProTable<TableListType>
          rowKey="id"
          scroll={{
            x: 960,
          }}
          editableFormRef={editorFormRef}
          headerTitle="可编辑表格"
          maxLength={5}
          name="table"
          request={async () => ({
            data: dataSource
          })}
          recordCreatorProps={{
            position: 'bottom',
            record: (): TableListType => ({ id: String(Date.now()) } as TableListType),
          }}
          columns={columns}
          editable={{
            type: 'multiple',
            editableKeys,
            onChange: setEditableRowKeys,
            actionRender: (row, config, defaultDom) => {
              return [
                defaultDom.delete
              ];
            },
          }}
        />
      </ProForm>
    </PageContainer>
  );
};

export default EditTableSave