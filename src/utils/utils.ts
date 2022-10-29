import { history } from 'umi'
import { stringify } from 'querystring';
import { CommonParamType, DicType, TreeDataNode } from '@/types';

export const utils = {
  /**
   * 获取地址栏后面的参数
   * @param name      参数名
   * @returns         返回对应的数据（string）
   * 例： 
   *  http://10.81.128.121:8000/designer/?pageId=019644698157772800&businessId=1034101378706698240
   *  getUrlParms("pageId")
   *  输出：019644698157772800
   */
  getUrlParms: (name: string): string => {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const r = window.location.search.substr(1).match(reg);
    if (r != null)
      return decodeURI(r[2]);
    return '';
  },

  /**
   * 
   * @param total       总条数
   * @param pageSize    每页的条数
   * @param current     当前的页码
   * @returns 
   * 
   * 例:
   *    showTotal(100, 10, 2)
   * 输出：总共100条数据,第2/10页
   */
  showTotal: (total: number, pageSize: number, current: number): string => { // 展示总数
    const totalPage = Math.ceil(total / pageSize);
    return `总共${total}条数据,第${current}/${totalPage}页`
  },

  /**
   * 跳回登录携带之前的地址
   */
  RedirectPlace: (): void => {
    const { query = {}, search, pathname } = history.location;
    const { redirect } = query;
    // return
    if (window.location.pathname !== '/user/login' && !redirect) {
      history.replace({
        pathname: '/user/login',
        search: stringify({
          redirect: pathname + search,
        }),
      });
    }
  },

  /**
   * 根据数据字段码值查询文字
   * @param contentkey      数据字典的码值constantKey
   * @param dataSource      数据字典的数据源
   * @returns               数据字段码值对应的constantValue
   * 例：
   *    const arr = [{"id":"node_processed","parentId":"node_status","constantKey":"已处理","constantValue":"0","description":"已处理","createUser":null,"constantRank":null,"createTime":"2022-06-21 11:14:05","updateTime":null},{"id":"node_pending","parentId":"node_status","constantKey":"待处理","constantValue":"1","description":"待处理","createUser":null,"constantRank":null,"createTime":"2022-06-21 11:14:05","updateTime":null}]
   *    getDicnameByDiccode("0", arr)
   * 输出："已处理"
   */
  ConstantKeyToContentValue: (dataSource: DicType[], contentkey: string): string => {
    const arr = dataSource.filter(x => x.constantKey == contentkey)
    if (arr.length > 0) {
      return arr[0].constantValue
    }
    return ''
  },

  /**
   * 
   * @param dataSource        数据字典的数据源
   * @param contentValue      数据字段的名称字段
   * @returns                 数据字段码值对应的constantKey
   * 例：
   *    const arr = [{"id":"node_processed","parentId":"node_status","constantKey":"已处理","constantValue":"0","description":"已处理","createUser":null,"constantRank":null,"createTime":"2022-06-21 11:14:05","updateTime":null},{"id":"node_pending","parentId":"node_status","constantKey":"待处理","constantValue":"1","description":"待处理","createUser":null,"constantRank":null,"createTime":"2022-06-21 11:14:05","updateTime":null}]
   *    ConstantValueToContentKey("已处理", arr)
   * 输出："0"
   */
  // 根据数据字典constantValue返回对应的constantKey
  ConstantValueToContentKey: (dataSource: DicType[], contentValue: string): string => {
    const arr = dataSource.filter(x => x.constantValue == contentValue)
    if (arr.length > 0) {
      return arr[0].constantKey
    }
    return ''
  },

  /**
   * 判断是否为空对象
   * @param obj 
   * @returns 
   */
  isEmptyObject: (obj: CommonParamType): boolean => {
    return Object.getOwnPropertyNames(obj).length === 0
  },

  /**
   * 判断对象数组中是否包含某个值
   * @param arr           数据源
   * @param val           值
   * @param keyWord       字段名
   * @returns 
   * 例：
   *    const data = [{name: '张三', age: 18}, {name: "李四", age: 20}]
   *    indexOfObjectArray(data, "张三", "name")
   * 输出：true
   */
  indexOfObjectArray: (arr: any[], val: string | number, keyWord: string): boolean => {
    return arr.some((it) => {
      console.log("it", it, it[keyWord], val, keyWord)
      if (it[keyWord] === val) {
        return true
      }
      return false
    })
  },

  /**
   * 对象数组根据指定字段去重 
   * @param arr     数据源
   * @param key     根据字段名去重
   * @returns 
   * 例：
   *    const str = [{name: '张三', age: 18}, {name: "李四", age: 20}, {name: "王麻子", age: 18}]
   *    uniqueFunc(str, "age")
   * 输出：
   *    [{name: '张三', age: 18}, {name: "李四", age: 20}]
   */
  uniqueFunc: (arr: CommonParamType[], key: string): CommonParamType[] => {
    const res = new Map();
    return arr.filter((item) => !res.has(item[key]) && res.set(item[key], 1));
  },

  /**
   *  过滤数据字典
   * @param dataSource        数据源
   * @param parentId          过滤的数组源code
   * @param primaryCode       设置的过滤数据源字段
   * @returns 
   * 例：
   *    const arr = [{"id":"node_processed","parentId":"node_status","constantKey":"已处理","constantValue":"0","description":"已处理"},{"id":"execute_listening_java","parentId":"execute_listening_type","constantKey":"Java类","constantValue":"java","description":"Java类"}]
   *    const data = filterDicList(arr, "node_status", "parentId")
   * 
   * 输出：[{"id":"node_processed","parentId":"node_status","constantKey":"已处理","constantValue":"0","description":"已处理"}]
   */
  filterDicList: (dataSource: DicType[], parentId: string, primaryCode: string): DicType[] | [] => {
    return dataSource.filter(x => x[primaryCode] === parentId)
  },

  /**
   * 将接口数据（已有结构）转换为tree数据
   * @param data      数据源
   * @param obj       转换的数据对象
   * @returns 
   * 例：
   *    const dataSource = [{"organizationId":"822186509019525120","name":"Tableau (China) Co., Ltd. Beijing Branch","children":[{"organizationId":"822188093639897088","name":"Sales-2100"}]},{"organizationId":"822187840396210176","name":"Tableau (China) Co., Ltd.","children":[{"organizationId":"822188093203689472","name":"Sales-2100"},{"organizationId":"824955794389086208","name":"Sales-1500"}]}]
   *    const parseData = parseTreeData(dataSource, {
   *      key: 'organizationId',
   *      title: 'name'
   *    })
   * 输出：
   *    [{"organizationId":"822186509019525120","name":"Tableau (China) Co., Ltd. Beijing Branch","children":[{"organizationId":"822188093639897088","name":"Sales-2100","key":"822188093639897088","value":"822188093639897088","title":"Sales-2100"}],"key":"822186509019525120","value":"822186509019525120","title":"Tableau (China) Co., Ltd. Beijing Branch"},{"organizationId":"822187840396210176","name":"Tableau (China) Co., Ltd.","children":[{"organizationId":"822188093203689472","name":"Sales-2100","key":"822188093203689472","value":"822188093203689472","title":"Sales-2100"},{"organizationId":"824955794389086208","name":"Sales-1500","key":"824955794389086208","value":"824955794389086208","title":"Sales-1500"}],"key":"822187840396210176","value":"822187840396210176","title":"Tableau (China) Co., Ltd."}]
   */
  parseTreeData: <T extends { children: T[] }>(data: T[], obj: { key: string; title: string }): TreeDataNode[] => {
    return data.map(menu => {
      return {
        ...menu,
        key: menu[obj.key],
        value: menu[obj.key],
        title: menu[obj.title],
        children: menu.children && utils.parseTreeData(menu.children, obj)
      }
    })
  }
}