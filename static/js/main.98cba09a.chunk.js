(this["webpackJsonpfrontend-interview-task"]=this["webpackJsonpfrontend-interview-task"]||[]).push([[0],{3:function(e,t,n){e.exports={modalWindowContainer:"ModalWindow_modalWindowContainer__KmSsH",open:"ModalWindow_open__2tWb1",modalWindow:"ModalWindow_modalWindow__30kgI",closeModal:"ModalWindow_closeModal__3UEU1",imageModal:"ModalWindow_imageModal__1z_6-",commentFormBlock:"ModalWindow_commentFormBlock__1FzuO",commentForm:"ModalWindow_commentForm__1JuOW",commentButton:"ModalWindow_commentButton__1tETn",commentBlock:"ModalWindow_commentBlock__2bzmT",comment:"ModalWindow_comment__2Nqi8",dateComment:"ModalWindow_dateComment__3_Qhz",commentText:"ModalWindow_commentText__2SUHw",photoInputs:"ModalWindow_photoInputs__13PL6",customInput:"ModalWindow_customInput__1PkIp"}},32:function(e,t,n){e.exports={App:"App_App__16ZpL",mainHeader:"App_mainHeader__3L_RI",footer:"App_footer__29Fsv"}},33:function(e,t,n){e.exports={photoContainer:"ImageScreen_photoContainer__oyRAS",desktopContainer:"ImageScreen_desktopContainer__3dPOH"}},48:function(e,t,n){e.exports={image:"ImagesElement_image__2F_VT"}},60:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),o=n(25),i=n.n(o),s=(n(60),n(4)),d=n(32),m=n.n(d),u=n(54),l=n(33),j=n.n(l),b=n(12),O=function(e){return e.imagesReducer.images},f=function(e){return e.imagesReducer.imgInfo.comments},p=function(e){return e.imagesReducer.imgInfo.url},h=function(e){return e.imagesReducer.isLoadingInfo},v=n(48),x=n.n(v),_=function(e){return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsx)("img",{src:e.imageUrl,alt:"GalleryPhoto",className:x.a.image,onClick:e.onOpenModal})})},g=n(7),w=n.n(g),N=n(18),k=n(38),I=n(14),M=n(49),W=n.n(M).a.create({baseURL:"https://boiling-refuge-66454.herokuapp.com/images/"}),C=function(){return Object(N.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.get("");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},E=function(e){return Object(N.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.get(e).then((function(e){return e}));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},S=function(e){return Object(N.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,W.post("".concat(e,"/comments")).then((function(e){return e}));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},F="frontend-interview-task/image-reducer/SET_IMAGES",T="frontend-interview-task/image-reducer/SET_IMAGE_DATA",A="frontend-interview-task/image-reducer/DELETE_IMAGE_DATA",L="frontend-interview-task/image-reducer/SET_IS_LOADING_DATA",y={images:[],imgInfo:{},isLoadingInfo:!1},B=function(e){return{type:F,images:e}},D=function(e){return{type:T,imgData:e}},R=function(){return{type:A}},G=function(e){return{type:L,isLoading:e}},P=n(23),U=n(3),H=n.n(U),z=n(35),J=n.n(z);var V=n(53),X=function(e){var t=Object(b.b)(),n=Object(V.a)({initialValues:{firstName:"",comment:""},onSubmit:function(n){var a;e.id&&t((a=e.id,function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(a);case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}});return Object(a.jsxs)("form",{onSubmit:n.handleSubmit,className:H.a.commentForm,children:[Object(a.jsx)("div",{children:Object(a.jsx)("input",{id:"firstName",name:"firstName",type:"text",onChange:n.handleChange,value:n.values.firstName,className:H.a.customInput,placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"})}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{id:"comment",name:"comment",type:"text",onChange:n.handleChange,value:n.values.comment,className:H.a.customInput,placeholder:"\u0412\u0430\u0448\u0430 \u0444\u0430\u043c\u0438\u043b\u0438\u044f"})}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{type:"submit",className:H.a.commentButton,children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})})]})},q=(n(83),function(){return Object(a.jsx)("div",{className:"Loader",children:Object(a.jsx)("div",{className:"loadingio-spinner-pulse-4acf414061e",children:Object(a.jsxs)("div",{className:"ldio-scotsrxdwc",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})})}),K=function(e){var t=function(e){var t=new Date(1e3*e),n=t.getFullYear(),a=["01","02","03","04","05","06","07","08","09","10","11","12"][t.getMonth()],c=t.getDate();return"".concat(c,".").concat(a,".").concat(n)}(e.comment.date);return Object(a.jsxs)("div",{className:H.a.comment,children:[Object(a.jsx)("div",{className:H.a.dateComment,children:t}),Object(a.jsx)("div",{className:H.a.commentText,children:e.comment.text})]})},Q=function(e){var t=Object(b.b)(),n=Object(b.c)(f),o=Object(b.c)(p),i=Object(s.h)().id,d=Object(b.c)(h),m=Object(s.g)(),u=Object(c.useRef)(null),l=window.innerWidth;Object(c.useEffect)((function(){i&&t(function(e){return function(){var t=Object(N.a)(w.a.mark((function t(n){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(G(!0)),t.next=3,E(e);case 3:a=t.sent,n(G(!1)),n(D(a));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(i))}),[i,t]);var j=function(){i&&m.push({pathname:"/images/"}),e.setIsOpenModal(!1),t(R())};!function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(c.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))}(u,j);var O=null===n||void 0===n?void 0:n.map((function(e,t){return Object(a.jsx)(K,{comment:e},t)}));return l<700?Object(a.jsx)("div",{className:J()(H.a.modalWindowContainer,Object(P.a)({},H.a.open,i)),children:Object(a.jsx)("div",{className:H.a.modalWindow,ref:u,children:d?Object(a.jsx)(q,{}):Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsxs)("div",{className:H.a.photoInputs,children:[Object(a.jsx)("div",{children:o&&Object(a.jsx)("img",{src:o,alt:"largeIMG",className:H.a.imageModal})}),Object(a.jsxs)("div",{className:H.a.commentBlock,children:[!(null===n||void 0===n?void 0:n.length)&&Object(a.jsx)("div",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u0435\u0449\u0435 \u043d\u0435\u0442. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u043c)"}),O]}),Object(a.jsx)("div",{className:H.a.commentFormBlock,children:Object(a.jsx)(X,{id:i})})]}),Object(a.jsx)("div",{className:H.a.closeModal,onClick:j,children:Object(a.jsx)("i",{className:"fas fa-times"})})]})})}):Object(a.jsx)("div",{className:J()(H.a.modalWindowContainer,Object(P.a)({},H.a.open,i)),children:Object(a.jsx)("div",{className:H.a.modalWindow,ref:u,children:d?Object(a.jsx)(q,{}):Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsxs)("div",{className:H.a.photoInputs,children:[Object(a.jsx)("div",{children:o&&Object(a.jsx)("img",{src:o,alt:"largeIMG",className:H.a.imageModal})}),Object(a.jsx)("div",{className:H.a.commentFormBlock,children:Object(a.jsx)(X,{id:i})})]}),Object(a.jsxs)("div",{className:H.a.commentBlock,children:[!(null===n||void 0===n?void 0:n.length)&&Object(a.jsx)("div",{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u0435\u0449\u0435 \u043d\u0435\u0442. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u043c)"}),O]}),Object(a.jsx)("div",{className:H.a.closeModal,onClick:j,children:Object(a.jsx)("i",{className:"fas fa-times"})})]})})})},Y=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],o=Object(s.g)(),i=Object(b.b)(),d=Object(b.c)(O);Object(c.useEffect)((function(){i(function(){var e=Object(N.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:n=e.sent,t(B(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[i]);var m=d.map((function(e){return Object(a.jsx)(_,{imageUrl:e.url,onOpenModal:function(){return t=e.id,r(!0),void o.push(t.toString());var t}},e.id)}));return Object(a.jsx)("div",{className:j.a.desktopContainer,children:Object(a.jsxs)("div",{className:j.a.photoContainer,children:[m,n&&Object(a.jsx)(Q,{setIsOpenModal:r})]})})};var Z=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("header",{children:Object(a.jsx)("h1",{className:m.a.mainHeader,children:"Test app"})}),Object(a.jsx)("section",{children:Object(a.jsxs)(s.d,{children:[Object(a.jsx)(s.b,{path:"/images/:id?",render:function(){return Object(a.jsx)(Y,{})}}),Object(a.jsx)(s.a,{from:"/",to:"/images/"})]})}),Object(a.jsx)("div",{className:m.a.footer,children:"@ 2019 - 2020"})]})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))},ee=n(20),te=n(52),ne=Object(ee.c)({imagesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case F:return Object(I.a)(Object(I.a)({},e),{},{images:[].concat(Object(k.a)(e.images),Object(k.a)(t.images))});case T:return Object(I.a)(Object(I.a)({},e),{},{imgInfo:Object(I.a)({},t.imgData)});case A:return Object(I.a)(Object(I.a)({},e),{},{imgInfo:{}});case L:return Object(I.a)(Object(I.a)({},e),{},{isLoadingInfo:t.isLoading});default:return e}}}),ae=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose,ce=Object(ee.d)(ne,ae(Object(ee.a)(te.a)));window.__store__=ce;var re=ce,oe=n(21);i.a.render(Object(a.jsx)(oe.a,{basename:"/avito-interview-task",children:Object(a.jsx)(b.a,{store:re,children:Object(a.jsx)(Z,{})})}),document.getElementById("root")),$()}},[[85,1,2]]]);
//# sourceMappingURL=main.98cba09a.chunk.js.map