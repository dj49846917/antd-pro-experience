import { Form, FormInstance, Input, Modal } from "antd"
import { useContext } from "react"
import normalModalInfo from "@/pages/template/modal/NormalModal/data"
import { ActionType, ModalContext } from "@/pages/template/modal/MoreChildModal/context"

type Props = {
  form: FormInstance<any>,
  secForm: FormInstance<any>,
}

function GrandSun(props: Props) {
  const { state, dispatch } = useContext(ModalContext)

  const sureAction = async () => {
    const values = await props.secForm.validateFields()
    if (values) {
      if (!isNaN(values.balance) && !isNaN(values.day)) {
        const result = Number(values.balance) / Number(values.day);
        props.form.setFieldValue("point", result)
        dispatch({ type: ActionType.changeSecVisible, payload: { ...state, secVisible: false } })
      }
    }
  }

  const cancelAction = () => {
    props.secForm.resetFields()
    dispatch({ type: ActionType.changeSecVisible, payload: { ...state, secVisible: false } })
  }
  return (
    <Modal
      title="评分明细"
      open={state.visible}
      onOk={sureAction}
      onCancel={cancelAction}
      width="40%"
    >
      <Form
        name="sec_form"
        form={props.secForm}
        {...normalModalInfo.formItemLayout}
      >
        <Form.Item
          label="余额"
          name="balance"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Item
          label="天数"
          name="day"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder='请输入' />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default GrandSun