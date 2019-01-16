import { dataList } from '@/services/datainteration'; 

export default {
  namespace: 'datainteration',

  state: {
    dataSource: [],
  },

  effects: {
    *getList({ payload }, { call, put }) {
      const response = yield call(dataList, payload);
      yield put({
        type: 'showList',
        payload: response,
      })
      return response;
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