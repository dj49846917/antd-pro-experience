(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[591],{61993:function(P,m,t){"use strict";t.r(m);var R=t(8963),T=t(42020),u=t(88983),d=t(47933),s=t(39428),U=t(3182),y=t(2824),M=t(40456),e=t(52473),r=t(67294),i=t(85893);function o(N){var g=(0,r.useState)(!1),l=(0,y.Z)(g,2),S=l[0],h=l[1],L=(0,r.useState)(""),Y=(0,y.Z)(L,2),A=Y[0],I=Y[1],O=(0,r.useState)({list:[],total:0,current:1,pageSize:10}),f=(0,y.Z)(O,2),n=f[0],B=f[1];(0,r.useEffect)(function(){h(!0);var c={userId:"001",pageIndex:1,pageSize:10};E(c),h(!1)},[]);var E=function(){var c=(0,U.Z)((0,s.Z)().mark(function a(C){var p;return(0,s.Z)().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return h(!0),_.next=3,M.Z.getList(C);case 3:p=_.sent,h(!1),p&&p.success&&(console.log("result",p),B({list:p.data.list,total:p.data.total,current:p.data.current,pageSize:p.data.pageSize}));case 6:case"end":return _.stop()}},a)}));return function(C){return c.apply(this,arguments)}}(),D=[{title:"\u9009\u62E9",dataIndex:"action",key:"action",render:function(a,C){return(0,i.jsx)("span",{children:(0,i.jsx)(d.ZP.Group,{value:A,onChange:function(v){return I(v.target.value)},children:(0,i.jsx)(d.ZP,{value:C.Uuid})})})}},{title:"\u8D22\u52A1\u62A5\u8868\u7C7B\u578B",dataIndex:"ReportNm",key:"ReportNm"},{title:"\u62A5\u8868\u65F6\u95F4",dataIndex:"ReportYearMonth",key:"ReportYearMonth"},{title:"\u62A5\u8868\u5468\u671F\u7C7B\u578B",dataIndex:"ReportCycleTypeCd",key:"ReportCycleTypeCd"}],x=function(){var a=Math.ceil(n.total/n.pageSize);return"\u603B\u5171".concat(n.total,"\u6761\u6570\u636E,\u7B2C").concat(n.current,"/").concat(a,"\u9875")},z=function(a){var C={userId:"001",pageIndex:a.current,pageSize:a.pageSize};E(C)};return(0,i.jsx)(e.ZP,{loading:S,children:(0,i.jsx)(T.Z,{pagination:{total:n.total,current:n.current,pageSize:n.pageSize,showSizeChanger:!0,showQuickJumper:!0,showTotal:x},dataSource:n.list,columns:D,bordered:!0,loading:S,rowKey:"Uuid",onChange:z,onRow:function(a){return{onClick:function(){I(a.Uuid)}}}})})}m.default=o},40456:function(P,m,t){"use strict";t.d(m,{Z:function(){return y}});var R=t(11849),T={local:{API_URL:"https://www.fastmock.site/mock/f5d8d99de1a8ce59a932ad17a28ed974/temp"},dev:{API_URL:"https://www.fastmock.site/mock/f5d8d99de1a8ce59a932ad17a28ed974/temp"},prod:{API_URL:"https://www.fastmock.site/mock/f5d8d99de1a8ce59a932ad17a28ed974/temp"},API:{AUTH:"/auth/",BUSINESS:"/business/"}},u={LOGIN_TOKEN_STORAGE:"loginToken",BASE_URL:"https://www.fastmock.site/mock/f5d8d99de1a8ce59a932ad17a28ed974/temp",TABLE_LIST:"table_list",API:{AUTH:T.API.AUTH,BUSINESS:T.API.BUSINESS}},d={code:0,host:"4cAFRxJHwo2Pg2iGAgzEJ/xkAj/0VjxT1iCpl2ZwluLPvev2Bms=",message:"success",success:!0,timestamp:"2022-11-07 20:53:25",traceId:"8ad100f984516cc4018452271ca6000b",data:{list:[{Uuid:1,ReportCycleTypeCd:"1",ReportYearMonth:"2021-02-08 18:29:45",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:2,ReportCycleTypeCd:"3",ReportYearMonth:"1986-09-22 15:34:32",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:3,ReportCycleTypeCd:"2",ReportYearMonth:"2015-01-25 12:31:12",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:4,ReportCycleTypeCd:"4",ReportYearMonth:"2002-10-27 06:41:45",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:5,ReportCycleTypeCd:"1",ReportYearMonth:"1975-12-25 10:54:41",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:6,ReportCycleTypeCd:"4",ReportYearMonth:"1995-11-03 08:30:29",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:7,ReportCycleTypeCd:"4",ReportYearMonth:"2000-03-24 03:40:01",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:8,ReportCycleTypeCd:"3",ReportYearMonth:"2003-01-07 10:39:00",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:9,ReportCycleTypeCd:"3",ReportYearMonth:"2005-02-23 23:54:26",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:10,ReportCycleTypeCd:"4",ReportYearMonth:"2004-01-20 07:19:32",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:11,ReportCycleTypeCd:"2",ReportYearMonth:"1981-08-08 07:40:03",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:12,ReportCycleTypeCd:"2",ReportYearMonth:"1982-10-09 22:09:32",ReportNm:"\u8D22\u52A1\u6307\u6807\u8868"},{Uuid:13,ReportCycleTypeCd:"4",ReportYearMonth:"1970-04-17 20:20:48",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:14,ReportCycleTypeCd:"1",ReportYearMonth:"1999-03-25 01:33:21",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:15,ReportCycleTypeCd:"3",ReportYearMonth:"2003-05-22 23:28:23",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:16,ReportCycleTypeCd:"4",ReportYearMonth:"2001-04-15 09:40:27",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:17,ReportCycleTypeCd:"4",ReportYearMonth:"1996-12-21 22:03:40",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:18,ReportCycleTypeCd:"2",ReportYearMonth:"2011-07-27 12:59:41",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:19,ReportCycleTypeCd:"4",ReportYearMonth:"1982-08-05 17:12:04",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:20,ReportCycleTypeCd:"3",ReportYearMonth:"2000-06-23 11:23:32",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:21,ReportCycleTypeCd:"2",ReportYearMonth:"2006-11-08 18:38:35",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:22,ReportCycleTypeCd:"3",ReportYearMonth:"2002-03-11 01:24:33",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:23,ReportCycleTypeCd:"1",ReportYearMonth:"2005-09-03 22:04:04",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:24,ReportCycleTypeCd:"3",ReportYearMonth:"2020-05-30 17:49:32",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:25,ReportCycleTypeCd:"4",ReportYearMonth:"2018-03-24 23:28:42",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:26,ReportCycleTypeCd:"2",ReportYearMonth:"1989-05-08 11:37:57",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:27,ReportCycleTypeCd:"3",ReportYearMonth:"1974-11-28 19:23:32",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:28,ReportCycleTypeCd:"2",ReportYearMonth:"2009-01-20 18:02:03",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:29,ReportCycleTypeCd:"3",ReportYearMonth:"1983-06-10 13:54:43",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:30,ReportCycleTypeCd:"2",ReportYearMonth:"2007-12-13 00:21:06",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:31,ReportCycleTypeCd:"4",ReportYearMonth:"2022-10-26 21:19:54",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:32,ReportCycleTypeCd:"1",ReportYearMonth:"2011-11-12 04:06:12",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:33,ReportCycleTypeCd:"2",ReportYearMonth:"1973-02-21 21:33:32",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:34,ReportCycleTypeCd:"2",ReportYearMonth:"2012-01-11 12:14:41",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:35,ReportCycleTypeCd:"1",ReportYearMonth:"2004-11-30 11:28:05",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:36,ReportCycleTypeCd:"1",ReportYearMonth:"2000-09-22 00:34:21",ReportNm:"\u8D22\u52A1\u6307\u6807\u8868"},{Uuid:37,ReportCycleTypeCd:"2",ReportYearMonth:"1985-01-18 07:52:37",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:38,ReportCycleTypeCd:"3",ReportYearMonth:"1970-05-06 00:17:48",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:39,ReportCycleTypeCd:"2",ReportYearMonth:"2003-09-05 03:27:43",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:40,ReportCycleTypeCd:"3",ReportYearMonth:"2016-05-26 21:43:39",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:41,ReportCycleTypeCd:"3",ReportYearMonth:"2019-07-14 05:43:32",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:42,ReportCycleTypeCd:"2",ReportYearMonth:"1978-11-06 05:26:47",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:43,ReportCycleTypeCd:"1",ReportYearMonth:"2020-11-08 19:24:34",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:44,ReportCycleTypeCd:"3",ReportYearMonth:"1997-12-07 00:30:57",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:45,ReportCycleTypeCd:"4",ReportYearMonth:"1991-10-10 04:12:16",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:46,ReportCycleTypeCd:"3",ReportYearMonth:"1975-01-02 12:46:05",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:47,ReportCycleTypeCd:"4",ReportYearMonth:"1986-01-28 01:57:25",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:48,ReportCycleTypeCd:"2",ReportYearMonth:"2020-01-10 00:35:10",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:49,ReportCycleTypeCd:"4",ReportYearMonth:"1972-09-06 18:39:12",ReportNm:"\u8D22\u52A1\u6307\u6807\u8868"},{Uuid:50,ReportCycleTypeCd:"4",ReportYearMonth:"1993-10-01 04:49:40",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:51,ReportCycleTypeCd:"1",ReportYearMonth:"2010-08-12 01:19:56",ReportNm:"\u5229\u6DA6\u53CA\u5229\u6DA6\u5206\u914D\u8868"},{Uuid:52,ReportCycleTypeCd:"2",ReportYearMonth:"1996-05-20 16:57:24",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:53,ReportCycleTypeCd:"1",ReportYearMonth:"2013-02-06 15:19:58",ReportNm:"\u8D44\u4EA7\u8D1F\u503A\u8868"},{Uuid:54,ReportCycleTypeCd:"1",ReportYearMonth:"1977-11-14 14:24:51",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"},{Uuid:55,ReportCycleTypeCd:"3",ReportYearMonth:"2015-08-08 02:25:58",ReportNm:"\u73B0\u91D1\u6D41\u91CF\u8868"}],pageSize:10,total:55,current:1}};d.data.pageSize=10,d.data.total=d.data.list.length,d.data.current=1;var s=d,U={getTableList:function(e){return new Promise(function(r,i){localStorage.getItem(u.TABLE_LIST)||localStorage.setItem(u.TABLE_LIST,JSON.stringify(s)),r(JSON.parse(localStorage.getItem(u.TABLE_LIST)))})},getList:function(e){return new Promise(function(r,i){localStorage.getItem(u.TABLE_LIST)||localStorage.setItem(u.TABLE_LIST,JSON.stringify(s));var o=JSON.parse(localStorage.getItem(u.TABLE_LIST)),N=Math.ceil(o.data.total/e.pageSize);if(N<1){r((0,R.Z)((0,R.Z)({},o),{},{data:{pageSize:e.pageSize,list:[],total:0,current:1}}));return}if(e.pageIndex===1){r((0,R.Z)((0,R.Z)({},o),{},{data:{pageSize:e.pageSize,list:o.data.list.filter(function(g,l){return l<e.pageIndex*e.pageSize}),total:o.data.total,current:e.pageIndex}}));return}r((0,R.Z)((0,R.Z)({},o),{},{data:{pageSize:e.pageSize,list:o.data.list.filter(function(g,l){return l>=(e.pageIndex-1)*e.pageSize&&l<e.pageIndex*e.pageSize}),total:o.data.total,current:e.pageIndex}}))})}},y=U}}]);