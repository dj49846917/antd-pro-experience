/**
 * 
 * xs < 576px
 * sm ≥ 576px
 * md ≥ 768px
 * lg ≥ 992px
 * xl ≥ 1200px
 * xxl ≥ 1600px
 * 栅格响应式布局,label与表单域不在同一行(除cloumnLayout=1), FormItem+栅格混合布局
 * @param {number} 必传    columnLayout       表单域列数
 * 主要用于一行两列
 * const colLayout = getFormItemLayout(2);
 * const formItemLayout = getFormItemLayout(1);
 *	
 *	<Col {...colLayout}>
	  <Form.Item
		label="姓名"
		{...formItemLayout}
	  >
		{getFieldDecorator('name', {
		  rules: [{
			required: true, message: '请输入姓名',
		  }],
		})(
		  <Input placeholder='请输入姓名' />
		)}
	  </Form.Item>
	</Col>
 * 
 */
export function getFormItemLayout(columnLayout){
  if(columnLayout === 1){
    const formLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
		md: { span: 8 },
		xl: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
		md: { span: 14 },
		xl: { span: 14 },
      },
    }
	return formLayout;
  }
  if(columnLayout === 2){
	const formItemLayout = {
	  sm: 24,
	  md: 24,
	  lg: { span: 11 },
	  xl: { span: 11 },
	}
	return formItemLayout;
	
  }
  if(columnLayout === 3){
	const formItemLayout = {
		sm: 24,
		md: 24,
		lg: 24,
		xl: 22,
	  }
	  return formItemLayout;
  }
  return null;
}

/*
	栅格布局:一行一列
*/
export function getOneFormItemLayout(columnLayout, formItemLayout=1){
	if(columnLayout){
		const formLayout = {
			xs: { span: 24 },
			sm: { span: 24 },
			md: { span: 24 },
			xl: { span: 24 },
		}
		return formLayout;
	}else{
		const formLayout = {
		  labelCol: {
			xs: { span: 24 },
			sm: { span: 5 },
			md: { span: 5 },
			xl: { span: 5 },
		  },
		  wrapperCol: {
			xs: { span: 24 },
			sm: { span: 16 },
			md: { span: 16 },
			xl: { span: 16 },
		  },
		}
		return formLayout;
	}
}