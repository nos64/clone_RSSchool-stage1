!function(){"use strict";var t,n,e,a,o={766:function(t,n,e){var a=e(91),o=e.n(a),c=new URL(e(791),e.b),i=new URL(e(608),e.b);o()(c),o()(i)},91:function(t){t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),n.hash&&(t+=n.hash),n.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t):t}},607:function(t,n,e){e.a(t,(async function(t,n){try{e(766);var a=e(268),o=e(539),c=e(872),i=t([a,o,c]);[a,o,c]=i.then?(await i)():i,(0,c.t)(),await(0,a.g)(),n()}catch(t){n(t)}}),1)},218:function(t,n,e){e.d(n,{AV:function(){return w},BS:function(){return y},DT:function(){return u},J3:function(){return g},Rn:function(){return s},Tk:function(){return l},ix:function(){return p},oX:function(){return r},p6:function(){return f},tD:function(){return d},yQ:function(){return m}});const a="http://127.0.0.1:3000",o=`${a}/winners`,c=`${a}/garage`,i=`${a}/engine`,s=async(t,n=7)=>{const e=await fetch(`${c}?_page=${t}&_limit=${n}`);return{items:await e.json(),count:e.headers.get("X-Total-Count")}},r=async t=>(await fetch(`${c}/${t}`)).json(),u=async t=>(await fetch(c,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json(),d=async t=>(await fetch(`${c}/${t}`,{method:"DELETE"})).json(),l=async(t,n)=>(await fetch(`${c}/${t}`,{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).json(),f=async t=>(await fetch(`${i}?id=${t}&status=started`,{method:"PATCH"})).json(),m=async t=>(await fetch(`${i}?id=${t}&status=stopped`,{method:"PATCH"})).json(),g=async t=>{const n=await fetch(`${i}?id=${t}&status=drive`,{method:"PATCH"});return 200!==n.status?{success:!1}:Object.assign({},await n.json())},p=async(t,n,e,a=10)=>{const c=await fetch(`${o}?_page=${t}&_limit=${a}${((t,n)=>t&&n?`&_sort=${t}&_order=${n}`:"")(n,e)}`),i=await c.json();return{items:await Promise.all(i.map((async t=>Object.assign(Object.assign({},t),{car:await r(t.id)})))),count:c.headers.get("X-Total-Count")}},y=async t=>(await fetch(`${o}/${t}`,{method:"DELETE"})).json(),w=async(t,n)=>{const e=await(async t=>(await fetch(`${o}/${t}`)).status)(t);if(404===e)await(async t=>(await fetch(o,{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}})).json())({id:t,wins:1,time:n});else{const e=await(async t=>(await fetch(`${o}/${t}`)).json())(t);await(async(t,n)=>(await fetch(`${o}/${t}`,{method:"PUT",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).json())(t,{id:t,wins:e.wins+1,time:n<e.time?n:e.time})}}},158:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{C:function(){return r}});var o=e(218),c=e(521),i=e(268),s=t([c,i]);[c,i]=s.then?(await s)():s;const r=()=>{var t;const n=document.getElementById("garage");null===(t=document.getElementById("create"))||void 0===t||t.addEventListener("submit",(async t=>{t.preventDefault();const e=document.getElementById("create-name"),a=document.getElementById("create-color");if(e instanceof HTMLInputElement&&a instanceof HTMLInputElement){""===e.value&&(e.value="New Car");const t={name:e.value,color:a.value};await(0,o.DT)(t),await(0,i.g)()}n&&(n.textContent="",n.append((0,c.O)()));const s=document.getElementById("create-name");s&&s instanceof HTMLInputElement&&(s.value=""),t.target instanceof HTMLButtonElement&&(t.target.disabled=!0)}))};a()}catch(t){a(t)}}))},872:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{t:function(){return p}});var o=e(158),c=e(828),i=e(384),s=e(893),r=e(478),u=e(556),d=e(712),l=e(688),f=e(184),m=e(349),g=t([o,c,i,s,r,u,d,l,f,m]);[o,c,i,s,r,u,d,l,f,m]=g.then?(await g)():g;const p=()=>{(0,o.C)(),(0,c.w)(),(0,c.B)(),(0,i.p)(),(0,s.z)(),(0,r.r)(),(0,u.P)(),(0,d.x)(),(0,l.p)(),(0,f.q)(),(0,m.E)()};a()}catch(t){a(t)}}))},478:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{r:function(){return u}});var o=e(100),c=e(267),i=e(268),s=e(774),r=t([o,c,i,s]);[o,c,i,s]=r.then?(await r)():r;const u=()=>{const t=document.getElementById("garage-view"),n=document.getElementById("winners-view");document.body.addEventListener("click",(async e=>{e.target&&e.target instanceof HTMLElement&&(e.target.classList.contains("garage-menu-button")&&(t&&(t.style.display="block"),n&&(n.style.display="none"),c.Z.view="garage",await(0,i.g)()),e.target.classList.contains("winners-menu-button")&&(n&&(n.style.display="block",c.Z.view="winners"),t&&(t.style.display="none"),await(0,s.k)(),n&&(n.textContent="",n.append((0,o.V)()))))}))};a()}catch(t){a(t)}}))},384:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{p:function(){return u}});var o=e(218),c=e(521),i=e(148),s=e(268),r=t([c,i,s]);[c,i,s]=r.then?(await r)():r;const u=()=>{const t=document.getElementById("garage");document.body.addEventListener("click",(async n=>{if(n.target&&n.target instanceof HTMLElement&&n.target.classList.contains("generate-button")&&n.target instanceof HTMLButtonElement){n.target.disabled=!0;const e=(0,i.cj)();await Promise.all(e.map((async t=>(0,o.DT)(t)))),await(0,s.g)(),t&&(t.textContent="",t.append((0,c.O)())),n.target.disabled=!1}}))};a()}catch(t){a(t)}}))},893:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{z:function(){return d}});var o=e(521),c=e(100),i=e(267),s=e(268),r=e(774),u=t([o,c,i,s,r]);[o,c,i,s,r]=u.then?(await u)():u;const d=()=>{const t=document.getElementById("garage"),n=document.getElementById("winners-view");document.body.addEventListener("click",(async e=>{if(e.target&&e.target instanceof HTMLElement){if(e.target.classList.contains("prev-button"))switch(i.Z.view){case"garage":i.Z.carsPage--,await(0,s.g)(),t&&(t.textContent="",t.append((0,o.O)()));break;case"winners":i.Z.winnersPage--,await(0,r.k)(),n&&(n.textContent="",n.append((0,c.V)()))}if(e.target.classList.contains("next-button"))switch(i.Z.view){case"garage":i.Z.carsPage++,await(0,s.g)(),t&&(t.innerHTML="",t.append((0,o.O)()));break;case"winners":i.Z.winnersPage++,await(0,r.k)(),n&&(n.textContent="",n.append((0,c.V)()))}}}))};a()}catch(t){a(t)}}))},712:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{x:function(){return r}});var o=e(218),c=e(267),i=e(53),s=t([c,i]);[c,i]=s.then?(await s)():s;const r=()=>{document.body.addEventListener("click",(async t=>{if(t.target&&t.target instanceof HTMLElement&&t.target.classList.contains("race-button")&&t.target instanceof HTMLButtonElement){t.target.disabled=!0;const n=[];c.Z.cars.forEach((async t=>{const e=await(0,i.S)(t.id);n.push(e),n.sort(((t,n)=>t.time-n.time)),await(0,o.AV)(n[0].id,n[0].time);const a=document.getElementById("message");a&&(a.innerHTML=`${n[0].id} went first ${n[0].time/1e3}s!`)}));const e=document.getElementById("reset");e&&e instanceof HTMLButtonElement&&(e.disabled=!1)}}))};a()}catch(t){a(t)}}))},556:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{P:function(){return r}});var o=e(218),c=e(521),i=e(268),s=t([c,i]);[c,i]=s.then?(await s)():s;const r=()=>{const t=document.getElementById("garage");document.body.addEventListener("click",(async n=>{if(n.target&&n.target instanceof HTMLElement&&n.target.classList.contains("remove-button")){const e=+n.target.id.split("remove-car-")[1];await(0,o.tD)(e),await(0,o.BS)(e),await(0,i.g)(),t&&(t.innerHTML="",t.append((0,c.O)()))}}))};a()}catch(t){a(t)}}))},688:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{p:function(){return s}});var o=e(267),c=e(383),i=t([o,c]);[o,c]=i.then?(await i)():i;const s=()=>{document.body.addEventListener("click",(async t=>{if(t.target&&t.target instanceof HTMLElement&&t.target.classList.contains("reset-button")){t.target instanceof HTMLButtonElement&&(t.target.disabled=!0,o.Z.cars.map((({id:t})=>(0,c.s)(t))));const n=document.getElementById("message");n&&(n.classList.toggle("visible",!1),n.classList.toggle("visible",!0));const e=document.getElementById("race");e&&e instanceof HTMLButtonElement&&(e.disabled=!1)}}))};a()}catch(t){a(t)}}))},415:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{Y:function(){return r}});var o=e(100),c=e(267),i=e(774),s=t([o,c,i]);[o,c,i]=s.then?(await s)():s;const r=async t=>{const n=document.getElementById("winners-view");c.Z.sortOrder="ASC"===c.Z.sortOrder?"DESC":"ASC",c.Z.sortBy=t,await(0,i.k)(),n&&(n.innerHTML="",n.append((0,o.V)()))};a()}catch(t){a(t)}}))},184:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{q:function(){return i}});var o=e(415),c=t([o]);o=(c.then?(await c)():c)[0];const i=()=>{document.body.addEventListener("click",(async t=>{t.target&&t.target instanceof HTMLElement&&(t.target.classList.contains("table-wins")&&(0,o.Y)("wins"),t.target.classList.contains("table-time")&&(0,o.Y)("time"))}))};a()}catch(t){a(t)}}))},53:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{S:function(){return r}});var o=e(218),c=e(267),i=e(148),s=t([c,i]);[c,i]=s.then?(await s)():s;const r=async t=>{const n=document.getElementById(`start-engine-car-${t}`);n&&n instanceof HTMLButtonElement&&(n.disabled=!0,null==n||n.classList.toggle("enabling",!0));const{velocity:e,distance:a}=await(0,o.p6)(t),s=Math.round(a/e);null==n||n.classList.toggle("enabling",!0);const r=document.getElementById(`stop-engine-car-${t}`);r&&r instanceof HTMLButtonElement&&(r.disabled=!1);const u=document.getElementById(`car-${t}`),d=document.getElementById(`flag-${t}`);if(null!==u&&null!==d){const t=Math.floor((0,i.hG)(u,d))+50;(0,i.SO)(u,t,s)}const{success:l}=await(0,o.J3)(t);return l||window.cancelAnimationFrame(c.Z.animation.id),{success:l,id:t,time:s}};a()}catch(t){a(t)}}))},349:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{E:function(){return s}});var o=e(53),c=e(383),i=t([o,c]);[o,c]=i.then?(await i)():i;const s=()=>{document.body.addEventListener("click",(async t=>{if(t.target&&t.target instanceof HTMLElement){if(t.target.classList.contains("start-engine-button")){const n=+t.target.id.split("start-engine-car-")[1];(0,o.S)(n)}if(t.target.classList.contains("stop-engine-button")){const n=+t.target.id.split("stop-engine-car-")[1];(0,c.s)(n)}}}))};a()}catch(t){a(t)}}))},383:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{s:function(){return s}});var o=e(218),c=e(267),i=t([c]);c=(i.then?(await i)():i)[0];const s=async t=>{const n=document.getElementById(`stop-engine-car-${t}`);n&&n instanceof HTMLButtonElement&&(n.disabled=!0,null==n||n.classList.toggle("enabling",!0)),await(0,o.yQ)(t),null==n||n.classList.toggle("enabling",!1);const e=document.getElementById(`start-engine-car-${t}`);e&&e instanceof HTMLButtonElement&&(e.disabled=!1);const a=document.getElementById(`car-${t}`);a&&(a.style.transform="translateX(0)"),c.Z.animation.id&&window.cancelAnimationFrame(c.Z.animation.id)};a()}catch(t){a(t)}}))},828:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{B:function(){return d},w:function(){return u}});var o=e(218),c=e(521),i=e(268),s=t([c,i]);[c,i]=s.then?(await s)():s;let r=null;const u=()=>{var t;const n=document.getElementById("garage");null===(t=document.getElementById("update"))||void 0===t||t.addEventListener("submit",(async t=>{t.preventDefault();const e=document.getElementById("update-name"),a=document.getElementById("update-color");if(e instanceof HTMLInputElement&&a instanceof HTMLInputElement){const t={name:e.value,color:a.value};if(r){await(0,o.Tk)(r.id,t),await(0,i.g)(),n&&(n.textContent="",n.append((0,c.O)()));const e=document.getElementById("update-name");e&&e instanceof HTMLInputElement&&(e.value="",e.disabled=!0);const a=document.getElementById("update-color");a instanceof HTMLInputElement&&(a.disabled=!0);const s=document.getElementById("update-submit");s instanceof HTMLButtonElement&&(s.disabled=!0),a instanceof HTMLInputElement&&(a.value="#ffffff"),r=null}}}))},d=()=>{document.body.addEventListener("click",(async t=>{if(t.target&&t.target instanceof HTMLElement&&t.target.classList.contains("select-button")){const n=document.getElementById("update-name"),e=document.getElementById("update-color"),a=document.getElementById("update-submit");r=await(0,o.oX)(+t.target.id.split("select-car-")[1]),r&&n instanceof HTMLInputElement&&(n.value=r.name,n.disabled=!1),r&&e instanceof HTMLInputElement&&(e.value=r.color,e.disabled=!1),a instanceof HTMLButtonElement&&(a.disabled=!1)}}))};a()}catch(t){a(t)}}))},268:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{g:function(){return s}});var o=e(218),c=e(267),i=t([c]);c=(i.then?(await i)():i)[0];const s=async()=>{const t=document.getElementById("prev"),n=document.getElementById("next"),{items:e,count:a}=await(0,o.Rn)(c.Z.carsPage);c.Z.cars=e,c.Z.carsCount=a,c.Z.carsCount&&t instanceof HTMLButtonElement&&n instanceof HTMLButtonElement&&(7*c.Z.carsPage<+c.Z.carsCount?n.disabled=!1:n.disabled=!0,c.Z.carsPage>1?t.disabled=!1:t.disabled=!0)};a()}catch(t){a(t)}}))},774:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{k:function(){return s}});var o=e(218),c=e(267),i=t([c]);c=(i.then?(await i)():i)[0];const s=async()=>{const t=document.getElementById("next"),n=document.getElementById("prev"),{items:e,count:a}=await(0,o.ix)(c.Z.winnersPage,c.Z.sortBy,c.Z.sortOrder);c.Z.winners=e,c.Z.winnersCount=a,c.Z.winnersCount&&t instanceof HTMLButtonElement&&n instanceof HTMLButtonElement&&(10*c.Z.winnersPage<+c.Z.winnersCount?t.disabled=!1:t.disabled=!0,c.Z.winnersPage>1?n.disabled=!1:n.disabled=!0)};a()}catch(t){a(t)}}))},355:function(t,n,e){var a=e(910);const o=(0,a.N)("header","header");document.body.append(o);const c=(0,a.N)("div","container","header__container");o.append(c);const i=(0,a.N)("h1","header__title");i.textContent="Async Race",c.append(i)},521:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{O:function(){return r}});var o=e(910),c=e(280),i=e(267),s=t([i]);i=(s.then?(await s)():s)[0];const r=()=>{const t=(0,o.N)("div","garage-wrapper"),n=(0,o.N)("h1","garage-title");n.textContent=`Garage #${i.Z.carsCount}`;const e=(0,o.N)("h2","garage-title-page");e.textContent=`Page #${i.Z.carsPage}`;const a=(0,o.N)("ul","garage-list");return i.Z&&i.Z.cars.forEach((t=>{const n=(0,o.N)("li","garage-li"),e=(0,c.n)(t);n.append(e),a.append(n)})),t.append(n,e,a),t};a()}catch(t){a(t)}}))},100:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{V:function(){return u}});var o=e(267),c=e(151),i=e(910),s=e(196),r=t([o]);o=(r.then?(await r)():r)[0];const u=()=>{const t=(0,i.N)("div","winners-wrapper"),n=(0,i.N)("h1","winners-title");n.textContent=`Winners ${o.Z.winnersCount}`;const e=(0,i.N)("h2","winners-title-page");e.textContent=`Garage #${o.Z.winnersPage}`;const a=(0,i.N)("table","winners-table");a instanceof HTMLTableElement&&(a.border="0",a.cellSpacing="0",a.cellSpacing="0");const r=(0,i.N)("thead"),u=(0,i.N)("th");u.textContent="Number";const d=(0,i.N)("th");d.textContent="Car";const l=(0,i.N)("th");d.textContent="Name";const f=(0,i.N)("th","table-button","table-wins");o.Z.sortBy===c.j.byWins&&f.classList.add(`${o.Z.sortOrder}`),f.id="sort-by-wins",f.textContent="Wins";const m=(0,i.N)("th","table-button","table-wins");o.Z.sortBy===c.j.byTime&&m.classList.add(`${o.Z.sortOrder}`),m.id="sort-by-time",m.textContent="Best time (seconds)";const g=(0,i.N)("tbody");return o.Z.winners.forEach(((t,n)=>{const e=(0,i.N)("tr"),a=(0,i.N)("td");a.textContent=`${n+1}`;const o=(0,i.N)("td");o.innerHTML=`${(0,s.p)(t.car.color)}`;const c=(0,i.N)("td");c.textContent=`${t.car.name}`;const r=(0,i.N)("td");r.textContent=`${t.wins}`;const u=(0,i.N)("td");u.textContent=""+t.time/1e3,e.append(a,o,c,r,u),g.append(e)})),r.append(u,d,l,f,m),a.append(r,g),t.append(n,e,a),t};a()}catch(t){a(t)}}))},338:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{X:function(){return r}});var o=e(910),c=e(521),i=e(100),s=t([c,i]);[c,i]=s.then?(await s)():s;const r=()=>{const t=(0,o.N)("div","wrapper"),n=(0,o.N)("div","menu"),e=(0,o.N)("button","button","garage-menu-button");e.textContent="To garage",e.id="garage-menu";const a=(0,o.N)("button","button","winners-menu-button");a.textContent="To winners",a.id="winners-menu";const s=(0,o.N)("div","garage-view");s.id="garage-view";const r=(0,o.N)("div","form-wrapper"),u=(0,o.N)("form","form");u.id="create";const d=(0,o.N)("input","input");d.id="create-name",d instanceof HTMLInputElement&&(d.name="name",d.type="text");const l=(0,o.N)("input","input");l.id="create-color",l instanceof HTMLInputElement&&(l.name="color",l.type="color",l.value="#ffffff");const f=(0,o.N)("button","button","form-button");f.textContent="Create",f instanceof HTMLButtonElement&&(f.type="submit");const m=(0,o.N)("form","form");m.id="update";const g=(0,o.N)("input","input");g.id="update-name",g instanceof HTMLInputElement&&(g.name="name",g.type="text",g.disabled=!0);const p=(0,o.N)("input","input");p.id="update-color",p instanceof HTMLInputElement&&(p.name="color",p.type="color",p.value="#ffffff",p.disabled=!0);const y=(0,o.N)("button","button","form-button","update-submit");y.textContent="Update",y.id="update-submit",y instanceof HTMLButtonElement&&(y.type="submit",y.disabled=!0);const w=(0,o.N)("div","race-controls"),b=(0,o.N)("button","race-button");b.id="race",b.textContent="Race";const h=(0,o.N)("button","reset-button");h.id="reset",h.textContent="Reset";const v=(0,o.N)("button","generate-button");v.id="generate",v.textContent="Generate cars";const E=(0,o.N)("div");E.id="garage";const L=(0,c.O)();E.append(L);const T=(0,o.N)("div"),M=(0,o.N)("p","message");M.id="message";const C=(0,o.N)("div");C.style.display="none",C.id="winners-view";const x=(0,i.V)();C.append(x);const N=(0,o.N)("div","pagination"),B=(0,o.N)("button","prev-button");B.textContent="Prev",B.id="prev",B instanceof HTMLButtonElement&&(B.disabled=!0);const $=(0,o.N)("button","next-button");return $.textContent="Next",$.id="next",$ instanceof HTMLButtonElement&&($.disabled=!0),N.append(B,$),T.append(M),w.append(b,h,v),m.append(g,p,y),u.append(d,l,f),r.append(u,m),s.append(r,w,E,T),n.append(e,a),t.append(n,s,C,N),t};a()}catch(t){a(t)}}))},539:function(t,n,e){e.a(t,(async function(t,n){try{e(355);var a=e(338),o=t([a]);const c=(0,(a=(o.then?(await o)():o)[0]).X)();document.body.append(c),n()}catch(t){n(t)}}))},196:function(t,n,e){e.d(n,{p:function(){return a}});const a=t=>`<?xml version="1.0" encoding="iso-8859-1"?>\n  <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 20.07 14.07" style="enable-background:new 0 0 20.07 20.07;" xml:space="preserve">\n  <g>\n    <g>\n      <path style="fill:${t};" d="M20.07,10.102c0,0-0.719-1.593-5.363-1.53c0,0-4.626-4.644-13.986,0.582\n        c0,0,0.205,1.018-0.566,1.018c-0.159,0.765-0.322,1.769,0.203,2.294c1.146,0,1.257,0,1.266,0c-0.028-0.123-0.044-0.25-0.044-0.381\n        c0-0.951,0.771-1.722,1.722-1.722s1.722,0.771,1.722,1.722c0,0.131-0.016,0.258-0.044,0.381h0.268h8.357h1.119\n        c-0.027-0.123-0.043-0.25-0.043-0.381c0-0.951,0.771-1.722,1.721-1.722c1.297,0,2.037,1.318,1.906,2.092l1.762-0.182\n        C19.801,10.687,20.07,10.102,20.07,10.102z M6.936,8.835H2.829c0,0,1.703-0.798,4.107-1.261V8.835z M7.827,8.835V7.427\n        c3.442-0.498,6.143,1.408,6.143,1.408H7.827z"/>\n      <path style="fill:${t};" d="M16.402,10.742c-0.734,0-1.33,0.595-1.33,1.33c0,0.733,0.596,1.329,1.33,1.329\n        s1.514-0.596,1.514-1.329C17.916,11.336,17.137,10.742,16.402,10.742z M16.402,12.582c-0.283,0-0.512-0.229-0.512-0.511\n        s0.229-0.512,0.512-0.512c0.281,0,0.512,0.229,0.512,0.512C16.914,12.353,16.683,12.582,16.402,12.582z"/>\n      <path style="fill:${t};" d="M3.268,10.742c-0.734,0-1.329,0.595-1.329,1.33c0,0.733,0.595,1.329,1.329,1.329\n        c0.735,0,1.33-0.596,1.33-1.329C4.597,11.336,4.003,10.742,3.268,10.742z M3.268,12.582c-0.282,0-0.512-0.229-0.512-0.511\n        s0.23-0.512,0.512-0.512s0.512,0.229,0.512,0.512C3.78,12.353,3.55,12.582,3.268,12.582z"/>\n    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n  `},280:function(t,n,e){e.d(n,{n:function(){return c}});var a=e(910),o=(e.p,e(196));const c=t=>{const n=(0,a.N)("div","car-wrapper"),e=(0,a.N)("div","car-buttuns-wrapper"),c=(0,a.N)("button","button","select-button");c.textContent="Select",c.id=`select-car-${t.id}`;const i=(0,a.N)("button","button","remove-button");i.textContent="Remove",i.id=`remove-car-${t.id}`;const s=(0,a.N)("span","car-name");s.textContent=t.name;const r=(0,a.N)("div","road"),u=(0,a.N)("div","launch-pad"),d=(0,a.N)("div","control-panel"),l=(0,a.N)("button","icon","start-engine-button");l.id=`start-engine-car-${t.id}`,l.textContent="Start";const f=(0,a.N)("button","icon","stop-engine-button");f.id=`stop-engine-car-${t.id}`,f instanceof HTMLButtonElement&&(f.disabled=!0),f.textContent="Stop";const m=(0,a.N)("div","car");m.id=`car-${t.id}`,m.innerHTML=`${(0,o.p)(t.color)}`;const g=(0,a.N)("img","flag");return g instanceof HTMLImageElement&&(g.src="./img/flag.png"),g.id=`flag-${t.id}`,e.append(c,i,s),d.append(l,f),u.append(d,m),r.append(u,g),n.append(e,r),n}},910:function(t,n,e){e.d(n,{N:function(){return a}});const a=(t,n,e,a)=>{const o=document.createElement(t);return n&&o.classList.add(n),e&&o.classList.add(e),a&&o.classList.add(a),o}},267:function(t,n,e){e.a(t,(async function(t,a){try{var o=e(218);const{items:t,count:c}=await(0,o.Rn)(1),{items:i,count:s}=await(0,o.ix)(1,"wins","ASC"),r={carsPage:1,cars:t,carsCount:c,winnersPage:1,winners:i,winnersCount:s,animation:{id:0},view:"garage",sortBy:"wins",sortOrder:"ASC"};n.Z=r,a()}catch(t){a(t)}}),1)},151:function(t,n,e){e.d(n,{j:function(){return a}});const a={byWins:"wins",byTime:"time"}},148:function(t,n,e){e.a(t,(async function(t,a){try{e.d(n,{SO:function(){return r},cj:function(){return m},hG:function(){return s}});var o=e(267),c=t([o]);function i(t){const{top:n,left:e,width:a,height:o}=t.getBoundingClientRect();return{x:e+a/2,y:n+o/2}}function s(t,n){const e=i(t),a=i(n);return Math.hypot(e.x-a.x,e.y-a.y)}function r(t,n,e){let a=null,c=0;return c=window.requestAnimationFrame((function i(s){if(a||(a=s),s&&a&&t){const r=s-a,u=Math.round(r*(n/e));t.style.transform=`translateX(${Math.min(u,n)}px)`,u<n&&(c=window.requestAnimationFrame(i),o.Z.animation.id=c)}})),c}o=(c.then?(await c)():c)[0];const u=["Roadster","S","X","3","Y","Cybertruck","X5","X7","X3","X6","GT4","FXX","599 GTO","Enzo","458 Italia","250 GTO","Priora","4x4","Rio","Focus","Kalina","Vesta","Spark","Lacetti","Nexia","Matiz","Cobalt","Captiva","A7","A5","A3","A8","TT","Corolla","Camry","RAV4","Impreza","WRX","ES","LS","RX","GX","LX","GS","LC500","Gallardo","Aventador","911","Cayenne","FX37"],d=["Audi","Alfa Romeo","Alpina","Aston Martin","Axon","Ford","Ferrari","Fiat","GAZ","GMC","Honda","Hummer","Hyundai","Infiniti","Isuzu","JAC","Jaguar","Jeep","Kamaz","Lada","Lexus","Lotus","MAN","Maybach","MAZ","Mazda","McLaren","Nissan","Opel","Paccar","Pagani","Pontiac","Porsche","Renault","Å koda","Smart","Subaru","Suzuki","Tesla","Toyota","UAZ","Volvo","ZAZ","XPeng","TVR","Saab","RAM","Chevrolet","Mazzanti","Daewoo"],l=()=>`${u[Math.floor(Math.random()*u.length)]} ${d[Math.floor(Math.random()*d.length)]}`,f=()=>{let t="#";for(let n=0;n<6;n++)t+="0123456789abcdef"[Math.floor(16*Math.random())];return t},m=(t=100)=>new Array(t).fill(1).map((t=>({name:l(),color:f()})));a()}catch(g){a(g)}}))},791:function(t,n,e){t.exports=e.p+"img/favicon.png"},608:function(t,n,e){t.exports=e.p+"img/favicon.svg"}},c={};function i(t){var n=c[t];if(void 0!==n)return n.exports;var e=c[t]={exports:{}};return o[t](e,e.exports,i),e.exports}i.m=o,t="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",n="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",e="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=function(t){t&&!t.d&&(t.d=1,t.forEach((function(t){t.r--})),t.forEach((function(t){t.r--?t.r++:t()})))},i.a=function(o,c,i){var s;i&&((s=[]).d=1),s&&(s.moduleId=o.id);var r,u,d,l=new Set,f=o.exports,m=new Promise((function(t,n){d=n,u=t}));m[n]=f,m[t]=function(t){s&&t(s),l.forEach(t),m.catch((function(){}))},m.moduleId=o.id,o.exports=m,c((function(o){var c;r=function(o){return o.map((function(o){if(null!==o&&"object"==typeof o){if(o[t])return o;if(o.then){var c=[];c.d=0,o.then((function(t){i[n]=t,a(c)}),(function(t){i[e]=t,a(c)}));var i={};return i[t]=function(t){t(c)},i}}var s={};return s[t]=function(){},s[n]=o,s}))}(o);var i=function(){return r.map((function(t){if(t[e])throw t[e];return t[n]}))},u=new Promise((function(n){(c=function(){n(i)}).r=0;var e=function(t){t!==s&&!l.has(t)&&(l.add(t),t&&!t.d&&(c.r++,t.push(c)))};r.map((function(n){n[t](e)}))}));return c.r?u:i()}),(function(t){t?d(m[e]=t):u(f),a(s)})),s&&(s.d=0)},i.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(n,{a:n}),n},i.d=function(t,n){for(var e in n)i.o(n,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){var t;i.g.importScripts&&(t=i.g.location+"");var n=i.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var e=n.getElementsByTagName("script");e.length&&(t=e[e.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=t}(),i.b=document.baseURI||self.location.href,i(607)}();