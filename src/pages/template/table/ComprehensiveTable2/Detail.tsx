import tableApi from "@/services/table";
import { DicType } from "@/types";
import { DatePicker, Form, FormInstance, message, Modal, Select } from "antd";
import moment from "moment";
import normalModalInfo from "../../modal/NormalModal/data";
import { TableListParamsBackType, TableListType } from "../TablePaginationBefore/type";

type Props = {
  form: FormInstance<any>,
  initData: (params: TableListParamsBackType) => void,
  loading: boolean,
  changeLoading: React.Dispatch<React.SetStateAction<boolean>>,
  activeType: 'add' | 'edit',
  dicList: DicType[],
  visible: boolean,
  activeRow: TableListType,
  changeVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

function Detail(props: Props) {

  const sureAction = async () => {
    const result: TableListType = await props.form.validateFields()
    if (result) {
      let res;
      result.ReportYearMonth = result.ReportYearMonth ? moment(result.ReportYearMonth).format("YYYY-MM-DD HH:mm:ss") : ''
      // 新增
      if (props.activeType === 'add') {
        props.changeLoading(true)
        res = await tableApi.addList(result)
        props.changeLoading(false)
      }
      // 编辑
      if (props.activeType === 'edit') {
        props.changeLoading(true)
        res = await tableApi.editList({ ...props.activeRow, ...result })
        props.changeLoading(false)
      }
      if (res && res.success) {
        message.success("操作成功")
        const params = { userId: "001", pageIndex: 1, pageSize: 10 }
        props.initData(params)
      }
      props.form.resetFields()
      props.changeVisible(false)
    }
  }

  const cancelAction = () => {
    props.form.resetFields()
    props.changeVisible(false)
  }

  const renderOptions = (id: string) => {
    return props.dicList.filter(x => x.parentId === id)
  }

  return (
    <Modal
      title={props.activeType === 'add' ? "添加" : "编辑"}
      open={props.visible}
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
