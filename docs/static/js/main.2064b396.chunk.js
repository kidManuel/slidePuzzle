(this["webpackJsonpslide-puzzle"]=this["webpackJsonpslide-puzzle"]||[]).push([[0],{21:function(e,t,n){e.exports=n(34)},27:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var i=n(0),o=n.n(i),r=n(11),a=n.n(r),c=(n(26),n(27),n(4)),l=n(8),s=n(7),u={pieces:[{key:0,position:{x:0,y:0}},{key:1,position:{x:1,y:0}},{key:2,position:{x:2,y:0}},{key:3,position:{x:3,y:0}},{key:4,position:{x:0,y:1}},{key:5,position:{x:1,y:1}},{key:6,position:{x:2,y:1}},{key:7,position:{x:3,y:1}},{key:8,position:{x:0,y:2}},{key:9,position:{x:1,y:2}},{key:10,position:{x:2,y:2}},{key:11,position:{x:3,y:2}},{key:12,position:{x:0,y:3}},{key:13,position:{x:1,y:3}},{key:14,position:{x:2,y:3}},{key:15,position:{x:3,y:3}}],activePiecePosition:15,adjacentToActive:[11,14],isSolved:!1},d={showHints:!0,size:4},p=Object(l.b)({userConfigurationReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_CONFIGURATION":return Object(s.a)({},e);default:return e}},puzzleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVE_ACTIVE":return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}}),f=Object(l.c)(p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),h=n(5),m=Object(h.a)({AppContainer:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh",backgroundColor:"#1D4E89"}}),v=Object(h.a)({puzzlePiece:{width:"100%",height:"100%",backgroundColor:"#FBD1A2",display:"grid",placeItems:"center",transition:"all 0.3s",position:"relative",borderRadius:6,opacity:1,overflow:"hidden"},active:{opacity:0},adjacent:{"&:after":{width:"100%",height:"100%",position:"absolute",backgroundColor:"rgba(255, 255, 255, 0.0)",content:'""',display:"block",transition:"background-color 0.4s"},"&:hover:after":{backgroundColor:"rgba(255, 255, 255, 0.5)"}},contentContainer:{position:"absolute",top:20,left:20,fontSize:15,fontWeight:700,backgroundColor:"#00B2CA",borderRadius:20,width:40,height:40,display:"grid",placeItems:"center",color:"white",userSelect:"none"}}),y=function(e){var t=e.pos,n=e.content,i=(e.image,e.movePieceCallback),r=e.isAdjacentPiece,a=e.isActivePiece,c=v(),l=c.puzzlePiece,s=c.adjacent,u=c.active,d=c.contentContainer;return o.a.createElement("div",{className:"".concat(l," ").concat(r&&s,"  ").concat(a&&u),onClick:function(e){r&&i(t)}},o.a.createElement("div",{className:d},n))},b=n(20),g=n(13),k=function(e,t){for(var n=[],i=0;i<e.length;i++)n.push(i);var o=Object(g.shuffle)(n),r=e.map((function(e,t){return Object(s.a)(Object(s.a)({},e),{},{key:o[t]})}));return C(r)?r:E(r,t)},z=function(e,t){var n=O(e);return{pieces:e,adjacentToActive:j(e,n,t),activePiecePosition:n,isSolved:w(e)}},E=function(e,t){var n=e.findIndex((function(e){return 1==e.key})),i=e.findIndex((function(e){return 2==e.key}));return P(e,n,i,t)},w=function(e){var t=!0;return e.forEach((function(e,n){e.key!==n&&(t=!1)})),t},O=function(e){return e.findIndex((function(t){return t.key===e.length-1}))},j=function(e,t,n){n=n||Math.sqrt(e.length),t=t||O(e);var i=O(e),o=e[t].position,r=o.x,a=o.y,c=[];return a>0&&c.push(i-n),a<n-1&&c.push(i+n),r%n!==n-1&&c.push(i+1),r%n&&c.push(i-1),c},x=function(e){return!!(e%2)},C=function(e,t,n){n=n||Math.sqrt(e.length);var i=t?e[t]:e[O(e)],o=function(e){for(var t=0,n=0;n<e.length;n++)for(var i=n+1;i<e.length;i++)e[n]>e[i]&&t++;return t}(e),r=x(o),a=i.position.y+1;if(x(n)){if(!x(o))return!0}else if(x(n-a)){if(r)return!0}else if(!r)return!0;return!1},P=function(e,t,n,i){i=i||Math.sqrt(e.length);var o=Object(b.a)(e),r=o[t].key,a=o[n].key;return o[n].key=r,o[t].key=a,o},S=function(e){return e.puzzleReducer.pieces},I=function(e){return e.puzzleReducer.activePiecePosition},N=function(e){return e.puzzleReducer.adjacentToActive},A=function(e){return e.puzzleReducer.isSolved},R=function(e){return{type:"MOVE_ACTIVE",payload:e}},_=Object(h.a)({slidePuzzle:{width:"90vmin",height:"90vmin",border:"solid 0px white",transition:"all 0.4s",position:"relative","&:before":{content:'"you solved it my dude!"',textTransform:"uppercase",position:"absolute",margin:"auto",top:0,bottom:0,left:0,right:0,color:"white",fontSize:80,fontWeight:700,width:"50%",height:"50%",display:"grid",placeItems:"center",zIndex:3,transition:"all 0.4s",textAlign:"center",opacity:0,transform:"rotate(-120deg)",backgroundColor:"#F79256",borderRadius:30,pointerEvents:"none"}},solvedPuzzle:{"&:before":{opacity:1,transform:"rotate(-10deg)"}}}),T=function(e){var t=e.size,n=(e.showNumbers,Object(c.b)()),r=Object(c.c)(S),a=Object(c.c)(I),l=Object(c.c)(N),s=Object(c.c)(A),u=_(),d=u.slidePuzzle,p=u.solvedPuzzle,f=function(e){var i=function(e,t,n,i){return n=n||O(e),i=i||Math.sqrt(e.length),P(e,t,n,i)}(r,e,a,t),o=j(i,e,t),c=w(i);n(R({pieces:i,activePiecePosition:e,adjacentToActive:o,isSolved:c}))};Object(i.useEffect)((function(){n(R(z(k(r))))}),[]);return o.a.createElement("div",{className:"".concat(d," ").concat(s?p:null)},o.a.createElement(V,{columns:t,elements:r.map((function(e,t){var n=e.key,i=t===a;return{id:"element".concat(n),order:t,hidden:i,element:o.a.createElement(y,{pos:t,content:(e.key+1).toString(),movePieceCallback:f,isActivePiece:i,isAdjacentPiece:l.includes(t)})}}))}))},W=Object(h.a)({settingsWrapper:{padding:30,color:"white"},field:{margin:"30px 0"},shuffleButton:{padding:"20px 40px",backgroundColor:"#7DCFB6",textAlign:"center",textTransform:"uppercase",fontSize:30,fontWeight:700,borderRadius:2,userSelect:"none",cursor:"pointer"}}),M=function(e){var t=Object(c.b)(),n=Object(c.c)(S),i=W(),r=i.settingsWrapper,a=i.field,l=i.shuffleButton;return o.a.createElement("div",{className:"".concat(r)},o.a.createElement("div",{className:a},o.a.createElement("input",{type:"checkbox",name:"showHint"}),o.a.createElement("label",{htmlFor:"showHint"},"Show number hints?")),o.a.createElement("div",{className:a},o.a.createElement("input",{type:"range",min:2,max:10,name:"puzzleSize"}),o.a.createElement("label",{htmlFor:"puzzleSize"},"Puzzle Size")),o.a.createElement("div",{className:l,onClick:function(){t(R(z(k(n))))}},"shuffle!"))},B=n(19),D=n(18),F=Object(h.a)({galleryContainer:{width:"100%",height:"100%",position:"relative"},galleryItem:{position:"absolute",overflow:"hidden",cursor:"pointer",zIndex:2},hidden:{zIndex:-1}}),V=function(e){var t=e.columns,n=e.elements,r=Object(i.useRef)(null),a=Object(i.useState)(0),c=Object(B.a)(a,2),l=c[0],s=c[1],u=F(),d=u.galleryContainer,p=u.galleryItem,f=u.hidden,h=Object(i.useCallback)(Object(g.throttle)((function(){m()}),200),[]);Object(i.useLayoutEffect)((function(){m();window.addEventListener("resize",(function(){h()}))}),[]);var m=function(){var e;s((null===(e=r.current)||void 0===e?void 0:e.offsetWidth)||0)},v=l/t;return o.a.createElement("ul",{className:d,ref:r},n.map((function(e){return e&&o.a.createElement(D.a.li,{key:e.id,id:e.id,className:"".concat(p," ").concat(e.hidden?f:""),transition:{duration:.2},animate:{width:v,height:v,top:Math.floor(e.order/t)*v,left:e.order%t*v}},e.element)})))};var q=function(){var e=m().AppContainer;return o.a.createElement(c.a,{store:f},o.a.createElement("div",{className:e},o.a.createElement(T,{size:4,showNumbers:!0}),o.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.2064b396.chunk.js.map