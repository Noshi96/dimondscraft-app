"use strict";(self.webpackChunkdimondscraft_app=self.webpackChunkdimondscraft_app||[]).push([[715],{6257:function(n,e,t){t.d(e,{N:function(){return i}});var i=t(7691).ZP.div.withConfig({displayName:"AdjustingSection",componentId:"sc-1icqn75-0"})(["max-width:1980px;width:90%;margin:0 auto;box-sizing:content-box;position:relative;"])},7226:function(n,e,t){t.d(e,{F:function(){return i}});var i=t(7691).ZP.div.withConfig({displayName:"PageWrapper",componentId:"sc-k4k6x8-0"})(["width:100%;margin:0 auto;box-sizing:content-box;position:relative;"])},635:function(n,e,t){t.r(e),t.d(e,{default:function(){return _n}});var i=t(2791),o=t(885),r=t(7691),a=t(1087),c=t.p+"static/media/logoforge.583b901efc9bc2be1e0b.png",s=t(184),d=r.ZP.div.withConfig({displayName:"Logo__Wrapper",componentId:"sc-2si3u9-0"})(["display:flex;align-items:center;"]),f=r.ZP.img.withConfig({displayName:"Logo__Image",componentId:"sc-2si3u9-1"})(["width:100%;height:4rem;"]),l=function(){return(0,s.jsx)(d,{children:(0,s.jsx)(a.OL,{to:"/",children:(0,s.jsx)(f,{src:c,loading:"lazy",alt:"logo_diamondscraft"})})})},A=t(7226),g=t(6809),u=t(7389),p=t(1228),m=t(8008),h=t(4307),x=r.ZP.ul.withConfig({displayName:"Nav__NavList",componentId:"sc-1tr5jw5-0"})(["display:flex;flex-direction:column;gap:1rem;margin-top:2rem;list-style-type:none;padding-inline-start:0;"]),b=r.ZP.li.withConfig({displayName:"Nav__Item",componentId:"sc-1tr5jw5-1"})(["cursor:pointer;"]),C=(0,r.ZP)(a.OL).withConfig({displayName:"Nav__NavLinkStyled",componentId:"sc-1tr5jw5-2"})(["min-height:60px;",";border:1px solid transparent;&.active{background-color:#2c1b96;color:#ffffff;border:1px solid transparent;}&:hover{background-color:#2c1b96;color:#ffffff;border:1px solid transparent;}"],h.j),w=function(){return(0,s.jsx)(x,{children:[{key:"home",destination:"/",nameOfPage:"Strona g\u0142\xf3wna",exact:!0,scrollHook:"entryPageStartHook"},{key:"about",destination:"/about",nameOfPage:"O nas",scrollHook:"entryPageEndHook"},{key:"gallery",destination:"/gallery",nameOfPage:"Galeria",scrollHook:"entryPageEndHook"},{key:"contact",destination:"/contact",nameOfPage:"Kontakt",scrollHook:"entryPageEndHook"}].map((function(n){var e=n.key,t=n.destination,i=n.nameOfPage,o=n.exact,r=n.scrollHook;return(0,s.jsx)(b,{children:(0,s.jsx)(C,{end:o,to:t,onClick:function(){return function(n){setTimeout((function(){document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}),300)}(r)},children:i})},e)}))})},B="undefined"!==typeof navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent),y=function(){var n=(0,i.useState)(!1),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=function(n){return function(e){null!==e&&void 0!==e&&e.type&&["Tab","Shift"].includes(e.key)||r(n)}};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(p.Z,{onClick:a(!0),size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:(0,s.jsx)(m.Z,{style:{fontSize:40}})}),(0,s.jsx)(u.Z,{anchor:"right",open:t,onClose:a(!1),onOpen:a(!0),disableBackdropTransition:!B,disableDiscovery:B,PaperProps:{sx:{backgroundColor:"#080924"}},children:(0,s.jsx)(g.Z,{sx:{width:250},role:"presentation",onClick:a(!1),onKeyDown:a(!1),children:(0,s.jsx)(w,{})})})]})};var P,I,k,j,v,L,E,R,Z,U,F,D,O,S,z,H,G,M,N,Q,T=t(4961),K=r.ZP.header.withConfig({displayName:"NavBar__Wrapper",componentId:"sc-jo9utr-0"})(["height:5rem;display:flex;position:fixed;top:0;width:100%;color:#ffffff;z-index:12;","{display:flex;align-items:center;justify-content:space-between;}transition-timing-function:ease-in;transition:0.5s;",";@media only screen and (","){background-color:transparent;}"],A.F,(function(n){return n.showState?"background-color:#000000cc;":"background-color:transparent;"}),T.A.tablet),X=function(){var n=(0,i.useState)(!1),e=(0,o.Z)(n,2),t=e[0];return function(n,e){var t=function(){return window.scrollY<e?n(!1):n(!0)};(0,i.useEffect)((function(){return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}))}(e[1],300),(0,s.jsx)(K,{showState:t,children:(0,s.jsxs)(A.F,{children:[(0,s.jsx)(l,{}),(0,s.jsx)(y,{})]})})},q=t(168),W=t.p+"static/media/metropolis.regular.67a1988d7b65b0aaa16d.otf",Y=t.p+"static/media/metropolis.bold.c5e04fafcff6fc79cd76.otf",V=(0,r.vJ)(P||(P=(0,q.Z)(["\n\n  @font-face {\n    font-family: Metropolis;\n    src: url(",') format("opentype");\n  }\n\n  @font-face {\n    font-family: Metropolis;\n    font-weight: 700;\n    src: url(',') format("opentype");\n  }\n\n  html,\n  body {\n    margin: 0;\n    padding: 0;\n    line-height: 1.5;\n  }\n\n  body {\n    font-family: Metropolis;\n    height: 100vh;\n    background-color: #000000;\n  }\n\n  body.fontLoaded {\n    font-family: Metropolis;\n  }\n  \n  p,\n  label {\n    line-height: 1.5em;\n  }\n\n  input, select, button {\n    font-family: inherit;\n    font-size: inherit;\n  }\n\n  .icon {\n    width: 1.5rem;\n    height: 1.5rem;\n  }\n\n  * {\n    box-sizing: border-box;\n    text-decoration: none;\n  }\n'])),W,Y),J=t(7689),_=r.ZP.div.withConfig({displayName:"Header3",componentId:"sc-184x6ri-0"})(["font-size:2rem;margin-bottom:1.25rem;font-family:Metropolis,sans-serif;font-weight:700;"]),$=r.ZP.img(I||(I=(0,q.Z)(["\n  width: 40px;\n  height: 40px;\n  transition: all 0.3s ease-in-out;\n  margin-right: 3rem;\n\n  &:hover {\n    transform: translateY(-8px);\n  }\n"]))),nn=function(n){var e=n.path,t=n.redirectionLink,i=n.altText;return(0,s.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:(0,s.jsx)($,{src:e,alt:i})})},en=r.ZP.div(k||(k=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  color: #ffffff;\n  margin-bottom: 2.5rem;\n"]))),tn=r.ZP.div(j||(j=(0,q.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n"]))),on=function(n){var e=n.headerText,t=n.media;return(0,s.jsxs)(en,{children:[(0,s.jsxs)(_,{children:[" ",e," "]}),(0,s.jsx)(tn,{children:t.map((function(n,e){var t=n.path,i=n.redirectionLink,o=n.altText;return(0,s.jsx)(nn,{path:t,redirectionLink:i,altText:o},e)}))})]})},rn=t(4165),an=t(5861),cn=t(1044),sn=r.ZP.div(v||(v=(0,q.Z)(["\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: flex-start;\n"]))),dn=r.ZP.div(L||(L=(0,q.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]))),fn=r.ZP.img(E||(E=(0,q.Z)(["\n  width: ","px;\n  height: ","px;\n  margin-right: ","px;\n"])),16,16,8),ln=r.ZP.div(R||(R=(0,q.Z)(["\n  margin-right: 4rem;\n  font-size: 1.2rem;\n"]))),An=r.ZP.div(Z||(Z=(0,q.Z)(["\n  font-size: 1.2rem;\n  margin: 0.5rem 0 0 ","px;\n  color: #aaaaaa;\n"])),8),gn=function(n){var e=n.iconPath,t=n.name,i=n.price,o=n.className;return(0,s.jsxs)(sn,{className:o||"",children:[(0,s.jsxs)(dn,{children:[(0,s.jsx)(fn,{src:e,alt:t}),(0,s.jsxs)(ln,{children:[" ",t," "]})]}),(0,s.jsxs)(An,{children:[" ",i||"-"," PLN "]})]})},un=new Intl.NumberFormat("pl-PL",{style:"currency",currency:"PLN"}),pn=function(n){return un.format(n).slice(0,-3)},mn=r.ZP.div(U||(U=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  color: #ffffff;\n  margin-bottom: 4rem;\n"]))),hn=(0,r.ZP)(gn)(F||(F=(0,q.Z)(["\n  margin-bottom: 1rem;\n"]))),xn=function(){var n=(0,i.useState)({bitcoin:"-",ethereum:"-",cardano:"-",doge:"-"}),e=(0,o.Z)(n,2),t=e[0],r=e[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,an.Z)((0,rn.Z)().mark((function n(){var e,t,i,a,c,s;return(0,rn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([cn.ZP.get("https://api.coingecko.com/api/v3/coins/bitcoin"),cn.ZP.get("https://api.coingecko.com/api/v3/coins/ethereum"),cn.ZP.get("https://api.coingecko.com/api/v3/coins/cardano"),cn.ZP.get("https://api.coingecko.com/api/v3/coins/dogecoin")]);case 2:e=n.sent,t=(0,o.Z)(e,4),i=t[0],a=t[1],c=t[2],s=t[3],r({bitcoin:pn(i.data.market_data.current_price.pln),ethereum:pn(a.data.market_data.current_price.pln),cardano:pn(c.data.market_data.current_price.pln),doge:pn(s.data.market_data.current_price.pln)});case 9:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,s.jsxs)(mn,{children:[(0,s.jsx)(_,{children:" Aktualne ceny kryptowalut: "}),(0,s.jsx)(hn,{iconPath:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFYUlEQVR4XtVby47URhSdT+gd7m6izDJfkCyZTdYg5QMgX8B8AT0fkKiDbQmJLCCrZLIIqyiREgkJKZFYgZRoWCGkhB0LRIC2+zHt1KnGnvKth8v2dbf7SEeasavKvtf3VY8+OOgYyZ3Dw3fh+EYaD6ezaPQgjUZPknD0IolGWYniGu6hjfh/8j4aXUvuBId0vL1AEl0+gsBGQesyFmPEo3tvxZj0Ob1Cdm8wEC98MovGrzUhuCiUsYjH13tlGVsRnBDPmsHCdq2IWTw+3qbgGj9YBH2vzgHNJ9H4ofZCuyLixLasYedf3UKRPV7PwuExfV9WCMG/oQ/uG0X6PKHvzQIx8H36sN5SpE36/q2QxqJ4oQ/pOdNo+ITK0Qh79eUp21qCGOREG3TPiHqByuUFRHs6GCfnP32RrV/9na3OTrPFz19m6f1PtTZcrJ0dkFO7TnXLx19lKtLvPy/ucSsEKbJWnSALC8NAnDx/+Wch/Dp9U1yfC0UU14WFLH67qfVtxuFDKqcRiZi66p35qWL1/Jfi+uL349I9uArt25SVriBLXKavfy6Ekj7+9O7GpO9+UtyDUCoWj26V+qlQ+7UlXCGbDgZU7gKcld76v39LggAweyhk9fzX0nXV/9V+5y//0MZl4ITKLcEZ+FQ/9gEsAFZB+0FZdOy2tFoBp+/nKa4uEAxVcPo/oW4FXL6vMv3uMxnUqGC+gMvwZYELwgrKwkeXj2gjTsLE22D95h92RbyNgqMLBYiamTbgJE1tKlbPTr3dBe24CqQ0VErkLsxfJYQ0QY3yhbtUKAPWwJIaw9GLjfByecvQgJGmlAjYorxUhKUPgDKa9mnCLB5+LKa7H12jNziJL2uDK8qjNrBBLZ1bEQuq4o+JdoORLv+vMmV1vkDBEQtkHEg3W1HaTS76+L+NtCxWwaGAWTR8IBQw7nS5yxbUbP5f6uuIA7RtE86wbMayf2ehy/8xA0QMMLkBrq2e/Ui7FPCxHi8iE2gXGYlZoA9gJXKidHYqFVNVOXIWRZ0qwOb/bcCVAnN2qgCb/zfB+tVfrF8+Z2cKcPm/9H2R55EiZSnsCHYAXKIL4cHOgqDL/02BD+0R3FxYPv1W69eKCIJdpUGb/1dF8KrpM2cMkGmwq0LI5v8++Z+uGaqAckwW1ISbQigcT+mNtqzyf9reRJsCgblwF9q+IScHOMFluFGLy0e3ZB6HecKXXUWM79dzzQO4AuL7+NLVg2TafjpcFcVzVPl/aUxHHGCzgOmH3aI2mcA126OAWfu4wPLx17RrCRwToSQcbhZEgDZxwOWrLuR7BFgvhBJlTSD+d5k+cC6eR9+hEUNl6zyJgsaLovlSVp21vTbg8v8kDK4UCgC4NkVUhXAD64H0eY2omn+OOfPKEM3lsA5XYKuCXAzl8H0wDvSzhdn0cMBlBSDdC8j3/6hifIDswSW8PCuQR38KTiuw7f/TIgkbpagdUEPIjdOzHwpCiVyC5yztB1BwWoFq7s79f66c7kPh+9avnwOHCLSONUnNXN3/p8HRtzJkocn3TcBxEq1zDcLf4be5FVj3/7lyug9Nkd8GmAmXK6iVn+b/HjNDDs5CR+CzgcMVTIRC4BKwkG35fxpduknl80KbErk/DPTDEHWw10dlw6DdUdkc8pdedPCek+2wdI69sgSuL08xF/6kPaxndFZ6HEB24EqRnESqaxzt60Iuo6GsNLzIbigKt7p5ngPvwuDGLhWx1a9uAzSPekFWW4aX7IKbZwUT44nPXQGK6Noieim4CcswuIJFRxZliDEQ2bU1vH0BLGN+e3RVCDO5+Pm8QTEQNNr8fF4KfDu4Lo+xdYz/ARoVoWCLdt/JAAAAAElFTkSuQmCC",name:"Bitcoin (BTC)",price:null===t||void 0===t?void 0:t.bitcoin}),(0,s.jsx)(hn,{iconPath:"data:image/png;base64,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",name:"Ethereum (ETH)",price:null===t||void 0===t?void 0:t.ethereum}),(0,s.jsx)(hn,{iconPath:"data:image/png;base64,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",name:"Cardano (ADA)",price:null===t||void 0===t?void 0:t.cardano}),(0,s.jsx)(hn,{iconPath:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEcklEQVR4Xu1aQUsbURD2J/gP9CeI2ZTipfoDWj170VN7rP8g/gDBXuslhboboS2ihfYiLN1EAq01kF7qIQYpFoXSSAm0tIftm5dsSObNbvL2zSa74gcfgezse29m583Mm92pqYRRLd2f9Urz6xUnv112rH3BmlfKNcWv38/ufzUpU7IKnpNbgXvxeJmAUGARFKYU1aUYp1kp5YswJp4nVagVF6fLtrUpFt3CSnBRGsO5t5YqzxiH4gRbFcfanrghxCI2YDHEAsfCwCPwuhIHWF7sSRcvaFIEQ4zNGyb91ENpWy1v19rA62VF2c49UyZOG0U8wutmgcjLL5TJUsqKnSvi9RuhYuehQFEmSjVtq4b1iIUsPXlMY0/o5ndl4CwR6gWs10joRntlwCxSOzvIPJ/GVBeXIkVq1QlQWCiDZJ8u1pOEZ+fXiZtvBYduBXATjqcfF//+/vLbP8/8H99c/6y66X88eKiMbUSxFdzi3DTWuweuSo8TV+eHvIYoWQWstwRn4EsCF/UdZZ5YDPMCzr2fFC6/OspcsUh5AcfeD0gB9vZV4zCUN9cnMgYMA4snCC8YUB76bYqQASlc1J8rchRP36/61423+PYB1I+eKPdp82Vfj1E2HbGAASmMaoCAnw4e+X/a3/EwEr/bl4q8Lr3+EpnT/YEUdA0ArL5e8tutMzyUBKRJLK9DcchrSuW70V8RMCGFOAYAgidQseHm6kSR1eXxm4UZOO6u4AumpBDXAECI/hSqr5YUWR1WnNwaBMACvmBKCiYGgKBHwXwbiDhQ7ryuUi6akIKJAYDUNmCoC/bBAOztLgqmBqCCIdQWWE6TNYgBTeKCNiEoBaQAqatfhmJUzU/VBqbpUGYC/GdcciDKAGGBEMvpMjMGgC1EAcvp8s4A+I+4hMNMQApQ1vbLUIzK64ltAa4g2E8KplkAukQYXEEwE2mQ8iyGcrh2VwhBOUhcMCIFEwOcvlvFw0mYlsKyM+TZ82ytsIAUTAxwfa4WQYCorDEKj/es5Sk3A8dhCgz733eLc7OyJ8CdCSjEMQCkxbCukKn79xoiHQPwxgEKugaAJw+HHQqm6Q/o9b86hwYhFjAhhVENAGf/iy87ZNQPUD96rNynS8/JP+gZQBqB6aUIkMKwtjgUOlFKBxjVkFEccP+eARg7Q0mBQ3mgbIVhwOuiMpMXcAM8o3GypcwTi51XY7NYfwkuL+DEsEaJLgfeB2BweUFcwJOGtAfxoPF5K/J0GIew90OffgD4iADfeFtI7n0KQtjFN2edZOQPA7hJmWErpIVC+fDAF4ZbtRXs/FOs30jgLpEnQpv4GEIH3m52P5UdqPdNUE6gbZY4uT6WDpAlT2B78hiwn/BkaWNkpceBbnZIXYqEVBc72usCcip3F8mQrnae5wA0VCdpiLE+9TB0vMHaloshFpkEO4pbBfKLz0lBGiJhj0il4hSg3wapiMMYMEbHw1APLyuQnrFnLXebLfAarkYZpvsfFFz7oPAHcXQ9thdm8Hjc+A+dKAwVhNCYiAAAAABJRU5ErkJggg==",name:"Dogecoin (doge)",price:null===t||void 0===t?void 0:t.doge})]})},bn=function(){var n=function(){setTimeout((function(){document.getElementById("entryPageEndHook").scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}),300)};return(0,s.jsx)(Cn,{children:(0,s.jsxs)(wn,{children:[(0,s.jsx)(Bn,{children:(0,s.jsxs)(yn,{end:!0,to:"/",onClick:n,children:[" ","Strona g\u0142\xf3wna".toUpperCase()," "]})}),(0,s.jsx)(Bn,{children:(0,s.jsxs)(yn,{to:"/about",onClick:n,children:[" ","O nas".toUpperCase()," "]})}),(0,s.jsx)(Bn,{children:(0,s.jsxs)(yn,{to:"/gallery",onClick:n,children:[" ","Galeria".toUpperCase()," "]})}),(0,s.jsx)(Bn,{children:(0,s.jsxs)(yn,{to:"/contact",onClick:n,children:[" ","Kontakt".toUpperCase()," "]})})]})})},Cn=r.ZP.div(D||(D=(0,q.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  color: #ffffff;\n  margin-bottom: 1rem;\n"]))),wn=r.ZP.div(O||(O=(0,q.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  gap: 1rem 1rem;\n\n  @media only screen and (",") {\n    margin: 8rem 0 0 0;\n  }\n"])),T.A.laptop),Bn=r.ZP.div(S||(S=(0,q.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  gap: 1rem;\n"]))),yn=(0,r.ZP)(a.OL)(z||(z=(0,q.Z)(["\n  background: transparent;\n  color: #aeaeae;\n  border: transparent;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n  font-size: 1.2rem;\n  box-sizing: border-box;\n  padding: 6px 8px;\n\n  &:hover {\n    background: #ffffff11;\n  }\n\n  &.active {\n    background-color: #ffffff;\n    color: #22192f;\n  }\n"]))),Pn=t.p+"static/media/onebidlogo.47235d3a53661b4adec7.png",In=t.p+"static/media/spotify.085c722f5c9fd20131cc.png",kn=t(6257),jn={fullScreen:{enable:!1},particles:{number:{value:70,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:4}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:.1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:10,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:110,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},fpsLimit:24,interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},vn=t(7693),Ln=t(4e3),En=(0,r.ZP)(vn.Z)(H||(H=(0,q.Z)(["\n  height: ",";\n"])),(function(n){return n.height?n.height:"0"})),Rn=function(n){var e=n.width,t=n.options,o=n.height,r=n.style,a=n.id,c=(0,i.useCallback)(function(){var n=(0,an.Z)((0,rn.Z)().mark((function n(e){return(0,rn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,Ln.R)(e);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(En,{id:a,init:c,options:t,width:e,height:o,style:r})})},Zn=r.ZP.div(G||(G=(0,q.Z)(["\n  width: 100%;\n  background: transparent;\n"]))),Un=(0,r.ZP)(kn.N)(M||(M=(0,q.Z)(["\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n  justify-content: space-around;\n\n  @media only screen and (",") {\n    flex-direction: row;\n  }\n"])),T.A.laptop),Fn=r.ZP.div(N||(N=(0,q.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 4rem;\n\n  @media only screen and (",") {\n    min-width: 400px;\n    margin-top: 12rem;\n  }\n"])),T.A.laptop),Dn=r.ZP.div(Q||(Q=(0,q.Z)(["\n  margin: 4rem auto 0 auto;\n  color: #aeaeae;\n  font-size: 0.8rem;\n  font-weight: bold;\n"]))),On=function(){var n=[{path:"data:image/png;base64,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",redirectionLink:"https://twitter.com/diamondsct",altText:"TwitterLogo"}],e=[{path:"data:image/png;base64,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",redirectionLink:"https://opensea.io/DCFT/",altText:"OpenseaLogo"},{path:In,redirectionLink:"https://open.spotify.com/show/33bLiSdONLfzUd8oNMYLTn?si=5dd99fa2d0744767",altText:"SpotifyLogo"},{path:Pn,redirectionLink:"https://onebid.pl/pl/auction/-/3391",altText:"OneBidLogo"}];return(0,s.jsxs)(Zn,{children:[(0,s.jsx)(Rn,{width:"100%",height:"100%",options:jn,style:{position:"absolute",zIndex:"-1"},id:"FooterParticles"}),(0,s.jsxs)(Un,{children:[(0,s.jsx)(Fn,{children:(0,s.jsx)(xn,{})}),(0,s.jsxs)(Fn,{children:[(0,s.jsx)(on,{headerText:"Do\u0142\u0105cz do naszej spo\u0142eczno\u015bci:",media:n}),(0,s.jsx)(on,{headerText:"Jeste\u015bmy dost\u0119pni tak\u017ce na:",media:e})]})]}),(0,s.jsx)(Un,{children:(0,s.jsx)(bn,{})}),(0,s.jsx)(Un,{children:(0,s.jsx)(Dn,{children:" \u24b8 DIAMONDS CRAFT. ALL RIGHTS RESERVED. "})})]})},Sn=t.p+"static/media/tlosmall.0f66f70c673bdfc58388.webp",zn=t.p+"static/media/samantacompressed.e7912081c98bb6fb46d2.webp";var Hn,Gn,Mn,Nn,Qn,Tn=function(n){return new Promise((function(e){return setTimeout(e,n)}))},Kn=r.ZP.section(Hn||(Hn=(0,q.Z)(["\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: hidden;\n  background: transparent;\n  z-index: 10;\n"]))),Xn=(0,r.ZP)(kn.N)(Gn||(Gn=(0,q.Z)(["\n  color: #ffffff;\n  flex-direction: column;\n  position: relative;\n  display: flex;\n  height: 100%;\n  box-sizing: border-box;\n"]))),qn=r.ZP.div(Mn||(Mn=(0,q.Z)(["\n  width: 100%;\n  height: 100vh;\n  object-fit: cover;\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  z-index: -2;\n  background-attachment: fixed;\n"])),Sn),Wn=r.ZP.div(Nn||(Nn=(0,q.Z)(["\n  width: 100%;\n  height: 100vh;\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  position: absolute;\n  z-index: 5;\n  background-attachment: fixed;\n"])),zn),Yn=r.ZP.h1(Qn||(Qn=(0,q.Z)(["\n  margin-top: auto;\n  color: #ffffff;\n  box-sizing: border-box;\n  padding: 0 0 3rem 0;\n  font-size: 1.7rem;\n  text-shadow: 0 0 6px #000000, 0 0 12px #000000, 0 0 18px #000000;\n  display: flex;\n  justify-content: flex-start;\n\n  @media only screen and (",") {\n    padding: 0 3rem;\n    font-size: 4rem;\n  }\n\n  @media only screen and (",") {\n    padding: 0 9rem;\n  }\n"])),T.A.tablet,T.A.laptop),Vn=function(){var n=(0,i.useState)(""),e=(0,o.Z)(n,2),t=e[0],r=e[1];return function(n,e){var t="We Forge The Future";(0,i.useEffect)((function(){function i(){return(i=(0,an.Z)((0,rn.Z)().mark((function i(){var o,r;return(0,rn.Z)().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,n(1200);case 2:o=0,r=setInterval((0,an.Z)((0,rn.Z)().mark((function n(){var i;return(0,rn.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=t[o++],e((function(n){return n.concat(i)})),o===t.length&&clearInterval(r);case 3:case"end":return n.stop()}}),n)}))),60);case 4:case"end":return i.stop()}}),i)})))).apply(this,arguments)}!function(){i.apply(this,arguments)}()}),[n,e])}(Tn,r),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(qn,{}),(0,s.jsx)(Rn,{width:"100%",height:"100%",options:jn,style:{position:"absolute",zIndex:"-1"},id:"NewEntrySectionParticles"}),(0,s.jsx)(Wn,{}),(0,s.jsx)(Kn,{children:(0,s.jsx)(Xn,{children:(0,s.jsxs)(Yn,{children:[" ",t," "]})})})]})},Jn=i.lazy((function(){return Promise.all([t.e(170),t.e(955)]).then(t.bind(t,8581))})),_n=function(){var n,e=(0,J.pC)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(X,{}),(0,s.jsx)("div",{id:"entryPageStartHook"}),(0,s.jsx)(Vn,{}),(0,s.jsx)("div",{id:"entryPageEndHook"}),e||(n=(0,s.jsx)(Jn,{}),(0,s.jsx)(i.Suspense,{fallback:"Loading...",children:n})),(0,s.jsx)(On,{}),(0,s.jsx)(V,{}),(0,s.jsx)(a.GI,{})]})}},4961:function(n,e,t){t.d(e,{A:function(){return r}});var i="1200px",o="1900px",r={tablet:"(min-width: ".concat("768px",")"),laptop:"(min-width: ".concat(i,")"),desktop:"(min-width: ".concat(o,")")}},4307:function(n,e,t){t.d(e,{j:function(){return r}});var i,o=t(168),r=(0,t(7691).iv)(i||(i=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 0;\n  text-transform: capitalize;\n  font-size: 1.1rem;\n  transition: all 0.4s;\n  background-color: transparent;\n  color: #ffffff;\n  border: 1px solid #ffffff;\n  cursor: pointer;\n\n  &:link,\n  &:visited {\n    color: #ffffff;\n  }\n  &:hover {\n    background-color: #2c1b96;\n    color: #ffffff;\n    border: 1px solid #ffffff;\n  }\n"])))}}]);
//# sourceMappingURL=715.480ce4f0.chunk.js.map