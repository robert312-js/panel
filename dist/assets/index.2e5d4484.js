import{c as _,a as r,r as f,o as d,b as e,t as h,d as m,w,p as A,e as P,F as L,f as k,g as U,h as S,i as C,j as N,l as E,_ as O,k as R,m as V,n as H,q as M,s as G}from"./vendor.e9c094e2.js";const F=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}};F();var D=(t,s)=>{const i=t.__vccOpts||t;for(const[c,a]of s)i[c]=a;return i};const J={},B={class:"app"};function j(t,s){const i=f("router-view");return d(),_("div",B,[r(i)])}var z=D(J,[["render",j]]);const W="modulepreload",T={},q="/",v=function(s,i){return!i||i.length===0?s():Promise.all(i.map(c=>{if(c=`${q}${c}`,c in T)return;T[c]=!0;const a=c.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${o}`))return;const n=document.createElement("link");if(n.rel=a?"stylesheet":W,a||(n.as="script",n.crossOrigin=""),n.href=c,document.head.appendChild(n),a)return new Promise((p,l)=>{n.addEventListener("load",p),n.addEventListener("error",l)})})).then(()=>s())};const Y={props:["page"],data(){return{userTheme:"dark-theme",UserName:"Unknown",UserID:0,isLogged:!1,UserTag:"Jucator",CurrentDate:"12:15 PM 19th November 2022"}},methods:{GetCurrentDate(){var t=new Date,s=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"),i=s[t.getDay()],c=function(){var g=t;return/1/.test(parseInt((g+"").charAt(0)))?"th":(g=parseInt((g+"").charAt(1)),g==1?"st":g==2?"nd":g==3?"rd":"th")}(),a=b+(t.getDate()<10)?"0"+t.getDate()+c:t.getDate()+c,o=new Array("January","February","March","April","May","June","July","August","September","October","November","December"),n=o[t.getMonth()],p=t.getFullYear(),l=t.getHours()>12?t.getHours()-12:t.getHours()<10?"0"+t.getHours():t.getHours(),x=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),u=t.getHours()>12?"PM":"AM",b=l+":"+x+" "+u+" "+i+" "+a+" "+n+", "+p;return b},GoToProfile(){this.$router.push("/profile/"+this.UserID)},async GetUserTag(t){let i=(await this.$axios.get("https://fairplay-rp.ro/api/user/"+t)).data;i.adminLvl==1?this.UserTag="Helper in Teste":i.adminLvl==2?this.UserTag="Helper":i.adminLvl==3?this.UserTag="Moderator":i.adminLvl==4?this.UserTag="Administrator":i.adminLvl==5?this.UserTag="Developer":i.adminLvl==6?this.UserTag="Co-Fondator":i.adminLvl>=7?this.UserTag="Fondator":this.UserTag="Jucator"},IsUserLogged(){this.$axios.get("https://fairplay-rp.ro/api/account",{withCredentials:!0}).then(t=>{t.data.status=="success"?(this.UserName=t.data.user.username,this.UserID=t.data.user.id,this.isLogged=!0,this.GetUserTag(this.UserID)):this.isLogged=!1})},Logout(){this.$axios.get("https://fairplay-rp.ro/api/logout",{withCredentials:!0}),setTimeout(()=>{location.reload()},500)}},mounted(){this.IsUserLogged()}},Z=t=>(A("data-v-1aa195e0"),t=t(),P(),t),K={class:"header-title"},Q={class:"user-wrapper"},X={key:0,class:"user-data-wrapper"},ee={class:"icon"},te={class:"user-name"},se={class:"icon"},ae={key:1,class:"user-data"},oe={class:"icon"},ie=Z(()=>e("span",{class:"text"},"Logheaza-te",-1));function ne(t,s,i,c,a,o){const n=f("fa"),p=f("router-link");return d(),_("header",null,[e("div",K,[e("h1",null,h(i.page),1),e("p",null,h(o.GetCurrentDate()),1)]),e("div",Q,[a.isLogged==!0?(d(),_("div",X,[e("div",{class:"user-data",onClick:s[0]||(s[0]=l=>o.GoToProfile())},[e("div",ee,[r(n,{icon:"fa-solid fa-user"})]),e("div",te,[e("h1",null,h(a.UserName),1),e("p",null,h(a.UserTag),1)])]),e("div",{class:"exit-button",onClick:s[1]||(s[1]=l=>o.Logout())},[e("div",se,[r(n,{icon:"fa-solid fa-arrow-right-from-bracket"})])])])):m("",!0),a.isLogged==!1?(d(),_("div",ae,[e("div",oe,[r(n,{icon:"fa-solid fa-user"})]),r(p,{to:"/login",class:"button"},{default:w(()=>[ie]),_:1})])):m("",!0)])])}var re=D(Y,[["render",ne],["__scopeId","data-v-1aa195e0"]]),ce="/assets/logo-fairplay.4d8dafde.png";const le={props:["page"],data(){return{CurrentPage:1,onlinePlayers:0,NavigationButtons:{1:{Icon:"fa-house",Text:"Acas\u0103",Link:"/",Active:!1,AnotherPage:!1},2:{Icon:"fa-ban",Text:"Interziceri",Link:"/bans",Active:!1,AnotherPage:!1},3:{Icon:"fa-shield-halved",Text:"Staff",Link:"/staff",Active:!1,AnotherPage:!1},4:{Icon:"fas fa-book",Text:"Regulament",Link:"/rules",Active:!1,AnotherPage:!1},5:{Icon:"fas fa-basket-shopping",Text:"Shop",Link:"https://shop.fairplay-rp.ro/",Active:!1,AnotherPage:!0}}}},methods:{clickRedirect(t){switch(t){case"fivem":window.open("https://fivem.net");break}},ToggleSidebar(){$(".sidebar").toggleClass("close")},SelectPage(t){this.NavigationButtons[t].AnotherPage?window.location.href=this.NavigationButtons[t].Link:this.$router.push(this.NavigationButtons[t].Link)}},created(){this.page!=0&&(this.NavigationButtons[this.page].Active=!0),$.getJSON("https://servers-frontend.fivem.net/api/servers/single/2e3lgd",function(t){$("#navbar-players").text(t.Data.clients+" Juc\u0103tori")})}},I=t=>(A("data-v-55650af3"),t=t(),P(),t),de={class:"sidebar close"},ue=U('<div class="image-text" data-v-55650af3><span class="image" data-v-55650af3><img src="'+ce+'" alt="" data-v-55650af3></span><div class="text logo-text" data-v-55650af3><span class="name" data-v-55650af3>FairPlay Romania</span><span class="profession" data-v-55650af3>Roleplay Server</span></div></div>',1),_e={class:"icon"},he={class:"menu-bar"},pe={class:"menu"},ve={class:"search-box"},fe={class:"icon"},ge=I(()=>e("input",{type:"text",placeholder:"Search..."},null,-1)),me={class:"menu-links"},be=["onClick"],ye={class:"icon"},xe={class:"text nav-text"},De={class:"bottom-content"},$e={class:"icon"},Le=I(()=>e("span",{class:"text nav-text"},"Logout",-1));function ke(t,s,i,c,a,o){const n=f("fa");return d(),_("nav",de,[e("header",null,[ue,e("div",{class:"toggle",onClick:s[0]||(s[0]=p=>o.ToggleSidebar())},[e("div",_e,[r(n,{icon:"fa-solid fa-arrow-right"})])])]),e("div",he,[e("div",pe,[e("li",ve,[e("div",fe,[r(n,{icon:"fa-solid fa-magnifying-glass"})]),ge]),e("ul",me,[(d(!0),_(L,null,k(a.NavigationButtons,(p,l)=>(d(),_("div",null,[e("li",{class:"nav-link",onClick:x=>o.SelectPage(l)},[e("a",null,[e("div",ye,[r(n,{icon:p.Icon},null,8,["icon"])]),e("span",xe,h(p.Text),1)])],8,be)]))),256))])]),e("div",De,[e("li",null,[e("a",null,[e("div",$e,[r(n,{icon:"fa-solid fa-arrow-right-from-bracket"})]),Le])])])])])}var Te=D(le,[["render",ke],["__scopeId","data-v-55650af3"]]);const we={data(){return{RecentActions:[],UsersData:[],serverVehicles:[],TopPlayers:[],onlineUsers:""}},components:{"Dashboard-Header":re,"Dashboard-Sidebar":Te},methods:{GetDate(t){var s=new Date(t*1e3);return s.toLocaleDateString("en-GB")},GetActionName(t){return this.UsersData.filter(s=>s.id==t)[0].username},GoToRules(){this.$router.push("/rules")},GetDate(t){var s=new Date(t*1e3),i=s.getFullYear(),c=s.getMonth(),a=s.getDate(),o=s.getHours(),n=s.getMinutes(),o=s.getHours()>12?s.getHours()-12:s.getHours()<10?"0"+s.getHours():s.getHours(),n=s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes(),p=a+"/"+c+"/"+i+" "+o+":"+n;return p},OpenLink(t){window.open(t,"_blank")}},async created(){let t=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,backgroundColor:"#00000090",transition:"fade",enforceFocus:!0,opacity:.6,loader:"dots",color:"#0098ff"});setTimeout(()=>{t.hide()},2e3);const s=await this.$axios.get("https://fairplay-rp.ro/api/recentactions");this.RecentActions=s.data.sort((a,o)=>+new Date(o.time)-+new Date(a.time)).slice(0,5);let i=await this.$axios.get("https://fairplay-rp.ro/api/users");this.UsersData=i.data,this.TopPlayers=this.UsersData.sort((a,o)=>o.hoursPlayed-a.hoursPlayed).slice(0,5);let c=await this.$axios.get("https://fairplay-rp.ro/api/vehicles");this.serverVehicles=c.data,$.getJSON("https://servers-frontend.fivem.net/api/servers/single/2e3lgd",function(a){$("#dashboard-players").text(a.Data.clients+"/"+a.Data.sv_maxclients)})},computed:{IntregistratedUsers(){let t=0;return this.UsersData.forEach(s=>{t++}),t.toLocaleString(void 0,{minimumFractionDigits:0})},GetVipUsers(){let t=0;return this.UsersData.forEach(s=>{s.vipLvl>1&&t++}),t.toLocaleString(void 0,{minimumFractionDigits:0})},GetVehiclesNumber(){let t=0;return this.serverVehicles.forEach(s=>{t++}),t.toLocaleString(void 0,{minimumFractionDigits:0})},GetOnlinePlayers(){$.getJSON("https://servers-frontend.fivem.net/api/servers/single/2e3lgd",async function(t){return await t.Data.clients+"/"+t.Data.sv_maxclients})}}},Ae={class:"dashboard-content"},Pe={class:"boxes"},Ie={class:"box"},Ue={class:"box-text"},Se=e("p",null,"Jucatori Inregistrati",-1),Ce={class:"box-icon"},Ne={class:"box"},Ee=e("div",{class:"box-text"},[e("h1",{id:"dashboard-players"},"0"),e("p",null,"Jucatori Conectati")],-1),Oe={class:"box-icon"},Re={class:"box"},Ve={class:"box-text"},He=e("p",null,"Jucatori VIP",-1),Me={class:"box-icon"},Ge={class:"box"},Fe={class:"box-text"},Je=e("p",null,"Vehicule",-1),Be={class:"box-icon"},je={class:"dashboard-cards"},ze={class:"dashboard-card"},We={class:"card-icon"},qe=e("div",{class:"card-text"},[e("h1",null,"Discord"),e("p",null,"Ai nevoie de ajutor?"),e("p",null,"Contacteaza-ne pe Discord!")],-1),Ye={class:"dashboard-card"},Ze={class:"card-icon regulament"},Ke=e("div",{class:"card-text"},[e("h1",null,"Regulament"),e("p",null,"Citeste Regulamentul pentru a pastra linistea pe server. ")],-1),Qe={class:"dashboard-card"},Xe={class:"card-icon youtube"},et=e("div",{class:"card-text"},[e("h1",null,"Youtube"),e("p",{class:"yt-text"},"Urmareste-ne activitatea si pe alte platforme!")],-1),tt={class:"dashboard-boxes"},st={class:"recent-actions"},at={class:"recent-actions-header"},ot={class:"icon"},it=e("div",{class:"header-text"},[e("h1",null,"Actiuni Recente"),e("p",null,"Vezi cele mai recente actiuni de pe server")],-1),nt=e("div",{class:"dashboard-hr"},null,-1),rt={class:"recent-actions-data"},ct={class:"recent-actions-box"},lt={class:"box-info"},dt={key:0,class:"status"},ut={key:1,class:"status uninvite"},_t={key:2,class:"status setadmin"},ht={key:3,class:"status removeadmin"},pt={class:"history-data"},vt={class:"history-time"},ft={class:"top-players"},gt={class:"top-players-header"},mt={class:"icon"},bt=e("div",{class:"header-text"},[e("h1",null,"Top Jucatori"),e("p",null,"Vezi topul jucatorilor de pe server")],-1),yt=e("div",{class:"dashboard-hr"},null,-1),xt={class:"top-players-data"},Dt={class:"top-players-box"},$t={class:"box-info"},Lt={class:"status"},kt={class:"player-data"},Tt={class:"top-location"};function wt(t,s,i,c,a,o){const n=f("Dashboard-Sidebar"),p=f("Dashboard-Header"),l=f("fa"),x=f("dashboard-page");return d(),S(x,null,{default:w(()=>[r(n,{page:"1"}),e("div",Ae,[r(p,{page:"Dashboard"}),e("div",Pe,[e("div",Ie,[e("div",Ue,[e("h1",null,h(o.IntregistratedUsers),1),Se]),e("div",Ce,[r(l,{icon:"fa-globe"})])]),e("div",Ne,[Ee,e("div",Oe,[r(l,{icon:"fa-solid fa-square-poll-vertical"})])]),e("div",Re,[e("div",Ve,[e("h1",null,h(o.GetVipUsers),1),He]),e("div",Me,[r(l,{icon:"fa-solid fa-award"})])]),e("div",Ge,[e("div",Fe,[e("h1",null,h(o.GetVehiclesNumber),1),Je]),e("div",Be,[r(l,{icon:"fa-solid fa-car"})])])]),e("div",je,[e("div",ze,[e("div",We,[r(l,{icon:"fa-brands fa-discord"})]),qe,e("div",{class:"card-join-button",onClick:s[0]||(s[0]=u=>o.OpenLink("https://discord.gg/fairplay"))},"Alatura-te")]),e("div",Ye,[e("div",Ze,[r(l,{icon:"fa-solid fa-file-lines"})]),Ke,e("div",{class:"card-join-button regulament",onClick:s[1]||(s[1]=u=>o.GoToRules())},"Citeste")]),e("div",Qe,[e("div",Xe,[r(l,{icon:"fa-brands fa-youtube"})]),et,e("div",{class:"card-join-button youtube",onClick:s[2]||(s[2]=u=>o.OpenLink("https://www.youtube.com/channel/UCWicjZL5bt673R1GTZwjZiQ"))},"Vizualizeaza")])]),e("div",tt,[e("div",st,[e("div",at,[e("div",ot,[r(l,{icon:"fa-solid fa-users"})]),it]),nt,e("div",rt,[(d(!0),_(L,null,k(a.RecentActions,(u,b)=>(d(),_("div",ct,[e("div",lt,[u.type=="add"?(d(),_("div",dt,[r(l,{icon:"fa-solid fa-user-plus"})])):m("",!0),u.type=="uninvite"?(d(),_("div",ut,[r(l,{icon:"fa-solid fa-user-slash"})])):m("",!0),u.type=="setadmin"?(d(),_("div",_t,[r(l,{icon:"fa-solid fa-check"})])):m("",!0),u.type=="removeadmin"?(d(),_("div",ht,[r(l,{icon:"fa-solid fa-ban"})])):m("",!0),e("div",pt,[e("h1",null,h(o.GetActionName(u.user_id)),1),e("p",null,h(u.text),1)])]),e("div",vt,h(o.GetDate(u.time)),1)]))),256))])]),e("div",ft,[e("div",gt,[e("div",mt,[r(l,{icon:"fa-solid fa-users"})]),bt]),yt,e("div",xt,[(d(!0),_(L,null,k(a.TopPlayers,(u,b)=>(d(),_("div",Dt,[e("div",$t,[e("div",Lt,[r(l,{icon:"fa-solid fa-user"})]),e("div",kt,[e("h1",null,h(u.username),1),e("p",null,h(u.hoursPlayed.toFixed(2))+" ore jucate",1)])]),e("div",Tt,"#"+h(b+1),1)]))),256))])])])])]),_:1})}var At=D(we,[["render",wt]]);const Pt=[{path:"/",name:"Dashboard",component:At},{path:"/staff",component:()=>v(()=>import("./Staff.4aca7b54.js"),["assets/Staff.4aca7b54.js","assets/Staff.34b0e434.css","assets/vendor.e9c094e2.js"])},{path:"/rapoartestaff",component:()=>v(()=>import("./RaportStaff.59be7101.js"),["assets/RaportStaff.59be7101.js","assets/RaportStaff.13e2e575.css","assets/vendor.e9c094e2.js"])},{path:"/bans",component:()=>v(()=>import("./Bans.86f7a40b.js"),["assets/Bans.86f7a40b.js","assets/Bans.00fb75ea.css","assets/vendor.e9c094e2.js"])},{path:"/profile/:id",name:"Profile",component:()=>v(()=>import("./Profile.68971f2f.js"),["assets/Profile.68971f2f.js","assets/Profile.c4099d65.css","assets/vendor.e9c094e2.js"])},{path:"/login",name:"Login",component:()=>v(()=>import("./Login.d74d9073.js"),["assets/Login.d74d9073.js","assets/Login.6a26e2e9.css","assets/vendor.e9c094e2.js"])},{path:"/rules",name:"Regulament",component:()=>v(()=>import("./Rules.991362c7.js"),["assets/Rules.991362c7.js","assets/Rules.9386b069.css","assets/vendor.e9c094e2.js"])},{path:"/testestaff",name:"Teste Staff",component:()=>v(()=>import("./TesteStaff.aafbe14f.js"),["assets/TesteStaff.aafbe14f.js","assets/TesteStaff.68eee886.css","assets/vendor.e9c094e2.js"])},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>v(()=>import("./NotFound.963b0ff2.js"),["assets/NotFound.963b0ff2.js","assets/NotFound.e6f15e7a.css","assets/vendor.e9c094e2.js"])}],It=C({history:N(),mode:"hash",routes:Pt});E.add(O,R);const y=V(z);y.use(It);y.use(H.exports.LoadingPlugin);y.component("fa",M);y.mount("#app");y.config.globalProperties.$axios=G;export{re as H,Te as S,D as _};
