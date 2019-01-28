import React, { PureComponent, Fragment } from 'react';
import { Form, Input, Button, DatePicker } from 'antd';

/**
 * @param  required: 是否校验，true为校验
 * @param  message: 校验提示的内容
 * @param  pattern: 正则表达式
 * 
 */

const formItemLayout = { // 布局
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 10 },
  },
};

const { RangePicker } = DatePicker;

class FormCheck extends PureComponent {
  submit = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        console.log('values', values);
      }
    })
  }

  renderFromcheck = () => {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form>
        <Form.Item
          label="用户名"
          {...formItemLayout}
        >
          {getFieldDecorator('userName', {
            rules: [
              { required: true, message: '请输入用户名' },
              { max: 10, message: '用户名不能超过10个字符' },
              { pattern: /^[A-Za-z0-9_]+$/, message: '用户名只能输入字母或数字' },
            ],
          })(
            <Input placeholder='请输入' />
          )}
        </Form.Item>
        <Form.Item
          label="密码"
          {...formItemLayout}
        >
          {getFieldDecorator('password', {
            rules: [
              { required: true, message: '请输入密码' },
              { max: 6, message: '密码不能超过6位数' },
              { pattern: /^[A-Za-z0-9_]+$/, message: '密码只能输入字母或数字' },
            ],
          })(
            <Input placeholder='请输入' type='password' />
          )}
        </Form.Item>
        <Form.Item
          label="日期"
          {...formItemLayout}
        >
          {getFieldDecorator('password', {})(
            <DatePicker />
          )}
        </Form.Item>

        <Button onClick={this.submit}>提交</Button>
      </Form>
    )
  }

  render() {
    return (
      <Fragment>
        {this.renderFromcheck()}
      </Fragment>
    )
  }
}
export default Form.create()(FormCheck);

/**
 * 常用正则表达式搜集
 *
 * 1.手机号码：
 *        规则:  <1>. 13、15、18开头，后面9位(0-9)
 *               <2>. 14开头，后面1位(5或者7), 后面8位(0-9)
 *               <3>. 17开头，后面1位(0,6,7,8), 后面8位(0-9)
 *               <4>.197开头，后面9位(0-9)
 *        
 *        正则:  /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/
 * 
 * 2.只能输入字母，数字和汉字
 *        正则:  /^([a-zA-Z0-9\u4e00-\u9fa5])+$/
 * 
 * 3.只能输入字母、数字、下划线，字母开头
 *        正则:  /^[A-Za-z][A-Za-z0-9_]+$/
 *    
 *        3.1. 只能输入字母、数字, 字母开头
 *            正则:  /^[A-Za-z][A-Za-z0-9]+$/
 *        
 *        3.2. 只能输入字母、数字
 *            正则: /^[A-Za-z0-9]+$/
 * 
 *        3.3. 只能输入数字(正整数)
 *            正则: /^[0-9]+$/
 * 
 * 4.邮政编码：
 *        规则:  6位数，数字
 *       
 *        正则: /^[0-9]{6}$/
 * 
 * 5.传真:
 *        正则: /^(\d{3,4}-)?\d{7,8}$/
 * 
 * 6.邮箱:
 *        正则: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
 * 
 * 7.日期
 *        7.1 规则: YYYY-MM-DD
 *          
 *            正则:  /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/
 *  
 *        7.2 规则: YYYY-MM-DD hh:mm:ss
 * 
 *            正则: /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/
 * 
 *        7.3 规则: hh:mm:ss
 *            
 *            正则: /^((20|21|22|23|[0-1]\d)\:[0-5][0-9])(\:[0-5][0-9])?$/
 * 
 * 8.数字类
 *        8.1 规则： 是否为整数
 *            
 *            正则:  /^[-+]?\d*$/;
 * 
 * 
 * 验证数字：^[0-9]*$ 

验证n位的数字：^\d{n}$  

验证至少n位数字：^\d{n,}$ 

验证m-n位的数字：^\d{m,n}$ 

验证零和非零开头的数字：^(0|[1-9][0-9]*)$ 

验证有两位小数的正实数：^[0-9]+(.[0-9]{2}){1}$ 

验证有1-3位小数的正实数：^[0-9]+(.[0-9]{1,3}){1}$ 

验证非零的正整数：^\+?[1-9][0-9]*$ 

验证非零的负整数：^\-[1-9][0-9]*$ 

验证非负整数（正整数 + 0） ^\d+$ 

验证非正整数（负整数 + 0） ^((-\d+)|(0+))$ 

验证长度为3的字符：^.{3}$ 

验证由26个英文字母组成的字符串：^[A-Za-z]+$ 

验证由26个大写英文字母组成的字符串：^[A-Z]+$ 

验证由26个小写英文字母组成的字符串：^[a-z]+$ 

验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$ 

验证由数字、26个英文字母或者下划线组成的字符串：^\w+$ 

验证用户名或昵称经常用到: ^[\u4e00-\u9fa5A-Za-z0-9-_]*$  只能中英文，数字，下划线，减号

验证用户密码:^[a-zA-Z]\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。 

验证是否含有 ^%&',;=?$\" 等字符：[^%&',;=?$\x22]+ 

验证汉字：^[\u4e00-\u9fa5],{0,}$ 

验证Email地址：^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$ 

验证InternetURL：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$ 

验证电话号码：^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。 

验证身份证号：/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; 

验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12” 

验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$ 正确格式为：01、09和1、31。 

整数：^-?\d+$ 

非负浮点数（正浮点数 + 0）：^\d+(\.\d+)?$ 

正浮点数 ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$ 

非正浮点数（负浮点数 + 0） ^((-\d+(\.\d+)?)|(0+(\.0+)?))$ 

负浮点数 ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$ 

浮点数 ^(-?\d+)(\.\d+)?$ 
 * 
 */

