(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1628],{4258:function(ne,U,m){"use strict";m.d(U,{Z:function(){return v}});var W=m(22122),E=m(96156),F=m(81253),X=m(28991),ee=m(6610),V=m(5991),S=m(63349),T=m(10379),O=m(44144),h=m(67294),b=m(94184),k=m.n(b),Z=m(64217),L=m(27822),I=function(p){for(var g=p.prefixCls,e=p.level,s=p.isStart,f=p.isEnd,y="".concat(g,"-indent-unit"),r=[],n=0;n<e;n+=1){var c;r.push(h.createElement("span",{key:n,className:k()(y,(c={},(0,E.Z)(c,"".concat(y,"-start"),s[n]),(0,E.Z)(c,"".concat(y,"-end"),f[n]),c))}))}return h.createElement("span",{"aria-hidden":"true",className:"".concat(g,"-indent")},r)},_=h.memo(I),N=m(1089),P=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],a="open",d="close",t="---",o=function(u){(0,T.Z)(g,u);var p=(0,O.Z)(g);function g(){var e;(0,ee.Z)(this,g);for(var s=arguments.length,f=new Array(s),y=0;y<s;y++)f[y]=arguments[y];return e=p.call.apply(p,[this].concat(f)),e.state={dragNodeHighlight:!1},e.selectHandle=void 0,e.onSelectorClick=function(r){var n=e.props.context.onNodeClick;n(r,(0,N.F)(e.props)),e.isSelectable()?e.onSelect(r):e.onCheck(r)},e.onSelectorDoubleClick=function(r){var n=e.props.context.onNodeDoubleClick;n(r,(0,N.F)(e.props))},e.onSelect=function(r){if(!e.isDisabled()){var n=e.props.context.onNodeSelect;r.preventDefault(),n(r,(0,N.F)(e.props))}},e.onCheck=function(r){if(!e.isDisabled()){var n=e.props,c=n.disableCheckbox,l=n.checked,x=e.props.context.onNodeCheck;if(!(!e.isCheckable()||c)){r.preventDefault();var M=!l;x(r,(0,N.F)(e.props),M)}}},e.onMouseEnter=function(r){var n=e.props.context.onNodeMouseEnter;n(r,(0,N.F)(e.props))},e.onMouseLeave=function(r){var n=e.props.context.onNodeMouseLeave;n(r,(0,N.F)(e.props))},e.onContextMenu=function(r){var n=e.props.context.onNodeContextMenu;n(r,(0,N.F)(e.props))},e.onDragStart=function(r){var n=e.props.context.onNodeDragStart;r.stopPropagation(),e.setState({dragNodeHighlight:!0}),n(r,(0,S.Z)(e));try{r.dataTransfer.setData("text/plain","")}catch(c){}},e.onDragEnter=function(r){var n=e.props.context.onNodeDragEnter;r.preventDefault(),r.stopPropagation(),n(r,(0,S.Z)(e))},e.onDragOver=function(r){var n=e.props.context.onNodeDragOver;r.preventDefault(),r.stopPropagation(),n(r,(0,S.Z)(e))},e.onDragLeave=function(r){var n=e.props.context.onNodeDragLeave;r.stopPropagation(),n(r,(0,S.Z)(e))},e.onDragEnd=function(r){var n=e.props.context.onNodeDragEnd;r.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(r,(0,S.Z)(e))},e.onDrop=function(r){var n=e.props.context.onNodeDrop;r.preventDefault(),r.stopPropagation(),e.setState({dragNodeHighlight:!1}),n(r,(0,S.Z)(e))},e.onExpand=function(r){var n=e.props,c=n.loading,l=n.context.onNodeExpand;c||l(r,(0,N.F)(e.props))},e.setSelectHandle=function(r){e.selectHandle=r},e.getNodeState=function(){var r=e.props.expanded;return e.isLeaf()?null:r?a:d},e.hasChildren=function(){var r=e.props.eventKey,n=e.props.context.keyEntities,c=n[r]||{},l=c.children;return!!(l||[]).length},e.isLeaf=function(){var r=e.props,n=r.isLeaf,c=r.loaded,l=e.props.context.loadData,x=e.hasChildren();return n===!1?!1:n||!l&&!x||l&&c&&!x},e.isDisabled=function(){var r=e.props.disabled,n=e.props.context.disabled;return!!(n||r)},e.isCheckable=function(){var r=e.props.checkable,n=e.props.context.checkable;return!n||r===!1?!1:n},e.syncLoadData=function(r){var n=r.expanded,c=r.loading,l=r.loaded,x=e.props.context,M=x.loadData,D=x.onNodeLoad;c||M&&n&&!e.isLeaf()&&!e.hasChildren()&&!l&&D((0,N.F)(e.props))},e.isDraggable=function(){var r=e.props,n=r.data,c=r.context.draggable;return!!(c&&(!c.nodeDraggable||c.nodeDraggable(n)))},e.renderDragHandler=function(){var r=e.props.context,n=r.draggable,c=r.prefixCls;return(n==null?void 0:n.icon)?h.createElement("span",{className:"".concat(c,"-draggable-icon")},n.icon):null},e.renderSwitcherIconDom=function(r){var n=e.props.switcherIcon,c=e.props.context.switcherIcon,l=n||c;return typeof l=="function"?l((0,X.Z)((0,X.Z)({},e.props),{},{isLeaf:r})):l},e.renderSwitcher=function(){var r=e.props.expanded,n=e.props.context.prefixCls;if(e.isLeaf()){var c=e.renderSwitcherIconDom(!0);return c!==!1?h.createElement("span",{className:k()("".concat(n,"-switcher"),"".concat(n,"-switcher-noop"))},c):null}var l=k()("".concat(n,"-switcher"),"".concat(n,"-switcher_").concat(r?a:d)),x=e.renderSwitcherIconDom(!1);return x!==!1?h.createElement("span",{onClick:e.onExpand,className:l},x):null},e.renderCheckbox=function(){var r=e.props,n=r.checked,c=r.halfChecked,l=r.disableCheckbox,x=e.props.context.prefixCls,M=e.isDisabled(),D=e.isCheckable();if(!D)return null;var C=typeof D!="boolean"?D:null;return h.createElement("span",{className:k()("".concat(x,"-checkbox"),n&&"".concat(x,"-checkbox-checked"),!n&&c&&"".concat(x,"-checkbox-indeterminate"),(M||l)&&"".concat(x,"-checkbox-disabled")),onClick:e.onCheck},C)},e.renderIcon=function(){var r=e.props.loading,n=e.props.context.prefixCls;return h.createElement("span",{className:k()("".concat(n,"-iconEle"),"".concat(n,"-icon__").concat(e.getNodeState()||"docu"),r&&"".concat(n,"-icon_loading"))})},e.renderSelector=function(){var r=e.state.dragNodeHighlight,n=e.props,c=n.title,l=n.selected,x=n.icon,M=n.loading,D=n.data,C=e.props.context,K=C.prefixCls,R=C.showIcon,H=C.icon,j=C.loadData,Y=C.titleRender,J=e.isDisabled(),$="".concat(K,"-node-content-wrapper"),Q;if(R){var z=x||H;Q=z?h.createElement("span",{className:k()("".concat(K,"-iconEle"),"".concat(K,"-icon__customize"))},typeof z=="function"?z(e.props):z):e.renderIcon()}else j&&M&&(Q=e.renderIcon());var A;typeof c=="function"?A=c(D):Y?A=Y(D):A=c;var G=h.createElement("span",{className:"".concat(K,"-title")},A);return h.createElement("span",{ref:e.setSelectHandle,title:typeof c=="string"?c:"",className:k()("".concat($),"".concat($,"-").concat(e.getNodeState()||"normal"),!J&&(l||r)&&"".concat(K,"-node-selected")),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onContextMenu:e.onContextMenu,onClick:e.onSelectorClick,onDoubleClick:e.onSelectorDoubleClick},Q,G,e.renderDropIndicator())},e.renderDropIndicator=function(){var r=e.props,n=r.disabled,c=r.eventKey,l=e.props.context,x=l.draggable,M=l.dropLevelOffset,D=l.dropPosition,C=l.prefixCls,K=l.indent,R=l.dropIndicatorRender,H=l.dragOverNodeKey,j=l.direction,Y=x!==!1,J=!n&&Y&&H===c;return J?R({dropPosition:D,dropLevelOffset:M,indent:K,prefixCls:C,direction:j}):null},e}return(0,V.Z)(g,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var s=this.props.selectable,f=this.props.context.selectable;return typeof s=="boolean"?s:f}},{key:"render",value:function(){var s,f=this.props,y=f.eventKey,r=f.className,n=f.style,c=f.dragOver,l=f.dragOverGapTop,x=f.dragOverGapBottom,M=f.isLeaf,D=f.isStart,C=f.isEnd,K=f.expanded,R=f.selected,H=f.checked,j=f.halfChecked,Y=f.loading,J=f.domRef,$=f.active,Q=f.data,z=f.onMouseMove,A=f.selectable,G=(0,F.Z)(f,P),B=this.props.context,w=B.prefixCls,te=B.filterTreeNode,ie=B.keyEntities,de=B.dropContainerKey,ce=B.dropTargetKey,se=B.draggingNodeKey,re=this.isDisabled(),le=(0,Z.Z)(G,{aria:!0,data:!0}),fe=ie[y]||{},ue=fe.level,pe=C[C.length-1],q=this.isDraggable(),ae=!re&&q,oe=se===y,ve=A!==void 0?{"aria-selected":!!A}:void 0;return h.createElement("div",(0,W.Z)({ref:J,className:k()(r,"".concat(w,"-treenode"),(s={},(0,E.Z)(s,"".concat(w,"-treenode-disabled"),re),(0,E.Z)(s,"".concat(w,"-treenode-switcher-").concat(K?"open":"close"),!M),(0,E.Z)(s,"".concat(w,"-treenode-checkbox-checked"),H),(0,E.Z)(s,"".concat(w,"-treenode-checkbox-indeterminate"),j),(0,E.Z)(s,"".concat(w,"-treenode-selected"),R),(0,E.Z)(s,"".concat(w,"-treenode-loading"),Y),(0,E.Z)(s,"".concat(w,"-treenode-active"),$),(0,E.Z)(s,"".concat(w,"-treenode-leaf-last"),pe),(0,E.Z)(s,"".concat(w,"-treenode-draggable"),q),(0,E.Z)(s,"dragging",oe),(0,E.Z)(s,"drop-target",ce===y),(0,E.Z)(s,"drop-container",de===y),(0,E.Z)(s,"drag-over",!re&&c),(0,E.Z)(s,"drag-over-gap-top",!re&&l),(0,E.Z)(s,"drag-over-gap-bottom",!re&&x),(0,E.Z)(s,"filter-node",te&&te((0,N.F)(this.props))),s)),style:n,draggable:ae,"aria-grabbed":oe,onDragStart:ae?this.onDragStart:void 0,onDragEnter:q?this.onDragEnter:void 0,onDragOver:q?this.onDragOver:void 0,onDragLeave:q?this.onDragLeave:void 0,onDrop:q?this.onDrop:void 0,onDragEnd:q?this.onDragEnd:void 0,onMouseMove:z},ve,le),h.createElement(_,{prefixCls:w,level:ue,isStart:D,isEnd:C}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),g}(h.Component),i=function(p){return h.createElement(L.k.Consumer,null,function(g){return h.createElement(o,(0,W.Z)({},p,{context:g}))})};i.displayName="TreeNode",i.defaultProps={title:t},i.isTreeNode=1;var v=i},27822:function(ne,U,m){"use strict";m.d(U,{k:function(){return E}});var W=m(67294),E=W.createContext(null)},10225:function(ne,U,m){"use strict";m.d(U,{_5:function(){return S},L0:function(){return T},yx:function(){return O},bt:function(){return h},Ds:function(){return b},wA:function(){return k},OM:function(){return I},BT:function(){return _},E6:function(){return a},r7:function(){return d}});var W=m(85061),E=m(90484),F=m(67294),X=m(80334),ee=m(4258),V=null;function S(t,o){if(!t)return[];var i=t.slice(),v=i.indexOf(o);return v>=0&&i.splice(v,1),i}function T(t,o){var i=(t||[]).slice();return i.indexOf(o)===-1&&i.push(o),i}function O(t){return t.split("-")}function h(t,o){return"".concat(t,"-").concat(o)}function b(t){return t&&t.type&&t.type.isTreeNode}function k(t,o){var i=[],v=o[t];function u(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];p.forEach(function(g){var e=g.key,s=g.children;i.push(e),u(s)})}return u(v.children),i}function Z(t){if(t.parent){var o=O(t.pos);return Number(o[o.length-1])===t.parent.children.length-1}return!1}function L(t){var o=O(t.pos);return Number(o[o.length-1])===0}function I(t,o,i,v,u,p,g,e,s,f){var y,r=t.clientX,n=t.clientY,c=t.target.getBoundingClientRect(),l=c.top,x=c.height,M=(f==="rtl"?-1:1)*(((u==null?void 0:u.x)||0)-r),D=(M-12)/v,C=e[i.props.eventKey];if(n<l+x/2){var K=g.findIndex(function(w){return w.key===C.key}),R=K<=0?0:K-1,H=g[R].key;C=e[H]}var j=C.key,Y=C,J=C.key,$=0,Q=0;if(!s.includes(j))for(var z=0;z<D&&Z(C);z+=1)C=C.parent,Q+=1;var A=o.props.data,G=C.node,B=!0;return L(C)&&C.level===0&&n<l+x/2&&p({dragNode:A,dropNode:G,dropPosition:-1})&&C.key===i.props.eventKey?$=-1:(Y.children||[]).length&&s.includes(J)?p({dragNode:A,dropNode:G,dropPosition:0})?$=0:B=!1:Q===0?D>-1.5?p({dragNode:A,dropNode:G,dropPosition:1})?$=1:B=!1:p({dragNode:A,dropNode:G,dropPosition:0})?$=0:p({dragNode:A,dropNode:G,dropPosition:1})?$=1:B=!1:p({dragNode:A,dropNode:G,dropPosition:1})?$=1:B=!1,{dropPosition:$,dropLevelOffset:Q,dropTargetKey:C.key,dropTargetPos:C.pos,dragOverNodeKey:J,dropContainerKey:$===0?null:((y=C.parent)===null||y===void 0?void 0:y.key)||null,dropAllowed:B}}function _(t,o){if(!!t){var i=o.multiple;return i?t.slice():t.length?[t[0]]:t}}var N=function(o){return o};function P(t,o){if(!t)return[];var i=o||{},v=i.processProps,u=v===void 0?N:v,p=Array.isArray(t)?t:[t];return p.map(function(g){var e=g.children,s=_objectWithoutProperties(g,V),f=P(e,o);return React.createElement(TreeNode,_extends({key:s.key},u(s)),f)})}function a(t){if(!t)return null;var o;if(Array.isArray(t))o={checkedKeys:t,halfCheckedKeys:void 0};else if((0,E.Z)(t)==="object")o={checkedKeys:t.checked||void 0,halfCheckedKeys:t.halfChecked||void 0};else return(0,X.ZP)(!1,"`checkedKeys` is not an array or an object"),null;return o}function d(t,o){var i=new Set;function v(u){if(!i.has(u)){var p=o[u];if(!!p){i.add(u);var g=p.parent,e=p.node;e.disabled||g&&v(g.key)}}}return(t||[]).forEach(function(u){v(u)}),(0,W.Z)(i)}},17341:function(ne,U,m){"use strict";m.d(U,{S:function(){return V}});var W=m(80334);function E(S,T){var O=new Set;return S.forEach(function(h){T.has(h)||O.add(h)}),O}function F(S){var T=S||{},O=T.disabled,h=T.disableCheckbox,b=T.checkable;return!!(O||h)||b===!1}function X(S,T,O,h){for(var b=new Set(S),k=new Set,Z=0;Z<=O;Z+=1){var L=T.get(Z)||new Set;L.forEach(function(P){var a=P.key,d=P.node,t=P.children,o=t===void 0?[]:t;b.has(a)&&!h(d)&&o.filter(function(i){return!h(i.node)}).forEach(function(i){b.add(i.key)})})}for(var I=new Set,_=O;_>=0;_-=1){var N=T.get(_)||new Set;N.forEach(function(P){var a=P.parent,d=P.node;if(!(h(d)||!P.parent||I.has(P.parent.key))){if(h(P.parent.node)){I.add(a.key);return}var t=!0,o=!1;(a.children||[]).filter(function(i){return!h(i.node)}).forEach(function(i){var v=i.key,u=b.has(v);t&&!u&&(t=!1),!o&&(u||k.has(v))&&(o=!0)}),t&&b.add(a.key),o&&k.add(a.key),I.add(a.key)}})}return{checkedKeys:Array.from(b),halfCheckedKeys:Array.from(E(k,b))}}function ee(S,T,O,h,b){for(var k=new Set(S),Z=new Set(T),L=0;L<=h;L+=1){var I=O.get(L)||new Set;I.forEach(function(a){var d=a.key,t=a.node,o=a.children,i=o===void 0?[]:o;!k.has(d)&&!Z.has(d)&&!b(t)&&i.filter(function(v){return!b(v.node)}).forEach(function(v){k.delete(v.key)})})}Z=new Set;for(var _=new Set,N=h;N>=0;N-=1){var P=O.get(N)||new Set;P.forEach(function(a){var d=a.parent,t=a.node;if(!(b(t)||!a.parent||_.has(a.parent.key))){if(b(a.parent.node)){_.add(d.key);return}var o=!0,i=!1;(d.children||[]).filter(function(v){return!b(v.node)}).forEach(function(v){var u=v.key,p=k.has(u);o&&!p&&(o=!1),!i&&(p||Z.has(u))&&(i=!0)}),o||k.delete(d.key),i&&Z.add(d.key),_.add(d.key)}})}return{checkedKeys:Array.from(k),halfCheckedKeys:Array.from(E(Z,k))}}function V(S,T,O,h){var b=[],k;h?k=h:k=F;var Z=new Set(S.filter(function(N){var P=!!O[N];return P||b.push(N),P})),L=new Map,I=0;Object.keys(O).forEach(function(N){var P=O[N],a=P.level,d=L.get(a);d||(d=new Set,L.set(a,d)),d.add(P),I=Math.max(I,a)}),(0,W.ZP)(!b.length,"Tree missing follow keys: ".concat(b.slice(0,100).map(function(N){return"'".concat(N,"'")}).join(", ")));var _;return T===!0?_=X(Z,L,I,k):_=ee(Z,T.halfCheckedKeys,L,I,k),_}},1089:function(ne,U,m){"use strict";m.d(U,{km:function(){return h},w$:function(){return b},zn:function(){return Z},oH:function(){return L},I8:function(){return _},H8:function(){return N},F:function(){return P}});var W=m(90484),E=m(85061),F=m(28991),X=m(81253),ee=m(98423),V=m(50344),S=m(80334),T=m(10225),O=["children"];function h(a,d){return a!=null?a:d}function b(a){var d=a||{},t=d.title,o=d._title,i=d.key,v=d.children,u=t||"title";return{title:u,_title:o||[u],key:i||"key",children:v||"children"}}function k(a,d){var t=new Map;function o(i){var v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";(i||[]).forEach(function(u){var p=u[d.key],g=u[d.children];warning(p!=null,"Tree node must have a certain key: [".concat(v).concat(p,"]"));var e=String(p);warning(!t.has(e)||p===null||p===void 0,"Same 'key' exist in the Tree: ".concat(e)),t.set(e,!0),o(g,"".concat(v).concat(e," > "))})}o(a)}function Z(a){function d(t){var o=(0,V.Z)(t);return o.map(function(i){if(!(0,T.Ds)(i))return(0,S.ZP)(!i,"Tree/TreeNode can only accept TreeNode as children."),null;var v=i.key,u=i.props,p=u.children,g=(0,X.Z)(u,O),e=(0,F.Z)({key:v},g),s=d(p);return s.length&&(e.children=s),e}).filter(function(i){return i})}return d(a)}function L(a,d,t){var o=b(t),i=o._title,v=o.key,u=o.children,p=new Set(d===!0?[]:d),g=[];function e(s){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;return s.map(function(y,r){for(var n=(0,T.bt)(f?f.pos:"0",r),c=h(y[v],n),l,x=0;x<i.length;x+=1){var M=i[x];if(y[M]!==void 0){l=y[M];break}}var D=(0,F.Z)((0,F.Z)({},(0,ee.Z)(y,[].concat((0,E.Z)(i),[v,u]))),{},{title:l,key:c,parent:f,pos:n,children:null,data:y,isStart:[].concat((0,E.Z)(f?f.isStart:[]),[r===0]),isEnd:[].concat((0,E.Z)(f?f.isEnd:[]),[r===s.length-1])});return g.push(D),d===!0||p.has(c)?D.children=e(y[u]||[],D):D.children=[],D})}return e(a),g}function I(a,d,t){var o={};(0,W.Z)(t)==="object"?o=t:o={externalGetKey:t},o=o||{};var i=o,v=i.childrenPropName,u=i.externalGetKey,p=i.fieldNames,g=b(p),e=g.key,s=g.children,f=v||s,y;u?typeof u=="string"?y=function(c){return c[u]}:typeof u=="function"&&(y=function(c){return u(c)}):y=function(c,l){return h(c[e],l)};function r(n,c,l,x){var M=n?n[f]:a,D=n?(0,T.bt)(l.pos,c):"0",C=n?[].concat((0,E.Z)(x),[n]):[];if(n){var K=y(n,D),R={node:n,index:c,pos:D,key:K,parentPos:l.node?l.pos:null,level:l.level+1,nodes:C};d(R)}M&&M.forEach(function(H,j){r(H,j,{node:n,pos:D,level:l?l.level+1:-1},C)})}r(null)}function _(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=d.initWrapper,o=d.processEntity,i=d.onProcessFinished,v=d.externalGetKey,u=d.childrenPropName,p=d.fieldNames,g=arguments.length>2?arguments[2]:void 0,e=v||g,s={},f={},y={posEntities:s,keyEntities:f};return t&&(y=t(y)||y),I(a,function(r){var n=r.node,c=r.index,l=r.pos,x=r.key,M=r.parentPos,D=r.level,C=r.nodes,K={node:n,nodes:C,index:c,key:x,pos:l,level:D},R=h(x,l);s[l]=K,f[R]=K,K.parent=s[M],K.parent&&(K.parent.children=K.parent.children||[],K.parent.children.push(K)),o&&o(K,y)},{externalGetKey:e,childrenPropName:u,fieldNames:p}),i&&i(y),y}function N(a,d){var t=d.expandedKeys,o=d.selectedKeys,i=d.loadedKeys,v=d.loadingKeys,u=d.checkedKeys,p=d.halfCheckedKeys,g=d.dragOverNodeKey,e=d.dropPosition,s=d.keyEntities,f=s[a],y={eventKey:a,expanded:t.indexOf(a)!==-1,selected:o.indexOf(a)!==-1,loaded:i.indexOf(a)!==-1,loading:v.indexOf(a)!==-1,checked:u.indexOf(a)!==-1,halfChecked:p.indexOf(a)!==-1,pos:String(f?f.pos:""),dragOver:g===a&&e===0,dragOverGapTop:g===a&&e===-1,dragOverGapBottom:g===a&&e===1};return y}function P(a){var d=a.data,t=a.expanded,o=a.selected,i=a.checked,v=a.loaded,u=a.loading,p=a.halfChecked,g=a.dragOver,e=a.dragOverGapTop,s=a.dragOverGapBottom,f=a.pos,y=a.active,r=a.eventKey,n=(0,F.Z)((0,F.Z)({},d),{},{expanded:t,selected:o,checked:i,loaded:v,loading:u,halfChecked:p,dragOver:g,dragOverGapTop:e,dragOverGapBottom:s,pos:f,active:y,key:r});return"props"in n||Object.defineProperty(n,"props",{get:function(){return(0,S.ZP)(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),a}}),n}}}]);
