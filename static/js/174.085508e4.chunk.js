"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[174],{174:function(e,n,t){t.r(n),t.d(n,{default:function(){return U}});var r,i,o,s,c,a,l,d=t(9439),h=t(2791),x=t(7689),u=t(1087),p=t(6547),f=t(8673),j=t(8402),m=function(e){return fetch("".concat("https://api.themoviedb.org/3/movie/").concat(e,"?api_key=").concat("dbb209971c0a849ca6d954f6b026b870")).then((function(e){return e.ok?e.json():new Promise.reject(new Error("Something went wrong, try again later"))}))},v=t(168),Z=t(6444),b=Z.ZP.img(r||(r=(0,v.Z)(["\n  margin-right: 20px;\n  width: 300px;\n  height: 450px;\n"]))),g=Z.ZP.p(i||(i=(0,v.Z)(["\n  font-size: 16px;\n"]))),k=Z.ZP.h1(o||(o=(0,v.Z)(["\n  font-size: 32px;\n"]))),w=Z.ZP.h2(s||(s=(0,v.Z)(["\n  font-size: 24px;\n"]))),y=(0,Z.ZP)(u.rU)(c||(c=(0,v.Z)(["\n  color: black;\n  text-decoration: none;\n  font-size: 24px;\n"]))),P=Z.ZP.div(a||(a=(0,v.Z)(["\n  margin-top: 10px;\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n"]))),_=Z.ZP.ul(l||(l=(0,v.Z)(["\n  font-size: 24px;\n"]))),z=t(184),U=function(){var e,n,t=(0,h.useState)(null),r=(0,d.Z)(t,2),i=r[0],o=r[1],s=(0,h.useState)(null),c=(0,d.Z)(s,2),a=c[0],l=c[1],v=(0,x.TH)(),Z=(0,h.useRef)(null!==(e=null===(n=v.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/"),U=(0,x.UO)().movieId;return(0,h.useEffect)((function(){m(U).then((function(e){o(e)})).catch((function(e){return l(e.message)}))}),[U]),a?(0,z.jsx)("h2",{children:a}):i&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(y,{to:Z.current,children:"\u2190 Go back"}),(0,z.jsxs)("div",{style:{display:"flex"},children:[(0,z.jsx)(b,{src:"".concat("https://image.tmdb.org/t/p/w500/").concat(i.poster_path),alt:""}),(0,z.jsxs)("div",{children:[(0,z.jsxs)(k,{children:[i.title," (",(0,p.Z)((0,f.Z)(i.release_date),"yyyy"),")"]}),(0,z.jsxs)(g,{children:["User score: ",Math.floor(10*i.vote_average),"%"]}),(0,z.jsx)(w,{children:"Overview"}),(0,z.jsx)(g,{children:i.overview}),(0,z.jsx)(w,{children:"Genres"}),(0,z.jsx)(g,{children:i.genres.map((function(e){return"".concat(e.name," ")}))})]})]}),(0,z.jsxs)(P,{children:[(0,z.jsx)(w,{children:"Addititonal information"}),(0,z.jsxs)(_,{children:[(0,z.jsx)("li",{children:(0,z.jsx)(u.rU,{to:"cast",children:"Cast"})}),(0,z.jsx)("li",{children:(0,z.jsx)(u.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,z.jsx)(h.Suspense,{fallback:(0,z.jsx)(j.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),children:(0,z.jsx)(x.j3,{})})]})}}}]);
//# sourceMappingURL=174.085508e4.chunk.js.map