import provinces from './data/provinces.json'
import cities from './data/cities.json'
import areas from './data/areas.json'
import React, { useEffect, useState } from 'react'
import { Button, Card, Cascader, Col, Form, Input, Row, Select } from 'antd'
import { PageContainer } from '@ant-design/pro-components'
import { getColLayout, getFormLayout } from '@/utils/layout'
import { CascaderType, parseArea } from './utils/utils'
import './index.less'

type Props = {}
function Province({ }: Props) {
  const [dataSource, setDataSource] = useState<CascaderType[]>([])
  const [provinceList, setProvinceList] = useState<CascaderType[]>([])
  const [cityList, setCityList] = useState<CascaderType[]>([])
  const [areaList, setAreaList] = useState<CascaderType[]>([])
  const [form] = Form.useForm()
  useEffect(() => {
    const result = parseArea(provinces, cities, areas)
    setDataSource(result)
    const p = provinces.map(item => ({ label: item.name, value: item.code }))
    // const c = cities.map(item => ({ label: item.name, value: item.code }))
    // const a = areas.map(item => ({ label: item.name, value: item.code }))
    setProvinceList(p)
    // setCityList(c)
    // setAreaList(a)
  }, [])

  // 选择省
  const changeProvince = (e: string) => {
    form.resetFields(['city', 'area'])
    const c = cities.filter(x => x.provinceCode === e).map(item => ({ label: item.name, value: item.code }))
    setCityList(c)
  }

  // 选择市
  const changeCity = (e: string) => {
    form.resetFields(['area'])
    const a = areas.filter(x => x.cityCode === e).map(item => ({ label: item.name, value: item.code }))
    setAreaList(a)
  }

  const save = async () => {
    const result = await form.validateFields()
    console.log("result", result)

  }

  return (
    <PageContainer>
      <Card>
        <Form form={form}>
          <Card title="自定义输入框">
            <Row>
              <Col {...getColLayout(1, 1)}>
                <Form.Item {...getFormLayout(1, 1)} name="address" label="收获地址" rules={[{ required: true, message: '请选择收货地址' }]}>
                  <Cascader options={dataSource} placeholder="Please select" />
                </Form.Item>
              </Col>
              <Col {...getColLayout(1, 1)}>
                <Form.Item
                  label="省市区"
                  {...getFormLayout(1, 1)}
                  className="p-form"
                >
                  <Form.Item
                    style={{ display: 'inline-block', width: '33.33%' }}
                    name="province"
                    rules={[{ required: true, message: '请选择省' }]}
                  >
                    <Select options={provinceList} placeholder='请选择省' onChange={changeProvince} />
                  </Form.Item>
                  <Form.Item
                    style={{ display: 'inline-block', width: '33.33%' }}
                    name="city"
                    rules={[{ required: true, message: '请选择市' }]}
                  >
                    <Select options={cityList} placeholder='请选择市' onChange={changeCity} />
                  </Form.Item>
                  <Form.Item
                    style={{ display: 'inline-block', width: '33.33%' }}
                    name="area"
                    rules={[{ required: true, message: '请选择区' }]}
                  >
                    <Select options={areaList} placeholder='请选择区' />
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
          </Card>
        </Form>
        <Button type='primary' onClick={save}>提交</Button>
      </Card>
    </PageContainer>
  )
}

export default Province