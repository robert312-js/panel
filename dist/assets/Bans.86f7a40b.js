import{_ as v,H as b,S as B}from"./index.2e5d4484.js";import{h as P,w as y,r as _,o as c,a as o,b as e,c as h,f as C,t as d,d as g,F as D,u as x}from"./vendor.e9c094e2.js";const k={data(){return{UsersBans:[],PaginateRange:7,CurrentPage:1,Pages:[]}},components:{"Bans-Header":b,"Bans-Sidebar":B},methods:{async GetBans(){const s=(await this.$axios.get("https://fairplay-rp.ro/api/users")).data,a=[];s.forEach(i=>{i.userBans&&a.push({id:i.id,username:i.username,userBans:i.userBans})}),this.UsersBans=a.sort((i,l)=>+new Date(l.userBans.banDate)-+new Date(i.userBans.banDate)),this.setPages(this.UsersBans)},GetDate(t){var s=new Date(t*1e3),a=s.getFullYear(),i=s.getMonth(),l=s.getDate(),u=s.getHours(),p=s.getMinutes(),f=s.getSeconds(),r=l+"/"+i+"/"+a+" "+u+":"+p+":"+f;return r},GoToProfile(t){this.$router.push("/profile/"+t)},PagePlus(){console.log(this.Pages.length),this.CurrentPage<this.Pages.length&&(console.log(this.CurrentPage),this.CurrentPage++)},PageMinus(){this.CurrentPage!=1&&this.CurrentPage--},setPages(t){let s=Math.ceil(t.length/this.PaginateRange);for(let a=1;a<=s;a++)this.Pages.push(a)},paginate(t){let s=this.CurrentPage,a=this.PaginateRange,i=s*a-a,l=s*a;return t.slice(i,l)},async FormatHours(t){return await t.toFixed()}},computed:{GetBanlist(){return this.paginate(this.UsersBans)}},async created(){let t=this.$loading.show({container:this.fullPage?null:this.$refs.formContainer,canCancel:!1,backgroundColor:"#00000090",transition:"fade",enforceFocus:!0,opacity:.9,loader:"dots",color:"#0098ff"});setTimeout(()=>{t.hide()},2e3),this.GetBans()}},w={class:"banlist-content"},G={class:"banlist-members"},H={class:"banlist-members-header"},S={class:"icon"},F=e("div",{class:"header-texts"},[e("h1",null,"Ban List"),e("p",null,"Vezi lista cu membri banati de pe server.")],-1),M=e("div",{class:"banlist-hr"},null,-1),$={class:"banlist-members-data"},N={class:"banlist-table"},U=e("thead",null,[e("tr",null,[e("th",null,"Nume"),e("th",null,"De Catre"),e("th",null,"Motiv"),e("th",null,"La data"),e("th",null,"Data expir\u0103rii"),e("th",null,"Drept de Plata")])],-1),V=["onClick"],L={class:"icon"},R={class:"banlist-member-texts"},T={key:0,class:"banlist-bantype permanent"},E={class:"icon"},z=x(" Permanent "),I={key:1,class:"banlist-bantype"},J={key:0,class:"drept-plata canpay"},O={key:1,class:"drept-plata cantpay"},Y={class:"pagination"},j={class:"icon"},q={class:"page-selected"},A={class:"icon"};function K(t,s,a,i,l,u){const p=_("Bans-Sidebar"),f=_("Bans-Header"),r=_("fa"),m=_("bans-page");return c(),P(m,null,{default:y(()=>[o(p,{page:"2"}),e("div",w,[o(f,{page:"Lista Jucatori Banati"}),e("div",G,[e("div",H,[e("div",S,[o(r,{icon:"fa-solid fa-users"})]),F]),M,e("div",$,[e("table",N,[U,e("tbody",null,[(c(!0),h(D,null,C(u.GetBanlist,(n,Q)=>(c(),h("tr",null,[e("td",null,[e("div",{class:"banlist-member",onClick:W=>u.GoToProfile(n.id)},[e("div",L,[o(r,{icon:"fa-solid fa-user"})]),e("div",R,[e("h1",null,d(n.username),1),e("p",null,"ID: "+d(n.id),1)])],8,V)]),e("td",null,d(n.userBans.bannedBy),1),e("td",null,d(n.userBans.banReason),1),e("td",null,d(n.userBans.bannedDate),1),e("td",null,[n.userBans.expireDate=="never"?(c(),h("div",T,[e("div",E,[o(r,{icon:"fa-solid fa-ban"})]),z])):g("",!0),n.userBans.expireDate!="never"?(c(),h("div",I,d(n.userBans.expireDate),1)):g("",!0)]),e("td",null,[n.userBans.dreptPlata==!0?(c(),h("div",J,[o(r,{icon:"fa-solid fa-circle-check"})])):g("",!0),n.userBans.dreptPlata==!1?(c(),h("div",O,[o(r,{icon:"fa-solid fa-ban"})])):g("",!0)])]))),256))])])]),e("div",Y,[e("div",{class:"page-button",onClick:s[0]||(s[0]=n=>u.PageMinus())},[e("div",j,[o(r,{icon:"fa-solid fa-angle-left"})])]),e("div",q,d(l.CurrentPage),1),e("div",{class:"page-button",onClick:s[1]||(s[1]=n=>u.PagePlus())},[e("div",A,[o(r,{icon:"fa-solid fa-chevron-right"})])])])])])]),_:1})}var ee=v(k,[["render",K]]);export{ee as default};
