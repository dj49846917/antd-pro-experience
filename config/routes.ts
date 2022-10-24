export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/template',
    name: 'template',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/template/normalmodal',
        name: 'normal-modal',
        icon: 'smile',
        component: './template/modal/NormalModal',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/',
    redirect: '/template/normalmodal',
  },
  {
    component: './404',
  },
];
