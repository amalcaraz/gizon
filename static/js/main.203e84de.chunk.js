(this.webpackJsonpgizon=this.webpackJsonpgizon||[]).push([[0],{45:function(n,e,t){},46:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var a=t(1),i=t(2),r=t.n(i),o=t(19),c=(t(45),t(11)),s=(t(46),t(14)),l=t(4),d=t(3),u=t(15),p=t(31),b="rgba(8, 8, 8, 1)",j=320,m=375,f=425,x=768,h=1024,O=1440,g=2560,v={mobileS:"(min-width: ".concat(j,"px)"),mobileM:"(min-width: ".concat(m,"px)"),mobileL:"(min-width: ".concat(f,"px)"),tablet:"(min-width: ".concat(x,"px)"),laptop:"(min-width: ".concat(h,"px)"),laptopL:"(min-width: ".concat(O,"px)"),desktop:"(min-width: ".concat(g,"px)"),desktopL:"(min-width: ".concat(g,"px)")};t(49);function y(){var n=Object(l.a)(["\n  ","\n\n  * {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: 'Crimson Text', serif;\n    font-weight: 400;\n    background-color: #fff;\n    color: ",";\n    overflow-y: scroll;\n    overflow-x: hidden !important;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  p {\n    font-family: roboto, sans-serif;\n    line-height: 24px;\n    font-weight: 400;\n    color: #777;\n  }\n\n  h1 {\n    text-transform: uppercase;\n    font-size: 30px;\n    font-style: normal;\n    font-weight: 600;\n    margin: 1rem 0;\n\n    @media "," {\n      font-size: 40px;\n    }\n  }\n\n  ::selection {\n    background: #080808;\n  }\n\n  a, a:link, a:visited, a:focus, a:hover, a:active {\n    position: relative;\n    font-family: 'Crimson Text', serif;\n    text-decoration: none;\n    color: ",";\n    line-height: 1.5rem;\n\n    &:after {\n      position: absolute;\n      content: '';\n      top: 100%;\n      left: 0;\n      width: 100%;\n      height: 1px;\n      background-color: ",";\n      opacity: 0;\n      transition: opacity .25s 0s linear;\n    }\n\n    &:hover, &.active {\n      &:after {\n        opacity: 1;\n      }\n    }\n  }\n"]);return y=function(){return n},n}var w=Object(d.a)(y(),p.a,b,v.tablet,b,b);function k(){var n=Object(l.a)(["\n  margin: 0 auto;\n  padding: 0 ","px;\n  width: 100%;\n\n  /* @media "," {\n    max-width: ","px;\n  }\n  @media "," {\n    max-width: ","px;\n  }\n  @media "," {\n    max-width: ","px;\n  } */\n  @media "," {\n    padding: 0;\n    max-width: ","px;\n  }\n  @media "," {\n    max-width: ","px;\n  }\n  @media "," {\n    max-width: ","px;\n  }\n  @media "," {\n    max-width: ","px;\n  }\n"]);return k=function(){return n},n}function z(n){return n-.08*n}var C=d.c.div(k(),20,v.mobileS,z(j),v.mobileM,z(m),v.mobileL,z(f),v.tablet,z(x),v.laptop,z(h),v.laptopL,z(O),v.desktop,z(g)),S=function(n){var e=n.children;return Object(a.jsx)(C,{children:e})};function q(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media "," {\n    ","\n  }\n"]);return q=function(){return n},n}function N(){var n=Object(l.a)(['\n  display: grid;\n  margin: 20px 0;\n\n  grid-template:\n    "col1"\n    "col2"\n    auto / 100%;\n\n  @media ',' {\n    grid-template:\n      "col1 col2"\n      auto / 50%;\n  }\n\n  @media '," {\n    margin: 80px 0;\n  }\n"]);return N=function(){return n},n}var L=d.c.section(N(),v.tablet,v.tablet),T=d.c.div(q(),v.tablet,(function(n){return n.reverse?"\n      justify-content: flex-start;\n      grid-area: col1;\n    ":"\n      justify-content: flex-end;\n      grid-area: col2;\n    "})),I=function(n){var e=n.reverse,t=n.children;return Array.isArray(t)?Object(a.jsxs)(L,{children:[Object(a.jsx)(T,{reverse:!e,children:t[0]}),Object(a.jsx)(T,{reverse:!!e,children:t[1]})]}):null};function U(){var n=Object(l.a)(["\n  ","\n  font-family: roboto, sans-serif;\n"]);return U=function(){return n},n}function E(){var n=Object(l.a)(["\n  text-transform: uppercase;\n  font-size: 30px;\n  font-style: normal;\n  font-weight: 600;\n  margin: 1rem 0;\n\n  @media "," {\n    font-size: 40px;\n  }\n"]);return E=function(){return n},n}function M(){var n=Object(l.a)(["\n  ","\n  font-size: 18px;\n  font-style: italic;\n  letter-spacing: 0;\n  text-transform: capitalize;\n\n  @media "," {\n    font-size: 22px;\n  }\n"]);return M=function(){return n},n}function A(){var n=Object(l.a)(["\n  line-height: 24px;\n  font-weight: 400;\n  color: #777;\n"]);return A=function(){return n},n}function F(){var n=Object(l.a)(["\n  padding: ","px 0;\n\n  @media "," {\n    padding: ","px;\n    max-width: 500px;\n  }\n"]);return F=function(){return n},n}var P=d.c.div(F(),40,v.laptop,20),G=Object(d.b)(A()),B=d.c.h6(M(),G,v.tablet),W=d.c.h3(E(),v.tablet),_=d.c.div(U(),G),H=function(n){var e=n.quote,t=n.title,i=n.children;return Object(a.jsxs)(P,{children:[e&&Object(a.jsx)(B,{children:e}),Object(a.jsx)(W,{children:t}),Object(a.jsx)(_,{children:i})]})},D=t(35);function Z(){var n=Object(l.a)(["\n  display: contents;\n"]);return Z=function(){return n},n}var K=d.c.picture(Z());function J(n){var e=n.split("."),t=e[e.length-1];return[e.slice(0,e.length-1).join("."),t]}var R=function(n){var e=n.src,t=n.alt,i=n.className,o=J(e),c=Object(s.a)(o,2),l=c[0],d=c[1],u=[{media:v.desktop,srcSet:V(l,v.desktop,d)},{media:v.laptop,srcSet:V(l,v.laptop,d)},{media:v.tablet,srcSet:V(l,v.tablet,d)},{media:v.mobileS,srcSet:V(l,v.mobileS,d)}],p="".concat(l,"-l.").concat(d),b="".concat(l,"-m.").concat(d,", ").concat(l,"-l.").concat(d," 2x");return Object(a.jsxs)(K,{children:[u.map((function(n){var e=n.media,t=n.srcSet;return Object(a.jsxs)(r.a.Fragment,{children:[Object(a.jsx)("source",{type:"image/webp",srcSet:t[0],media:e}),Object(a.jsx)("source",{srcSet:t[1],media:e})]},e)})),Object(a.jsx)("img",{className:i,src:p,srcSet:b,alt:t})]})};function V(n,e,t){switch(e){case v.desktop:return["".concat(n,"-xl.webp"),"".concat(n,"-xl.").concat(t)];case v.laptop:return["".concat(n,"-l.webp, ").concat(n,"-xl.webp 2x"),"".concat(n,"-l.").concat(t,", ").concat(n,"-xl.").concat(t," 2x")];case v.tablet:return["".concat(n,"-m.webp, ").concat(n,"-l.webp 2x"),"".concat(n,"-m.").concat(t,", ").concat(n,"-l.").concat(t," 2x")];default:return["".concat(n,"-s.webp, ").concat(n,"-m.webp 2x"),"".concat(n,"-s.").concat(t,", ").concat(n,"-m.").concat(t," 2x")]}}function Q(n,e,t){var a=Object(s.a)(t,2),i=a[0],r=a[1];return"\n    background-image: \n      image-set(\n        url(".concat(n,"-").concat(i,".").concat(e,") 1x,\n        url(").concat(n,"-").concat(r,".").concat(e,") 2x\n      );\n\n    background-image: \n      image-set(\n        url(").concat(n,"-").concat(i,".webp) 1x,\n        url(").concat(n,"-").concat(r,".webp) 2x\n      );\n  ")}function X(){var n=Object(l.a)(["\n  display: block;\n  font-style: italic;\n  font-size: 25px;\n  margin-top: 20px;\n\n  @media "," {\n    font-size: 30px;\n  }\n  @media "," {\n    font-size: 40px;\n  }\n  @media "," {\n    font-size: 50px;\n  }\n  @media "," {\n    font-size: 60px;\n  }\n"]);return X=function(){return n},n}function Y(){var n=Object(l.a)(["\n  font-size: 30px;\n  text-transform: uppercase;\n  font-style: normal;\n  letter-spacing: 1px;\n  font-weight: 600;\n  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);\n  transform-origin: 50% 50% 0px;\n\n  @media "," {\n    font-size: 40px;\n  }\n  @media "," {\n    font-size: 60px;\n  }\n  @media "," {\n    font-size: 80px;\n  }\n  @media "," {\n    font-size: 100px;\n  }\n"]);return Y=function(){return n},n}function $(){var n=Object(l.a)(["\n  font-family: 'Crimson Text', serif;\n  position: absolute;\n  text-align: center;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n\n  @media "," {\n    width: 80%;\n  }\n\n  color: #fff;\n  border-radius: 2px;\n  text-shadow: ","px ","px ","px ",",\n    -","px -","px ","px ",",\n    ","px -","px ","px ",",\n    -","px ","px ","px ",";\n"]);return $=function(){return n},n}function nn(){var n=Object(l.a)(["\n  position: relative;\n"]);return nn=function(){return n},n}function en(){var n=Object(l.a)(["\n  ","\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  ","\n\n  display: ",";\n\n  @media "," {\n    display: flex;\n  }\n"]);return en=function(){return n},n}function tn(){var n=Object(l.a)(["\n  height: 400px;\n  width: 100%;\n  overflow: hidden;\n  ","\n\n  @media "," {\n    height: 600px;\n  }\n\n  @media ",' {\n    height: 800px;\n    display: grid;\n    grid-template:\n      "col1 col2"\n      auto / 50%;\n  }\n']);return tn=function(){return n},n}function an(){var n=Object(l.a)(["\n  width: 100%;\n  overflow: hidden;\n"]);return an=function(){return n},n}function rn(){var n=Object(l.a)(["\n  && {\n    width: 50% !important;\n    height: auto;\n  }\n"]);return rn=function(){return n},n}function on(){var n=Object(l.a)(["\n  && {\n    ","\n    background-position: center center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n  }\n"]);return on=function(){return n},n}var cn=d.c.div(on(),(function(n){var e=J(n.src),t=Object(s.a)(e,2),a=t[0],i=t[1];return"\n    background-image: url(".concat(a,"-l.").concat(i,");\n\n    ").concat(Q(a,i,["s","m"]),"\n\n    @media ").concat(v.tablet," {\n      ").concat(Q(a,i,["m","l"]),"\n    }\n\n    @media ").concat(v.laptop," {\n      ").concat(Q(a,i,["l","xl"]),"\n    }\n\n    @media ").concat(v.desktop," {\n      ").concat(Q(a,i,["xl","xl"]),"\n    }\n  ")})),sn=Object(d.c)(R)(rn()),ln=Object(d.c)(D.Carousel)(an()),dn=d.c.div(tn(),(function(n){var e=n.color;return"background-color: ".concat(void 0===e?"#ccc":e,";")}),v.tablet,v.laptop),un=d.c.div(en(),(function(n){var e=n.color;return"background-color: ".concat(void 0===e?"#ccc":e,";")}),(function(n){var e=n.n;return"grid-area: col".concat(void 0===e?1:e,";")}),(function(n){return n.hideMobile?"none":"flex"}),v.laptop),pn=d.c.div(nn()),bn="rgba(0,0,0, 0.2)",jn=d.c.div($(),v.mobileL,3,3,10,bn,3,3,10,bn,3,3,10,bn,3,3,10,bn),mn=d.c.h1(Y(),v.mobileL,v.tablet,v.laptop,v.laptopL),fn=d.c.span(X(),v.mobileL,v.tablet,v.laptop,v.laptopL),xn=function(n){var e=n.title,t=n.subtitle;return Object(a.jsxs)(pn,{children:[Object(a.jsxs)(ln,{showArrows:!0,showIndicators:!0,showStatus:!1,showThumbs:!1,autoPlay:!0,transitionTime:1e3,infiniteLoop:!0,interval:5e3,dynamicHeight:!1,emulateTouch:!0,stopOnHover:!1,preventMovementUntilSwipeScrollTolerance:!0,children:[Object(a.jsxs)(dn,{children:[Object(a.jsx)(un,{color:"#4c1c38",n:1,children:Object(a.jsx)(sn,{src:"./img/slide11.jpeg",alt:"Parka de plumas con capucha verde para hombre"})}),Object(a.jsx)(un,{color:"#232228",n:2,hideMobile:!0,children:Object(a.jsx)(cn,{src:"./img/slide12.jpeg",title:"Chaleco acolchado granate de invierno para hombre"})})]}),Object(a.jsxs)(dn,{children:[Object(a.jsx)(un,{color:"#443563",n:2,children:Object(a.jsx)(sn,{src:"./img/slide22.jpeg",alt:"Parka acolchada marr\xf3n para hombre con cierre de cremallera"})}),Object(a.jsx)(un,{color:"#232228",n:1,hideMobile:!0,children:Object(a.jsx)(cn,{src:"./img/slide21.jpeg",title:"Jersey de cuello alto de punto de colores para hombre"})})]}),Object(a.jsxs)(dn,{children:[Object(a.jsx)(un,{color:"#bf8a3d",n:1,children:Object(a.jsx)(sn,{src:"./img/slide31.jpeg",alt:"Jersey jaspeado de punto gris para hombre con cuello alto y cordones"})}),Object(a.jsx)(un,{color:"#232228",n:2,hideMobile:!0,children:Object(a.jsx)(cn,{src:"./img/slide32.jpeg",title:"Jersey de punto para hombre con grecas de color crema"})})]})]}),Object(a.jsx)(jn,{children:Object(a.jsxs)(mn,{children:[e,Object(a.jsx)(fn,{children:t})]})})]})},hn=t(36),On=function(n){var e=n.id,t=$n[e],i=t.title,r=t.desc;return Object(a.jsxs)(hn.a,{children:[Object(a.jsx)("title",{children:i}),Object(a.jsx)("meta",{name:"description",content:r})]})};function gn(){var n=Object(l.a)(["\n  width: 100%;\n  height: auto;\n\n  @media "," {\n    width: 80%;\n  }\n"]);return gn=function(){return n},n}var vn=Object(d.c)(R)(gn(),v.tablet);function yn(){var n=Object(l.a)(["\n  width: 80%;\n  height: auto;\n"]);return yn=function(){return n},n}var wn=Object(d.c)(R)(yn()),kn=t(12);function zn(){var n=Object(l.a)(["\n  line-height: 0;\n  color: #9a9a9a;\n  margin-right: 0.5rem;\n"]);return zn=function(){return n},n}function Cn(){var n=Object(l.a)(["\n  && {\n    ","\n  }\n"]);return Cn=function(){return n},n}function Sn(){var n=Object(l.a)(["\n  && {\n    ","\n  }\n"]);return Sn=function(){return n},n}function qn(){var n=Object(l.a)(["\n  font-family: Raleway, sans-serif;\n  color: #777;\n  line-height: 24px;\n  font-weight: 400;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  margin: 0.2rem 0;\n\n  &:hover::after {\n    display: none;\n  }\n"]);return qn=function(){return n},n}function Nn(){var n=Object(l.a)(["\n  font-size: 24px;\n  letter-spacing: 0.15px;\n  text-transform: uppercase;\n  font-style: normal;\n  line-height: 32px;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n"]);return Nn=function(){return n},n}function Ln(){var n=Object(l.a)(["\n  padding: ","px;\n"]);return Ln=function(){return n},n}var Tn=d.c.div(Ln(),40),In=d.c.h3(Nn()),Un=Object(d.b)(qn()),En=d.c.a(Sn(),Un),Mn=d.c.span(Cn(),Un),An=d.c.span(zn()),Fn=function(){return Object(a.jsxs)(Tn,{children:[Object(a.jsx)(In,{children:"Encuentranos en"}),Object(a.jsx)(Pn,{})]})},Pn=function(){return Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsxs)(En,{target:"_blank",rel:"noreferrer",href:"https://www.google.com/maps/place/Gizon/@43.2956533,-2.9870485,15z/data=!4m5!3m4!1s0x0:0x11b8afcf231e650d!8m2!3d43.2956533!4d-2.9870485",children:[Object(a.jsx)(An,{children:Object(a.jsx)(kn.b,{})}),"Nafarroa Kalea, 14, 48901 Barakaldo, Bizkaia"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(Mn,{children:[Object(a.jsx)(An,{children:Object(a.jsx)(kn.e,{})}),"Lun - Vie: 10:00 - 13:30 / 17:00 - 20:00"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(En,{target:"_blank",rel:"noreferrer",href:"tel:+34944377790",children:[Object(a.jsx)(An,{children:Object(a.jsx)(kn.d,{})}),"+34 944 37 77 90"]})}),Object(a.jsx)("li",{children:Object(a.jsxs)(En,{target:"_blank",rel:"noreferrer",href:"mailto:pau.gizon@gmail.com",children:[Object(a.jsx)(An,{children:Object(a.jsx)(kn.a,{})}),"pau.gizon@gmail.com"]})})]})};function Gn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n"]);return Gn=function(){return n},n}function Bn(){var n=Object(l.a)(["\n  position: relative;\n  border: 0;\n  width: 100%;\n  height: 500px;\n"]);return Bn=function(){return n},n}var Wn=d.c.iframe(Bn()),_n=d.c.div(Gn());function Hn(){var n=Object(l.a)(["\n  min-height: 800px;\n"]);return Hn=function(){return n},n}var Dn=Object(d.c)(S)(Hn());function Zn(){var n=Object(l.a)(["\n  display: inline-block;\n  text-transform: uppercase;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  margin: 1rem 0;\n"]);return Zn=function(){return n},n}function Kn(){var n=Object(l.a)(["\n  margin: 20px 0;\n"]);return Kn=function(){return n},n}function Jn(){var n=Object(l.a)(["\n  margin: 40px 0;\n"]);return Jn=function(){return n},n}var Rn,Vn,Qn=d.c.div(Jn()),Xn=d.c.section(Kn()),Yn=d.c.strong(Zn());!function(n){n.HOME="home",n.ABOUT="about",n.CONTACT="contact",n.COOKIES="cookies",n.NOT_FOUND="not_found"}(Vn||(Vn={}));var $n=(Rn={},Object(u.a)(Rn,Vn.HOME,{id:Vn.HOME,title:"GIZON Moda | Nueva Colecci\xf3n Invierno Hombre",desc:"Descubre la nueva colecci\xf3n oto\xf1o - invierno 2020 de GIZON online. Las \xfaltimas tendencias en ropa de hombre, caballero y joven disponible tambi\xe9n en nuestra tienda de Barakaldo.",path:"/",name:"Inicio",nav:!0,exact:!0,component:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(On,{id:Vn.HOME}),Object(a.jsx)(xn,{title:"Nueva colecci\xf3n",subtitle:"Oto\xf1o - Invierno"}),Object(a.jsxs)(S,{children:[Object(a.jsxs)(I,{reverse:!0,children:[Object(a.jsxs)(H,{title:"Materiales ecofriendly",quote:"Calidad",children:[Object(a.jsx)("p",{children:"Las prendas producidas para Gizon est\xe1n elaboradas con los tejidos naturales e innovadores de la mayor alta gama."}),Object(a.jsx)("p",{children:"Compartimos una visi\xf3n sostenible con el medio ambiente y entre nuestras prendas, podr\xe1s encontrar pantalones elaborados con originales materias primas como posos de caf\xe9 o fibra de bamb\xfa."})]}),Object(a.jsx)(vn,{src:"./img/home2.jpeg",alt:"Prendas de calidad"})]}),Object(a.jsxs)(I,{children:[Object(a.jsxs)(H,{title:"Atenci\xf3n personalizada",quote:"Dise\xf1o",children:[Object(a.jsx)("p",{children:"Nuestra compa\xf1\xeda destaca por un personal cualificado y atento que te asesora de manera exclusiva, creando outfits \xfanicos y personalizados."}),Object(a.jsx)("p",{children:"Adem\xe1s, ofrecemos a nuestros clientes un servicio de sastrer\xeda y arreglos a medida."})]}),Object(a.jsx)(vn,{src:"./img/home4.jpeg",alt:"Ropa a medida"})]})]})]})}}),Object(u.a)(Rn,Vn.ABOUT,{id:Vn.ABOUT,title:"Conoce nuestra historia | GIZON Moda",desc:"GIZON lleva m\xe1s de cincuenta a\xf1os en la industria de la moda vasca. Visita nuestra tienda en Barakaldo, d\xe9jate asesorar por nuestro equipo de manera personalizada.",path:"/about",name:"Quienes somos",nav:!0,exact:!0,component:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(On,{id:Vn.ABOUT}),Object(a.jsx)(S,{children:Object(a.jsxs)(I,{children:[Object(a.jsxs)(H,{title:"Nuestra Historia",quote:"Origen",children:[Object(a.jsx)("p",{children:"La familia Gizon es un negocio textil que lleva en la industria de la moda vasca m\xe1s de cincuenta a\xf1os."}),Object(a.jsx)("p",{children:"Nuestra tienda es un referente en el estilismo de caballero y joven en Barakaldo que cuenta con las mejores materias primas de fabricaci\xf3n espa\xf1ola."})]}),Object(a.jsx)(wn,{src:"./img/home1.jpeg",alt:"Cazadora de piel marr\xf3n de oto\xf1o - invierno para hombre"})]})})]})}}),Object(u.a)(Rn,Vn.CONTACT,{id:Vn.CONTACT,title:"Contacta con nosotros | GIZON Moda",desc:"\xbfTienes alguna pregunta o necesitas ayuda? Encuentra nuestros datos de contacto, direcci\xf3n, email, tel\xe9fono y horarios de apertura en los siguientes enlaces.",path:"/contact",name:"Contacto",nav:!0,exact:!0,component:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(On,{id:Vn.CONTACT}),Object(a.jsx)(Wn,{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.891540290555!2d-2.9892781842568117!3d43.295592979135066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5a7a0368b471%3A0x11b8afcf231e650d!2sGizon!5e0!3m2!1ses!2ses!4v1609540656970!5m2!1ses!2ses",width:"600",height:"450",frameBorder:"0",allowFullScreen:!1,"aria-hidden":"false",tabIndex:0}),Object(a.jsx)(_n,{children:Object(a.jsx)(Fn,{})})]})}}),Object(u.a)(Rn,Vn.COOKIES,{id:Vn.COOKIES,title:"Pol\xedtica de cookies | GIZON Moda",desc:"Nuestra pol\xedtica de cookies.",path:"/cookies",name:"Pol\xedtica de cookies",nav:!1,exact:!0,component:function(){return Object(a.jsxs)(Qn,{children:[Object(a.jsx)(On,{id:Vn.COOKIES}),Object(a.jsxs)(S,{children:[Object(a.jsx)("h1",{children:"POL\xcdTICA DE COOKIES"}),Object(a.jsxs)(Xn,{children:[Object(a.jsx)(Yn,{children:"www.gizon-moda.com"}),Object(a.jsx)("p",{children:"El acceso a este Sitio Web puede implicar la utilizaci\xf3n de cookies. Las cookies son peque\xf1as cantidades de informaci\xf3n que se almacenan en el navegador utilizado por cada Usuario \u2014en los distintos dispositivos que pueda utilizar para navegar\u2014 para que el servidor recuerde cierta informaci\xf3n que posteriormente y \xfanicamente el servidor que la implement\xf3 leer\xe1. Las cookies facilitan la navegaci\xf3n, la hacen m\xe1s amigable, y no da\xf1an el dispositivo de navegaci\xf3n."}),Object(a.jsx)("p",{children:"Las cookies son procedimientos autom\xe1ticos de recogida de informaci\xf3n relativa a las preferencias determinadas por el Usuario durante su visita al Sitio Web con el fin de reconocerlo como Usuario, y personalizar su experiencia y el uso del Sitio Web, y pueden tambi\xe9n, por ejemplo, ayudar a identificar y resolver errores."}),Object(a.jsx)("p",{children:"La informaci\xf3n recabada a trav\xe9s de las cookies puede incluir la fecha y hora de visitas al Sitio Web, las p\xe1ginas visionadas, el tiempo que ha estado en el Sitio Web y los sitios visitados justo antes y despu\xe9s del mismo. Sin embargo, ninguna cookie permite que esta misma pueda contactarse con el n\xfamero de tel\xe9fono del Usuario o con cualquier otro medio de contacto personal. Ninguna cookie puede extraer informaci\xf3n del disco duro del Usuario o robar informaci\xf3n personal. La \xfanica manera de que la informaci\xf3n privada del Usuario forme parte del archivo Cookie es que el usuario d\xe9 personalmente esa informaci\xf3n al servidor."}),Object(a.jsx)("p",{children:"Las cookies que permiten identificar a una persona se consideran datos personales. Por tanto, a las mismas les ser\xe1 de aplicaci\xf3n la Pol\xedtica de Privacidad anteriormente descrita. En este sentido, para la utilizaci\xf3n de las mismas ser\xe1 necesario el consentimiento del Usuario. Este consentimiento ser\xe1 comunicado, en base a una elecci\xf3n aut\xe9ntica, ofrecido mediante una decisi\xf3n afirmativa y positiva, antes del tratamiento inicial, removible y documentado."})]}),Object(a.jsxs)(Xn,{children:[Object(a.jsx)(Yn,{children:"Cookies propias"}),Object(a.jsx)("p",{children:"Son aquellas cookies que son enviadas al ordenador o dispositivo del Usuario y gestionadas exclusivamente por Moda Hombre para el mejor funcionamiento del Sitio Web. La informaci\xf3n que se recaba se emplea para mejorar la calidad del Sitio Web y su Contenido y su experiencia como Usuario. Estas cookies permiten reconocer al Usuario como visitante recurrente del Sitio Web y adaptar el contenido para ofrecerle contenidos que se ajusten a sus preferencias."})]}),Object(a.jsxs)(Xn,{children:[Object(a.jsx)(Yn,{children:"Cookies de terceros"}),Object(a.jsx)("p",{children:"Son cookies utilizadas y gestionadas por entidades externas que proporcionan a Moda Hombre servicios solicitados por este mismo para mejorar el Sitio Web y la experiencia del usuario al navegar en el Sitio Web. Los principales objetivos para los que se utilizan cookies de terceros son la obtenci\xf3n de estad\xedsticas de accesos y analizar la informaci\xf3n de la navegaci\xf3n, es decir, c\xf3mo interact\xfaa el Usuario con el Sitio Web."}),Object(a.jsx)("p",{children:"La informaci\xf3n que se obtiene se refiere, por ejemplo, al n\xfamero de p\xe1ginas visitadas, el idioma, el lugar a la que la direcci\xf3n IP desde el que accede el Usuario, el n\xfamero de Usuarios que acceden, la frecuencia y reincidencia de las visitas, el tiempo de visita, el navegador que usan, el operador o tipo de dipositivo desde el que se realiza la visita. Esta informaci\xf3n se utiliza para mejorar el Sitio Web, y detectar nuevas necesidades para ofrecer a los Usuarios un Contenido y/o servicio de \xf3ptima calidad. En todo caso, la informaci\xf3n se recopila de forma an\xf3nima y se elaboran informes de tendencias del Sitio Web sin identificar a usuarios individuales."}),Object(a.jsx)("p",{children:"Puede obtener m\xe1s informaci\xf3n sobre las cookies, la informaci\xf3n sobre la privacidad, o consultar la descripci\xf3n del tipo de cookies que se utiliza, sus principales caracter\xedsticas, periodo de expiraci\xf3n, etc. en el siguiente(s) enlace(s):"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"Google Analytics: https://developers.google.com/analytics/"}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"La(s) entidad(es) encargada(s) del suministro de cookies podr\xe1(n) ceder esta informaci\xf3n a terceros, siempre y cuando lo exija la ley o sea un tercero el que procese esta informaci\xf3n para dichas entidades."})]}),Object(a.jsxs)(Xn,{children:[Object(a.jsx)(Yn,{children:"Deshabilitar, rechazar y eliminar cookies"}),Object(a.jsx)("p",{children:"El Usuario puede deshabilitar, rechazar y eliminar las cookies \u2014total o parcialmente\u2014 instaladas en su dispositivo mediante la configuraci\xf3n de su navegador (entre los que se encuentran, por ejemplo, Chrome, Firefox, Safari, Explorer). En este sentido, los procedimientos para rechazar y eliminar las cookies pueden diferir de un navegador de Internet a otro. En consecuencia, el Usuario debe acudir a las instrucciones facilitadas por el propio navegador de Internet que est\xe9 utilizando. En el supuesto de que rechace el uso de cookies \u2014total o parcialmente\u2014 podr\xe1 seguir usando el Sitio Web, si bien podr\xe1 tener limitada la utilizaci\xf3n de algunas de las prestaciones del mismo."})]})]})]})}}),Object(u.a)(Rn,Vn.NOT_FOUND,{id:Vn.NOT_FOUND,title:"404 - Not Found | GIZON Moda",desc:"Ha habido un problema al obtener la p\xe1gina solicitada.",path:"*",name:"Not Found",nav:!1,exact:!0,component:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(On,{id:Vn.NOT_FOUND}),Object(a.jsx)(Dn,{children:Object(a.jsx)(H,{title:"P\xe1gina no encontrada",quote:"404",children:Object(a.jsx)("p",{children:"La url solicitada no est\xe1 disponible o no coincide con ninguna p\xe1gina en nuestra web"})})})]})}}),Rn),ne=Object.values($n);function ee(){var n=Object(l.a)([""]);return ee=function(){return n},n}function te(){var n=Object(l.a)([""]);return te=function(){return n},n}var ae=d.c.nav(te()),ie=d.c.a(ee()),re=function(n){var e=n.Container,t=void 0===e?ae:e,i=n.Component,r=void 0===i?ie:i;return Object(a.jsx)(t,{children:ne.filter((function(n){return!!n.nav})).map((function(n){var e=n.id,t=n.path,i=n.name,o=n.exact;return Object(a.jsx)(c.c,{to:t,exact:o,component:r,activeClassName:"active",children:i},e)}))})};function oe(){var n=Object(l.a)(["\n  display: ",";\n\n  @media "," {\n    display: block !important;\n  }\n\n  flex: 1 0 100%;\n\n  /* Mobile menu */\n  position: absolute;\n  top: 102%;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  padding: 0 ","px 20px;\n  box-shadow: 0px 2px 5px #ddd;\n\n  @media "," {\n    flex: 1 1 auto;\n\n    /* Mobile menu reset */\n    height: auto;\n    position: static;\n    top: 0;\n    left: 0;\n    width: auto;\n    background-color: transparent;\n    padding: 0;\n    box-shadow: none;\n  }\n"]);return oe=function(){return n},n}function ce(){var n=Object(l.a)(["\n  @media "," {\n    display: flex;\n    justify-content: center;\n  }\n"]);return ce=function(){return n},n}function se(){var n=Object(l.a)(["\n  font-size: 1.125rem;\n  font-style: normal;\n  font-weight: 400;\n  letter-spacing: 0.3px;\n  text-transform: capitalize;\n\n  display: block;\n  width: 100%;\n  padding: 20px;\n\n  &::after {\n    display: none;\n  }\n\n  &.active {\n    background-color: rgba(0, 0, 0, 0.05);\n  }\n\n  @media "," {\n    position: relative;\n    margin: 0 17px;\n\n    /* Reset */\n    display: inline;\n    width: auto;\n    padding: 0;\n\n    &::after {\n      display: inherit;\n    }\n\n    &.active {\n      background-color: transparent;\n    }\n  }\n"]);return se=function(){return n},n}function le(){var n=Object(l.a)(["\n  cursor: pointer;\n  display: block;\n  margin: 10px;\n\n  @media "," {\n    display: none;\n  }\n"]);return le=function(){return n},n}function de(){var n=Object(l.a)(["\n  height: 100%;\n"]);return de=function(){return n},n}function ue(){var n=Object(l.a)(["\n  display: block;\n  height: 100%;\n\n  &::after {\n    display: none;\n  }\n"]);return ue=function(){return n},n}function pe(){var n=Object(l.a)(["\n  height: 70%;\n  flex: 1 1 auto;\n  display: flex;\n  justify-content: center;\n  padding-right: 36px;\n\n  @media "," {\n    height: 60%;\n    flex: 0 1 auto;\n    display: block;\n    padding-right: 0;\n  }\n"]);return pe=function(){return n},n}function be(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  height: ","px;\n\n  @media "," {\n    height: ","px;\n    padding-right: 118px;\n  }\n"]);return be=function(){return n},n}function je(){var n=Object(l.a)(["\n  position: relative;\n  z-index: 1;\n  box-shadow: 0px 2px 5px #ddd;\n"]);return je=function(){return n},n}var me=d.c.header(je()),fe=d.c.div(be(),70,v.tablet,100),xe=d.c.div(pe(),v.tablet),he=Object(d.c)(c.b)(ue()),Oe=Object(d.c)(R)(de()),ge=d.c.div(le(),v.tablet),ve=d.c.a(se(),v.tablet),ye=d.c.nav(ce(),v.tablet),we=d.c.div(oe(),(function(n){return n.open?"block":"none"}),v.tablet,40/1.4,v.tablet),ke=function(){var n=Object(i.useState)(!1),e=Object(s.a)(n,2),t=e[0],r=e[1],o=Object(i.useCallback)((function(){r(!t)}),[t,r]);return Object(a.jsx)(me,{children:Object(a.jsx)(S,{children:Object(a.jsxs)(fe,{children:[Object(a.jsx)(ge,{onClick:o,children:Object(a.jsx)(kn.c,{size:26})}),Object(a.jsx)(xe,{children:Object(a.jsx)(he,{to:"/",children:Object(a.jsx)(Oe,{src:"./img/logo.png",alt:"Logo de GIZON"})})}),Object(a.jsx)(we,{open:t,children:Object(a.jsx)(re,{Container:ye,Component:ve})})]})})})},ze=t(23);function Ce(){var n=Object(l.a)(["\n  line-height: 0;\n  color: #9a9a9a;\n  margin-right: 0.5rem;\n"]);return Ce=function(){return n},n}function Se(){var n=Object(l.a)(["\n  font-family: 'Crimson Text', serif;\n  font-size: 24px;\n  letter-spacing: 0.15px;\n  line-height: 39px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #ffffff;\n  font-style: normal;\n  margin-bottom: 7px;\n"]);return Se=function(){return n},n}function qe(){var n=Object(l.a)(["\n  @media "," {\n    display: none;\n  }\n\n  @media "," {\n    display: block;\n  }\n"]);return qe=function(){return n},n}function Ne(){var n=Object(l.a)(["\n  margin: 20px 0;\n\n  @media "," {\n    margin: 0;\n  }\n\n  &:last-child li {\n    padding-bottom: 2px;\n  }\n"]);return Ne=function(){return n},n}function Le(){var n=Object(l.a)(["\n  display: grid;\n\n  @media "," {\n    grid-template-columns: repeat(2, 50%);\n    grid-template-rows: repeat(2, 1fr);\n  }\n\n  @media "," {\n    grid-template-columns: repeat(2, 30%) 40%;\n    grid-template-rows: repeat(1, 1fr);\n  }\n\n  @media ",' {\n    grid-template-columns: repeat(3, 22%) 32%;\n    grid-template-rows: repeat(1, 1fr);\n  }\n\n  & li {\n    padding-bottom: 10px;\n    line-height: 22px;\n    display: flex;\n    align-items: center;\n  }\n\n  && a, && span {\n    font-family: "Roboto", sans-serif;\n    font-size: 15px;\n    color: #ddd;\n\n    &.active::after {\n      opacity: 0;\n    }\n\n    &:hover::after {\n      opacity: 1;\n      background-color: #fff;\n    }\n  }\n']);return Le=function(){return n},n}function Te(){var n=Object(l.a)(["\n  background-color: #080808;\n  padding: 20px 0;\n\n  @media "," {\n    padding-top: 97px;\n    padding-bottom: 59px;\n  }\n"]);return Te=function(){return n},n}function Ie(){var n=Object(l.a)(["\n  height: 80px;\n  margin-left: -10px;\n\n  @media "," {\n    height: 100px;\n  }\n"]);return Ie=function(){return n},n}var Ue=Object(d.c)(R)(Ie(),v.tablet),Ee=d.c.footer(Te(),v.tablet),Me=d.c.nav(Le(),v.tablet,v.laptop,v.laptopL),Ae=d.c.div(Ne(),v.tablet),Fe=Object(d.c)(Ae)(qe(),v.laptop,v.laptopL),Pe=d.c.h5(Se()),Ge=d.c.span(Ce()),Be=function(){return Object(a.jsx)(Ee,{children:Object(a.jsx)(S,{children:Object(a.jsxs)(Me,{children:[Object(a.jsx)(Fe,{children:Object(a.jsx)(Ue,{src:"./img/logo2.png",alt:"Logo de GIZON"})}),Object(a.jsxs)(Ae,{children:[Object(a.jsx)(Pe,{children:"Gizon Moda"}),ne.filter((function(n){return!!n.nav})).map((function(n){var e=n.id,t=n.path,i=n.name;return Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:Object(a.jsx)(c.c,{to:t,children:i})})},e)}))]}),Object(a.jsxs)(Ae,{children:[Object(a.jsx)(Pe,{children:"S\xedguenos"}),Object(a.jsxs)("ul",{children:[Object(a.jsxs)("li",{children:[Object(a.jsx)(Ge,{children:Object(a.jsx)(ze.b,{})}),Object(a.jsx)("a",{href:"https://www.instagram.com/gizon_moda_hombre/",target:"_blank",rel:"noreferrer",children:"Instagram"})]}),Object(a.jsxs)("li",{children:[Object(a.jsx)(Ge,{children:Object(a.jsx)(ze.a,{})}),Object(a.jsx)("a",{href:"https://www.facebook.com/GizonModaHombre",target:"_blank",rel:"noreferrer",children:"Facebook"})]})]})]}),Object(a.jsxs)(Ae,{children:[Object(a.jsx)(Pe,{children:"Con\xf3cenos"}),Object(a.jsx)(Pn,{})]})]})})})},We=t(6),_e=function(){var n=Object(We.f)();return Object(i.useEffect)((function(){gtag("event","page_view")}),[n]),Object(a.jsx)(We.c,{children:ne.map((function(n){var e=n.id,t=n.path,i=n.exact,r=n.component;return Object(a.jsx)(We.a,{path:t,exact:i,children:r},e)}))})};function He(){var n=Object(l.a)(["\n  position: relative;\n  background-color: #fff;\n  min-height: 400px;\n  margin: 0 auto;\n"]);return He=function(){return n},n}var De=d.c.main(He()),Ze=function(n){var e=n.children;return Object(a.jsx)(De,{children:e})},Ke="/",Je=t(39),Re=t.n(Je);function Ve(){var n=Object(l.a)(["\n  && {\n    ","\n    \n    display: inline-block;\n\n    &::after {\n      background-color: "," !important;\n      opacity: 1 !important;\n    }\n  }\n"]);return Ve=function(){return n},n}function Qe(){var n=Object(l.a)(["\n  & .CookieConsent {\n    ","\n    box-shadow: 0px -1px 5px #ddd;\n    align-items: center !important;\n    font-size: 16px !important;\n    \n    & > div:first-child {\n      width: 80%;\n    }\n  }\n\n  & #rcc-decline-button, & #rcc-confirm-button {\n    transition: background-color .25s 0s ease-out;\n    background-color: #000 !important;\n    color: #fff !important;\n    padding: 15px 20px !important;\n    font-size: 16px !important;\n  }\n  \n  & #rcc-decline-button:hover {\n    background-color: rgba(160, 0, 0) !important;\n  }\n\n  & #rcc-confirm-button:hover {\n    background-color: rgba(0, 160, 0) !important;\n  }\n"]);return Qe=function(){return n},n}function Xe(){var n=Object(l.a)(["\n  font-family: roboto, sans-serif;\n  font-weight: 400;\n  color: "," !important;\n"]);return Xe=function(){return n},n}var Ye="#444",$e=Object(d.b)(Xe(),Ye),nt=d.c.div(Qe(),$e),et=Object(d.c)(c.b)(Ve(),$e,Ye),tt=function(){return Object(a.jsx)(nt,{children:Object(a.jsxs)(Re.a,{location:"bottom",buttonText:"Aceptar cookies",cookieName:"gizon_cookies",style:{background:"#fff"},buttonStyle:{color:"#4e503b",fontSize:"13px"},enableDeclineButton:!0,declineButtonText:"Rechazar cookies",hideOnAccept:!0,onDecline:function(){return location.href="https://www.google.com/"},children:["Utilizamos cookies de terceros con finalidades anal\xedticas. Puedes aceptar todas las cookies pulsando el bot\xf3n \u201cAceptar todas las cookies\u201d. ",Object(a.jsx)("br",{}),"Para m\xe1s informaci\xf3n puedes visitar nuestra ",Object(a.jsx)(et,{to:"/cookies",children:"Pol\xedtica de cookies"})]})})},at=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(w,{}),Object(a.jsxs)(c.a,{basename:Ke,children:[Object(a.jsx)(ke,{}),Object(a.jsx)(Ze,{children:Object(a.jsx)(_e,{})}),Object(a.jsx)(Be,{}),Object(a.jsx)(tt,{})]})]})},it=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,59)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),a(n),i(n),r(n),o(n)}))},rt=document.getElementById("root"),ot=Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(at,{})});rt&&(rt.hasChildNodes()?Object(o.hydrate)(ot,rt):Object(o.render)(ot,rt)),it()}},[[58,1,2]]]);
//# sourceMappingURL=main.203e84de.chunk.js.map