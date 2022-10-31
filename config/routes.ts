﻿export default [
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
        path: '/template/modal',
        name: 'modal',
        icon: 'smile',
        routes: [
          {
            path: '/template/modal',
            redirect: '/template/modal/normalmodal',
          },
          {
            path: '/template/modal/normalmodal',
            name: 'normal-modal',
            icon: 'smile',
            component: './template/modal/NormalModal',
          },
          {
            path: '/template/modal/moremodal',
            name: 'more-modal',
            icon: 'smile',
            component: './template/modal/MoreModal',
          },
          {
            path: '/template/modal/morechildmodal',
            name: 'more-child-modal',
            icon: 'smile',
            component: './template/modal/MoreChildModal',
          },
          {
            component: './404',
          }
        ]
      },
      {
        component: './404',
      }
    ],
  },
  {
    path: '/',
    redirect: '/template/modal',
  },
  {
    component: './404',
  },
];
