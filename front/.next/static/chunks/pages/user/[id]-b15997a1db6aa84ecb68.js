_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var l=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var c=0,u=l.length;c<u;c++){var s=l[c];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var d=o.props[s],f=r[s]||new Set;f.has(d)?a=!1:(f.add(d),r[s]=f)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(c.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qrvq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return v}));var r=n("q1tI"),o=n("/MKj"),a=n("nOHt"),i=n("YFqc"),c=n.n(i),u=n("8Kt/"),s=n.n(u),d=n("bx4M"),f=n("Tckk"),l=n("p+NB"),p=n("1Dl5"),h=n("UVsj"),m=n("nKUr"),v=!0;t.default=function(){var e=Object(a.useRouter)(),t=Object(o.b)(),n=e.query.id,i=Object(o.c)((function(e){return e.post})),u=i.mainPosts,v=i.hasMorePost,b=i.loadPostsLoading,j=Object(o.c)((function(e){return e.user})).userInfo;return Object(r.useEffect)((function(){function e(){if(window.pageYOffset+document.documentElement.clientHeight>document.documentElement.scrollHeight-300&&v&&!b){var e,r=null===(e=u[u.length-1])||void 0===e?void 0:e.id;console.log("lastId: ",r),t({type:l.t,lastId:r,data:n})}}return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[v,n,u.length]),Object(m.jsxs)(p.a,{children:[j&&Object(m.jsxs)(s.a,{children:[Object(m.jsxs)("title",{children:[j.nickname,"\ub2d8\uc758 \uae00"]}),Object(m.jsx)("meta",{name:"description",content:"".concat(j.nickname,"\ub2d8\uc758 \uac8c\uc2dc\uae00")}),Object(m.jsx)("meta",{name:"og:title",content:"".concat(j.nickname,"\ub2d8\uc758 \uac8c\uc2dc\uae00")}),Object(m.jsx)("meta",{name:"og:description",content:"".concat(j.nickname,"\ub2d8\uc758 \uac8c\uc2dc\uae00")}),Object(m.jsx)("meta",{name:"og:image",content:"http://nodebird.com/favicon.ico"}),Object(m.jsx)("meta",{name:"og:url",content:"https://nodebird.com/pot.".concat(n)})]}),j?Object(m.jsx)(d.a,{actions:[Object(m.jsxs)("div",{children:["Twit",Object(m.jsx)("br",{}),j.Posts]},"twit"),Object(m.jsxs)("div",{children:["Following",Object(m.jsx)("br",{}),j.Following]},"followings"),Object(m.jsxs)("div",{children:["Follower",Object(m.jsx)("br",{}),j.Follower]},"followers")],children:Object(m.jsx)(d.a.Meta,{title:j.nickname,avatar:Object(m.jsx)(c.a,{href:"/user/".concat(j.id),children:Object(m.jsx)("a",{children:Object(m.jsx)(f.a,{children:j.nickname[0]})})})})}):null,";",u.map((function(e){return Object(m.jsx)(h.a,{post:e},e.id)}))]})}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),f=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=f},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},hJAw:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[id]",function(){return n("Qrvq")}])},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o}},[["hJAw",0,2,6,1,3,4,5,7,8]]]);