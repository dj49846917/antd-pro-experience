import { PageContainer } from '@ant-design/pro-components'
import { Button, Form, Input } from 'antd'
import { useState } from 'react'
import normalModalInfo from '../../modal/NormalModal/data'

function FormCheck() {
  const [loading, setLoading] = useState(false)
  const [form] = Form.useForm()

  const save = async () => {
    const values = await form.validateFields()
  }

  return (
    <PageContainer loading={loading}>
      <Form
        name="form"
        form={form}
        {...normalModalInfo.formItemLayout}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            { required: true, message: '请输入用户名' },
            { max: 10, message: '用户名不能超过10个字符' },
            { pattern: /^[A-Za-z0-9_]+$/, message: '用户名只能输入字母或数字' },
          ]}
        >
          <Input placeholder='请输入' />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
            { max: 6, message: '密码不能超过6位数' },
            { pattern: /^[A-Za-z0-9_]+$/, message: '密码只能输入字母或数字' },
          ]}
        >
          <Input placeholder='请输入' />
        </Form.Item>
        <Button type='primary' onClick={save}>提交</Button>
      </Form>
    </PageContainer>
  )
}

export default FormCheck