(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[125],{25414:function(){},60508:function(Tt,$e,m){"use strict";m.d($e,{Z:function(){return ha}});var L=m(96156),$=m(22122),ke=m(54549),je=m(44545),j=m(28991),t=m(67294),Pt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},Zt=Pt,Rt=m(27029),Ue=function(a,n){return t.createElement(Rt.Z,(0,j.Z)((0,j.Z)({},a),{},{ref:n,icon:Zt}))};Ue.displayName="PlusOutlined";var Nt=t.forwardRef(Ue),It=m(94184),H=m.n(It),R=m(28481),ge=m(90484),Ee=m(81253),kt=m(31131),Fe=m(21770),Mt=m(63441),Se=(0,t.createContext)(null),At=t.forwardRef(function(e,a){var n=e.prefixCls,r=e.className,o=e.style,i=e.id,s=e.active,l=e.tabKey,f=e.children;return t.createElement("div",{id:i&&"".concat(i,"-panel-").concat(l),role:"tabpanel",tabIndex:s?0:-1,"aria-labelledby":i&&"".concat(i,"-tab-").concat(l),"aria-hidden":!s,style:o,className:H()(n,s&&"".concat(n,"-active"),r),ref:a},f)}),He=At,Lt=["key","forceRender","style","className"];function Ot(e){var a=e.id,n=e.activeKey,r=e.animated,o=e.tabPosition,i=e.destroyInactiveTabPane,s=t.useContext(Se),l=s.prefixCls,f=s.tabs,b=r.tabPane,S="".concat(l,"-tabpane");return t.createElement("div",{className:H()("".concat(l,"-content-holder"))},t.createElement("div",{className:H()("".concat(l,"-content"),"".concat(l,"-content-").concat(o),(0,L.Z)({},"".concat(l,"-content-animated"),b))},f.map(function(d){var y=d.key,k=d.forceRender,g=d.style,N=d.className,A=(0,Ee.Z)(d,Lt),D=y===n;return t.createElement(Mt.Z,(0,$.Z)({key:y,visible:D,forceRender:k,removeOnLeave:!!i,leavedClassName:"".concat(S,"-hidden")},r.tabPaneMotion),function(E,T){var W=E.style,O=E.className;return t.createElement(He,(0,$.Z)({},A,{prefixCls:S,id:a,tabKey:y,animated:b,active:D,style:(0,j.Z)((0,j.Z)({},g),W),className:H()(N,O),ref:T}))})})))}var Ge=m(85061),ce=m(75164),wt=m(42550),Xe=m(48717);function Ye(e){var a=(0,t.useRef)(),n=(0,t.useRef)(!1);function r(){for(var o=arguments.length,i=new Array(o),s=0;s<o;s++)i[s]=arguments[s];n.current||(ce.Z.cancel(a.current),a.current=(0,ce.Z)(function(){e.apply(void 0,i)}))}return(0,t.useEffect)(function(){return n.current=!1,function(){n.current=!0,ce.Z.cancel(a.current)}},[]),r}function Bt(e){var a=(0,t.useRef)([]),n=(0,t.useState)({}),r=(0,R.Z)(n,2),o=r[1],i=(0,t.useRef)(typeof e=="function"?e():e),s=Ye(function(){var f=i.current;a.current.forEach(function(b){f=b(f)}),a.current=[],i.current=f,o({})});function l(f){a.current.push(f),s()}return[i.current,l]}var X=m(15105);function Dt(e,a){var n,r=e.prefixCls,o=e.id,i=e.active,s=e.tab,l=s.key,f=s.label,b=s.disabled,S=s.closeIcon,d=e.closable,y=e.renderWrapper,k=e.removeAriaLabel,g=e.editable,N=e.onClick,A=e.onRemove,D=e.onFocus,E=e.style,T="".concat(r,"-tab");t.useEffect(function(){return A},[]);var W=g&&d!==!1&&!b;function O(v){b||N(v)}function z(v){v.preventDefault(),v.stopPropagation(),g.onEdit("remove",{key:l,event:v})}var B=t.createElement("div",{key:l,ref:a,className:H()(T,(n={},(0,L.Z)(n,"".concat(T,"-with-remove"),W),(0,L.Z)(n,"".concat(T,"-active"),i),(0,L.Z)(n,"".concat(T,"-disabled"),b),n)),style:E,onClick:O},t.createElement("div",{role:"tab","aria-selected":i,id:o&&"".concat(o,"-tab-").concat(l),className:"".concat(T,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(l),"aria-disabled":b,tabIndex:b?null:0,onClick:function(c){c.stopPropagation(),O(c)},onKeyDown:function(c){[X.Z.SPACE,X.Z.ENTER].includes(c.which)&&(c.preventDefault(),O(c))},onFocus:D},f),W&&t.createElement("button",{type:"button","aria-label":k||"remove",tabIndex:0,className:"".concat(T,"-remove"),onClick:function(c){c.stopPropagation(),z(c)}},S||g.removeIcon||"\xD7"));return y?y(B):B}var zt=t.forwardRef(Dt),Je={width:0,height:0,left:0,top:0};function Kt(e,a,n){return(0,t.useMemo)(function(){for(var r,o=new Map,i=a.get((r=e[0])===null||r===void 0?void 0:r.key)||Je,s=i.left+i.width,l=0;l<e.length;l+=1){var f=e[l].key,b=a.get(f);if(!b){var S;b=a.get((S=e[l-1])===null||S===void 0?void 0:S.key)||Je}var d=o.get(f)||(0,j.Z)({},b);d.right=s-d.left-d.width,o.set(f,d)}return o},[e.map(function(r){return r.key}).join("_"),a,n])}var Qe={width:0,height:0,left:0,top:0,right:0};function Wt(e,a,n,r,o,i,s){var l=s.tabs,f=s.tabPosition,b=s.rtl,S,d,y;return["top","bottom"].includes(f)?(S="width",d=b?"right":"left",y=Math.abs(n)):(S="height",d="top",y=-n),(0,t.useMemo)(function(){if(!l.length)return[0,0];for(var k=l.length,g=k,N=0;N<k;N+=1){var A=e.get(l[N].key)||Qe;if(A[d]+A[S]>y+a){g=N-1;break}}for(var D=0,E=k-1;E>=0;E-=1){var T=e.get(l[E].key)||Qe;if(T[d]<y){D=E+1;break}}return[D,g]},[e,a,r,o,i,y,f,l.map(function(k){return k.key}).join("_"),b])}var qe=m(94423),Vt=m(96753);function $t(e,a){var n=e.prefixCls,r=e.editable,o=e.locale,i=e.style;return!r||r.showAdd===!1?null:t.createElement("button",{ref:a,type:"button",className:"".concat(n,"-nav-add"),style:i,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(l){r.onEdit("add",{event:l})}},r.addIcon||"+")}var _e=t.forwardRef($t);function jt(e,a){var n=e.prefixCls,r=e.id,o=e.tabs,i=e.locale,s=e.mobile,l=e.moreIcon,f=l===void 0?"More":l,b=e.moreTransitionName,S=e.style,d=e.className,y=e.editable,k=e.tabBarGutter,g=e.rtl,N=e.removeAriaLabel,A=e.onTabClick,D=e.getPopupContainer,E=e.popupClassName,T=(0,t.useState)(!1),W=(0,R.Z)(T,2),O=W[0],z=W[1],B=(0,t.useState)(null),v=(0,R.Z)(B,2),c=v[0],C=v[1],P="".concat(r,"-more-popup"),Z="".concat(n,"-dropdown"),p=c!==null?"".concat(P,"-").concat(c):null,K=i==null?void 0:i.dropdownAriaLabel;function M(u,w){u.preventDefault(),u.stopPropagation(),y.onEdit("remove",{key:w,event:u})}var ue=t.createElement(qe.ZP,{onClick:function(w){var Y=w.key,U=w.domEvent;A(Y,U),z(!1)},prefixCls:"".concat(Z,"-menu"),id:P,tabIndex:-1,role:"listbox","aria-activedescendant":p,selectedKeys:[c],"aria-label":K!==void 0?K:"expanded dropdown"},o.map(function(u){var w=y&&u.closable!==!1&&!u.disabled;return t.createElement(qe.sN,{key:u.key,id:"".concat(P,"-").concat(u.key),role:"option","aria-controls":r&&"".concat(r,"-panel-").concat(u.key),disabled:u.disabled},t.createElement("span",null,u.label),w&&t.createElement("button",{type:"button","aria-label":N||"remove",tabIndex:0,className:"".concat(Z,"-menu-item-remove"),onClick:function(U){U.stopPropagation(),M(U,u.key)}},u.closeIcon||y.removeIcon||"\xD7"))}));function ee(u){for(var w=o.filter(function(oe){return!oe.disabled}),Y=w.findIndex(function(oe){return oe.key===c})||0,U=w.length,re=0;re<U;re+=1){Y=(Y+u+U)%U;var le=w[Y];if(!le.disabled){C(le.key);return}}}function V(u){var w=u.which;if(!O){[X.Z.DOWN,X.Z.SPACE,X.Z.ENTER].includes(w)&&(z(!0),u.preventDefault());return}switch(w){case X.Z.UP:ee(-1),u.preventDefault();break;case X.Z.DOWN:ee(1),u.preventDefault();break;case X.Z.ESC:z(!1);break;case X.Z.SPACE:case X.Z.ENTER:c!==null&&A(c,u);break}}(0,t.useEffect)(function(){var u=document.getElementById(p);u&&u.scrollIntoView&&u.scrollIntoView(!1)},[c]),(0,t.useEffect)(function(){O||C(null)},[O]);var Q=(0,L.Z)({},g?"marginRight":"marginLeft",k);o.length||(Q.visibility="hidden",Q.order=1);var de=H()((0,L.Z)({},"".concat(Z,"-rtl"),g)),ne=s?null:t.createElement(Vt.Z,{prefixCls:Z,overlay:ue,trigger:["hover"],visible:o.length?O:!1,transitionName:b,onVisibleChange:z,overlayClassName:H()(de,E),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:D},t.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:Q,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":P,id:"".concat(r,"-more"),"aria-expanded":O,onKeyDown:V},f));return t.createElement("div",{className:H()("".concat(n,"-nav-operations"),d),style:S,ref:a},ne,t.createElement(_e,{prefixCls:n,locale:i,editable:y}))}var Ut=t.memo(t.forwardRef(jt),function(e,a){return a.tabMoving}),Ft=.1,et=.01,Ce=20,tt=Math.pow(.995,Ce);function Ht(e,a){var n=(0,t.useState)(),r=(0,R.Z)(n,2),o=r[0],i=r[1],s=(0,t.useState)(0),l=(0,R.Z)(s,2),f=l[0],b=l[1],S=(0,t.useState)(0),d=(0,R.Z)(S,2),y=d[0],k=d[1],g=(0,t.useState)(),N=(0,R.Z)(g,2),A=N[0],D=N[1],E=(0,t.useRef)();function T(c){var C=c.touches[0],P=C.screenX,Z=C.screenY;i({x:P,y:Z}),window.clearInterval(E.current)}function W(c){if(!!o){c.preventDefault();var C=c.touches[0],P=C.screenX,Z=C.screenY;i({x:P,y:Z});var p=P-o.x,K=Z-o.y;a(p,K);var M=Date.now();b(M),k(M-f),D({x:p,y:K})}}function O(){if(!!o&&(i(null),D(null),A)){var c=A.x/y,C=A.y/y,P=Math.abs(c),Z=Math.abs(C);if(Math.max(P,Z)<Ft)return;var p=c,K=C;E.current=window.setInterval(function(){if(Math.abs(p)<et&&Math.abs(K)<et){window.clearInterval(E.current);return}p*=tt,K*=tt,a(p*Ce,K*Ce)},Ce)}}var z=(0,t.useRef)();function B(c){var C=c.deltaX,P=c.deltaY,Z=0,p=Math.abs(C),K=Math.abs(P);p===K?Z=z.current==="x"?C:P:p>K?(Z=C,z.current="x"):(Z=P,z.current="y"),a(-Z,-Z)&&c.preventDefault()}var v=(0,t.useRef)(null);v.current={onTouchStart:T,onTouchMove:W,onTouchEnd:O,onWheel:B},t.useEffect(function(){function c(p){v.current.onTouchStart(p)}function C(p){v.current.onTouchMove(p)}function P(p){v.current.onTouchEnd(p)}function Z(p){v.current.onWheel(p)}return document.addEventListener("touchmove",C,{passive:!1}),document.addEventListener("touchend",P,{passive:!1}),e.current.addEventListener("touchstart",c,{passive:!1}),e.current.addEventListener("wheel",Z),function(){document.removeEventListener("touchmove",C),document.removeEventListener("touchend",P)}},[])}function Gt(){var e=(0,t.useRef)(new Map);function a(r){return e.current.has(r)||e.current.set(r,t.createRef()),e.current.get(r)}function n(r){e.current.delete(r)}return[a,n]}function at(e,a){var n=t.useRef(e),r=t.useState({}),o=(0,R.Z)(r,2),i=o[1];function s(l){var f=typeof l=="function"?l(n.current):l;f!==n.current&&a(f,n.current),n.current=f,i({})}return[n.current,s]}function nt(e){var a;return e instanceof Map?(a={},e.forEach(function(n,r){a[r]=n})):a=e,JSON.stringify(a)}var Xt=t.forwardRef(function(e,a){var n=e.position,r=e.prefixCls,o=e.extra;if(!o)return null;var i,s={};return(0,ge.Z)(o)==="object"&&!t.isValidElement(o)?s=o:s.right=o,n==="right"&&(i=s.right),n==="left"&&(i=s.left),i?t.createElement("div",{className:"".concat(r,"-extra-content"),ref:a},i):null}),rt=Xt,se=function(a){var n=a.current||{},r=n.offsetWidth,o=r===void 0?0:r,i=n.offsetHeight,s=i===void 0?0:i;return[o,s]},xe=function(a,n){return a[n?0:1]};function Yt(e,a){var n,r=t.useContext(Se),o=r.prefixCls,i=r.tabs,s=e.className,l=e.style,f=e.id,b=e.animated,S=e.activeKey,d=e.rtl,y=e.extra,k=e.editable,g=e.locale,N=e.tabPosition,A=e.tabBarGutter,D=e.children,E=e.onTabClick,T=e.onTabScroll,W=(0,t.useRef)(),O=(0,t.useRef)(),z=(0,t.useRef)(),B=(0,t.useRef)(),v=(0,t.useRef)(),c=(0,t.useRef)(),C=(0,t.useRef)(),P=Gt(),Z=(0,R.Z)(P,2),p=Z[0],K=Z[1],M=N==="top"||N==="bottom",ue=at(0,function(x,G){M&&T&&T({direction:x>G?"left":"right"})}),ee=(0,R.Z)(ue,2),V=ee[0],Q=ee[1],de=at(0,function(x,G){!M&&T&&T({direction:x>G?"top":"bottom"})}),ne=(0,R.Z)(de,2),u=ne[0],w=ne[1],Y=(0,t.useState)([0,0]),U=(0,R.Z)(Y,2),re=U[0],le=U[1],oe=(0,t.useState)([0,0]),fe=(0,R.Z)(oe,2),Te=fe[0],Me=fe[1],Ae=(0,t.useState)([0,0]),ve=(0,R.Z)(Ae,2),Le=ve[0],Oe=ve[1],I=(0,t.useState)([0,0]),te=(0,R.Z)(I,2),me=te[0],ya=te[1],ga=Bt(new Map),lt=(0,R.Z)(ga,2),Ea=lt[0],Sa=lt[1],Pe=Kt(i,Ea,Te[0]),ie=xe(re,M),q=xe(Te,M),we=xe(Le,M),ct=xe(me,M),Ca=ie<q+we,J=Ca?ie-ct:ie-we,xa="".concat(o,"-nav-operations-hidden"),be=0,pe=0;M&&d?(be=0,pe=Math.max(0,q-J)):(be=Math.min(0,J-q),pe=0);function Be(x){return x<be?be:x>pe?pe:x}var ut=(0,t.useRef)(),Ta=(0,t.useState)(),dt=(0,R.Z)(Ta,2),Ze=dt[0],ft=dt[1];function De(){ft(Date.now())}function ze(){window.clearTimeout(ut.current)}Ht(B,function(x,G){function h(F,_){F(function(Ne){var Ie=Be(Ne+_);return Ie})}return ie>=q?!1:(M?h(Q,x):h(w,G),ze(),De(),!0)}),(0,t.useEffect)(function(){return ze(),Ze&&(ut.current=window.setTimeout(function(){ft(0)},100)),ze},[Ze]);var Pa=Wt(Pe,J,M?V:u,q,we,ct,(0,j.Z)((0,j.Z)({},e),{},{tabs:i})),vt=(0,R.Z)(Pa,2),Za=vt[0],Ra=vt[1],mt=function(){var G=arguments.length>0&&arguments[0]!==void 0?arguments[0]:S,h=Pe.get(G)||{width:0,height:0,left:0,right:0,top:0};if(M){var F=V;d?h.right<V?F=h.right:h.right+h.width>V+J&&(F=h.right+h.width-J):h.left<-V?F=-h.left:h.left+h.width>-V+J&&(F=-(h.left+h.width-J)),w(0),Q(Be(F))}else{var _=u;h.top<-u?_=-h.top:h.top+h.height>-u+J&&(_=-(h.top+h.height-J)),Q(0),w(Be(_))}},Re={};N==="top"||N==="bottom"?Re[d?"marginRight":"marginLeft"]=A:Re.marginTop=A;var bt=i.map(function(x,G){var h=x.key;return t.createElement(zt,{id:f,prefixCls:o,key:h,tab:x,style:G===0?void 0:Re,closable:x.closable,editable:k,active:h===S,renderWrapper:D,removeAriaLabel:g==null?void 0:g.removeAriaLabel,ref:p(h),onClick:function(_){E(h,_)},onRemove:function(){K(h)},onFocus:function(){mt(h),De(),!!B.current&&(d||(B.current.scrollLeft=0),B.current.scrollTop=0)}})}),Ke=Ye(function(){var x=se(W),G=se(O),h=se(z);le([x[0]-G[0]-h[0],x[1]-G[1]-h[1]]);var F=se(C);Oe(F);var _=se(c);ya(_);var Ne=se(v);Me([Ne[0]-F[0],Ne[1]-F[1]]),Sa(function(){var Ie=new Map;return i.forEach(function(La){var xt=La.key,ye=p(xt).current;ye&&Ie.set(xt,{width:ye.offsetWidth,height:ye.offsetHeight,left:ye.offsetLeft,top:ye.offsetTop})}),Ie})}),Na=i.slice(0,Za),Ia=i.slice(Ra+1),pt=[].concat((0,Ge.Z)(Na),(0,Ge.Z)(Ia)),ka=(0,t.useState)(),ht=(0,R.Z)(ka,2),Ma=ht[0],Aa=ht[1],ae=Pe.get(S),yt=(0,t.useRef)();function gt(){ce.Z.cancel(yt.current)}(0,t.useEffect)(function(){var x={};return ae&&(M?(d?x.right=ae.right:x.left=ae.left,x.width=ae.width):(x.top=ae.top,x.height=ae.height)),gt(),yt.current=(0,ce.Z)(function(){Aa(x)}),gt},[ae,M,d]),(0,t.useEffect)(function(){mt()},[S,nt(ae),nt(Pe),M]),(0,t.useEffect)(function(){Ke()},[d]);var Et=!!pt.length,he="".concat(o,"-nav-wrap"),We,Ve,St,Ct;return M?d?(Ve=V>0,We=V+ie<q):(We=V<0,Ve=-V+ie<q):(St=u<0,Ct=-u+ie<q),t.createElement(Xe.Z,{onResize:Ke},t.createElement("div",{ref:(0,wt.x1)(a,W),role:"tablist",className:H()("".concat(o,"-nav"),s),style:l,onKeyDown:function(){De()}},t.createElement(rt,{ref:O,position:"left",extra:y,prefixCls:o}),t.createElement("div",{className:H()(he,(n={},(0,L.Z)(n,"".concat(he,"-ping-left"),We),(0,L.Z)(n,"".concat(he,"-ping-right"),Ve),(0,L.Z)(n,"".concat(he,"-ping-top"),St),(0,L.Z)(n,"".concat(he,"-ping-bottom"),Ct),n)),ref:B},t.createElement(Xe.Z,{onResize:Ke},t.createElement("div",{ref:v,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(V,"px, ").concat(u,"px)"),transition:Ze?"none":void 0}},bt,t.createElement(_e,{ref:C,prefixCls:o,locale:g,editable:k,style:(0,j.Z)((0,j.Z)({},bt.length===0?void 0:Re),{},{visibility:Et?"hidden":null})}),t.createElement("div",{className:H()("".concat(o,"-ink-bar"),(0,L.Z)({},"".concat(o,"-ink-bar-animated"),b.inkBar)),style:Ma})))),t.createElement(Ut,(0,$.Z)({},e,{removeAriaLabel:g==null?void 0:g.removeAriaLabel,ref:c,prefixCls:o,tabs:pt,className:!Et&&xa,tabMoving:!!Ze})),t.createElement(rt,{ref:z,position:"right",extra:y,prefixCls:o})))}var ot=t.forwardRef(Yt),Jt=["renderTabBar"],Qt=["label","key"];function qt(e){var a=e.renderTabBar,n=(0,Ee.Z)(e,Jt),r=(0,t.useContext)(Se),o=r.tabs;if(a){var i=(0,j.Z)((0,j.Z)({},n),{},{panes:o.map(function(s){var l=s.label,f=s.key,b=(0,Ee.Z)(s,Qt);return t.createElement(He,(0,$.Z)({tab:l,key:f,tabKey:f},b))})});return a(i,ot)}return t.createElement(ot,n)}var Oa=m(80334);function _t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},a;return e===!1?a={inkBar:!1,tabPane:!1}:e===!0?a={inkBar:!0,tabPane:!1}:a=(0,j.Z)({inkBar:!0},(0,ge.Z)(e)==="object"?e:{}),a.tabPaneMotion&&a.tabPane===void 0&&(a.tabPane=!0),!a.tabPaneMotion&&a.tabPane&&(a.tabPane=!1),a}var ea=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],it=0;function ta(e,a){var n,r=e.id,o=e.prefixCls,i=o===void 0?"rc-tabs":o,s=e.className,l=e.items,f=e.direction,b=e.activeKey,S=e.defaultActiveKey,d=e.editable,y=e.animated,k=e.tabPosition,g=k===void 0?"top":k,N=e.tabBarGutter,A=e.tabBarStyle,D=e.tabBarExtraContent,E=e.locale,T=e.moreIcon,W=e.moreTransitionName,O=e.destroyInactiveTabPane,z=e.renderTabBar,B=e.onChange,v=e.onTabClick,c=e.onTabScroll,C=e.getPopupContainer,P=e.popupClassName,Z=(0,Ee.Z)(e,ea),p=t.useMemo(function(){return(l||[]).filter(function(I){return I&&(0,ge.Z)(I)==="object"&&"key"in I})},[l]),K=f==="rtl",M=_t(y),ue=(0,t.useState)(!1),ee=(0,R.Z)(ue,2),V=ee[0],Q=ee[1];(0,t.useEffect)(function(){Q((0,kt.Z)())},[]);var de=(0,Fe.Z)(function(){var I;return(I=p[0])===null||I===void 0?void 0:I.key},{value:b,defaultValue:S}),ne=(0,R.Z)(de,2),u=ne[0],w=ne[1],Y=(0,t.useState)(function(){return p.findIndex(function(I){return I.key===u})}),U=(0,R.Z)(Y,2),re=U[0],le=U[1];(0,t.useEffect)(function(){var I=p.findIndex(function(me){return me.key===u});if(I===-1){var te;I=Math.max(0,Math.min(re,p.length-1)),w((te=p[I])===null||te===void 0?void 0:te.key)}le(I)},[p.map(function(I){return I.key}).join("_"),u,re]);var oe=(0,Fe.Z)(null,{value:r}),fe=(0,R.Z)(oe,2),Te=fe[0],Me=fe[1];(0,t.useEffect)(function(){r||(Me("rc-tabs-".concat(it)),it+=1)},[]);function Ae(I,te){v==null||v(I,te);var me=I!==u;w(I),me&&(B==null||B(I))}var ve={id:Te,activeKey:u,animated:M,tabPosition:g,rtl:K,mobile:V},Le,Oe=(0,j.Z)((0,j.Z)({},ve),{},{editable:d,locale:E,moreIcon:T,moreTransitionName:W,tabBarGutter:N,onTabClick:Ae,onTabScroll:c,extra:D,style:A,panes:null,getPopupContainer:C,popupClassName:P});return t.createElement(Se.Provider,{value:{tabs:p,prefixCls:i}},t.createElement("div",(0,$.Z)({ref:a,id:r,className:H()(i,"".concat(i,"-").concat(g),(n={},(0,L.Z)(n,"".concat(i,"-mobile"),V),(0,L.Z)(n,"".concat(i,"-editable"),d),(0,L.Z)(n,"".concat(i,"-rtl"),K),n),s)},Z),Le,t.createElement(qt,(0,$.Z)({},Oe,{renderTabBar:z})),t.createElement(Ot,(0,$.Z)({destroyInactiveTabPane:O},ve,{animated:M}))))}var aa=t.forwardRef(ta),na=aa,ra=na,oa=m(53124),ia=m(97647),sa=m(33603),la={motionAppear:!1,motionEnter:!0,motionLeave:!0};function ca(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{inkBar:!0,tabPane:!1},n;return a===!1?n={inkBar:!1,tabPane:!1}:a===!0?n={inkBar:!0,tabPane:!0}:n=(0,$.Z)({inkBar:!0},(0,ge.Z)(a)==="object"?a:{}),n.tabPane&&(n.tabPaneMotion=(0,$.Z)((0,$.Z)({},la),{motionName:(0,sa.mL)(e,"switch")})),n}var ua=m(50344),da=function(e,a){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function fa(e){return e.filter(function(a){return a})}function va(e,a){if(e)return e;var n=(0,ua.Z)(a).map(function(r){if(t.isValidElement(r)){var o=r.key,i=r.props,s=i||{},l=s.tab,f=da(s,["tab"]),b=(0,$.Z)((0,$.Z)({key:String(o)},f),{label:l});return b}return null});return fa(n)}var ma=function(){return null},ba=ma,pa=function(e,a){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&a.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)a.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function st(e){var a=e.type,n=e.className,r=e.size,o=e.onEdit,i=e.hideAdd,s=e.centered,l=e.addIcon,f=e.children,b=e.items,S=e.animated,d=pa(e,["type","className","size","onEdit","hideAdd","centered","addIcon","children","items","animated"]),y=d.prefixCls,k=d.moreIcon,g=k===void 0?t.createElement(je.Z,null):k,N=t.useContext(oa.E_),A=N.getPrefixCls,D=N.direction,E=A("tabs",y),T;a==="editable-card"&&(T={onEdit:function(v,c){var C=c.key,P=c.event;o==null||o(v==="add"?P:C,v)},removeIcon:t.createElement(ke.Z,null),addIcon:l||t.createElement(Nt,null),showAdd:i!==!0});var W=A(),O=va(b,f),z=ca(E,S);return t.createElement(ia.Z.Consumer,null,function(B){var v,c=r!==void 0?r:B;return t.createElement(ra,(0,$.Z)({direction:D,moreTransitionName:"".concat(W,"-slide-up")},d,{items:O,className:H()((v={},(0,L.Z)(v,"".concat(E,"-").concat(c),c),(0,L.Z)(v,"".concat(E,"-card"),["card","editable-card"].includes(a)),(0,L.Z)(v,"".concat(E,"-editable-card"),a==="editable-card"),(0,L.Z)(v,"".concat(E,"-centered"),s),v),n),editable:T,moreIcon:g,prefixCls:E,animated:z}))})}st.TabPane=ba;var ha=st},18106:function(Tt,$e,m){"use strict";var L=m(38663),$=m.n(L),ke=m(25414),je=m.n(ke)}}]);