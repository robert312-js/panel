import{H as b,S as D}from"./Sidebar.d7e6fd94.js";import{c as i,i as e,a as r,t as c,m as d,j as f,k as v,s as y,r as P,o,u as C,v as k}from"./vendor.9dd6c1d0.js";import{_ as w}from"./index.25321405.js";var T={data(){return{userData:[],userVehicles:[],userPunishLog:[],userHistory:[],UserLogs:[],UserItemsData:[],VehChestData:[],OpenedVehiclesData:{vehicle:"",type:""},promptData:{active:!1,title:"",fields:{}},LogTypes:[{name:"Money Logs",icon:"",type:!1,logInfo:!1,hasTarget:!1,category:!0},{name:"Money Logs",icon:"fa-solid fa-sack-dollar",type:"Money",logInfo:!1,hasTarget:!1,category:!1},{name:"Give Money",icon:"fas fa-hand-holding-dollar",type:"Money",logInfo:"Ofera-Bani",hasTarget:!1,category:!1},{name:"Receive Money",icon:"fas fa-money-bill-1-wave",type:"Money",logInfo:"Receive-Money",hasTarget:!1,category:!1},{name:"Receive Money from Player",icon:"fas fa-money-bill-transfer",type:"Money",logInfo:"Receive-Money",hasTarget:!0,category:!1},{name:"Give Money to Player",icon:"fas fa-hand-holding-dollar",type:"Money",logInfo:"Ofera-Bani",hasTarget:!0,category:!1},{name:"Deposit Money",icon:"fas fa-landmark",type:"Money",logInfo:"Money-Deposit",hasTarget:!1,category:!1},{name:"Withdraw Money",icon:"fas fa-money-bill-trend-up",type:"Money",logInfo:"Money-Withdraw",hasTarget:!1,category:!1},{name:"Received Transfer",icon:"fas fa-money-check-dollar",type:"Money",logInfo:"Receive-Transfer",hasTarget:!1,category:!1},{name:"Transfered Money",icon:"fas fa-dollar-sign",type:"Money",logInfo:"Transfer-Money",hasTarget:!1,category:!1},{name:"Received Transfer From Player",icon:"fas fa-credit-card",type:"Money",logInfo:"Receive-Transfer",hasTarget:!0,category:!1},{name:"Transfered Money to Player",icon:"fas fa-wallet",type:"Money",logInfo:"Transfer-Money",hasTarget:!0,category:!1},{name:"Withdraw Faction Money",icon:"fas fa-circle-dollar-to-slot",type:"Money",logInfo:"Money-Faction-Withdraw",hasTarget:!1,category:!1},{name:"Deposit Faction Money",icon:"fas fa-vault",type:"Money",logInfo:"Money-Faction-Deposit",hasTarget:!1,category:!1},{name:"Vehicles Logs",icon:"",type:!1,logInfo:!1,hasTarget:!1,category:!0},{name:"Vehicles Logs",icon:"fa-solid fa-car",type:"Vehicles",logInfo:!1,hasTarget:!1,category:!1},{name:"Sell Vehicle",icon:"fas fa-car-rear",type:"Vehicles",logInfo:"Sell-Vehicle",hasTarget:!1,category:!1},{name:"Buy Vehicle",icon:"fas fa-car-side",type:"Vehicles",logInfo:"Buy-Vehicle",hasTarget:!1,category:!1},{name:"Buy Dealership",icon:"fas fa-car-on",type:"Vehicles",logInfo:"Buy-Dealership",hasTarget:!1,category:!1},{name:"Invest Logs",icon:"",type:!1,logInfo:!1,hasTarget:!1,category:!0},{name:"Invests Logs",icon:"fas fa-chart-line",type:"Invests",logInfo:!1,hasTarget:!1,category:!1},{name:"Start Invest",icon:"fas fa-file-invoice-dollar",type:"Invests",logInfo:"Made-Invest",hasTarget:!1,category:!1},{name:"Finish Invest",icon:"fas fa-ranking-star",type:"Invests",logInfo:"Receive-Invest",hasTarget:!1,category:!1},{name:"Losed Invest",icon:"fas fa-chart-simple",type:"Invests",logInfo:"Lose-Invest",hasTarget:!1,category:!1},{name:"Items Logs",icon:"",type:!1,logInfo:!1,hasTarget:!1,category:!0},{name:"Items Logs",icon:"fas fa-bag-shopping",type:"Items",logInfo:!1,hasTarget:!1,category:!1},{name:"Received Items",icon:"fas fa-handshake-simple",type:"Items",logInfo:"Receive-Item",hasTarget:!1,category:!1},{name:"Give Items",icon:"fas fa-hand-holding-heart",type:"Items",logInfo:"Give-Item",hasTarget:!1,category:!1},{name:"Give Inventory Item",icon:"fas fa-hand-sparkles",type:"Items",logInfo:"Put-Item",hasTarget:!1,category:!1},{name:"Receive Inventory Item",icon:"fas fa-hand-holding",type:"Items",logInfo:"Receive-Inv-Item",hasTarget:!1,category:!1},{name:"Depozit Chest",icon:"fas fa-boxes-packing",type:"Items",logInfo:"Depozit-ChestItem",hasTarget:!1,category:!1},{name:"Receive from Chest",icon:"fas fa-box",type:"Items",logInfo:"Get-ChestItem",hasTarget:!1,category:!1},{name:"Crafted Items",icon:"fas fa-recycle",type:"Items",logInfo:"Craft-Item",hasTarget:!1,category:!1},{name:"User Logs",icon:"",type:!1,logInfo:!1,hasTarget:!1,category:!0},{name:"User Logs",icon:"fas fa-user",type:"UserLogs",logInfo:!1,hasTarget:!1,category:!1},{name:"Connect Logs",icon:"fas fa-signal",type:"UserLogs",logInfo:"connect",hasTarget:!1,category:!1},{name:"Disconnect Logs",icon:"fas fa-person-walking-arrow-right",type:"UserLogs",logInfo:"disconnect",hasTarget:!1,category:!1},{name:"Death Logs",icon:"fas fa-heart-crack",type:"UserLogs",logInfo:"death",hasTarget:!1,category:!1}],PaginateRange:6,CurrentPage:1,Pages:[],InfoCurrentPage:1,UserTag:"Jucator",hasUserBan:!1,userBanData:[],canSeeUserInfo:!1,adminId:0,IsUserAdmin:0}},components:{"Profile-Header":b,"Profile-Sidebar":D},methods:{async SelectInfoCurrentPage(s){if(this.InfoCurrentPage=s,this.Pages=[],s==2)this.setPages(this.userHistory),this.CurrentPage=1;else if(s==3)this.CurrentPage=1,this.setPages(this.userPunishLog);else if(s==4){this.UserLogs=[],this.CurrentPage=1;const t=await this.$axios.get("https://api.fairplay-rp.ro/api/serverLogs/"+this.$route.params.id+"/Money");this.UserLogs=t.data,this.setPages(this.UserLogs)}else s==6&&(this.CurrentPage=1,this.setPages(this.UserItemsData))},GetDate(s){const t=new Date(s*1e3),l=t.getFullYear(),h=t.getMonth()+1,u=t.getDate(),p=t.getHours(),m=t.getMinutes(),_=p<10?`0${p}`:p,n=m<10?`0${m}`:m;return`${u}/${h}/${l} ${_}:${n}`},async selectSubMenu(s,t,l){$(".submenu").fadeOut(),this.Pages=[],this.UserLogs=[];let h;if(s&&!t&&!l)h=await this.$axios.get(`https://api.fairplay-rp.ro/api/serverLogs/${this.$route.params.id}/${s}`);else if(s&&t&&!l)h=await this.$axios.get(`https://api.fairplay-rp.ro/api/getServerLogsData/${this.$route.params.id}/${s}/${t}`);else if(s&&t&&l){const u=await this.createPrompt("TARGET ID",[{field:"target",title:"Introduceti id-ul jucatorului"}]),p=parseInt(u.target);h=await this.$axios.get(`https://api.fairplay-rp.ro/api/getServerLogsTarget/${this.$route.params.id}/${s}/${t}/${p}`)}this.UserLogs=h.data,this.CurrentPage=1,this.setPages(this.UserLogs)},openSubMenu(s){const t=$(".submenu");t.fadeToggle();const l=$(s.target).offset();t.css("top",l.top+30);let h=l.left-t.width()+$(s.target).width()+25;h+t.width()>$(window).width()&&(h=$(window).width()-t.width()-20),t.css("left",h)},async hasUserAdmin(){try{const s=await this.$axios.get("https://api.fairplay-rp.ro/api/admin",{withCredentials:!0});if(s.data.isAdmin){this.IsUserAdmin=s.data.adminLvl,this.adminId=s.data.adminId;return}this.IsUserAdmin=0}catch(s){console.error(s)}},async CanSeeProfileInfo(){try{if((await this.$axios.get("https://api.fairplay-rp.ro/api/account",{withCredentials:!0})).data.user.id==this.$route.params.id){this.canSeeUserInfo=!0;return}const l=await this.$axios.get("https://api.fairplay-rp.ro/api/admin",{withCredentials:!0});if(l.data.isAdmin){this.canSeeUserInfo=l.data.adminLvl>=2;return}this.canSeeUserInfo=!1}catch(s){console.error(s)}},async VerifyUserBan(){this.hasUserBan=!!this.userData.userBans,this.hasUserBan&&(this.userBanData=this.userData.userBans)},createPrompt(s,t){this.promptData.active=!0;var l=this;return new Promise((h,u)=>{$(".prompt-layout").fadeIn(),this.promptData.title=s,this.promptData.fields=t,$(document).on("click","#prompt-button",async function(p){p.preventDefault();const m=l.promptData.fields||{},_={};if(m.length>0)for(const n of m)_[n.field]=n.text;l.hidePrompt(),h(_)})})},hidePrompt(){$(".prompt-layout").fadeOut(200),setTimeout(()=>{this.promptData.active=!1,this.promptData.fields=[]},190)},async GetVehicleChest(s,t){try{let h=(await this.$axios.get(`https://api.fairplay-rp.ro/api/getVehicleChest/${this.$route.params.id}/${s}/${t}`)).data;if(h.dvalue==null){Swal.fire({title:"Eroare",text:"Nu sunt iteme in acest chest!",icon:"error",confirmButtonText:"Ok"});return}this.VehChestData=h.dvalue?JSON.parse(h.dvalue):[],this.OpenedVehiclesData={vehicle:s,type:t},$(".vehicle-prompt-wrapper").fadeIn()}catch(l){console.error(l)}},async DeleteChestItem(s,t){try{let h=t;var l="";if(this.OpenedVehiclesData.type=="chest"?l="chest:vehTrunk_"+this.OpenedVehiclesData.vehicle+"_u"+this.$route.params.id:l="chest:vehGlovebox_"+this.OpenedVehiclesData.vehicle+"_u"+this.$route.params.id,t>1){let u=await this.createPrompt("Sterge item din chest",[{field:"amount",title:"Cantitatea de iteme pe care vrei sa le stergi (Maxim: "+t+")"}]);if(u.amount>t)return Swal.fire({title:"Eroare",text:"Suma introdusa este invalida!",icon:"error",confirmButtonText:"Ok"});if(u.amount<1)return Swal.fire({title:"Eroare",text:"Suma introdusa este invalida!",icon:"error",confirmButtonText:"Ok"});h=u.amount}this.RconAction("removeitemfromveh "+s+" "+h+" "+l),setTimeout(()=>{this.GetVehicleChest(this.OpenedVehiclesData.vehicle,this.OpenedVehiclesData.type)},3e3)}catch(h){console.error(h)}},async DeletePlayerItem(s,t){try{let l=t;if(t>1){let h=await this.createPrompt("Sterge item din chest",[{field:"amount",title:"Cantitatea de iteme pe care vrei sa le stergi (Maxim: "+t+")"}]);if(h.amount>t)return Swal.fire({title:"Eroare",text:"Suma introdusa este invalida!",icon:"error",confirmButtonText:"Ok"});if(h.amount<1)return Swal.fire({title:"Eroare",text:"Suma introdusa este invalida!",icon:"error",confirmButtonText:"Ok"});l=h.amount}this.RconAction("removeitemfromplayer "+this.$route.params.id+" "+s+" "+l),setTimeout(()=>{this.GetUserInventory()},3e3)}catch(l){console.error(l)}},CloseVehiclePrompt(){$(".vehicle-prompt-wrapper").fadeOut(),this.VehChestData=[]},async GetUserInventory(){try{this.UserItemsData=[];const t=(await this.$axios.get(`https://api.fairplay-rp.ro/api/getUdata/${this.$route.params.id}`)).data,l=JSON.parse(t.dvalue).inventory;for(const[h,u]of Object.entries(l))this.UserItemsData.push({name:h,amount:u.amount})}catch(s){console.error(s)}},GetUserTag(){switch(this.userData.adminLvl){case 1:this.UserTag="Helper in Teste";break;case 2:this.UserTag="Helper";break;case 3:this.UserTag="Moderator";break;case 4:this.UserTag="Administrator";break;case 5:this.UserTag="Developer";break;case 6:this.UserTag="Co-Fondator";break;case 7:case 8:case 9:case 10:this.UserTag="Fondator";break;default:this.UserTag="Jucator";break}},async RconAction(s){this.$axios.post("https://api.fairplay-rp.ro/api/rcon",{command:s},{withCredentials:!0})},async BanPlayer(){let s=await this.createPrompt("BAN PLAYER",[{field:"reason",title:"Motiv"},{field:"time",title:"Timp"},{field:"dreptPlata",title:"Drept de plata (1 == DA, 0 == NU)"}]),t=s?s.reason:null,l=s?s.time:null,h=s?s.dreptPlata:null;if(!t||!l||!h)return Swal.fire("Eroare","Toate campurile sunt obligatorii!","error");this.RconAction("banplayer "+this.$route.params.id+" "+l+" "+this.adminId+" "+h+" "+t),setTimeout(()=>{window.location.reload()},1e3)},UnbanPlayer(){Swal.fire({title:"Esti sigur?",text:"Jucatorul va primii unban pe server!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Unban Player"}).then(s=>{s.isConfirmed&&(this.RconAction("unbanplayer "+this.$route.params.id+" "+this.adminId),setTimeout(()=>{window.location.reload()},1e3))})},async KickPlayer(){let s=await this.createPrompt("Unban Player",[{field:"reason",title:"Motiv"}]),t=s?s.reason:null;t!=null&&(this.RconAction("kickplayer "+this.$route.params.id+" "+this.adminId+" "+t),setTimeout(()=>{window.location.reload()},1e3))},async GiveMoney(){let s=await this.createPrompt("GIVE MONEY",[{field:"money",title:"Suma Oferita"}]),t=s?s.money:null;t!=null&&(this.RconAction("givemoney "+this.$route.params.id+" "+t),setTimeout(()=>{window.location.reload()},1e3))},async GiveCoins(){let s=await this.createPrompt("GIVE COINS",[{field:"coins",title:"Suma Oferita"}]),t=s?s.coins:null;t!=null&&(this.RconAction("givecoins "+this.$route.params.id+" "+t),setTimeout(()=>{window.location.reload()},1e3))},async SetAdmin(){let s=await this.createPrompt("GIVE COINS",[{field:"admin",title:"Admin Level"}]),t=s?s.admin:null;t!=null&&(this.RconAction("setadmin "+this.$route.params.id+" "+t),setTimeout(()=>{window.location.reload()},1e3))},CurrentPagePlus(){this.CurrentPage<this.Pages.length&&this.CurrentPage++},CurrentPageMinus(){this.CurrentPage!=1&&this.CurrentPage--},setPages(s){let t=Math.ceil(s.length/this.PaginateRange);for(let l=1;l<=t;l++)this.Pages.push(l)},paginate(s){let t=this.CurrentPage,l=this.PaginateRange,h=t*l-l,u=t*l;return s.slice(h,u)}},computed:{PlayerHistory(){return this.paginate(this.userHistory).sort((s,t)=>+new Date(t.time)-+new Date(s.time))},PunishLog(){return this.paginate(this.userPunishLog).sort((s,t)=>+new Date(t.time)-+new Date(s.time))},LogsData(){return this.paginate(this.UserLogs)},GetSelectedPage(){return this.CurrentPage},GetUserItems(){return this.paginate(this.UserItemsData)},HoursPlayed(){const s=this.userData.hoursPlayed;return s?s.toFixed(2):"0.00"},GetUserCharacterName(){return this.userData.userIdentity?`${this.userData.userIdentity.firstName} ${this.userData.userIdentity.secondName}`:"Necunoscut"},GetUserAge(){return this.userData.userIdentity?this.userData.userIdentity.age:"18"},BankMoney(){const s=this.userData.userMoney?this.userData.userMoney.bankMoney:0;return new Intl.NumberFormat("us-US",{style:"currency",currency:"USD",maximumFractionDigits:0,minimumFractionDigits:0}).format(s)},CashMoney(){const s=this.userData.userMoney?this.userData.userMoney.walletMoney:0;return new Intl.NumberFormat("us-US",{style:"currency",currency:"USD",maximumFractionDigits:0,minimumFractionDigits:0}).format(s)}},async created(){let s=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,backgroundColor:"#00000090",transition:"fade",enforceFocus:!0,opacity:.6,loader:"dots",color:"#0098ff"});setTimeout(()=>{s.hide()},2e3);try{const t=await this.$axios.get(`https://api.fairplay-rp.ro/api/user/${this.$route.params.id}`);this.userData=t.data;const l=await this.$axios.get(`https://api.fairplay-rp.ro/api/userpunishlog/${this.$route.params.id}`);this.userPunishLog=l.data;const h=await this.$axios.get(`https://api.fairplay-rp.ro/api/userhistory/${this.$route.params.id}`);this.userHistory=h.data;const u=await this.$axios.get(`https://api.fairplay-rp.ro/api/uservehicles/${this.$route.params.id}`);this.userVehicles=u.data}catch(t){console.error(t)}this.CanSeeProfileInfo(),this.hasUserAdmin(),this.VerifyUserBan(),this.GetUserTag(),this.GetUserInventory()}};const U={class:"dashboard"},M={class:"profile-container"},S={class:"profile-wrapper"},L={class:"profile-wrapper-2"},V={key:0,class:"ban-container"},B={class:"ban-header"},A={class:"icon"},R=y(" Jucatorul este Banat "),G={class:"ban-data"},O={class:"ban-content reason"},z={class:"ban-content-item"},F=e("h1",null,"Motiv",-1),N=e("div",{class:"ban-hr"},null,-1),E={class:"ban-content"},H={class:"ban-content-item"},J=e("h1",null,"Data Banarii",-1),j={class:"ban-content-item"},K=e("h1",null,"Data Expirarii",-1),W={key:0},Y={key:1,style:{color:"rgb(209, 28, 28)"}},X=e("div",{class:"ban-hr"},null,-1),q={class:"ban-content"},Q={class:"ban-content-item"},Z=e("h1",null,"Banat de catre",-1),x={class:"ban-content-item"},ee=e("h1",null,"Drept de Plata",-1),se={key:0,class:"icon canpay"},te={key:1,class:"icon cantpay"},ae={class:"profile"},ie={class:"profile-header-wrapper"},oe={class:"profile-header"},ne={class:"icon"},re={class:"profile-header-data"},le=e("div",{class:"profile-hr"},null,-1),ce={class:"profile-info-wrapper"},de={class:"profile-info"},he={class:"profile-image"},ue={class:"profile-info-data"},fe=e("div",{class:"profile-hr"},null,-1),pe={class:"profile-data"},me={class:"profile-data-item"},ge=e("p",null,"Varsta",-1),ve={class:"profile-data-item"},ye=e("p",null,"Ore Jucate",-1),_e={class:"profile-data-item"},Ie=e("p",null,"Bani Cash",-1),Pe={class:"profile-data-item"},be=e("p",null,"Bani in banca",-1),De={class:"profile-actions-wrapper"},Ce={class:"profile-actions-navbar"},ke=e("p",null,"Vehicule",-1),$e=e("p",null,"Istoric",-1),we=e("p",null,"Punish Log",-1),Te=e("p",null,"User Logs",-1),Ue=e("p",null,"Admin Actions",-1),Me=e("p",null,"Inventar",-1),Se={key:0,class:"profile-actions-vehicles"},Le={class:"profile-history-header"},Ve=e("h1",null,"Vehicule",-1),Be=e("div",{class:"actions-hr"},null,-1),Ae={class:"profile-actions-vehicles-wrapper"},Re={class:"profile-actions-vehicles-box"},Ge={class:"vehicle-info"},Oe={key:0,class:"vehicle"},ze={key:1,class:"vehicle"},Fe={key:2,class:"vehicle"},Ne={key:3,class:"vehicle"},Ee={class:"vehicle-status"},He=["onClick"],Je=["onClick"],je={key:1,class:"profile-actions-history"},Ke=e("div",{class:"profile-history-header"},[e("h1",null,"Istoric"),e("p",null,"Vizualizezi tot istoricul pe care Robert l-a avut pe acest server")],-1),We=e("div",{class:"actions-hr"},null,-1),Ye={class:"panel-actions-history-data"},Xe={class:"panel-actions-history-box"},qe={class:"box-info"},Qe={key:0,class:"status"},Ze={key:1,class:"status uninvite"},xe={key:2,class:"status setadmin"},es={key:3,class:"status removeadmin"},ss={class:"history-data"},ts={class:"history-time"},as={class:"pagination"},is={class:"icon"},os={class:"page-selected"},ns={class:"icon"},rs={key:2,class:"profile-actions-punishlog"},ls={class:"profile-punishlog-header"},cs=e("h1",null,"Punish Log",-1),ds=e("div",{class:"actions-hr"},null,-1),hs={class:"panel-actions-punishlog-data"},us={class:"panel-actions-punishlog-box"},fs={class:"box-info"},ps={key:0,class:"status ban"},ms={key:1,class:"status warn"},gs={key:2,class:"status unwarn"},vs={key:3,class:"status jail"},ys={key:4,class:"status banPermanent"},_s={class:"punishlog-data"},Is={class:"punishlog-time"},Ps={class:"pagination"},bs={class:"icon"},Ds={class:"page-selected"},Cs={class:"icon"},ks={key:3,class:"profile-actions-logs"},$s={class:"profile-actions-logs-headers"},ws={class:"header-info"},Ts=e("h1",null,"Logs",-1),Us=e("div",{class:"actions-hr"},null,-1),Ms={class:"profile-actions-logs-data"},Ss={class:"profile-actions-logs-box"},Ls={class:"box-info"},Vs={class:"status"},Bs={class:"status-icon"},As={class:"logs-data"},Rs={class:"logs-time"},Gs={class:"submenu",style:{display:"none"}},Os=["onClick"],zs={key:0,class:"submenu-item-data"},Fs={class:"data"},Ns={class:"icon"},Es={key:1,class:"submenu-item-category"},Hs={class:"pagination"},Js={class:"icon"},js={class:"page-selected"},Ks={class:"icon"},Ws={key:4,class:"profile-actions-admin"},Ys=e("div",{class:"profile-actions-admin-header"},[e("h1",null,"Admin Actions"),e("p",null,"Aici poti efectua actiuni asupra jucatorului")],-1),Xs=e("div",{class:"actions-hr"},null,-1),qs={class:"profile-actions-admin-data"},Qs={class:"admin-data"},Zs={class:"icon"},xs=y(" Ban Player "),et={class:"admin-data"},st={class:"icon"},tt=y(" Seteaz\u0103 Staff "),at={class:"admin-data"},it={class:"icon"},ot=y(" Kick Jucator "),nt={class:"admin-data"},rt={class:"icon"},lt=y(" Give Coins "),ct={class:"admin-data"},dt={class:"icon"},ht=y(" Give Money "),ut={class:"admin-data"},ft={class:"icon"},pt=y(" Unban Player "),mt={key:5,class:"profile-actions-inventory"},gt={class:"profile-inventory-header"},vt=e("h1",null,"Inventory Data",-1),yt=e("div",{class:"actions-hr"},null,-1),_t={class:"inventory-data"},It={class:"styled-table"},Pt=e("thead",null,[e("tr",null,[e("th",null,"Item Key"),e("th",null,"Cantitate Detinute")])],-1),bt=["onClick"],Dt={class:"pagination"},Ct={class:"icon"},kt={class:"page-selected"},$t={class:"icon"},wt={class:"prompt-layout",style:{display:"none"}},Tt={class:"prompt-menu"},Ut={class:"head-texts"},Mt=e("h1",null,"PROMPT MENU",-1),St={class:"input-fields"},Lt={class:"field"},Vt=["onUpdate:modelValue"],Bt=e("div",{class:"confirm-prompt",id:"prompt-button"},[e("p",null,"CONFIRMARE")],-1),At={class:"vehicle-prompt-wrapper",style:{display:"none"}},Rt={class:"vehicle-prompt"},Gt={class:"profile-inventory-header"},Ot={class:"header-texts"},zt=e("h1",null,"Inventory Data",-1),Ft={class:"close-button"},Nt=e("div",{class:"actions-hr"},null,-1),Et={class:"inventory-data"},Ht={class:"styled-table"},Jt=e("thead",null,[e("tr",null,[e("th",null,"Item Key"),e("th",null,"Cantitate Detinute")])],-1),jt={class:"delete-button"};function Kt(s,t,l,h,u,p){const m=P("Profile-Sidebar"),_=P("Profile-Header"),n=P("fa");return o(),i(f,null,[e("div",U,[r(m,{page:"0"}),e("div",M,[r(_,{page:"Profil Jucator"}),e("div",S,[e("div",L,[s.hasUserBan?(o(),i("div",V,[e("div",B,[e("div",A,[r(n,{icon:"fa-solid fa-ban"})]),R]),e("div",G,[e("div",O,[e("div",z,[F,e("p",null,c(s.userBanData.banReason),1)])]),N,e("div",E,[e("div",H,[J,e("p",null,c(s.userBanData.bannedDate),1)]),e("div",j,[K,s.userBanData.expireDate!="never"?(o(),i("p",W,c(s.userBanData.expireDate),1)):d("",!0),s.userBanData.expireDate=="never"?(o(),i("p",Y,"ACEST BAN NU EXPIRA")):d("",!0)])]),X,e("div",q,[e("div",Q,[Z,e("p",null,c(s.userBanData.bannedBy),1)]),e("div",x,[ee,s.userBanData.dreptPlata==!0?(o(),i("div",se,[r(n,{icon:"fa-solid fa-circle-check"})])):d("",!0),s.userBanData.dreptPlata==!1?(o(),i("div",te,[r(n,{icon:"fa-solid fa-ban"})])):d("",!0)])])])])):d("",!0),e("div",ae,[e("div",ie,[e("div",oe,[e("div",ne,[r(n,{icon:"fa-solid fa-user"})]),e("div",re,[e("h1",null,"Caracterul lui "+c(s.userData.username),1),e("p",null,"Vizualizezi Caracterul lui "+c(s.userData.username),1)])]),le]),e("div",ce,[e("div",de,[e("div",he,[r(n,{icon:"fa-solid fa-user"})]),e("div",ue,[e("h1",null,c(s.GetUserCharacterName),1),e("p",null,c(s.UserTag),1)])]),fe]),e("div",pe,[e("div",me,[ge,e("h1",null,c(s.GetUserAge),1)]),e("div",ve,[ye,e("h1",null,c(s.HoursPlayed),1)]),e("div",_e,[Ie,e("h1",null,c(s.BankMoney),1)]),e("div",Pe,[be,e("h1",null,c(s.CashMoney),1)])])])]),e("div",De,[e("div",Ce,[e("div",{class:"navbar-button",onClick:t[0]||(t[0]=a=>s.SelectInfoCurrentPage(1))},[r(n,{icon:"fa-solid fa-car"}),ke]),s.canSeeUserInfo?(o(),i("div",{key:0,class:"navbar-button",onClick:t[1]||(t[1]=a=>s.SelectInfoCurrentPage(2))},[r(n,{icon:"fa-solid fa-clock-rotate-left"}),$e])):d("",!0),s.canSeeUserInfo?(o(),i("div",{key:1,class:"navbar-button",onClick:t[2]||(t[2]=a=>s.SelectInfoCurrentPage(3))},[r(n,{icon:"fa-solid fa-ban"}),we])):d("",!0),s.IsUserAdmin>=2?(o(),i("div",{key:2,class:"navbar-button",onClick:t[3]||(t[3]=a=>s.SelectInfoCurrentPage(4))},[r(n,{icon:"fa-solid fa-database"}),Te])):d("",!0),s.IsUserAdmin>=1?(o(),i("div",{key:3,class:"navbar-button",onClick:t[4]||(t[4]=a=>s.SelectInfoCurrentPage(5))},[r(n,{icon:"fa-solid fa-list"}),Ue])):d("",!0),s.IsUserAdmin>=1?(o(),i("div",{key:4,class:"navbar-button",onClick:t[5]||(t[5]=a=>s.SelectInfoCurrentPage(6))},[r(n,{icon:"fa-solid fa-list"}),Me])):d("",!0)]),s.InfoCurrentPage==1?(o(),i("div",Se,[e("div",Le,[Ve,e("p",null,"Vizualizezi toate vehiculele pe care "+c(s.userData.username)+" le detine",1)]),Be,e("div",Ae,[(o(!0),i(f,null,v(s.userVehicles,(a,g)=>(o(),i("div",Re,[e("div",Ge,[a.vtype=="ds"?(o(),i("div",Oe,[r(n,{icon:"fa-solid fa-car"})])):d("",!0),a.vtype=="camion"?(o(),i("div",ze,[r(n,{icon:"fa-solid fa-truck"})])):d("",!0),a.vtype=="remorca"?(o(),i("div",Fe,[r(n,{icon:"fa-solid fa-trailer"})])):d("",!0),a.vtype=="barca"?(o(),i("div",Ne,[r(n,{icon:"fa-solid fa-ship"})])):d("",!0),e("h1",null,c(a.name),1)]),e("div",Ee,[s.IsUserAdmin>=3?(o(),i("div",{key:0,class:"chest-button",onClick:I=>s.GetVehicleChest(a.vehicle,"chest")},[r(n,{icon:"fa-solid fa-box"})],8,He)):d("",!0),s.IsUserAdmin>=3?(o(),i("div",{key:1,class:"glove-chest",onClick:I=>s.GetVehicleChest(a.vehicle,"glove_chest")},[r(n,{icon:"fa-solid fa-box-open"})],8,Je)):d("",!0)])]))),256))])])):d("",!0),s.InfoCurrentPage==2?(o(),i("div",je,[Ke,We,e("div",Ye,[(o(!0),i(f,null,v(s.PlayerHistory,(a,g)=>(o(),i("div",Xe,[e("div",qe,[a.type=="add"?(o(),i("div",Qe,[r(n,{icon:"fa-solid fa-user-plus"})])):d("",!0),a.type=="uninvite"?(o(),i("div",Ze,[r(n,{icon:"fa-solid fa-user-slash"})])):d("",!0),a.type=="setadmin"?(o(),i("div",xe,[r(n,{icon:"fa-solid fa-check"})])):d("",!0),a.type=="removeadmin"?(o(),i("div",es,[r(n,{icon:"fa-solid fa-ban"})])):d("",!0),e("div",ss,[e("h1",null,c(s.userData.username),1),e("p",null,c(a.text),1)])]),e("div",ts,c(s.GetDate(a.time)),1)]))),256))]),e("div",as,[e("div",{class:"page-button",onClick:t[6]||(t[6]=a=>s.CurrentPageMinus())},[e("div",is,[r(n,{icon:"fa-solid fa-angle-left"})])]),e("div",os,c(s.GetSelectedPage),1),e("div",{class:"page-button",onClick:t[7]||(t[7]=a=>s.CurrentPagePlus())},[e("div",ns,[r(n,{icon:"fa-solid fa-chevron-right"})])])])])):d("",!0),s.InfoCurrentPage==3?(o(),i("div",rs,[e("div",ls,[cs,e("p",null,"Vizualizezi istoricul sanctiunilor pe care "+c(s.userData.username)+" l-a avut pe server.",1)]),ds,e("div",hs,[(o(!0),i(f,null,v(s.PunishLog,(a,g)=>(o(),i("div",us,[e("div",fs,[a.type=="ban"?(o(),i("div",ps,[r(n,{icon:"fa-solid fa-ban"})])):d("",!0),a.type=="warn"?(o(),i("div",ms,[r(n,{icon:"fa-solid fa-triangle-exclamation"})])):d("",!0),a.type=="unwarn"?(o(),i("div",gs,[r(n,{icon:"fa-solid fa-circle-exclamation"})])):d("",!0),a.type=="jail"?(o(),i("div",vs,[r(n,{icon:"fa-solid fa-handcuffs"})])):d("",!0),a.type=="banPermanent"?(o(),i("div",ys,[r(n,{icon:"fa-solid fa-gavel"})])):d("",!0),e("div",_s,[e("h1",null,c(s.userData.username),1),e("p",null,c(a.text),1)])]),e("div",Is,c(s.GetDate(a.time)),1)]))),256))]),e("div",Ps,[e("div",{class:"page-button",onClick:t[8]||(t[8]=a=>s.CurrentPageMinus())},[e("div",bs,[r(n,{icon:"fa-solid fa-angle-left"})])]),e("div",Ds,c(s.GetSelectedPage),1),e("div",{class:"page-button",onClick:t[9]||(t[9]=a=>s.CurrentPagePlus())},[e("div",Cs,[r(n,{icon:"fa-solid fa-chevron-right"})])])])])):d("",!0),s.InfoCurrentPage==4?(o(),i("div",ks,[e("div",$s,[e("div",ws,[Ts,e("p",null,"Aici poti vizualiza toate actiunile facute de catre "+c(s.userData.username)+" pe server",1)]),e("div",{class:"submenu-button",onClick:t[10]||(t[10]=a=>s.openSubMenu(a))},[r(n,{icon:"fa-solid fa-gear"})])]),Us,e("div",Ms,[(o(!0),i(f,null,v(s.LogsData,(a,g)=>(o(),i("div",Ss,[e("div",Ls,[e("div",Vs,[e("div",Bs,[r(n,{icon:a.icon},null,8,["icon"])])]),e("div",As,[e("h1",null,c(s.userData.username),1),e("p",null,c(a.text),1)])]),e("div",Rs,c(s.GetDate(a.time)),1)]))),256))]),e("div",Gs,[(o(!0),i(f,null,v(s.LogTypes,(a,g)=>(o(),i("div",{class:"submenu-item",onClick:I=>s.selectSubMenu(a.type,a.logInfo,a.hasTarget)},[a.category==!1?(o(),i("div",zs,[e("div",Fs,[e("div",Ns,[r(n,{icon:a.icon},null,8,["icon"])]),e("p",null,c(a.name),1)]),r(n,{icon:"fa-solid fa-right-long"})])):d("",!0),a.category==!0?(o(),i("div",Es,[r(n,{icon:"fa-solid fa-left-long"}),e("p",null,c(a.name),1),r(n,{icon:"fa-solid fa-right-long"})])):d("",!0)],8,Os))),256))]),e("div",Hs,[e("div",{class:"page-button",onClick:t[11]||(t[11]=a=>s.CurrentPageMinus())},[e("div",Js,[r(n,{icon:"fa-solid fa-angle-left"})])]),e("div",js,c(s.GetSelectedPage),1),e("div",{class:"page-button",onClick:t[12]||(t[12]=a=>s.CurrentPagePlus())},[e("div",Ks,[r(n,{icon:"fa-solid fa-chevron-right"})])])])])):d("",!0),s.InfoCurrentPage==5?(o(),i("div",Ws,[Ys,Xs,e("div",qs,[s.IsUserAdmin>=2?(o(),i("div",{key:0,class:"profile-actions-admin-box bans",onClick:t[13]||(t[13]=a=>s.BanPlayer())},[e("div",Qs,[e("div",Zs,[r(n,{icon:"fa-solid fa-gavel"})]),xs])])):d("",!0),s.IsUserAdmin>=5?(o(),i("div",{key:1,class:"profile-actions-admin-box setadmin",onClick:t[14]||(t[14]=a=>s.SetAdmin())},[e("div",et,[e("div",st,[r(n,{icon:"fa-solid fa-user-shield"})]),tt])])):d("",!0),s.IsUserAdmin>=2?(o(),i("div",{key:2,class:"profile-actions-admin-box kick",onClick:t[15]||(t[15]=a=>s.KickPlayer())},[e("div",at,[e("div",it,[r(n,{icon:"fa-solid fa-ban"})]),ot])])):d("",!0),s.IsUserAdmin>=5?(o(),i("div",{key:3,class:"profile-actions-admin-box coins",onClick:t[16]||(t[16]=a=>s.GiveCoins())},[e("div",nt,[e("div",rt,[r(n,{icon:"fa-solid fa-coins"})]),lt])])):d("",!0),s.IsUserAdmin>=5?(o(),i("div",{key:4,class:"profile-actions-admin-box money",onClick:t[17]||(t[17]=a=>s.GiveMoney())},[e("div",ct,[e("div",dt,[r(n,{icon:"fa-solid fa-sack-dollar"})]),ht])])):d("",!0),s.hasUserBan&&s.IsUserAdmin>=3?(o(),i("div",{key:5,class:"profile-actions-admin-box unban",onClick:t[18]||(t[18]=a=>s.UnbanPlayer())},[e("div",ut,[e("div",ft,[r(n,{icon:"fa-solid fa-ban"})]),pt])])):d("",!0)])])):d("",!0),s.InfoCurrentPage==6?(o(),i("div",mt,[e("div",gt,[vt,e("p",null,"Vizualizezi toate itemele pe care "+c(s.userData.username)+" le detine.",1)]),yt,e("div",_t,[e("table",It,[Pt,e("tbody",null,[(o(!0),i(f,null,v(s.GetUserItems,(a,g)=>(o(),i("tr",null,[e("td",null,c(a.name),1),e("td",null,c(a.amount),1),e("td",null,[e("div",{class:"delete-button",onClick:I=>s.DeletePlayerItem(a.name,a.amount)},[r(n,{icon:"fa-solid fa-trash"})],8,bt)])]))),256))])])]),e("div",Dt,[e("div",{class:"page-button",onClick:t[19]||(t[19]=a=>s.CurrentPageMinus())},[e("div",Ct,[r(n,{icon:"fa-solid fa-angle-left"})])]),e("div",kt,c(s.GetSelectedPage),1),e("div",{class:"page-button",onClick:t[20]||(t[20]=a=>s.CurrentPagePlus())},[e("div",$t,[r(n,{icon:"fa-solid fa-chevron-right"})])])])])):d("",!0)])])])]),e("div",wt,[e("div",Tt,[e("div",Ut,[Mt,e("span",null,c(s.promptData.title),1)]),e("div",St,[(o(!0),i(f,null,v(s.promptData.fields,(a,g)=>(o(),i("div",Lt,[e("strong",null,c(a.title),1),C(e("input",{"onUpdate:modelValue":I=>a.text=I,placeholder:"Raspunsul tau"},null,8,Vt),[[k,a.text]])]))),256))]),Bt])]),e("div",At,[e("div",Rt,[e("div",Gt,[e("div",Ot,[zt,e("p",null,"Vizualizezi toate itemele pe care "+c(s.userData.username)+" le detine.",1)]),e("div",Ft,[r(n,{icon:"fa-solid fa-times",onClick:t[21]||(t[21]=a=>s.CloseVehiclePrompt())})])]),Nt,e("div",Et,[e("table",Ht,[Jt,e("tbody",null,[(o(!0),i(f,null,v(s.VehChestData,(a,g)=>(o(),i("tr",null,[e("td",null,c(g),1),e("td",null,c(a.amount),1),e("td",null,[e("div",jt,[r(n,{icon:"fa-solid fa-trash"})])])]))),256))])])])])])],64)}var qt=w(T,[["render",Kt]]);export{qt as default};
