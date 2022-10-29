import { history } from 'umi'
import { stringify } from 'querystring';
import { CommonParamType, DicType, TreeDataNode } from '@/types';
import { DataNode } from 'antd/lib/tree';

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
  },
  /**
   * 获取tree的最大层级数
   * @param arr 
   * @returns 
   * 例：
   *    const arr = [{title:'0-0',key:'0-0',children:[{title:'0-0-0',key:'0-0-0',children:[{title:'0-0-0-0',key:'0-0-0-0'},{title:'0-0-0-1',key:'0-0-0-1'},{title:'0-0-0-2',key:'0-0-0-2'},],},{title:'0-0-1',key:'0-0-1',children:[{title:'0-0-1-0',key:'0-0-1-0'},{title:'0-0-1-1',key:'0-0-1-1'},{title:'0-0-1-2',key:'0-0-1-2'},],},{title:'0-0-2',key:'0-0-2',},],},{title:'0-1',key:'0-1',children:[{title:'0-1-0-0',key:'0-1-0-0'},{title:'0-1-0-1',key:'0-1-0-1'},{title:'0-1-0-2',key:'0-1-0-2'},],},{title:'0-2',key:'0-2',},];
   *    calculationLevel(arr)
   * 输出：
   *    3
   */
  calculationLevel: (arr: CommonParamType[]): number => {
    //递归计算树形数据最大的层级数
    let maxLevel = 0;
    // @ts-ignore
    !function multiArr(arr, level) {
      ++level;
      maxLevel = Math.max(level, maxLevel);
      for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        item.level = level;
        if (item.children && item.children.length > 0) {
          multiArr(item.children, level);
        } else {
          delete item.children;
        }
      }
    }(arr, 0);
    return maxLevel;
  },
  /**
   * 查询指定节点的直接父节点
   * @param treeData tree数据
   * @param key 节点id
   * @returns 
   * 例：
   *    const arr = [{title:'0-0',key:'0-0',children:[{title:'0-0-0',key:'0-0-0',children:[{title:'0-0-0-0',key:'0-0-0-0'},{title:'0-0-0-1',key:'0-0-0-1'},{title:'0-0-0-2',key:'0-0-0-2'},],},{title:'0-0-1',key:'0-0-1',children:[{title:'0-0-1-0',key:'0-0-1-0'},{title:'0-0-1-1',key:'0-0-1-1'},{title:'0-0-1-2',key:'0-0-1-2'},],},{title:'0-0-2',key:'0-0-2',},],},{title:'0-1',key:'0-1',children:[{title:'0-1-0-0',key:'0-1-0-0'},{title:'0-1-0-1',key:'0-1-0-1'},{title:'0-1-0-2',key:'0-1-0-2'},],},{title:'0-2',key:'0-2',},];
   *    findParents(arr, "0-0-0")
   * 输出：
   *    ['0-0']
   */
  findParents(treeData: DataNode[], key: string) {
    if (treeData.length == 0) return
    for (let i = 0; i < treeData.length; i++) {
      if (treeData[i].key == key) {
        return []
      } else {
        if (treeData[i].children) {
          let res: any = utils.findParents(treeData[i].children as DataNode[], key)
          if (res !== undefined) {
            return res.concat(treeData[i].key)
          }
        }
      }
    }
  },
  /**
   * tree扁平化
   * @param treeList        数据源
   * @param flatList        返回的数据
   * @returns 
   * 例：
   *    const arr = [{title:'0-0',key:'0-0',children:[{title:'0-0-0',key:'0-0-0',children:[{title:'0-0-0-0',key:'0-0-0-0'},{title:'0-0-0-1',key:'0-0-0-1'},{title:'0-0-0-2',key:'0-0-0-2'},],},{title:'0-0-1',key:'0-0-1',children:[{title:'0-0-1-0',key:'0-0-1-0'},{title:'0-0-1-1',key:'0-0-1-1'},{title:'0-0-1-2',key:'0-0-1-2'},],},{title:'0-0-2',key:'0-0-2',},],},{title:'0-1',key:'0-1',children:[{title:'0-1-0-0',key:'0-1-0-0'},{title:'0-1-0-1',key:'0-1-0-1'},{title:'0-1-0-2',key:'0-1-0-2'},],},{title:'0-2',key:'0-2',},];
   *    treeToFlat(arr, [])
   * 输出：
   *    [{"title":"0-0-0-0","key":"0-0-0-0"},{"title":"0-0-0-1","key":"0-0-0-1"},{"title":"0-0-0-2","key":"0-0-0-2"},{"title":"0-0-0","key":"0-0-0","children":[]},{"title":"0-0-1-0","key":"0-0-1-0"},{"title":"0-0-1-1","key":"0-0-1-1"},{"title":"0-0-1-2","key":"0-0-1-2"},{"title":"0-0-1","key":"0-0-1","children":[]},{"title":"0-0-2","key":"0-0-2"},{"title":"0-0","key":"0-0","children":[]},{"title":"0-1-0-0","key":"0-1-0-0"},{"title":"0-1-0-1","key":"0-1-0-1"},{"title":"0-1-0-2","key":"0-1-0-2"},{"title":"0-1","key":"0-1","children":[]},{"title":"0-2","key":"0-2"}]
   */
  treeToFlat(treeList: TreeDataNode[], flatList: TreeDataNode[]) {
    // flatList.length > 9999 是考虑底线保护原则，出于极限保护的目的设置的，可不设或按需设置。
    if (flatList.length > 9999) {
      return
    }
    treeList.map(e => {
      // 递归：有条件的自己调用自己，条件是 e.children.length 为真
      if (e.children && e.children.length) {
        utils.treeToFlat(e.children, flatList)
        e.children = []
      }
      flatList.push(e)
    })
    // console.log('扁平化后：', flatList)
    return flatList
  },
  /**
   * 扁平化数据转tree
   * @param flatList 
   * @param treeList 
   * @returns 
   * 例：
   *    const arr = [{id:1,pid:null,label:'第一层',value:'1',children:[{id:2,pid:1,label:'第二层1',value:'2.1',children:[]},{id:3,pid:1,label:'第二层2',value:'2.2',children:[]},{id:4,pid:1,label:'第二层3',value:'2.3',children:[{id:5,pid:4,label:'第三层1',value:'3.1',children:[]},{id:6,pid:4,label:'第三层2',value:'3.2',children:[]},],},],},{id:2,pid:1,label:'第二层1',value:'2.1',children:[]},{id:3,pid:1,label:'第二层2',value:'2.2',children:[]},{id:4,pid:1,label:'第二层3',value:'2.3',children:[{id:5,pid:4,label:'第三层1',value:'3.1',children:[]},{id:6,pid:4,label:'第三层2',value:'3.2',children:[]},],},{id:5,pid:4,label:'第三层1',value:'3.1',children:[]},{id:6,pid:4,label:'第三层2',value:'3.2',children:[]},];console.log('flat =>tree，反扁平化后：',flatToTree(origin,[]));}
   *    flatToTree(arr, [])
   * 输出：
   *    [{"id":1,"pid":null,"label":"第一层","value":"1","children":[{"id":2,"pid":1,"label":"第二层1","value":"2.1","children":[]},{"id":3,"pid":1,"label":"第二层2","value":"2.2","children":[]},{"id":4,"pid":1,"label":"第二层3","value":"2.3","children":[{"id":5,"pid":4,"label":"第三层1","value":"3.1","children":[]},{"id":6,"pid":4,"label":"第三层2","value":"3.2","children":[]}]}]}]
   */
  flatToTree: (flatList: any[], treeList: TreeDataNode[]) => {
    flatList.map(e => {
      // 以 e.pid===null,作为判断是不是根节点的依据，或者直接写死根节点（如果确定的话），
      // 具体以什么作为判断根节点的依据，得看数据的设计规则，通常是判断层级或是否代表根节点的标记
      if (e.pid === null) {
        // 避免出现重复数据
        const index = treeList.findIndex(sub => sub.id === e.id)
        if (index === -1) {
          treeList.push(e)
        }
      }

      flatList.map(e2 => {
        if (e2.id === e.id) {
          // 避免出现重复数据
          const index = e.children.findIndex((sub: { id: number; }) => sub.id === e2.id)
          if (index === -1) {
            e.children.push(e2)
          }
        }
      })
    })
    return treeList
  }
}