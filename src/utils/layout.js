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
 * @param {number} 非必传  [columnIndex=0]    表单域索引数(默认0)
 * @param {number} 非必传  [columnExpand=1]   合并列数(默认1)
 * 
 */
export function getFormItemLayout(columnLayout, columnIndex = 0, columnExpand = 1){
  if(columnLayout === 1){
    const formLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
		md: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
		md: { span: 10 }
      },
    }
	return formLayout;
  }
  if(columnLayout === 2){
	const expand = columnExpand > 2 ? 2 : columnExpand;
	if(expand === 2){
	  const formItemLayout = {
		sm: 24,
		md: 24,
		lg: 24,
		xl: 22,
	  }
	  return formItemLayout;
	} else {
		const formItemLayout = {
		  sm: 24,
		  md: 24,
		  lg: 24,
		  xl: { span: 10, offset: columnIndex % 2 === 0 ? 0 : 2 },
	    }
	    return formItemLayout;
	}
	
  }
  if(columnLayout === 3){
	const expand = columnExpand > 3 ? 3 : columnExpand;
	if(expand === 3){
	  const formItemLayout = {
		sm: 24,
		md: 24,
		lg: 24,
		xl: 22,
	  }
	  return formItemLayout;
	} else if (expand === 2) {
	  if(columnIndex === 0){
		return {
			sm: 24,
			md: 16,
			lg: 16,
			xl: 14
		}  
	  } else {
		  return {
			  sm: 24,
			  md: 16,
			  lg: 16,
			  xl: { span: 14, oggset: 2 }
		  }
	  }
	} else {
	  const formItemLayout = {
		sm: 24,
		md: 8,
		lg: 8,
		xl: { span: 6, offset: columnIndex % 3 === 0 ? 0 : 2 }
	  }
	  return formItemLayout;
	}
  }
  return null;
}