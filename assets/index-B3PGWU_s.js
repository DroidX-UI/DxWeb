import{r as q,c as G,g as K}from"./index-wTOhgmD9.js";var k={exports:{}};(function(R,Y){(function(P,u){R.exports=u(q)})(G,function(P){return function(u){var f={};function i(n){if(f[n])return f[n].exports;var o=f[n]={i:n,l:!1,exports:{}};return u[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=u,i.c=f,i.d=function(n,o,h){i.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:h})},i.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,o){if(1&o&&(n=i(n)),8&o||4&o&&typeof n=="object"&&n&&n.__esModule)return n;var h=Object.create(null);if(i.r(h),Object.defineProperty(h,"default",{enumerable:!0,value:n}),2&o&&typeof n!="string")for(var e in n)i.d(h,e,(function(g){return n[g]}).bind(null,e));return h},i.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(o,"a",o),o},i.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},i.p="",i(i.s=4)}([function(u,f,i){u.exports=i(2)()},function(u,f){u.exports=P},function(u,f,i){var n=i(3);function o(){}function h(){}h.resetWarningCache=o,u.exports=function(){function e(C,x,v,E,_,d){if(d!==n){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}}function g(){return e}e.isRequired=e;var m={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:g,element:e,elementType:e,instanceOf:g,node:e,objectOf:g,oneOf:g,oneOfType:g,shape:g,exact:g,checkPropTypes:h,resetWarningCache:o};return m.PropTypes=m,m}},function(u,f,i){u.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(u,f,i){i.r(f);var n=i(1),o=i.n(n),h=i(0),e=i.n(h),g=function(s){return s!==0};function m(){return(m=Object.assign?Object.assign.bind():function(s){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&(s[c]=l[c])}return s}).apply(this,arguments)}function C(s){return(C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(s)}function x(s,r){for(var l=0;l<r.length;l++){var c=r[l];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(s,c.key,c)}}function v(s,r){return(v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,c){return l.__proto__=c,l})(s,r)}function E(s){var r=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var l,c=y(s);if(r){var b=y(this).constructor;l=Reflect.construct(c,arguments,b)}else l=c.apply(this,arguments);return _(this,l)}}function _(s,r){if(r&&(C(r)==="object"||typeof r=="function"))return r;if(r!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d(s)}function d(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function y(s){return(y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)})(s)}function O(s,r,l){return r in s?Object.defineProperty(s,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):s[r]=l,s}var w=function(s){(function(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),Object.defineProperty(a,"prototype",{writable:!1}),t&&v(a,t)})(b,s);var r,l,c=E(b);function b(a){var t;return function(p,N){if(!(p instanceof N))throw new TypeError("Cannot call a class as a function")}(this,b),O(d(t=c.call(this,a)),"continueOpenCollapsible",function(){var p=d(t).innerRef;t.setState({height:p.scrollHeight,transition:"height ".concat(t.props.transitionTime,"ms ").concat(t.props.easing),isClosed:!1,hasBeenOpened:!0,inTransition:g(p.scrollHeight),shouldOpenOnNextCycle:!1})}),O(d(t),"handleTriggerClick",function(p){t.props.triggerDisabled||t.state.inTransition||(p.preventDefault(),t.props.handleTriggerClick?t.props.handleTriggerClick(t.props.accordionPosition):t.state.isClosed===!0?(t.openCollapsible(),t.props.onOpening(),t.props.onTriggerOpening()):(t.closeCollapsible(),t.props.onClosing(),t.props.onTriggerClosing()))}),O(d(t),"handleTransitionEnd",function(p){p.target===t.innerRef&&(t.state.isClosed?(t.setState({inTransition:!1}),t.props.onClose()):(t.setState({height:"auto",overflow:t.props.overflowWhenOpen,inTransition:!1}),t.props.onOpen()))}),O(d(t),"setInnerRef",function(p){return t.innerRef=p}),t.timeout=void 0,t.contentId=a.contentElementId||"collapsible-content-".concat(Date.now()),t.triggerId=a.triggerElementProps.id||"collapsible-trigger-".concat(Date.now()),a.open?t.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:a.overflowWhenOpen,inTransition:!1}:t.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height ".concat(a.transitionTime,"ms ").concat(a.easing),hasBeenOpened:!1,overflow:"hidden",inTransition:!1},t}return r=b,(l=[{key:"componentDidUpdate",value:function(a,t){var p=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),t.height!=="auto"&&t.height!==0||this.state.shouldSwitchAutoOnNextCycle!==!0||(window.clearTimeout(this.timeout),this.timeout=window.setTimeout(function(){p.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})},50)),a.open!==this.props.open&&(this.props.open===!0?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){var a=this.innerRef;this.setState({shouldSwitchAutoOnNextCycle:!0,height:a.scrollHeight,transition:"height ".concat(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime,"ms ").concat(this.props.easing),inTransition:g(a.scrollHeight)})}},{key:"openCollapsible",value:function(){this.setState({inTransition:g(this.innerRef.scrollHeight),shouldOpenOnNextCycle:!0})}},{key:"renderNonClickableTriggerElement",value:function(){var a=this.props,t=a.triggerSibling,p=a.classParentString;if(!t)return null;switch(C(t)){case"string":return o.a.createElement("span",{className:"".concat(p,"__trigger-sibling")},t);case"function":return t();case"object":return t;default:return null}}},{key:"render",value:function(){var a=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},p=this.state.isClosed?"is-closed":"is-open",N=this.props.triggerDisabled?"is-disabled":"",W=this.state.isClosed===!1&&this.props.triggerWhenOpen!==void 0?this.props.triggerWhenOpen:this.props.trigger,D=this.props.contentContainerTagName,H=this.props.triggerTagName,B=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,S=this.props,T=S.classParentString,A=S.contentOuterClassName,M=S.contentInnerClassName,U="".concat(T,"__trigger ").concat(p," ").concat(N," ").concat(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),z="".concat(T," ").concat(this.state.isClosed?this.props.className:this.props.openedClassName),L="".concat(T,"__contentOuter ").concat(A),F="".concat(T,"__contentInner ").concat(M);return o.a.createElement(D,m({className:z.trim()},this.props.containerElementProps),o.a.createElement(H,m({id:this.triggerId,className:U.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(j){var I=j.key;(I===" "&&a.props.triggerTagName.toLowerCase()!=="button"||I==="Enter")&&a.handleTriggerClick(j)},tabIndex:this.props.tabIndex&&this.props.tabIndex,"aria-expanded":!this.state.isClosed,"aria-disabled":this.props.triggerDisabled,"aria-controls":this.contentId,role:"button"},this.props.triggerElementProps),W),this.renderNonClickableTriggerElement(),o.a.createElement("div",{id:this.contentId,className:L.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition,role:"region","aria-labelledby":this.triggerId},o.a.createElement("div",{className:F.trim()},B)))}}])&&x(r.prototype,l),Object.defineProperty(r,"prototype",{writable:!1}),b}(n.Component);w.propTypes={transitionTime:e.a.number,transitionCloseTime:e.a.number,triggerTagName:e.a.string,easing:e.a.string,open:e.a.bool,containerElementProps:e.a.object,triggerElementProps:e.a.object,contentElementId:e.a.string,classParentString:e.a.string,className:e.a.string,openedClassName:e.a.string,triggerStyle:e.a.object,triggerClassName:e.a.string,triggerOpenedClassName:e.a.string,contentOuterClassName:e.a.string,contentInnerClassName:e.a.string,accordionPosition:e.a.oneOfType([e.a.string,e.a.number]),handleTriggerClick:e.a.func,onOpen:e.a.func,onClose:e.a.func,onOpening:e.a.func,onClosing:e.a.func,onTriggerOpening:e.a.func,onTriggerClosing:e.a.func,trigger:e.a.oneOfType([e.a.string,e.a.element]),triggerWhenOpen:e.a.oneOfType([e.a.string,e.a.element]),triggerDisabled:e.a.bool,lazyRender:e.a.bool,overflowWhenOpen:e.a.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:e.a.bool,triggerSibling:e.a.oneOfType([e.a.string,e.a.element,e.a.func]),tabIndex:e.a.number,contentContainerTagName:e.a.string,children:e.a.oneOfType([e.a.string,e.a.element])},w.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div",triggerElementProps:{}},f.default=w}])})})(k);var V=k.exports;const Q=K(V);export{Q as C};
