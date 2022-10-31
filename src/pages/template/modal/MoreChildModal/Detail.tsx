import { Form, Input, Modal } from "antd";
import normalModalInfo, { DataSource } from "../NormalModal/data";

type Props = {
  visible: boolean;
  closeModal: (show: boolean) => void;
  sureAction: (result: DataSource) => void,
  actionType: "add" | 'edit' | 'delete',
  activeRow: DataSource
};

function Detail(props: Props) {
  const [addForm] = Form.useForm()

  const sureAction = async () => {
    const result = await addForm.validateFields()
    if (result) {
      props.closeModal(false)
    }
    props.sureAction({
      ...result,
      ClassifyNm: '基本情况',
      id: Date.now()
    })
  }

  const cancelAction = () => {
    addForm.resetFields()
    props.closeModal(false)
  }

  return (
    <Modal
      title={props.actionType === 'add' ? "添加" : "编辑"}
      open={props.visible}
      onOk={sureAction}
      onCancel={cancelAction}
      width="40%"
      afterClose={() => { addForm.resetFields() }}
    >
      <Form
        name="add_form"
        form={addForm}
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

export default Detail;
