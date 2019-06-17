import moment from 'moment';
import React from 'react';
import nzh from 'nzh/cn';
import { parse, stringify } from 'qs';

export function fixedZero(val) {
  return val * 1 < 10 ? `0${val}` : val;
}

/**
 * 
 * xs < 576px
 * sm ≥ 576px
 * md ≥ 768px
 * lg ≥ 992px
 * xl ≥ 1200px
 * xxl ≥ 1600px
 * 栅格响应式布局,label与表单域不在同一行(除cloumnLayout=1), FormItem+栅格混合布局
 * @param {number} columnLayout       表单域列数
 * @param {number} [columnIndex=0]    表单域索引数(默认0)
 * @param {number} [columnExpand=1]   合并列数(默认1)
 * 
 */
export function getFormItemLayout(columnLayout, columnIndex = 0, columnExpand = 1){
  if(columnLayout === 1){
    const formLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
		md: { span: 10 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
		md: { span: 12 }
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


/**
 * 使用举例:
 *    1.输出昨天:
 *      const today =  getTimeDistance('today');
 *      console.log(today[0].format('YYYY-MM-DD HH:mm:ss')); // 输出: '2019-01-28 00:00:00'
 *      console.log(today[1].format('YYYY-MM-DD HH:mm:ss')); // 输出: '2019-01-28 23:59:59'
 * 
 *     2.输出近一周:
 *      const today =  getTimeDistance('week');
 *      console.log(today[0].format('YYYY-MM-DD HH:mm:ss')); // 输出: '2019-01-28 00:00:00'
 *      console.log(today[1].format('YYYY-MM-DD HH:mm:ss')); // 输出: '2019-02-03 23:59:59' 
 *  
 *    4.输出近一月:
 *      const today =  getTimeDistance('month');
 *      console.log(today[0].format('YYYY-MM-DD HH:mm:ss')); // 输出: '2019-01-01 00:00:00'
 *      console.log(today[1].format('YYYY-MM-DD HH:mm:ss')); // 输出: '2019-01-31 23:59:59'
 * 
 *    5.输出近一年:
 *      const today =  getTimeDistance('month');
 *      console.log(today[0].format('YYYY-MM-DD HH:mm:ss')); // 输出: '2019-01-01 00:00:00'
 *      console.log(today[1].format('YYYY-MM-DD HH:mm:ss')); // 输出: '2019-01-31 23:59:59'
 * 
 */
export function getTimeDistance(type) { // 获取时间段
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') { // 昨天
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') { // 近一周
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - day * oneDay;

    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
  }

  if (type === 'month') { // 近一个月
    const year = now.getFullYear();
    const month = now.getMonth();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
    ];
  }

  const year = now.getFullYear(); // 近一年
  return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
}

export function getPlainNode(nodeList, parentPath = '') {
  const arr = [];
  nodeList.forEach(node => {
    const item = node;
    item.path = `${parentPath}/${item.path || ''}`.replace(/\/+/g, '/');
    item.exact = true;
    if (item.children && !item.component) {
      arr.push(...getPlainNode(item.children, item.path));
    } else {
      if (item.children && item.component) {
        item.exact = false;
      }
      arr.push(item);
    }
  });
  return arr;
}

/**
 * 举例:
 *    const num = 200;
 *    console.log(digitUppercase(num)); // 输出: '人民币贰佰元整'
 * 
 */
export function digitUppercase(n) { // 数字大写
  return nzh.toMoney(n);
}

function getRelation(str1, str2) {
  if (str1 === str2) {
    console.warn('Two path are equal!'); // eslint-disable-line
  }
  const arr1 = str1.split('/');
  const arr2 = str2.split('/');
  if (arr2.every((item, index) => item === arr1[index])) {
    return 1;
  }
  if (arr1.every((item, index) => item === arr2[index])) {
    return 2;
  }
  return 3;
}

function getRenderArr(routes) {
  let renderArr = [];
  renderArr.push(routes[0]);
  for (let i = 1; i < routes.length; i += 1) {
    // 去重
    renderArr = renderArr.filter(item => getRelation(item, routes[i]) !== 1);
    // 是否包含
    const isAdd = renderArr.every(item => getRelation(item, routes[i]) === 3);
    if (isAdd) {
      renderArr.push(routes[i]);
    }
  }
  return renderArr;
}

/**
 * Get router routing configuration
 * { path:{name,...param}}=>Array<{name,path ...param}>
 * @param {string} path
 * @param {routerData} routerData
 */
export function getRoutes(path, routerData) {
  let routes = Object.keys(routerData).filter(
    routePath => routePath.indexOf(path) === 0 && routePath !== path
  );
  // Replace path to '' eg. path='user' /user/name => name
  routes = routes.map(item => item.replace(path, ''));
  // Get the route to be rendered to remove the deep rendering
  const renderArr = getRenderArr(routes);
  // Conversion and stitching parameters
  const renderRoutes = renderArr.map(item => {
    const exact = !routes.some(route => route !== item && getRelation(route, item) === 1);
    return {
      exact,
      ...routerData[`${path}${item}`],
      key: `${path}${item}`,
      path: `${path}${item}`,
    };
  });
  return renderRoutes;
}

export function getPageQuery() {
  return parse(window.location.href.split('?')[1]);
}

export function getQueryPath(path = '', query = {}) {
  const search = stringify(query);
  if (search.length) {
    return `${path}?${search}`;
  }
  return path;
}

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;

export function isUrl(path) {
  return reg.test(path);
}

export function formatWan(val) {
  const v = val * 1;
  if (!v || Number.isNaN(v)) return '';

  let result = val;
  if (val > 10000) {
    result = Math.floor(val / 10000);
    result = (
      <span>
        {result}
        <span
          styles={{
            position: 'relative',
            top: -2,
            fontSize: 14,
            fontStyle: 'normal',
            lineHeight: 20,
            marginLeft: 2,
          }}
        >
          万
        </span>
      </span>
    );
  }
  return result;
}

export function isAntdPro() {
  return window.location.hostname === 'preview.pro.ant.design';
}
