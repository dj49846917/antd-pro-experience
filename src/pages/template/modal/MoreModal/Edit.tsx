import { Form, Input, Modal } from "antd";
import { useEffect } from "react";
import normalModalInfo, { DataSource } from "../NormalModal/data";

type Props = {
  visible: boolean;
  closeModal: (show: boolean) => void,
  activeRow: DataSource,
  sureAction: (result: DataSource) => void
};

function EditComponent(props: Props) {
  const [editForm] = Form.useForm()

  useEffect(() => {
    if (props.visible && JSON.stringify(props.activeRow) !== '{}') {
      editForm.setFieldsValue(props.activeRow)
    }
  }, [props.visible, props.activeRow])

  const sureAction = async () => {
    const result = await editForm.validateFields()
    if (result) {
      props.closeModal(false)
      props.sureAction({
        ...props.activeRow,
        ...result,
      })
    }
  }

  const cancelAction = () => {
    editForm.resetFields()
    props.closeModal(false)
  }

  return (
    <Modal title="编辑" open={props.visible} onOk={sureAction} onCancel={cancelAction} width="40%" afterClose={() => { editForm.resetFields() }}>
      <Form
        name="add_form"
        form={editForm}
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
          name="point"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder='请输入' />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EditComponent;
