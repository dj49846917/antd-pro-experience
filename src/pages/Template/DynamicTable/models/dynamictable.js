import { TabList, TableList } from '@/services/dynamictable'; 

export default {
  namespace: 'dynamictable',

  state: {
    tabList: [],
    dataSource: '',
  },

  effects: {
    *TabList({ payload }, { call, put }) {
      const response = yield call(TabList, payload);
      yield put({
        type: 'showList',
        payload: response,
      })
      return response;
    },
    *TableList({ payload }, { call, put }) {
      const response = yield call(TableList, payload);
      yield put({
        type: 'showTableList',
        payload: response,
      })
      return response;
    },

    reducers: {
      showList(state, action) {
        return {
          ...state,
          tabList: action.payload,
        };
      },
      showTableList(state, action) {
        return {
          ...state,
          dataSource: action.payload,
        };
      },
    }
  },
}