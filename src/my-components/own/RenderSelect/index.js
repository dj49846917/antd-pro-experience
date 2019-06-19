import React, { PureComponent } from 'react';
import { Select, Form, Col } from 'antd';
import { getFormItemLayout, getOneFormItemLayout } from '@/utils/layout';

/**
 * @description   下拉组件
 * 
 * @param label: 			非必传， 			页签的标题 (string)
 * @param list： 			必传， 				展示的列表数据 (array)
 * @param required： 		非必传，			控制是否校验 (boolean)
 * @param width： 			非必传，			控制组件的宽度
 * @param initialValue： 	非必传，			组件的初始值
 * @param field： 			必传，				组件的输出值 (string)
 * @param disabled： 		非必传，			控制下拉框的disable状态
 * @param titleProp: 		必传，				展示下拉框的值
 * @param valueProp: 		必传，				绑定传出的值
 * @param columnLayout: 	必传，				布局列数 (number),默认为一行一列
 * @param mode: 			非必传，			设置select的模式(默认为multiple,有默认为multiple|tags|combobox可选择)
 * 
 */

const { Option } = Select;

class RenderSelect extends PureComponent {
  showSelect = formItemLayout => {
    const {
      label,
      form: { getFieldDecorator },
      list,
      required,
      width,
      initialValue,
      field,
      disabled,
      titleProp,
      valueProp,
      columnLayout,
      mode,
      ...rest
    } = this.props;
    console.log(this.props);
	const selectMode = mode ? mode : ''; // 下拉框模式
    return (
      <Form.Item label={label} {...rest} {...formItemLayout}>
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
          <Select style={{width}} mode={selectMode} disabled={disabled}>
            {
              list ? list.map(item => (
                <Option key={item[valueProp]}>{item[titleProp]}</Option>
                )) : null
            }
          </Select>
        )}
      </Form.Item>
    )
  }
  
  // 根据传入的columnLayout，展示是一行一列还是一行两列
  renderSelect = () => {
	  const { columnLayout } = this.props;
	  // 判断columnLayout是否传入，如果没传，展示一行一列，否则展示一行两列
	  if(columnLayout && columnLayout === 2){
		const colLayout = getFormItemLayout(2);
		const formItemLayout = getFormItemLayout(1);
		return(
			<Col {...colLayout}>
				{this.showSelect(formItemLayout)}
			</Col>
		)  
	  }else {
		const colLayout = getOneFormItemLayout(1);
		const formItemLayout = getOneFormItemLayout();
		return(
			<Col {...colLayout}>
				{this.showSelect(formItemLayout)}
			</Col>
		) 
	  }
	  
  }

  render() {
    return this.renderSelect();
  }
}
export default RenderSelect;