import{c as d,a as m,r as f,o as h,b as v,d as _,l as E,_ as g,e as y,f as L,g as P,F as A,h as O}from"./vendor.9dd6c1d0.js";const R=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};R();var b=(a,s)=>{const n=a.__vccOpts||a;for(const[o,e]of s)n[o]=e;return n};const I={},D={class:"app"};function V(a,s){const n=f("router-view");return h(),d("div",D,[m(n)])}var x=b(I,[["render",V]]);const T="modulepreload",l={},$="/",i=function(s,n){return!n||n.length===0?s():Promise.all(n.map(o=>{if(o=`${$}${o}`,o in l)return;l[o]=!0;const e=o.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const r=document.createElement("link");if(r.rel=e?"stylesheet":T,e||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),e)return new Promise((u,p)=>{r.addEventListener("load",u),r.addEventListener("error",p)})})).then(()=>s())},k=[{path:"/",name:"Dashboard",component:()=>i(()=>import("./Dashboard.2b9ba4d6.js"),["assets/Dashboard.2b9ba4d6.js","assets/Dashboard.27152f94.css","assets/Sidebar.d7e6fd94.js","assets/Sidebar.52991c2a.css","assets/vendor.9dd6c1d0.js"])},{path:"/bans",component:()=>i(()=>import("./Bans.4c1c4a1a.js"),["assets/Bans.4c1c4a1a.js","assets/Bans.8e04312b.css","assets/Sidebar.d7e6fd94.js","assets/Sidebar.52991c2a.css","assets/vendor.9dd6c1d0.js"])},{path:"/login",name:"Login",component:()=>i(()=>import("./Login.baf38ec5.js"),["assets/Login.baf38ec5.js","assets/Login.6a26e2e9.css","assets/vendor.9dd6c1d0.js"])},{path:"/profile/:id",name:"Profile",component:()=>i(()=>import("./Profile.888cc2e2.js"),["assets/Profile.888cc2e2.js","assets/Profile.54477a9d.css","assets/Sidebar.d7e6fd94.js","assets/Sidebar.52991c2a.css","assets/vendor.9dd6c1d0.js"])},{path:"/rapoartestaff",component:()=>i(()=>import("./RaportStaff.d6eb70d4.js"),["assets/RaportStaff.d6eb70d4.js","assets/RaportStaff.c8489f67.css","assets/Sidebar.d7e6fd94.js","assets/Sidebar.52991c2a.css","assets/vendor.9dd6c1d0.js"])},{path:"/rules",name:"Regulament",component:()=>i(()=>import("./Rules.ffa66878.js"),["assets/Rules.ffa66878.js","assets/Rules.9386b069.css","assets/Sidebar.d7e6fd94.js","assets/Sidebar.52991c2a.css","assets/vendor.9dd6c1d0.js"])},{path:"/staff",component:()=>i(()=>import("./Staff.82006df7.js"),["assets/Staff.82006df7.js","assets/Staff.a4542ac6.css","assets/Sidebar.d7e6fd94.js","assets/Sidebar.52991c2a.css","assets/vendor.9dd6c1d0.js"])},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>i(()=>import("./NotFound.5d305290.js"),["assets/NotFound.5d305290.js","assets/NotFound.e6f15e7a.css","assets/vendor.9dd6c1d0.js"])}],w=v({history:_({}.BASE_URL),base:{}.BASE_URL,history:_(),mode:"hash",routes:k});E.add(g,y);const c=L(x);c.use(w);c.use(P.exports.LoadingPlugin);c.component("fa",A);c.mount("#app");c.config.globalProperties.$axios=O;export{b as _};
