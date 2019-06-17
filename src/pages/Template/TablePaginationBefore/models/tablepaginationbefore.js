import { dataList } from '@/pages/Template/TablePaginationBefore/service'; 

export default {
  namespace: 'tablepaginationbefore',

  state: {
    dataSource: {},
  },

  effects: {
    *getList({ payload }, { call, put }) {
      const response = yield call(dataList, payload);
      yield put({
        type: 'showList',
        payload: response.ResponseBody,
      })
      return response.ResponseBody;
    }
  },

  reducers: {
    showList(state, action) {
      return {
        ...state,
        dataSource: action.payload,
      };
    },
  }
}