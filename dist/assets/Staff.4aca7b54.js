import{_ as b,H as P,S as y}from"./index.2e5d4484.js";import{h as S,w as C,r as v,o as r,a as n,b as e,c as d,d as h,f as M,t as _,F as k,u}from"./vendor.e9c094e2.js";const L={data(){return{StaffMembers:[],PaginateRange:7,CurrentPage:1,Pages:[],IsUserAdmin:0}},components:{"Staff-Header":P,"Staff-Sidebar":y},methods:{async GetStaffMembers(){const t=(await this.$axios.get("https://fairplay-rp.ro/api/staff")).data,i=[];t.forEach(o=>{o.adminLvl>=1&&i.push({id:o.id,name:o.username,adminLvl:o.adminLvl,lastLogin:this.GetDate(o.last_login),hoursPlayed:o.hoursPlayed.toFixed(2)})}),this.StaffMembers=i.sort((o,c)=>c.adminLvl-o.adminLvl),this.setPages(this.StaffMembers)},GoToProfile(s){this.$router.push("/profile/"+s)},GoToRapoarte(){this.$router.push("/rapoartestaff")},async hasUserAdmin(){this.$axios.get("https://fairplay-rp.ro/api/admin",{withCredentials:!0}).then(s=>{s.data.isAdmin?(this.IsUserAdmin=s.data.adminLvl,this.adminId=s.data.adminId):this.IsUserAdmin=0})},GetDate(s){var t=new Date(s*1e3),i=t.getFullYear(),o=t.getMonth(),c=t.getDate(),f=t.getHours(),m=t.getMinutes(),f=t.getHours()>12?t.getHours()-12:t.getHours()<10?"0"+t.getHours():t.getHours(),m=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),g=c+"/"+o+"/"+i+" "+f+":"+m;return g},PagePlus(){this.CurrentPage<this.Pages.length&&this.CurrentPage++},PageMinus(){this.CurrentPage!=1&&this.CurrentPage--},setPages(s){let t=Math.ceil(s.length/this.PaginateRange);for(let i=1;i<=t;i++)this.Pages.push(i)},paginate(s){let t=this.CurrentPage,i=this.PaginateRange,o=t*i-i,c=t*i;return s.slice(o,c)},async FormatHours(s){return await s.toFixed()}},computed:{StaffMembersTable(){return this.paginate(this.StaffMembers)}},async created(){let s=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,backgroundColor:"#00000090",transition:"fade",enforceFocus:!0,opacity:.9,loader:"dots",color:"#0098ff"});setTimeout(()=>{s.hide()},2e3),this.GetStaffMembers(),this.hasUserAdmin()}},x={class:"staff-content"},H={class:"staff-members"},F={class:"staff-members-header"},A={class:"staff-header-data"},G={class:"icon"},T=e("div",{class:"header-texts"},[e("h1",null,"Membrii Staff"),e("p",null,"Vezi toti membrii din staff-ul FairPlay Romania.")],-1),D={class:"file"},w=u(" Rapoarte Staff "),I=e("div",{class:"staff-hr"},null,-1),R={class:"staff-members-data"},U={class:"styled-table"},$=e("thead",null,[e("tr",null,[e("th",null,"Nume Admin"),e("th",null,"Grad"),e("th",null,"Ore jucate"),e("th",null,"Ultima Conectare")])],-1),N=["onClick"],V={class:"icon"},B={class:"staff-member-texts"},E={key:0,class:"staff-icon"},O={key:1,class:"staff-icon helper"},j={key:2,class:"staff-icon moderator"},z={class:"icon"},Y=u(" Moderator "),q={key:3,class:"staff-icon administrator"},J={class:"icon"},K=u(" Administrator "),Q={key:4,class:"staff-icon developer"},W={class:"icon"},X=u(" Developer "),Z={key:5,class:"staff-icon fondator"},ee={class:"icon"},te=u(" Co-Fondator "),se={key:6,class:"staff-icon fondator"},ae={class:"icon"},ie=u(" Fondator "),oe={class:"pagination"},ne={class:"icon"},re={class:"page-selected"},le={class:"icon"};function de(s,t,i,o,c,f){const m=v("Staff-Sidebar"),g=v("Staff-Header"),l=v("fa"),p=v("serverstaff-page");return r(),S(p,null,{default:C(()=>[n(m,{page:"3"}),e("div",x,[n(g,{page:"Membrii Staff"}),e("div",H,[e("div",F,[e("div",A,[e("div",G,[n(l,{icon:"fa-solid fa-users"})]),T]),c.IsUserAdmin>=4?(r(),d("div",{key:0,class:"staff-raport-button",onClick:t[0]||(t[0]=a=>f.GoToRapoarte())},[e("div",D,[n(l,{icon:"fa-solid fa-file-shield"})]),w])):h("",!0)]),I,e("div",R,[e("table",U,[$,e("tbody",null,[(r(!0),d(k,null,M(f.StaffMembersTable,(a,ce)=>(r(),d("tr",null,[e("td",null,[e("div",{class:"staff-member",onClick:fe=>f.GoToProfile(a.id)},[e("div",V,[n(l,{icon:"fa-solid fa-user"})]),e("div",B,[e("h1",null,_(a.name),1),e("p",null,"ID: "+_(a.id),1)])],8,N)]),e("td",null,[a.adminLvl==1?(r(),d("div",E," Helper in Teste ")):h("",!0),a.adminLvl==2?(r(),d("div",O," Helper ")):h("",!0),a.adminLvl==3?(r(),d("div",j,[e("div",z,[n(l,{icon:"fa-solid fa-shield-halved"})]),Y])):h("",!0),a.adminLvl==4?(r(),d("div",q,[e("div",J,[n(l,{icon:"fa-solid fa-gavel"})]),K])):h("",!0),a.adminLvl==5?(r(),d("div",Q,[e("div",W,[n(l,{icon:"fa-solid fa-code"})]),X])):h("",!0),a.adminLvl==6?(r(),d("div",Z,[e("div",ee,[n(l,{icon:"fa-solid fa-user-shield"})]),te])):h("",!0),a.adminLvl>=7?(r(),d("div",se,[e("div",ae,[n(l,{icon:"fa-solid fa-user-shield"})]),ie])):h("",!0)]),e("td",null,_(a.hoursPlayed),1),e("td",null,_(a.lastLogin),1)]))),256))])])]),e("div",oe,[e("div",{class:"page-button",onClick:t[1]||(t[1]=a=>f.PageMinus())},[e("div",ne,[n(l,{icon:"fa-solid fa-angle-left"})])]),e("div",re,_(c.CurrentPage),1),e("div",{class:"page-button",onClick:t[2]||(t[2]=a=>f.PagePlus())},[e("div",le,[n(l,{icon:"fa-solid fa-chevron-right"})])])])])])]),_:1})}var _e=b(L,[["render",de]]);export{_e as default};