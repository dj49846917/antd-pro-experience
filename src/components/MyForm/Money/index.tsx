import { FormBaseCommom } from '@/types';
import { getColLayout, getFormLayout } from '@/utils/layout';
import { Col, Form, InputNumber } from 'antd';

interface IProps extends FormBaseCommom {
  integerPrecision?: number; // 整数精度(总共不超过15位)
  precision?: number; // 小数精度(默认2位，总共不超过15位)
  max?: number;
  min?: number;
}

function Money(props: IProps) {
  return (
    <Col {...getColLayout(props.colcount, props.colposition)}>
      <Form.Item
        {...props}
        {...getFormLayout(props.colcount, props.colposition)}
        className={
          props.colcount === 2 && props.colposition === 1
            ? `form-spec ${props.className}`
            : props.className
        }
        initialValue={
          typeof props.initialValue === 'function' ? props.initialValue() : props.initialValue
        }
      >
        <InputNumber
          disabled={props.disabled}
          readOnly={props.readOnly}
          placeholder={props.placehoder || '请输入'}
          max={props.max}
          min={props.min}
          // precision={props.precision || 2}
          formatter={
            // 转换为金额格式，带千分符
            (value) => {
              if (value === 0 || value === null || value === undefined) {
                return value as any;
              }
              return Number(value).toLocaleString('zh', {
                minimumFractionDigits: props.precision || 2,
              });
            }
          }
          parser={(value) => {
            let newValue = value as string;
            if ((value as string).indexOf('.') > 0) {
              // 这句的意思是把带金额的千分符去掉，转成正常的金额格式
              // 如 const a = '40,000.00'
              // const b = a.replace(/\$\s?|(,*)/g, ''); 输出结果'40000.00'
              const integerVal = newValue
                .split('.')[0]
                .replace(/\$\s?|(,*)/g, '')
                .substr(0, props.integerPrecision || 13);
              const decimalsVal = newValue
                .split('.')[1]
                .replace(/\$\s?|(,*)/g, '')
                .substr(0, props.precision || 2);
              console.log('integerVal', integerVal, decimalsVal, newValue);
              newValue = `${integerVal}.${decimalsVal}`;
            } else {
              newValue = (value as string).replace(/\$\s?|(,*)/g, '').substr(0, 13);
            }
            return newValue as any;
          }}
        />
      </Form.Item>
    </Col>
  );
}

export default Money;
