(this.webpackJsonpscreamer=this.webpackJsonpscreamer||[]).push([[0],{40:function(e,t,n){},42:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(27),s=n.n(a),i=(n(40),n(32)),o=n(31),u=n(33),l=n(34),b=(n(41),n(42),n(1)),j=n(28),d=n.n(j),f=function(){return d.a.get("".concat("https://fapi.binance.com","/fapi/v1/exchangeInfo")).then((function(e){return e.data}))},h=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){f().then((function(e){r(e.symbols)}))}),[]),n},O=n(29),g=n.n(O),m=function(){var e=g()("wss://fstream.binance.com/ws/!forceOrder@arr",{onOpen:function(){return console.log("opened")},shouldReconnect:function(e){return!0}}),t=e.lastJsonMessage,n=e.readyState,r=(e.getWebSocket,Object(c.useState)()),a=Object(b.a)(r,2),s=a[0],i=a[1];return Object(c.useEffect)((function(){if(t){var e=t.o,n=e.s,c=e.S,r=e.o,a=e.f,s=e.q,o=e.p,u=e.ap,l=e.X,b=e.l,j=e.z,d=e.T;i({symbol:n,side:c,orderStatus:l,orderType:r,time:d,timeInForce:a,originalQuantity:s,price:o,accumulatedFillQuantity:j,averagePrice:u,lastFilledQuantity:b})}}),[t]),[n,s]},x=n(15),p=n.n(x),v=n(30),y=n(35),S=n(3),F=function(){var e=(new y.a).toDestination(),t=h(),n=m(),r=Object(b.a)(n,2),a=(r[0],r[1]),s=Object(c.useState)({}),i=Object(b.a)(s,2),o=i[0],u=i[1];Object(c.useEffect)((function(){if(t){var e={};t.forEach((function(t){var n=t.symbol;e[n]=[]})),u(e)}}),[t]),Object(c.useEffect)((function(){var e;a&&("BUY"===(e=a).side?l():j(),console.log(e),u((function(t){return t[e.symbol].push(e),t})))}),[a]);var l=p.a.debounce((function(){e.triggerAttackRelease("C5",.05)}),.05),j=p.a.debounce((function(){e.triggerAttackRelease("C4",.05)}),.05),d=function(e){return o[e]&&o[e].length>0?o[e].length:0};return Object(S.jsxs)(v.a,{striped:!0,bordered:!0,hover:!0,size:"sm",variant:"dark",children:[Object(S.jsx)("thead",{children:Object(S.jsxs)("tr",{children:[Object(S.jsx)("th",{children:"Symbol"}),Object(S.jsx)("th",{children:"Status"}),Object(S.jsx)("th",{children:"Liquidations"})]})}),Object(S.jsx)("tbody",{children:t.sort((function(e,t){return d(t.symbol)-d(e.symbol)})).map((function(e,t){var n=e.symbol,c=e.status,r=o[n]&&o[n].length>0?o[n].length:0;return Object(S.jsxs)("tr",{children:[Object(S.jsx)("td",{children:n}),Object(S.jsx)("td",{children:c}),Object(S.jsx)("td",{children:r})]},t)}))})]})};var k=function(){return Object(S.jsxs)(o.a,{className:"p-3",fluid:!0,children:[Object(S.jsx)(i.a,{children:Object(S.jsx)("h1",{className:"header",children:"Binance Bloodbath"})}),Object(S.jsx)(u.a,{children:Object(S.jsx)(l.a,{children:Object(S.jsx)(F,{})})})]})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(k,{})}),document.getElementById("root")),E()}},[[79,1,2]]]);
//# sourceMappingURL=main.ac2c43a4.chunk.js.map