(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={list:"ContactList_list__35SJT",item:"ContactList_item__E7Qu2",text:"ContactList_text__34VS4",btn:"ContactList_btn__2EGQW"}},23:function(t,e,n){t.exports={title:"App_title__3F0Sj",container:"App_container__3CzeS"}},35:function(t,e,n){t.exports={input:"Filter_input__3FiU-"}},49:function(t,e,n){},69:function(t,e,n){"use strict";n.r(e);var c,a,r=n(2),o=n(1),s=n.n(o),i=n(18),u=n.n(i),b=n(10),l=n(6),j=n(3),m=n(5),O=n(7),d=Object(l.b)("contact/fetchContactsRequest"),f=Object(l.b)("contact/fetchContactsSuccess"),h=Object(l.b)("contact/fetchContactsError"),p=Object(l.b)("contact/addContactRequest"),x=Object(l.b)("contact/addContactSuccess"),_=Object(l.b)("contact/addContactError"),v=Object(l.b)("contact/deleteContactRequest"),C=Object(l.b)("contact/deleteContactSuccess"),N=Object(l.b)("contact/deleteContactError"),g=Object(l.b)("contact/changeFilter"),y=Object(l.c)([],(c={},Object(j.a)(c,f,(function(t,e){return e.payload})),Object(j.a)(c,x,(function(t,e){var n=e.payload;return[].concat(Object(m.a)(t),[n])})),Object(j.a)(c,C,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),L=Object(l.c)("",Object(j.a)({},g,(function(t,e){return e.payload}))),E=Object(l.c)(null,{}),w=Object(l.c)(!1,(a={},Object(j.a)(a,d,(function(){return!0})),Object(j.a)(a,f,(function(){return!1})),Object(j.a)(a,h,(function(){return!1})),Object(j.a)(a,p,(function(){return!0})),Object(j.a)(a,x,(function(){return!1})),Object(j.a)(a,_,(function(){return!1})),Object(j.a)(a,v,(function(){return!0})),Object(j.a)(a,C,(function(){return!1})),Object(j.a)(a,N,(function(){return!1})),a)),F=Object(O.c)({items:y,filter:L,loading:w,error:E}),S=n(13),k=n(34),q=n.n(k),T=Object(l.a)({reducer:{contacts:F},middleware:function(t){return t({serializableCheck:{ignoredActions:[S.a,S.f,S.b,S.c,S.d,S.e]}}).concat(q.a)},devTools:!1}),A=(n(49),n(23)),R=n.n(A),G=n(12),J=n(38),U=n(4),z=n.n(U),D=n(11),M=n(17),P=n.n(M);P.a.defaults.baseURL="http://localhost:4040";var Q=n(9),X=n.n(Q);function B(){var t=Object(J.a)(),e=t.register,n=t.handleSubmit,c=t.errors,a=Object(o.useState)(""),s=Object(G.a)(a,2),i=s[0],u=s[1],l=Object(o.useState)(""),j=Object(G.a)(l,2),m=j[0],O=j[1],d=Object(b.b)(),f=Object(b.c)((function(t){return t.contacts.items})),h=function(){u(""),O("")},v=function(t){t.preventDefault();var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":u(c);break;case"number":O(c)}};return Object(r.jsx)("div",{className:X.a.container,children:Object(r.jsxs)("form",{onSubmit:n((function(){var t,e;if(f.map((function(t){return t.name.toLocaleLowerCase()})).includes(i.toLocaleLowerCase()))return h(),alert("".concat(i," is already in contacts!"));d((t=i,e=m,function(n){var c={name:t,number:e};n(p()),P.a.post("/contacts",c).then((function(t){var e=t.data;return n(x(e))})).catch((function(t){return n(_(t))}))})),h()})),children:[Object(r.jsxs)("label",{className:X.a.label,children:["Name",Object(r.jsx)("input",{className:X.a.input,autoComplete:"off",name:"name",type:"text",value:i,ref:e({required:!0,minLength:3}),onChange:v})]}),c.name&&"required"===c.name.type&&Object(r.jsx)("p",{className:X.a.textError,children:"This is required "}),c.name&&"minLength"===c.name.type&&Object(r.jsx)("p",{className:X.a.textError,children:"This is field is required min length of 3"}),Object(r.jsxs)("label",{className:X.a.label,children:["Number",Object(r.jsx)("input",{className:X.a.input,autoComplete:"off",name:"number",type:"text",value:m,ref:e({required:!0,pattern:/^[0-9]+$/gm,minLength:7}),onChange:v})]}),c.number&&"required"===c.number.type&&Object(r.jsx)("p",{className:X.a.textError,children:"This is required "}),c.number&&"pattern"===c.number.type&&Object(r.jsx)("p",{className:X.a.textError,children:"There must be numbers"}),c.number&&"minLength"===c.number.type&&Object(r.jsx)("p",{className:X.a.textError,children:"Number too short"}),Object(r.jsx)("button",{className:X.a.btn,type:"submit",children:"Add contact"})]})})}var I=n(35),K=n.n(I),V=function(t){return t.contacts.filter},W=function(t){var e=function(t){return t.contacts.items}(t),n=V(t).toLocaleLowerCase();return e.filter((function(t){return t.name.toLocaleLowerCase().includes(n)}))};function $(){var t=Object(b.c)(V),e=Object(b.b)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("label",{children:Object(r.jsx)("input",{className:K.a.input,type:"text",value:t,onChange:function(t){return e(g(t.currentTarget.value))},placeholder:" Fined contacts by name"})})})}var H=n(36),Y=n(37),Z=n(15),tt=n.n(Z);function et(){var t=Object(b.b)(),e=Object(b.c)(W);Object(o.useEffect)((function(){t(function(){var t=Object(D.a)(z.a.mark((function t(e){var n,c;return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(d()),t.prev=1,t.next=4,P.a.get("/contacts");case 4:n=t.sent,c=n.data,e(f(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(h(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[]);var n=function(e){return t((n=e,function(t){t(v()),P.a.delete("/contacts/".concat(n)).then((function(){return t(C(n))})).catch((function(e){return t(N(e))}))}));var n};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("ul",{className:tt.a.list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(r.jsxs)("li",{className:tt.a.item,children:[Object(r.jsx)(H.a,{}),Object(r.jsxs)("span",{className:tt.a.text,children:[c,": "]}),Object(r.jsx)("span",{className:tt.a.text,children:a}),Object(r.jsxs)("button",{className:tt.a.btn,onClick:function(){return n(e)},children:[Object(r.jsx)(Y.a,{value:{width:20}})," "]})]},e)}))})})}function nt(){return Object(r.jsxs)("div",{className:R.a.container,children:[Object(r.jsx)("h1",{className:R.a.title,children:"Phonebook"}),Object(r.jsx)(B,{}),Object(r.jsx)("h2",{children:"Contacts"}),Object(r.jsx)($,{}),Object(r.jsx)(et,{})]})}u.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(b.a,{store:T,children:Object(r.jsx)(nt,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={input:"ContactForm_input__1xNPM",label:"ContactForm_label__1ADTb",container:"ContactForm_container__1ksKU",btn:"ContactForm_btn__3yXGR",textError:"ContactForm_textError__3e3XG"}}},[[69,1,2]]]);
//# sourceMappingURL=main.0b954901.chunk.js.map