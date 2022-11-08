/** Request 网络请求工具 更详细的 api 文档: https://github.com/umijs/umi-request */
import { extend } from 'umi-request';
import { notification } from 'antd';
import { history } from 'umi';
import { Constant } from '@/constant';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};
/** 异常处理程序 */

const errorHandler = (error: { response: any; }) => {
  const { response } = error;

  if (response && response.status) {
    const errorText = codeMessage[response.code] || response.message;
    const { code, url } = response;

    if (code === 401) {
      history.push('/user/login')
      // window.location.href = "https://bdhaccounttest.tax.deloitte.com.cn/auth/login"
      return;
    }
    notification.error({
      message: `请求错误 ${code}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    // history.push('/user/login')
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }

  return response;
};

/** 配置request请求时的默认参数 */
export const Drequest = extend({
  errorHandler,
  // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  // prefix: 'http://localhost:8080/sdnu'
});

// request拦截器, 改变url 或 options.
// @ts-ignore
Drequest.interceptors.request.use(async (url, options) => {
  let access_token = localStorage.getItem(Constant.LOGIN_TOKEN_STORAGE);
  if (access_token) {
    options.headers = {
      ...options.headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${access_token}`,
    };
  } else {
    options.headers = {
      ...options.headers,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };
  }
  return { url, options };
})

// response拦截器, 处理response
Drequest.interceptors.response.use(async (response, options) => {
  console.log("response", response)
  const data = await response.clone().json();
  if (data.code === 401) {
    notification.error({
      message: "鉴权失败"
    });
  }
  if (data.code >= 400) {
    notification.error({
      message: `请求错误 ${data.code}`,
      description: data.message,
    });
  }
  return data;
});
