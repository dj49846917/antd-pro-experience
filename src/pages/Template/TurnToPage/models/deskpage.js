import { routerRedux } from 'dva/router';

export default {
  namespace: 'deskpage',

  state: {

  },

  effects: {
    *turntopage({ payload }, { put }) {
      console.log(payload);
      // 使用state，参数就不会显示在地址栏后面，使用query,参数会拼接在地址栏后面
      yield put(
        routerRedux.push({
          pathname: '/template/targetpage',
          state: payload,
        })
      )
    },
  },
}