(this["webpackJsonprestaurant-reviews"]=this["webpackJsonprestaurant-reviews"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/restaurant-position-marker.4c717ae9.png"},29:function(e,t,a){e.exports=a.p+"static/media/bestRestLogo.c71227c1.png"},30:function(e,t,a){e.exports=a.p+"static/media/user-position-marker.972bdb89.png"},31:function(e,t,a){e.exports=a.p+"static/media/logo.e6c189c5.png"},34:function(e,t,a){e.exports=a(70)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(25),c=a.n(r),o=(a(39),a(5)),i=(a(40),a(41),a(26)),s=a.n(i);a(45),a(46);var u=function(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),u=i[0],m=i[1],d=Object(n.useState)([]),v=Object(o.a)(d,2),p=v[0],E=v[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"review"},p.map((function(e){var t=e.id,a=e.text,n=e.star;return l.a.createElement("ul",{key:t},l.a.createElement("li",null,l.a.createElement(s.a,{rating:Number(n),total:5,interactive:!1})),l.a.createElement("li",null,l.a.createElement("span",null,"Feedback: ",a)))})),l.a.createElement("select",{onChange:function(e){r(Number(e.target.value))},className:"select-stars",value:a},l.a.createElement("option",{value:"0"},"\u2730\u2730\u2730\u2730\u2730"),l.a.createElement("option",{value:"1"},"\u2b50\u2730\u2730\u2730\u2730"),l.a.createElement("option",{value:"2"},"\u2b50\u2b50\u2730\u2730\u2730"),l.a.createElement("option",{value:"3"},"\u2b50\u2b50\u2b50\u2730\u2730"),l.a.createElement("option",{value:"4"},"\u2b50\u2b50\u2b50\u2b50\u2730"),l.a.createElement("option",{value:"5"},"\u2b50\u2b50\u2b50\u2b50\u2b50")),l.a.createElement("input",{type:"text",onChange:function(e){m(e.target.value)},className:"input-text",placeholder:"leave a review",value:u}),l.a.createElement("button",{onClick:function(){0===a||""===u?alert("You should submit a real feedback review"):(E((function(e){return e.concat({text:u,star:a,id:100*Math.random()})})),m(""),r(0))},className:"submit-review"}," ","Submit a review")))};var m=function(e){var t=e.places.map((function(e){return l.a.createElement("div",{key:e.venue.id,className:"section"},l.a.createElement("h3",{className:"restaurant-title"},e.venue.name),l.a.createElement("h4",null,"Address: ",e.venue.location.address),l.a.createElement("div",{className:"add-reviews"},l.a.createElement(u,null)))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sublist"},l.a.createElement("div",null,t)))};var d=function(e){return l.a.createElement("div",{className:"list"},l.a.createElement("h2",{className:"list-title"},l.a.createElement("span",{role:"img","aria-label":"food emoji"},"\ud83e\udd5e\ud83c\udf5b")," ","Restaurant Lists"," ",l.a.createElement("span",{role:"img","aria-label":"food emoji"},"\ud83c\udf5d\ud83c\udf72")),l.a.createElement(m,{places:e.places,userNewPlaces:e.userNewPlaces}))},v=a(33),p=a(8),E=(a(47),a(48),a(49),a(28)),g=a.n(E),f=a(29),b=a.n(f);var h=function(e){var t=e.places,a=Object(n.useState)(null),r=Object(o.a)(a,2),c=r[0],i=r[1];return l.a.createElement("div",null,t.map((function(e){return l.a.createElement(p.a,{key:e.venue.id,latitude:e.venue.location.lat,longitude:e.venue.location.lng},l.a.createElement("button",{className:"marker",onClick:function(t){t.preventDefault(),i(e)}},l.a.createElement("img",{src:g.a,alt:"restaurant marker"})))})),c?l.a.createElement(p.c,{latitude:c.venue.location.lat,longitude:c.venue.location.lng,onClose:function(){i(null)}},l.a.createElement("div",null,l.a.createElement("h3",{className:"restaurant-title"},c.venue.name),l.a.createElement("p",null,"Address: ",c.venue.location.address),l.a.createElement("img",{className:"restaurantLogo",src:b.a,alt:"restaurnt logo"}))):null)},N=a(30),w=a.n(N);var O=function(e){var t=Object(n.useState)(30.7970511),a=Object(o.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(30.9987288),s=Object(o.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)(null),E=Object(o.a)(d,2),g=E[0],f=E[1],b=Object(n.useState)({width:"100%",height:880,latitude:r,longitude:u,zoom:10}),N=Object(o.a)(b,2),O=N[0],j=N[1];return Object(n.useEffect)((function(){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){c(e.coords.latitude),m(e.coords.longitude),j({width:"100%",height:880,latitude:e.coords.latitude,longitude:e.coords.longitude,zoom:13})}))}),[]),l.a.createElement("div",{className:"map"},l.a.createElement(p.d,Object.assign({},O,{mapboxApiAccessToken:"pk.eyJ1IjoibW9oYW1lZHNnYXAiLCJhIjoiY2p2NWNpc2liMHJ1MzN5cDJ3dmFsbTI1aSJ9.s59PBCspitI9M_EHQ0hgeg",mapStyle:"mapbox://styles/mapbox/light-v9",onViewportChange:function(e){j(Object(v.a)({},e,{transitionDuration:3e3}))},onDblClick:e._handleClick}),l.a.createElement(p.a,{latitude:r,longitude:u},l.a.createElement("button",{className:"marker",onClick:function(e){e.preventDefault(),f("Your current location!")}},l.a.createElement("img",{src:w.a,alt:"user-position-marker"}))),l.a.createElement("div",{className:"navigation-control"},l.a.createElement(p.b,null)),g?l.a.createElement(p.c,{latitude:r,longitude:u,onClose:function(){f(null)}},l.a.createElement("div",null,l.a.createElement("h3",{className:"restaurant-title"},g))):null,l.a.createElement(h,{places:e.places})))},j=(a(50),function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-view"},l.a.createElement("div",{className:"restaurants-map"},l.a.createElement(O,{places:e.places,userNewPlaces:r,_handleClick:function(e){c((function(t){return t.concat({location:e.lngLat,name:prompt("Enter the new restaurant name!"),review:prompt("give a review number form 1 to 5 "),img:prompt("Enter restaurant image URL!"),id:100*Math.random()})}))}})),l.a.createElement("div",{className:"restaurants-list"},l.a.createElement(d,{places:e.places,userNewPlaces:r}))))}),k=a(31),C=a.n(k);a(51);var S=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("header",null,l.a.createElement("img",{alt:"app-logo",src:C.a,width:"70",height:"70",className:"app-logo"}),l.a.createElement("h1",{id:"header-title"},"Restaurant Reviews")))},x=a(32),R=a.n(x);a(68);var L=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var t={client_id:"3XC2CXVDBE0UVIAULQ0MR1HHOXHNKLV333MGLSCFMJYP3NCQ",client_secret:"CZVOOWVBLHFZ0IRNFHIKEY1VGVXTN1G4GDRY13L5VPNPSHS3",v:"20200908",ll:"".concat(e.coords.latitude,", ").concat(e.coords.longitude),limit:50,query:"restaurant"};R.a.get("https://api.foursquare.com/v2/venues/explore?"+new URLSearchParams(t)).then((function(e){r(e.data.response.groups[0].items)})).catch((function(e){console.log("ERROR HAS OCURED"+e)}))})):alert("Geolocation is not supported by this browser.")}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(S,null),l.a.createElement("div",null,l.a.createElement(j,{places:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(69);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.2f0be275.chunk.js.map