import { Button, Form, FormInstance, Input, Modal } from "antd";
import { useContext } from "react";
import normalModalInfo from "../NormalModal/data";
import { ActionType, ModalContext } from "./context";

type Props = {
  form: FormInstance<any>,
  secForm: FormInstance<any>,
}

function Detail(props: Props) {
  const { state, dispatch } = useContext(ModalContext)

  const sureAction = async () => {
    const result = await props.form.validateFields()
    if (result) {
      if (state.activeType === 'add') {
        const row = {
          ...result,
          ClassifyNm: '基本情况',
          id: Date.now()
        }
        dispatch({ type: ActionType.changeDataSource, payload: { ...state, dataSource: [row, ...state.dataSource] } })
      }
      if (state.activeType === 'edit') {
        const row = {
          ...state.activeRow,
          ...result,
        }
        const list = state.dataSource.map(item => {
          if (item.id === row.id) {
            return row
          }
          return item
        })
        dispatch({ type: ActionType.changeDataSource, payload: { ...state, dataSource: list } })
      }
      dispatch({ type: ActionType.changeVisible, payload: { ...state, visible: false } })
    }
  }

  const cancelAction = () => {
    props.form.resetFields()
    dispatch({ type: ActionType.changeVisible, payload: { ...state, visible: false } })
  }

  const openSecModal = () => {
    dispatch({ type: ActionType.changeSecVisible, payload: { ...state, secVisible: true } })
    if (state.activeType === 'edit') {
      props.secForm.setFieldsValue(state.activeRow)
    }
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
        name="add_form"
        form={props.form}
        {...normalModalInfo.formItemLayout}
      >
        <Form.Item
          label="指标"
          name="ChineseNm"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Item
          label="选项"
          name="EnglistNm"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Item
          label="评分"
        >
          <Form.Item
            noStyle
            name="point"
            rules={[{ required: true, message: '请输入' }]}
          >
            <Input placeholder='请输入' style={{ maxWidth: '160px' }} disabled />
          </Form.Item>
          <Button type="primary" onClick={openSecModal}>。。。</Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default Detail;
