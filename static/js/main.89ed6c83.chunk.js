(this.webpackJsonpface_recognition_brain=this.webpackJsonpface_recognition_brain||[]).push([[0],{221:function(e,t,a){},223:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),i=a.n(c),s=(a(68),a(1)),o=(a(69),function(e){var t=e.route,a=e.setRoute;return"signin"!==t&&r.a.createElement("nav",{className:"",onClick:function(){return a("signin")},style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{onClick:function(){return a("signin")},className:"f3 link dim white underline dib pa3 pointer"},"home"===t?"Sign out":"Sign In"))}),l=a(60),m=a.n(l),u=(a(70),a(61)),p=a.n(u),b=function(){return r.a.createElement("div",{className:"ma4 mt0"},r.a.createElement(m.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner pa3 tc"},r.a.createElement("img",{style:{paddingTop:"3px",width:"90%"},src:p.a,alt:"Brain"}))))},d=(a(71),r.a.createContext()),h=d.Provider,f=a(33),g=function(e,t,a,n,r){t(e),fetch("https://afternoon-retreat-89463.herokuapp.com/imageUrl",{method:"post",headers:{"content-Type":"application/json"},body:JSON.stringify({input:e})}).then((function(e){return e.json()})).then((function(e){e&&fetch("https://afternoon-retreat-89463.herokuapp.com/image",{method:"put",headers:{"content-Type":"application/json"},body:JSON.stringify({id:n.id})}).then((function(e){return e.json()})).then((function(e){r(Object(f.a)(Object(f.a)({},n),{},{entries:e}))})).catch(console.log),a(function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=Number(a.width),r=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*r,rightCol:n-t.right_col*n,bottomRow:r-t.bottom_row*r}}(e))})).catch((function(e){return console.log(e)}))},E=function(){var e=Object(n.useContext)(d),t=e[0],a=e[2],c=e[4],i=e[6],s=e[7],o=e[8];return r.a.createElement("div",null,r.a.createElement("p",{className:"f3 mv4 white tc"},"This Magic Brain Will Detect Faces In Your Pictures.Give It A Try."),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"form pa4 br3 shadow-5 center"},r.a.createElement("input",{className:"f4 pa2 w-70 ",type:"text",onChange:a}),r.a.createElement("button",{className:"w-30  grow f4 link ph3 pv2 dib white bg-light-purple",onClick:function(){return g(t,c,i,s,o)}},"Detect"))))},w=(a(72),function(){var e=Object(n.useContext)(d),t=Object(s.a)(e,6),a=t[3],c=t[5];return r.a.createElement("div",{className:"cent ma"},r.a.createElement("div",{className:"absolute center mt2"},r.a.createElement("img",{id:"inputImage",src:a,alt:"",width:"500px",height:"auto"}),r.a.createElement("div",{className:"bounding-box",style:{top:c.topRow,right:c.rightCol,bottom:c.bottomRow,left:c.leftCol}})))}),v=function(){var e=Object(n.useContext)(d),t=Object(s.a)(e,8)[7];return r.a.createElement("div",{className:"tc "},r.a.createElement("div",{className:"f3 black "},"".concat(t.name,", your current rank is... ")),r.a.createElement("div",{className:"f1 black "},t.entries))},N=a(62),y=a.n(N),A=(a(221),function(){return r.a.createElement("div",{className:"particles "},r.a.createElement(y.a,{params:{particles:{line_linked:{shadow:{}},number:{value:30,density:{enable:!0,value_area:200}},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"repulse"}}}}}))}),j=function(e){e.route;var t=e.setRoute,a=Object(n.useState)(""),c=Object(s.a)(a,2),i=c[0],o=c[1],l=Object(n.useState)(""),m=Object(s.a)(l,2),u=m[0],p=m[1],b=Object(n.useContext)(d),h=b[4],f=b[8];return r.a.createElement("article",{className:"br3 panel ba dark-gray b--black-10 mv4 w-120 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80 "},r.a.createElement("form",{className:"measure tc "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0 "},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:function(e){return o(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:function(e){return p(e.target.value)}}))),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",onClick:function(e){e.preventDefault(),fetch("https://afternoon-retreat-89463.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:u})}).then((function(e){return e.json()})).then((function(e){e.id&&(f({id:e.id,name:e.name,email:e.email,entries:e.entries,joined:e.joined}),h(""),t("home"))}))},value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3"},r.a.createElement("p",{onClick:function(){return t("register")},className:"f6 link dim black db pointer"},"Register")))))},O=function(e){var t=e.setRoute,a=Object(n.useContext)(d),c=Object(s.a)(a,9)[8],i=Object(n.useState)(""),o=Object(s.a)(i,2),l=o[0],m=o[1],u=Object(n.useState)(""),p=Object(s.a)(u,2),b=p[0],h=p[1],f=Object(n.useState)(""),g=Object(s.a)(f,2),E=g[0],w=g[1];return r.a.createElement("article",{className:"br3 panel ba dark-gray b--black-10 mv4 w-120 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80 "},r.a.createElement("form",{className:"measure tc "},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"f1 fw6 ph0 mh0 "},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Name"),r.a.createElement("input",{onChange:function(e){h(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name"})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Email"),r.a.createElement("input",{onChange:function(e){m(e.target.value)},className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6"},"Password"),r.a.createElement("input",{onChange:function(e){w(e.target.value)},className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),r.a.createElement("div",{className:""},r.a.createElement("input",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",onClick:function(e){e.preventDefault(),fetch("https://afternoon-retreat-89463.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:E,name:b})}).then((function(e){return e.json()})).then((function(e){c({id:e.id,name:e.name,email:e.email,entries:e.entries,joined:e.joined}),e.email&&t("home")}))},value:"Register"})))))};var B=function(){var e=Object(n.useState)("signin"),t=Object(s.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"center"},r.a.createElement(A,null),r.a.createElement(o,{route:a,setRoute:c}),"home"===a?r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(E,null),r.a.createElement(w,null)):"signin"===a?r.a.createElement(j,{route:a,setRoute:c}):r.a.createElement(O,{setRoute:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(222);var R=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),m=l[0],u=l[1],p=Object(n.useState)({}),b=Object(s.a)(p,2),d=b[0],f=b[1],g=Object(n.useState)({id:"",name:"",email:"",entries:0,joined:""}),E=Object(s.a)(g,2),w=E[0],v=E[1],N=[c,i,function(e){i(e.target.value)},m,u,d,f,w,v];return r.a.createElement(h,{value:N},e.children)};i.a.render(r.a.createElement(R,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t){e.exports="data:image/png;base64,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"},63:function(e,t,a){e.exports=a(223)},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.89ed6c83.chunk.js.map