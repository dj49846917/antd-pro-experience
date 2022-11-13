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
      },
    ],
  },
  {
    path: '/template/table',
    name: 'table',
    icon: 'smile',
    routes: [
      {
        path: '/template/table',
        redirect: '/template/table/tableradio',
      },
      {
        path: '/template/table/tableradio',
        name: 'tableradio',
        icon: 'smile',
        component: './template/table/TableRadio',
      },
      {
        path: '/template/table/mergecell',
        name: 'mergecell',
        icon: 'smile',
        component: './template/table/MergeCell',
      },
      {
        path: '/template/table/tablepaginationbefore',
        name: 'tablepaginationbefore',
        icon: 'smile',
        component: './template/table/TablePaginationBefore',
      },
      {
        path: '/template/table/tablepagination',
        name: 'tablepagination',
        icon: 'smile',
        component: './template/table/TablePagination',
      },
      {
        path: '/template/table/edittable',
        name: 'edittable',
        icon: 'smile',
        component: './template/table/EditTable',
      },
      {
        path: '/template/table/comprehensivetable',
        name: 'comprehensivetable',
        icon: 'smile',
        component: './template/table/ComprehensiveTable',
      },
      {
        path: '/template/table/comprehensivetable2',
        name: 'comprehensivetable2',
        icon: 'smile',
        component: './template/table/ComprehensiveTable2',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/template/other',
    name: 'other',
    icon: 'smile',
    routes: [
      {
        path: '/template/other',
        redirect: '/template/other/turntopage',
      },
      {
        path: '/template/other/turntopage',
        name: 'turntopage',
        icon: 'smile',
        component: './template/other/TurnToPage',
      },
      {
        path: '/template/other/targetpage',
        name: 'targetpage',
        icon: 'smile',
        component: './template/other/TurnToPage/Target',
        hideInMenu: true,
      },
      {
        path: '/template/other/formcheck',
        name: 'formcheck',
        icon: 'smile',
        component: './template/other/FormCheck',
      },
      {
        path: '/template/other/layout',
        name: 'layout',
        icon: 'smile',
        component: './template/other/Layout',
      },
      {
        path: '/template/other/upload',
        name: 'upload',
        icon: 'smile',
        routes: [
          {
            path: '/template/other/upload',
            redirect: '/template/other/upload/manual',
          },
          {
            path: '/template/other/upload/manual',
            name: 'manual',
            icon: 'smile',
            component: './template/other/Upload/Manual',
          },
          {
            component: './404',
          }
        ]
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
    icon: 'home',
    routes: [
      {
        path: '/test',
        redirect: '/test/customform',
      },
      {
        path: '/test/customform',
        name: 'customform',
        icon: 'smile',
        component: './test/CustomForm',
      },
      {
        component: './404',
      },
    ]
  },
  {
    path: '/',
    redirect: '/template/modal',
  },
  {
    component: './404',
  },
];
