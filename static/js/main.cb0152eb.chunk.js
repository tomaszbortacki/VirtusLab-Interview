(this.webpackJsonpvirtuslab=this.webpackJsonpvirtuslab||[]).push([[0],{36:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(13),s=n.n(a),i=n(4),o=n.n(i),j=n(9),u=n(6),l=(n(36),n(65)),b=n(7),h=n(15),p=n.n(h),O=n(1),d=function(e){var t=e.zoom,n=void 0===t?1:t;return Object(O.jsx)("div",{className:"loading__wrapper",style:{zoom:n},children:Object(O.jsxs)("div",{className:"loading",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})})},f=n(29),x=n(10),m=function(e){var t=e.age,n=e.height,r=e.films,a=Object(b.c)((function(e){return e.movies})),s=Object(c.useState)([]),i=Object(u.a)(s,2),l=i[0],h=i[1],m=Object(c.useState)(!0),v=Object(u.a)(m,2),g=v[0],_=v[1],y=Object(b.b)(),k=function(){var e=Object(j.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n="",a.length>0&&(n=a.reduce((function(e,n){return n.path===t?n.name:e}),"")),!n){e.next=6;break}h((function(e){return[].concat(Object(x.a)(e),[n])})),e.next=8;break;case 6:return e.next=8,p.a.get(t.replace("http:",window.location.protocol)).then((function(e){return e.data})).then((function(e){var t=e.title;y({type:"ADD_MOVIE",payloads:{movie:{path:e.url,name:e.title}}}),h((function(e){return[].concat(Object(x.a)(e),[t])}))})).then((function(){})).catch((function(e){return console.error(e)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c,r,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=a.length>0&&void 0!==a[0]?a[0]:[])){e.next=19;break}n=Object(f.a)(t),e.prev=3,n.s();case 5:if((c=n.n()).done){e.next=11;break}return r=c.value,e.next=9,k(r);case 9:e.next=5;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),n.e(e.t0);case 16:return e.prev=16,n.f(),e.finish(16);case 19:_(!1);case 20:case"end":return e.stop()}}),e,null,[[3,13,16,19]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){w(r)}),[]),Object(O.jsx)("section",{className:"person__more",children:Object(O.jsxs)("section",{className:"person__desc",children:[Object(O.jsxs)("h3",{children:["Age: ",t]}),Object(O.jsxs)("h3",{children:["Height: ",n]}),Object(O.jsxs)("h3",{children:["Films: ",g?Object(O.jsx)(d,{zoom:.4}):""]}),Object(O.jsx)("ul",{children:l?l.map((function(e,t){return Object(O.jsx)("li",{children:e},t)})):""})]})})},v=function(e){var t=e.person,n=t.name,r=t.birth_year,a=t.gender,s=t.height,i=t.films,o=Object(c.useState)(!1),j=Object(u.a)(o,2),l=j[0],b=j[1],h=Object(c.useState)(!1),p=Object(u.a)(h,2),d=p[0],f=p[1];return Object(O.jsxs)("section",{className:l?"person person--active":"person",children:[Object(O.jsxs)("ul",{className:"person__basics",onClick:function(){b(!l),f(!0)},children:[Object(O.jsxs)("li",{title:n,children:[Object(O.jsx)("span",{children:"Name:"}),n]}),Object(O.jsxs)("li",{title:r,children:[Object(O.jsx)("span",{children:"Birth year"}),r]}),Object(O.jsxs)("li",{title:a,children:[Object(O.jsx)("span",{children:"Gender:"}),a]}),Object(O.jsx)("li",{children:Object(O.jsx)("div",{children:"\ud83e\udc7b"})})]}),d?Object(O.jsx)(m,{age:r.replace("BBY",""),height:"".concat(s,"cm"),films:i}):""]})};var g=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(u.a)(a,2),i=s[0],h=s[1],f=Object(b.c)((function(e){return e.people})),x=Object(b.b)(),m=function(){var e=Object(j.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("https://swapi.dev/api/","people/").concat(t,"/")).then((function(e){return e.data})).then((function(e){x({type:"ADD_PERSON",payloads:{person:e}}),h(!1)})).catch((function(e){console.log(e),h(!0)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(o.a.mark((function e(){var t,n,c,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=a.length>0&&void 0!==a[0]?a[0]:10,r(!0),n=f.length+1,c=n;case 4:if(!(c<n+t)){e.next=10;break}return e.next=7,m(c);case 7:c++,e.next=4;break;case 10:r(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){g()}),[]),Object(O.jsx)("section",{className:"main",children:Object(O.jsxs)(l.a,{children:[Object(O.jsx)("section",{className:"main__top",children:Object(O.jsx)("h1",{children:"Star Wars Challenge"})}),Object(O.jsxs)("section",{className:"main__list",children:[f?f.map((function(e,t){return Object(O.jsx)(v,{person:e},t)})):"",n?Object(O.jsx)(d,{}):""]}),Object(O.jsx)("section",{className:"main__bottom",children:i?"":Object(O.jsx)("button",{onClick:function(){g(5)},children:Object(O.jsx)("span",{children:"Load more (5)"})})})]})})},_=(n(62),n(14)),y=n(12),k={people:[],movies:[]},w=Object(_.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_PERSON":var n=t.payloads.person,c=n.name,r=n.birth_year,a=n.gender,s=n.height,i=n.films;return Object(y.a)(Object(y.a)({},e),{},{people:[].concat(Object(x.a)(e.people),[{name:c,birth_year:r,gender:a,height:s,films:i}])});case"ADD_MOVIE":var o=t.payloads.movie,j=o.path,u=o.name;return Object(y.a)(Object(y.a)({},e),{},{movies:[].concat(Object(x.a)(e.movies),[{path:j,name:u}])});default:return e}}));s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(b.a,{store:w,children:Object(O.jsx)(g,{})})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.cb0152eb.chunk.js.map