import React, { PureComponent, Fragment } from 'react';
import { Input, Form, Col, Button, Modal, message } from 'antd';
import { getFormItemLayout, getOneFormItemLayout } from '@/utils/layout';
import Customer from '@/my-components/own/CustomerList/Customer';
import styles from '@/my-components/own/CustomerList/index.less';

/**
 * @description   客户组件
 * 
 * @param label: 			    非必传， 			页签的标题 (string)
 * @param required： 		  非必传，			控制是否校验 (boolean)
 * @param width： 			  非必传，			控制组件的宽度
 * @param initialValue： 	非必传，			组件的初始值
 * @param field： 			  必传，				组件的输出值 (string)
 * @param disabled： 		  非必传，			控制下拉框的disable状态
 * @param columnLayout: 	必传，				布局列数 (number),默认为一行一列
 * @param callback： 		  非必传，			返回选中的数据
 * 
 */

class CustomerList extends PureComponent {
  state={
    visible: false, // 弹窗
    record: {}, // 客户组件选中的值
  }

  // 打开弹窗
  showModal = () => {
    this.setState({
      visible: true
    })
  }

  // 弹窗点击确定
  save = () => {
    const { record } = this.state;
    const { callback, form, field } = this.props;
    if(JSON.stringify(record) === '{}'){
      message.error('请选择一条数据');
      return;
    }
    // 传递数据
    if(callback){
      this.props.callback(record);
    }
	// 给表单赋值
	form.setFieldsValue({
		[field]: record.custNm
	})
    this.setState({
      visible: false
    })
  }

  showCustomer = formItemLayout => {
    const {
      label,
      form: { getFieldDecorator },
      required,
      width,
      initialValue,
      field,
      disabled,
    } = this.props;
    return (
      <Fragment>
        <Form.Item label={label} {...formItemLayout} className={styles.changeFormItem}>
          {getFieldDecorator(field, {
            initialValue: typeof initialValue === 'function' ? initialValue() : initialValue, // 判断初始值的类型
            validateFirst: true,
            rules: [
              {
                required,
                message: `请输入${label}`,
              }
            ],
          })(
            <Input disabled width={{ width }} style={{width: '80%'}} />
          )}
          <Button 
            type="primary" 
            className={styles.btn} 
            disabled={disabled}
            onClick={this.showModal}
          >选择</Button>
        </Form.Item>
        {
          this.state.visible ? (
            <Modal
              title="客户列表"
              closable
              visible={this.state.visible}
              width='80%'
              onCancel={()=>{
                this.setState({
                  visible: false
                })
              }}
              onOk={this.save}
            >
              <Customer 
                callback={(code)=>{ // 子组件传回的值
                  this.setState({
                    record: code
                  })
                }}
              />
            </Modal>
          ) : null
        }
      </Fragment>
    )
  }

  // 根据传入的columnLayout，展示是一行一列还是一行两列
  renderCustomerList = () => {
    const { columnLayout } = this.props;
    // 判断columnLayout是否传入，如果没传，展示一行一列，否则展示一行两列
    if (columnLayout && columnLayout === 2) {
      const colLayout = getFormItemLayout(2);
      const formItemLayout = getFormItemLayout(1);
      return (
        <Col {...colLayout}>
          {this.showCustomer(formItemLayout)}
        </Col>
      )
    } else {
      const colLayout = getOneFormItemLayout(1);
      const formItemLayout = getOneFormItemLayout();
      return (
        <Col {...colLayout}>
          {this.showCustomer(formItemLayout)}
        </Col>
      )
    }

  }

  render() {
    return this.renderCustomerList();
  }
}
export default CustomerList;