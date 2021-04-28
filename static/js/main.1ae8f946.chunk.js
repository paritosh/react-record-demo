(this["webpackJsonpreact-recordrtc-yt"]=this["webpackJsonpreact-recordrtc-yt"]||[]).push([[0],{126:function(e,t,c){},155:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(110),o=c.n(a),i=(c(126),c(171)),s=c(74),l=c(165),b=c(166),d=c(8),j=function(){var e=Object(s.c)();return Object(d.jsx)(l.a,{as:"nav",flex:"1",mb:4,padding:"1.5rem",bg:e.colors.blue[700],color:"white",children:Object(d.jsx)(l.a,{align:"center",children:Object(d.jsx)(b.a,{size:"md",children:"Recording Audio/screen/video"})})})},u=Object(n.memo)(j),O=c(42),x=c.n(O),g=c(76),f=c(6),h=c(172),p=c(167),v=c(118),w=c(168),m=c(169),y=c(58),k=(c(132),c(111)),C=c(113),R=c(114),S=function(){var e=Object(s.c)(),t=Object(n.useState)(),c=Object(f.a)(t,2),r=c[0],a=c[1],o=Object(n.useState)(),i=Object(f.a)(o,2),l=i[0],b=i[1],j=Object(n.useState)(),u=Object(f.a)(j,2),O=u[0],S=u[1],z=Object(n.useState)("video"),D=Object(f.a)(z,2),M=D[0],F=D[1],L=function(){var e=Object(g.a)(x.a.mark((function e(){var t,c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=navigator.mediaDevices,"video"!==M){e.next=7;break}return e.next=4,t.getUserMedia({video:!0,audio:!0});case 4:e.t0=e.sent,e.next=10;break;case 7:return e.next=9,t.getDisplayMedia({video:!0,audio:!1});case 9:e.t0=e.sent;case 10:return c=e.t0,n=new C.RecordRTCPromisesHandler(c,{type:"video"}),e.next=14,n.startRecording();case 14:a(n),b(c),S(null);case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(g.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=10;break}return e.next=3,r.stopRecording();case 3:return e.next=5,r.getBlob();case 5:t=e.sent,l.stop(),S(t),b(null),a(null);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)(h.a,{spacing:"5",p:"5",children:[Object(d.jsxs)(p.a,{display:"flex",justifyContent:"center",flexDirection:["column","row","row","row"],children:[Object(d.jsx)(v.a,{m:"1",bg:e.colors.blue[600],size:"lg","aria-label":"start recording",color:"white",onClick:function(){F("screen"===M?"video":"screen")},children:"screen"===M?"Record Screen":"Record Video"}),Object(d.jsx)(w.a,{m:"1",bg:e.colors.blue[600],size:"lg","aria-label":"start recording",color:"white",onClick:L,icon:Object(d.jsx)(m.a,{as:y.a})}),Object(d.jsx)(w.a,{m:"1",bg:e.colors.blue[600],size:"lg",color:"white","aria-label":"stop recording",onClick:P,disabled:!r,icon:Object(d.jsx)(m.a,{as:y.c})}),Object(d.jsx)(w.a,{bg:e.colors.blue[600],m:"1",size:"lg",disabled:!O,color:"white",onClick:function(){O&&Object(R.saveAs)(O,"Video-".concat(Date.now(),".webm"))},"aria-label":"download video",icon:Object(d.jsx)(m.a,{as:y.b})})]}),Object(d.jsx)(p.a,{display:"flex",justifyContent:"center",children:Object(d.jsx)(p.a,{bg:O?"inherit":"blue.50",h:"50vh",width:["100%","100%","50vw","50vw"],children:!!O&&Object(d.jsx)(k.Player,{src:window.URL.createObjectURL(O)})})})]})},z=Object(n.memo)(S),D=c(170),M=Object(D.a)({config:{initialColorMode:"dark",useSystemColorMode:!1}}),F=function(){return Object(d.jsxs)(i.a,{theme:M,children:[Object(d.jsx)(u,{}),Object(d.jsx)(z,{})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,173)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root")),L()}},[[155,1,2]]]);
//# sourceMappingURL=main.1ae8f946.chunk.js.map