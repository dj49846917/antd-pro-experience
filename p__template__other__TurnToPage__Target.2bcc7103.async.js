(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[3238],{57090:function(v,s,l){"use strict";l.r(s);var _=l(58024),d=l(91894),f=l(24480),a=l(85893);function u(r){return(0,a.jsx)(d.Z,{title:"ant design\u83B7\u53D6\u8DF3\u8F6C\u53C2\u6570\u9875\u9762",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"ID:"}),(0,a.jsx)("span",{children:f.P.getUrlParms("userId")})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{children:"\u7528\u6237\u540D:"}),(0,a.jsx)("span",{children:f.P.getUrlParms("userName")})]})]})})}s.default=u},24480:function(v,s,l){"use strict";l.d(s,{P:function(){return a}});var _=l(11849),d=l(25377),f=l(17673),a={urlEncode:function(r,e,n,t){if(r==null)return"";var i="",c=typeof r;if(c=="string"||c=="number"||c=="boolean"){var o=e<3?"?":"&";i+=o+n+"="+r}else for(var h in r){var E=n==null?h:n+(r instanceof Array?"["+h+"]":"."+h);e++,i+=a.urlEncode(r[h],e,E,t)}return i},getUrlParms:function(r){var e=new RegExp("(^|&)"+r+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(e);return n!=null?decodeURI(n[2]):""},showTotal:function(r,e,n){var t=Math.ceil(r/e);return"\u603B\u5171".concat(r,"\u6761\u6570\u636E,\u7B2C").concat(n,"/").concat(t,"\u9875")},RedirectPlace:function(){var r=d.m8.location,e=r.query,n=e===void 0?{}:e,t=r.search,i=r.pathname,c=n.redirect;window.location.pathname!=="/user/login"&&!c&&d.m8.replace({pathname:"/user/login",search:(0,f.stringify)({redirect:i+t})})},ConstantKeyToContentValue:function(r,e){var n=r.filter(function(t){return t.constantKey==e});return n.length>0?n[0].constantValue:""},ConstantValueToContentKey:function(r,e){var n=r.filter(function(t){return t.constantValue==e});return n.length>0?n[0].constantKey:""},isEmptyObject:function(r){return Object.getOwnPropertyNames(r).length===0},indexOfObjectArray:function(r,e,n){return r.some(function(t){return console.log("it",t,t[n],e,n),t[n]===e})},uniqueFunc:function(r,e){var n=new Map;return r.filter(function(t){return!n.has(t[e])&&n.set(t[e],1)})},filterDicList:function(r,e,n){return r.filter(function(t){return t[n]===e})},parseTreeData:function(r,e){return r.map(function(n){return(0,_.Z)((0,_.Z)({},n),{},{key:n[e.key],value:n[e.key],title:n[e.title],children:n.children&&a.parseTreeData(n.children,e)})})},calculationLevel:function(r){var e=0;return function n(t,i){++i,e=Math.max(i,e);for(var c=0;c<t.length;c++){var o=t[c];o.level=i,o.children&&o.children.length>0?n(o.children,i):delete o.children}}(r,0),e},findParents:function(r,e){if(r.length!=0)for(var n=0;n<r.length;n++){if(r[n].key==e)return[];if(r[n].children){var t=a.findParents(r[n].children,e);if(t!==void 0)return t.concat(r[n].key)}}},treeToFlat:function(r,e){if(!(e.length>9999))return r.map(function(n){n.children&&n.children.length&&(a.treeToFlat(n.children,e),n.children=[]),e.push(n)}),e},flatToTree:function(r,e){return r.map(function(n){if(n.pid===null){var t=e.findIndex(function(i){return i.id===n.id});t===-1&&e.push(n)}r.map(function(i){if(i.id===n.id){var c=n.children.findIndex(function(o){return o.id===i.id});c===-1&&n.children.push(i)}})}),e}}}}]);
