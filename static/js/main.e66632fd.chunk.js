(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(4),l=c(14),r=c(5),o=c(12),d=c(13),i=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=function(e){return{type:"filterTodo/ALL",payload:e}},b=function(e){return{type:"filterTodo/Active",payload:e}},m=function(e){return{type:"filterTodo/Completed",payload:e}},f=function(e){return{type:"filterTodo/query",payload:e}},p=function(e){return{type:"filterTodo/Delete",payload:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{query:"",status:"all"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filterTodo/Completed":return{query:t.payload,status:"completed"};case"filterTodo/Active":return{query:t.payload,status:"active"};case"filterTodo/query":return{query:t.payload,status:e.status};case"filterTodo/ALL":return{query:t.payload,status:"all"};case"filterTodo/Delete":return{query:"",status:t.payload};default:return e}},O=function(e){return{type:"todos/ADD",payload:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"todos/ADD"===t.type?t.payload:e},y=Object(r.combineReducers)({currentTodo:j,filter:x,todos:v}),N=Object(r.createStore)(y,Object(o.composeWithDevTools)(Object(r.applyMiddleware)(d.a))),g=c(3),T=c(0),w=(c(22),c(23),c(8)),k=c.n(w),S=c(1),q=function(e){var t=e.visibleTodos,c=e.showSelectedUser,s=e.selectedTodo;return Object(S.jsxs)(S.Fragment,{children:[0===(null===t||void 0===t?void 0:t.length)&&Object(S.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),void 0!==t&&(null===t||void 0===t?void 0:t.length)>0&&Object(S.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"#"}),Object(S.jsx)("th",{children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("th",{children:"Title"}),Object(S.jsx)("th",{children:" "})]})}),Object(S.jsx)("tbody",{children:t.map((function(e){return Object(S.jsxs)("tr",{"data-cy":"todo",className:k()({"has-background-info-light":(null===s||void 0===s?void 0:s.id)===e.id}),children:[Object(S.jsx)("td",{className:"is-vcentered",children:e.id}),Object(S.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(S.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(S.jsx)("i",{className:"fas fa-check"})})}),Object(S.jsx)("td",{className:"is-vcentered is-expanded",children:Object(S.jsx)("p",{className:k()({"has-text-success":e.completed,"has-text-danger":!e.completed}),children:e.title})}),Object(S.jsx)("td",{className:"has-text-right is-vcentered",children:Object(S.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(S.jsx)("span",{className:"icon",children:Object(S.jsx)("i",{className:k()({"far fa-eye-slash":(null===s||void 0===s?void 0:s.id)===e.id,"far fa-eye":null===s||s.id!==e.id})})})})})]},e.id)}))})]})]})},C=n.b,D=n.c,E=function(e){var t=e.query,c=e.status,s=C(),a=function(e){return"all"===e?h(t):"active"===e?b(t):"completed"===e?m(t):"delete"===e?p(c):h(t)};return Object(S.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(S.jsx)("p",{className:"control",children:Object(S.jsx)("span",{className:"select",children:Object(S.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return s(a(e.target.value))},children:[Object(S.jsx)("option",{value:"all",children:"All"}),Object(S.jsx)("option",{value:"active",children:"Active"}),Object(S.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(S.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(S.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return s(f(e.target.value))}}),Object(S.jsx)("span",{className:"icon is-left",children:Object(S.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(S.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(S.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s(a("delete"))}})})]})]})},A=(c(25),function(){return Object(S.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(S.jsx)("div",{className:"Loader__content"})})}),L=function(e){var t=e.selectedTodo,c=e.selectedUser,s=e.removeSelectedUser;return Object(S.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(S.jsx)("div",{className:"modal-background"}),!c&&Object(S.jsx)(A,{}),c&&Object(S.jsxs)("div",{className:"modal-card",children:[Object(S.jsxs)("header",{className:"modal-card-head",children:[Object(S.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(S.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:s})]}),Object(S.jsxs)("div",{className:"modal-card-body",children:[Object(S.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(S.jsxs)("p",{className:"block","data-cy":"modal-user",children:[!t.completed&&Object(S.jsx)("strong",{className:"has-text-danger",children:"Planned"}),t.completed&&Object(S.jsx)("strong",{className:"has-text-success",children:"Done"})," by ",Object(S.jsx)("a",{href:"mailto:".concat(c.email),children:null===c||void 0===c?void 0:c.name})]})]})]})]})};function U(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var _=function(){var e=C(),t=D((function(e){return e.todos})),c=D((function(e){return e.currentTodo})),s=D((function(e){return e.filter})),a=s.query,n=s.status,l=Object(T.useState)(null),r=Object(g.a)(l,2),o=r[0],d=r[1],j=Object(T.useMemo)((function(){return null===t||void 0===t?void 0:t.filter((function(e){var t=!!(e.title||"").toLowerCase().includes(a.toLowerCase());return"completed"===n?!e.completed&&t:"active"===n?e.completed&&t:t}))}),[t,n,a]);return Object(T.useEffect)((function(){var s;t||U("/todos").then((function(t){return e(O(t))})),c?(s=c.userId,U("/users/".concat(s))).then((function(e){return d(e)})):d(null)}),[c]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"section",children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"box",children:[Object(S.jsx)("h1",{className:"title",children:"Todos:"}),Object(S.jsx)("div",{className:"block",children:Object(S.jsx)(E,{query:a,status:n})}),Object(S.jsxs)("div",{className:"block",children:[!t&&Object(S.jsx)(A,{}),!!t&&Object(S.jsx)(q,{visibleTodos:j,showSelectedUser:function(t){return e(i(t))},selectedTodo:c})]})]})})}),c&&Object(S.jsx)(L,{selectedTodo:c,selectedUser:o,removeSelectedUser:function(){return e(u())}})]})},M=function(){return Object(S.jsx)(n.a,{store:N,children:Object(S.jsx)(l.a,{children:Object(S.jsx)(_,{})})})};a.a.render(Object(S.jsx)(M,{}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.e66632fd.chunk.js.map