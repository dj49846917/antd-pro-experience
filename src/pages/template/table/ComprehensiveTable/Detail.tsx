import tableApi from "@/services/table";
import { Button, DatePicker, Form, FormInstance, Input, message, Modal, Select } from "antd";
import moment from "moment";
import { useContext } from "react";
import normalModalInfo from "../../modal/NormalModal/data";
import { TableListParamsBackType, TableListType } from "../TablePaginationBefore/type";
import { ActionType, ComprehensiveTableContext } from "./context";

type Props = {
  form: FormInstance<any>,
  initData: (params: TableListParamsBackType) => void
}

function Detail(props: Props) {
  const { state, dispatch } = useContext(ComprehensiveTableContext)

  const sureAction = async () => {
    const result: TableListType = await props.form.validateFields()
    if (result) {
      let res;
      result.ReportYearMonth = result.ReportYearMonth ? moment(result.ReportYearMonth).format("YYYY-MM-DD HH:mm:ss") : ''
      // 新增
      if (state.activeType === 'add') {
        dispatch({ type: ActionType.changeLoading, payload: { ...state, loading: true } })
        res = await tableApi.addList(result)
        dispatch({ type: ActionType.changeLoading, payload: { ...state, loading: false } })
      }
      // 编辑
      if (state.activeType === 'edit') {
        dispatch({ type: ActionType.changeLoading, payload: { ...state, loading: true } })
        res = await tableApi.editList(result)
        dispatch({ type: ActionType.changeLoading, payload: { ...state, loading: false } })
      }
      if (res && res.success) {
        message.success("操作成功")
        const params = { userId: "001", pageIndex: 1, pageSize: 10 }
        props.initData(params)
      }
      props.form.resetFields()
      dispatch({ type: ActionType.changeVisible, payload: { ...state, visible: false } })
    }
  }

  const cancelAction = () => {
    props.form.resetFields()
    dispatch({ type: ActionType.changeVisible, payload: { ...state, visible: false } })
  }

  const renderOptions = (id: string) => {
    return state.dicList.filter(x => x.parentId === id)
  }

  return (
    <Modal
      title={state.activeType === 'add' ? "添加" : "编辑"}
      open={state.visible}
      onOk={sureAction}
      onCancel={cancelAction}
      width="40%"
    >
      <Form
        name="detail_form"
        form={props.form}
        {...normalModalInfo.formItemLayout}
      >
        <Form.Item
          label="财务报表类型"
          name="ReportNm"
          rules={[{ required: true }]}
        >
          <Select placeholder='请选择' options={renderOptions('node_status')} />
        </Form.Item>
        <Form.Item
          label="报表时间"
          name="ReportYearMonth"
          rules={[{ required: true }]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <Form.Item
          label="报表周期类型"
          name="ReportCycleTypeCd"
          rules={[{ required: true }]}
        >
          <Select placeholder='请选择' options={renderOptions("complate_condition")} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default Detail;
