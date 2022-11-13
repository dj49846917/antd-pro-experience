import { FormBaseCommom } from '@/types'
import { getColLayout, getFormLayout } from '@/utils/layout'
import { Col, Form, Input } from 'antd'

interface IProps extends FormBaseCommom {
}

function DInput(props: IProps) {
  return (
    <Col {...getColLayout(props.colcount, props.colposition)}>
      <Form.Item
        {...props}
        {...getFormLayout(props.colcount, props.colposition)}
        initialValue={typeof props.initialValue === 'function' ? props.initialValue() : props.initialValue}
        className={props.colcount === 2 && props.colposition === 1 ? `form-spec ${props.className}` : props.className}
      >
        <Input placeholder={props.placehoder || '请输入'} disabled={props.disabled} readOnly={props.readOnly} />
      </Form.Item>
    </Col>
  )
}

export default DInput