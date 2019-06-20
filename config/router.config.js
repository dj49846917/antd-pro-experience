export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      // dashboard
      { path: '/', redirect: '/template/modaldemo' },
      // 模板组件
      {
        path: '/template',
        name: 'template',
        icon: 'dashboard',
        routes: [
          {
            path: '/template/modaldemo',
            name: 'modaldemo',
            // component: './Template/ModalDemo',
            routes: [
              {
                path: '/template/modaldemo',
                redirect: '/template/modaldemo/modal',
              },
              {
                path: '/template/modaldemo/modal',
                name: 'modal',
                component: './Template/ModalDemo',
              },
              {
                path: '/template/modaldemo/moremodaldemo',
                name: 'moremodaldemo',
                component: './Template/MoreModalDemo',
              },
              {
                path: '/template/modaldemo/morechildmodal',
                name: 'childmodal',
                component: './Template/ModalChildDemo',
              },
            ]
          },
          {
            path: '/template/table',
            name: 'table',
            routes: [
              {
                path: '/template/table',
                redirect: '/template/table/mergecell',
              },
              {
                path: '/template/table/mergecell',
                name: 'mergecell',
                component: './Template/MergeCell',
              },
              {
                path: '/template/table/tableradio',
                name: 'tableradio',
                component: './Template/TableRadio',
              },
              {
                path: '/template/table/datainteration',
                name: 'datainteration',
                component: './Template/DataInteration',
              },
              {
                path: '/template/table/tabletest',
                name: 'tabletest',
                component: './Template/TableTest',
              },
              {
                path: '/template/table/tablesetdata',
                name: 'tablesetdata',
                component: './Template/TableSetData',
              },
              {
                path: '/template/table/dynamictable',
                name: 'dynamictable',
                component: './Template/DynamicTable',
              },
              {
                path: '/template/table/tablepagination',
                name: 'tablepagination',
                component: './Template/TablePagination',
              },
              {
                path: '/template/table/tablepaginationbefore',
                name: 'tablepaginationbefore',
                component: './Template/TablePaginationBefore',
              },
            ]
          },
          {
            path: '/template/turntopage',
            name: 'desk',
            component: './Template/TurnToPage/Desk',
          },
          {
            path: '/template/targetpage',
            name: 'target',
            hideInMenu: 'true',
            component: './Template/TurnToPage/Target',
          },
          {
            path: '/template/upload',
            name: 'upload',
            component: './Template/UploadDemo',
          },
          {
            path: '/template/selectmoredata',
            name: 'selectmoredata',
            component: './Template/SelectMoreData',
          },
          {
            path: '/template/setstatedemo',
            name: 'setstatedemo',
            component: './Template/SetStateDemo',
          },
          {
            path: '/template/formcheck',
            name: 'formcheck',
            component: './Template/FormCheck',
          },
          {
            path: '/template/datepickerdemo',
            name: 'datepickerdemo',
            component: './Template/DatePickerDemo',
          },
        ]
      },
      // 测试组件
      {
        path: '/test',
        icon: 'appstore',
        name: 'test',
        routes: [
          {
            path: '/test/layout',
            name: 'layout',
            component: './TestComponent/Layout',
          },
          {
            path: '/test/testSelect',
            name: 'testselect',
            component: './TestComponent/TestSelect',
          },
          {
            path: '/test/inputnumber',
            name: 'inputnumber',
            component: './TestComponent/TestInputNumber',
          },
          {
            path: '/test/datepicker',
            name: 'datepicker',
            component: './TestComponent/TestDate',
          },
        ],
      },

      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                name: 'stepform',
                redirect: '/form/step-form/info',
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1',
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2',
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: './Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: '/form/advanced-form',
            name: 'advancedform',
            authority: ['admin'],
            component: './Forms/AdvancedForm',
          },
        ],
      },
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: './List/BasicList',
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: './List/CardList',
          },
          {
            path: '/list/search',
            name: 'searchlist',
            component: './List/List',
            routes: [
              {
                path: '/list/search',
                redirect: '/list/search/articles',
              },
              {
                path: '/list/search/articles',
                name: 'articles',
                component: './List/Articles',
              },
              {
                path: '/list/search/projects',
                name: 'projects',
                component: './List/Projects',
              },
              {
                path: '/list/search/applications',
                name: 'applications',
                component: './List/Applications',
              },
            ],
          },
        ],
      },
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [
          // result
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
