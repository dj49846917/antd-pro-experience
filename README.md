# 记录antdpro和antd的开发心得
## 请主要关注src/pages/Template/这个路径下的组件

## 1.DataInteration组件
		<1>.介绍:使用了antdpro特有的数据交互模式 mock+services+models+页面,关注mock、services、models文件夹下的datainteration.js
		
## 2.[DynamicTable组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/DataInteration)
		<1>.介绍: 使用的是动态的表格渲染，具体到每行每列都是一一配置的，便于掌握复杂情况下的Table组件开发
		
## 3.[MergeCell组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/DynamicTable)
		<1>.介绍: 根据后台数据，动态的合并单元格,注意，这个是针对的没有后台分页的情况(也就是后端一次把所有数据返回的情况)
		
## 4.[ModalChildDemo组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/ModalChildDemo)
		<1>.介绍: 使用在子组件渲染modal的方式，多个modal数据的提交,解决一个bug,子组件校验失败后，孙组件传过来的值无法赋值上去
		
## 5.[ModalDemo组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/ModalDemo)
		<1>.介绍: 使用子组件渲染modal的方式，关注单个modal数据的提交
		
## 6.[MoreModalDemo组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/MoreModalDemo)
		<1>.介绍: 使用在子组件渲染modal的方式，多层modal数据的提交
		
## 7.[SelectMoreData组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/SelectMoreData)
		<1>.介绍: 在select组件中传递多个参数

## 8.[SetStateDemo组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/SetStateDemo)
		<1>.介绍: 用解构的方式来改变state的值，方便，必看！
		
## 9.[TablePagination组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/TablePagination)
		<1>.介绍: 分页组件，但是要后端给出总数total
		
## 10.[TableRadio组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/TableRadio)
		<1>.介绍: 点击每一行，选择一条数据
		
## 11.[TableTest组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/TableTest)
		<1>.介绍: 实现表格的批量编辑，添加，删除功能，必看！
		
## 12.[TurnToPage组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/TurnToPage)
		<1>.介绍: 在model中，使用routerRedux.push跳转，state属性来传递参数，不用显示在地址栏，如果要显示在地址栏，请将state属性改为query属性，接收使用this.props.loaction

## 13.[UploadDemo组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/UploadDemo)
		<1>.介绍: 使用的antd的上传组件，手动上传并传递参数

## 14.[package组件](https://github.com/dj49846917/antdpro2Expricence/tree/master/src/pages/Template/package)
		<1>.介绍: basic文件夹为antd的简单封装，没有改任何内容，其他组件的封装都参考这个文件夹
			
				