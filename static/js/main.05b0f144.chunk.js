(this["webpackJsonpsimple-pagination"]=this["webpackJsonpsimple-pagination"]||[]).push([[0],{29:function(t,e,n){},49:function(t,e,n){},52:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(21),s=n.n(r),i=(n(29),n(10)),o=n.n(i),u=n(22),j=n(7),p=n(23),l=n.n(p),b=(n(49),n(54)),d=n(3),O=function(t){var e=t.posts;return t.loading?Object(d.jsx)("h2",{children:"...loading"}):Object(d.jsx)(b.a,{children:e.map((function(t){return Object(d.jsx)(b.a.Item,{children:t.title},t.id)}))})},h=n(11),f=function(t){for(var e=t.postsPerPage,n=t.totalPosts,c=t.paginate,a=t.currentPage,r=[],s=function(t){r.push(Object(d.jsx)(h.a.Item,{active:t===a,onClick:function(){return c(t)},children:t},t))},i=1;i<=Math.ceil(n/e);i++)s(i);return Object(d.jsx)("div",{children:Object(d.jsx)(h.a,{children:r})})};var g=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(!1),s=Object(j.a)(r,2),i=s[0],p=s[1],b=Object(c.useState)(1),h=Object(j.a)(b,2),g=h[0],x=h[1],v=Object(c.useState)(10),m=Object(j.a)(v,1)[0];Object(c.useEffect)((function(){(function(){var t=Object(u.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.next=3,l.a.get("https://jsonplaceholder.typicode.com/posts");case 3:e=t.sent,a(e.data),p(!1);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var P=g*m,S=P-m,k=n.slice(S,P);return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"simple pagination"}),Object(d.jsx)(O,{posts:k,loading:i}),Object(d.jsx)(f,{postsPerPage:m,totalPosts:n.length,currentPage:g,paginate:function(t){return x(t)}})]})};n(51);s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.05b0f144.chunk.js.map