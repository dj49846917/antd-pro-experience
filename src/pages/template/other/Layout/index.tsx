
import { getColLayout, getFormLayout } from "@/utils/layout";
import { PageContainer } from "@ant-design/pro-components"
import { Card, Col, Form, Input, Row } from "antd"
function Layout() {
  const [form] = Form.useForm()
  return (
    <PageContainer>
      <Card>
        <Form
          form={form}
        >
          <Card title="一行一列">
            <Row>
              <Col {...getColLayout(1, 1)}>
                <Form.Item
                  label="指标A"
                  name="countA"
                  rules={[{ required: true, message: '请输入' }]}
                  {...getFormLayout(1, 1)}
                >
                  <Input placeholder='请输入' />
                </Form.Item>
              </Col>
              <Col {...getColLayout(1, 1)}>
                <Form.Item
                  label="指标B"
                  name="countB"
                  rules={[{ required: true, message: '请输入' }]}
                  {...getFormLayout(1, 1)}
                >
                  <Input placeholder='请输入' />
                </Form.Item>
              </Col>
              <Col {...getColLayout(1, 1)}>
                <Form.Item
                  label="指标C"
                  name="countC"
                  rules={[{ required: true, message: '请输入' }]}
                  {...getFormLayout(1, 1)}
                >
                  <Input placeholder='请输入' />
                </Form.Item>
              </Col>
            </Row>
          </Card>
          <Card title="一行两列">
            <Row>
              <Col {...getColLayout(2, 1)}>
                <Form.Item
                  label="指标D"
                  name="countD"
                  rules={[{ required: true, message: '请输入' }]}
                  {...getFormLayout(2, 1)}
                >
                  <Input placeholder='请输入' />
                </Form.Item>
              </Col>
              <Col {...getColLayout(2, 0)}>
                <Form.Item
                  label="指标E"
                  name="countE"
                  rules={[{ required: true, message: '请输入' }]}
                  {...getFormLayout(2, 0)}
                >
                  <Input placeholder='请输入' />
                </Form.Item>
              </Col>
              <Col {...getColLayout(2, 1)}>
                <Form.Item
                  label="指标F"
                  name="countF"
                  rules={[{ required: true, message: '请输入' }]}
                  {...getFormLayout(2, 1)}
                >
                  <Input placeholder='请输入' />
                </Form.Item>
              </Col>
              <Col {...getColLayout(2, 0)}>
                <Form.Item
                  label="指标G"
                  name="countG"
                  rules={[{ required: true, message: '请输入' }]}
                  {...getFormLayout(2, 0)}
                >
                  <Input placeholder='请输入' />
                </Form.Item>
              </Col>
            </Row>
          </Card>
          <Card title="一行三列">
            <Row>
              <Col {...getColLayout(3, 1)}>
                <Form.Item
                  style={{ marginLeft: '10px' }}
                  label="指标H"
                  name="countH"
                  rules={[{ required: true, message: '请输入' }]}
                  {...getFormLayout(3, 1)}
                >
                  <Input placeholder='请输入' />
                </Form.Item>
              </Col>
              <Col {...getColLayout(3, 2)}>
                <Form.Item
                  label="指标I"
                  name="countI"
                  rules={[{ required: true, message: '请输入' }]}
                  {...getFormLayout(3, 2)}
                >
                  <Input placeholder='请输入' />
                </Form.Item>
              </Col>
              <Col {...getColLayout(3, 2)}>
                <Form.Item
                  label="指标J"
                  name="countJ"
                  rules={[{ required: true, message: '请输入' }]}
                  {...getFormLayout(3, 0)}
                >
                  <Input placeholder='请输入' />
                </Form.Item>
              </Col>
              <Col {...getColLayout(3, 1)}>
                <Form.Item
                  style={{ marginLeft: '10px' }}
                  label="指标K"
                  name="countK"
                  rules={[{ required: true, message: '请输入' }]}
                  {...getFormLayout(3, 1)}
                >
                  <Input placeholder='请输入' />
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Form>
      </Card>
    </PageContainer>
  )
}

export default Layout