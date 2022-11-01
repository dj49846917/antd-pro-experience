import { Form, Input, Modal } from "antd";
import normalModalInfo, { DataSource } from "@/pages/template/modal/NormalModal/data";
import { useEffect } from "react";

type Props = {
  visible: boolean;
  closeModal: (show: boolean) => void,
  sureAction: (result: DataSource) => void,
  activeRow: DataSource
};

function ModalChild(props: Props) {
  const [form] = Form.useForm()

  useEffect(() => {
    if (props.visible && JSON.stringify(props.activeRow) !== '{}') {
      form.setFieldsValue(props.activeRow)
    }
  }, [props.activeRow, props.visible])

  const cancelAction = () => {
    form.resetFields()
    props.closeModal(false)
  }

  return (
    <Modal footer={null} title="查看" open={props.visible} onCancel={cancelAction} width="40%" afterClose={() => { form.resetFields() }}>
      <Form
        name="add_form"
        form={form}
        {...normalModalInfo.formItemLayout}
      >
        <Form.Item
          label="指标"
          name="ChineseNm"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder='请输入' disabled />
        </Form.Item>
        <Form.Item
          label="选项"
          name="EnglistNm"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder='请输入' disabled />
        </Form.Item>
        <Form.Item
          label="评分"
          name="point"
          rules={[{ required: true, message: '请输入' }]}
        >
          <Input placeholder='请输入' disabled />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalChild;
