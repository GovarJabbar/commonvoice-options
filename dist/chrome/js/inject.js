(()=>{var e,t={662:()=>{chrome.storage.sync.get(["toggleAutoPlayStatus","toggleForceListenStatus"],(function(e){e.toggleAutoPlayStatus&&setTimeout((function(){setInterval((function(){!document.querySelectorAll("#listen-page > div > div > div.primary-buttons > div.stop > button").length&&document.querySelectorAll("#listen-page > div > div > div.primary-buttons > div > button").length&&document.querySelector("#listen-page > div > div > div.primary-buttons > div > button").click()}),1e3)}),5e3),e.toggleForceListenStatus&&setInterval((function(){document.querySelectorAll(".record-instead").length&&(document.querySelector(".track-fs-toggle-speak").click(),setTimeout((function(){document.querySelector(".track-fs-toggle-listen").click()}),500))}),1e3)}))},366:()=>{}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,r,n,i)=>{if(!r){var l=1/0;for(a=0;a<e.length;a++){for(var[r,n,i]=e[a],u=!0,c=0;c<r.length;c++)(!1&i||l>=i)&&Object.keys(o.O).every((e=>o.O[e](r[c])))?r.splice(c--,1):(u=!1,i<l&&(l=i));if(u){e.splice(a--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var a=e.length;a>0&&e[a-1][2]>i;a--)e[a]=e[a-1];e[a]=[r,n,i]},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={768:0,1:0,53:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[l,u,c]=r,s=0;if(l.some((t=>0!==e[t]))){for(n in u)o.o(u,n)&&(o.m[n]=u[n]);if(c)var a=c(o)}for(t&&t(r);s<l.length;s++)i=l[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(a)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),o.O(void 0,[53],(()=>o(662)));var n=o.O(void 0,[53],(()=>o(366)));n=o.O(n)})();