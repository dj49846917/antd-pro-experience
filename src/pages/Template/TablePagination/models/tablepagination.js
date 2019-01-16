import { dataList } from '@/services/tablepagination'; 

export default {
  namespace: 'tablepagination',

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