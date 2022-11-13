import DInput from '@/components/MyForm/DInput'
import Money from '@/components/MyForm/Money'
import { PageContainer } from '@ant-design/pro-components'
import { Button, Card, Form, Row } from 'antd'

type Props = {}

function CusomForm({ }: Props) {
  const [form] = Form.useForm()

  const save = async () => {
    const values = await form.validateFields()
    if (values) {
      console.log("values", values)
    }
  }
  return (
    <PageContainer>
      <Card>
        <Form form={form}>
          <Card title="自定义输入框">
            <Row>
              <DInput colcount={1} colposition={1} name="countA" label="指标A" rules={[{ required: true, message: '请输入指标A' }]} />
              <DInput colcount={2} colposition={1} name="countB" label="指标B" rules={[{ required: true, message: '请输入指标B' }]} />
              <DInput colcount={2} colposition={0} name="countC" label="指标C" rules={[{ required: true, message: '请输入指标C' }]} />
              <DInput colcount={3} colposition={1} name="countD" label="指标D" rules={[{ required: true, message: '请输入指标D' }]} />
              <DInput colcount={3} colposition={2} name="countE" label="指标E" rules={[{ required: true, message: '请输入指标E' }]} />
              <DInput colcount={3} colposition={0} name="countF" label="指标F" rules={[{ required: true, message: '请输入指标F' }]} />
            </Row>
          </Card>
          <Card title="金额输入框">
            <Row>
              <Money form={form} colcount={2} colposition={1} name="moneyA" label="金额A" initialValue={20.00} precision={2} />
            </Row>
          </Card>
        </Form>
        <Button type='primary' onClick={save}>提交</Button>
      </Card>
    </PageContainer>
  )
}

export default CusomForm