(this["webpackJsonpquote-generator"]=this["webpackJsonpquote-generator"]||[]).push([[5],{113:function(e,t,n){"use strict";n.r(t);var r=n(47),a=n.n(r),c=n(48),i=n(61),o=n(35),s=n(0),d=n(1),l=n(45),j=n(57),h=n.n(j),u=n(58),x=n.n(u),m=n(110),f=n(115),p=n(53),b=n.n(p),g=n(14),O=n(40),v=n(6),N=Object(m.a)((function(e){return{root:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"space-between",overflow:"hidden"},header:Object(o.a)({marginRight:"5rem",width:"100%",display:"flex",justifyContent:"flex-end",alignItems:"center","& p":{fontSize:"18px",padding:0,margin:0}},e.breakpoints.down("xs"),{justifyContent:"center",margin:0}),containerQuotes:{display:"flex",flexDirection:"column"},contentCenter:{margin:"auto",maxWidth:"90%"},containerName:Object(o.a)({width:"500px",paddingLeft:"calc(4rem + 8px)"},e.breakpoints.down("xs"),{paddingLeft:"calc(1rem + 8px)"}),nameAuthor:{margin:0,padding:0,fontWeight:"700",fontSize:"25px"},singleQuote:{marginTop:"2rem",marginBottom:"2rem"}}}));t.default=function(){var e=N(),t=Object(d.f)().nameAuthor,n=Object(s.useState)([]),r=Object(i.a)(n,2),o=r[0],j=r[1],u=function(){var e=Object(c.a)(a.a.mark((function e(){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://quote-garden.herokuapp.com/api/v3/quotes?author=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,c=r.data,j(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){u()}),[]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:e.root,children:[Object(v.jsxs)("div",{className:e.header,children:[Object(v.jsx)("p",{children:"random"}),Object(v.jsx)(g.b,{to:"/",className:e.containerBtn,children:Object(v.jsx)(f.a,{children:Object(v.jsx)(b.a,{})})})]}),Object(v.jsx)("div",{className:e.contentCenter,children:o.length>0?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:e.containerName,children:Object(v.jsx)("p",{className:e.nameAuthor,children:t})}),Object(v.jsx)("div",{className:e.containerQuotes,children:o.map((function(t,n){return Object(v.jsx)(x.a,{left:n%2===0&&!0,right:n%2!==0&&!0,children:Object(v.jsx)("div",{className:e.singleQuote,children:Object(v.jsx)(l.a,{text:t.quoteText})})},n)}))})]}):Object(v.jsx)(h.a,{type:"ThreeDots",width:80,height:80,color:"#333333"})}),Object(v.jsx)(O.a,{})]})})}},40:function(e,t,n){"use strict";var r=n(35),a=(n(0),n(110)),c=n(6),i=Object(a.a)((function(e){return{footer:{marginTop:"1rem",fontFamily:"Montserrat","& p":{margin:0,padding:0},color:"#F2F2F2"},github:{textDecoration:"none"},footerText:Object(r.a)({fontWeight:"500",color:"#828282",textAlign:"center"},e.breakpoints.down("xs"),{fontSize:"0.8rem"})}}));t.a=function(){var e=i();return Object(c.jsx)("div",{className:e.footer,children:Object(c.jsx)("div",{className:e.flex,children:Object(c.jsxs)("p",{className:e.footerText,children:["created by ",Object(c.jsx)("a",{href:"https://github.com/zFranco23",className:e.github,children:"zFranco23"})," - devChallenges.io"]})})})}},45:function(e,t,n){"use strict";var r=n(35),a=n(110),c=(n(0),n(6)),i=Object(a.a)((function(e){return{text:Object(r.a)({marginTop:"1rem",borderLeft:"8px solid #F7DF94",paddingLeft:"4rem",width:"500px",height:"100%",fontSize:"28px",fontWeight:"500",lineHeight:"120%","& p":{margin:0}},e.breakpoints.down("xs"),{fontSize:"25px",paddingLeft:"1rem",maxWidth:"90%"})}}));t.a=function(e){var t=e.text,n=i();return Object(c.jsx)("div",{className:n.text,children:Object(c.jsxs)("p",{children:["\u201c",t,"\u201d"]})})}}}]);
//# sourceMappingURL=5.07c8eccc.chunk.js.map