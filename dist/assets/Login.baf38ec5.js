import{c as s,i as e,a as l,t as u,m as r,u as d,v as c,s as g,r as p,o as n}from"./vendor.9dd6c1d0.js";import{_ as f}from"./index.25321405.js";var m={data(){return{usedForm:"login",loginMail:"",loginPwd:"",registerRepeatPwd:"",loginCode:"",notificationType:"error",notificationText:"Acest email este deja folosit"}},methods:{useLoginForm(i){this.usedForm=i,this.registerRepeatPwd="",this.loginMail="",this.loginPwd="",this.loginCode=""},LoginNotify(i,o){this.notificationType=i,this.notificationText=o,$(".login-notification").fadeIn(0),setTimeout(()=>{$(".login-notification").fadeOut(0)},3e3)},Login(){let i={email:this.loginMail,password:this.loginPwd};this.$axios.post("http://localhost:5000/api/login",i,{withCredentials:!0}).then(o=>{o.data.success?(this.LoginNotify("success","Autentificare cu succes"),setTimeout(()=>{this.$router.push("/")},1500)):this.LoginNotify("error",o.data.msg)})},async RegisterUser(){if(this.loginPwd!=this.registerRepeatPwd){this.LoginNotify("error","Parolele introduse nu se potrivesc");return}let i={email:this.loginMail,password:this.loginPwd,code:this.loginCode};this.$axios.post("http://localhost:5000/api/register",i).then(o=>{o.data.status=="success"?(this.LoginNotify("success","Contul a fost creat cu succes"),setTimeout(()=>{this.useLoginForm("login")},1500)):this.LoginNotify("error",o.data.msg)},o=>{console.log(o)})}}};const h={class:"login-page"},v={class:"login-notification"},y={key:0,class:"login-notification-data success"},_={class:"login-notification-icon"},w={key:1,class:"login-notification-data error"},T={class:"login-notification-icon"},k={class:"login-wrapper"},C={class:"login-data"},P={class:"form-icon"},L={class:"login-data"},N={class:"form-icon"},F={key:0,class:"login-data"},R={class:"form-icon"},E={key:1,class:"login-data"},V={class:"form-icon"},M={key:4},U=g("Nu e\u0219ti membru? "),A=g(),I={key:5},b=g("E\u0219ti deja membru? "),B=g();function j(i,o,D,S,z,G){const a=p("fa");return n(),s("div",h,[e("div",v,[i.notificationType=="success"?(n(),s("div",y,[e("div",_,[l(a,{icon:"fa-exclamation-triangle"})]),e("p",null,u(i.notificationText),1)])):r("",!0),i.notificationType=="error"?(n(),s("div",w,[e("div",T,[l(a,{icon:"fa-exclamation-triangle"})]),e("p",null,u(i.notificationText),1)])):r("",!0)]),e("div",k,[e("div",C,[e("div",P,[l(a,{icon:"fa-user"})]),d(e("input",{type:"email","onUpdate:modelValue":o[0]||(o[0]=t=>i.loginMail=t),placeholder:"Email"},null,512),[[c,i.loginMail]])]),e("div",L,[e("div",N,[l(a,{icon:"fa-lock"})]),d(e("input",{type:"password","onUpdate:modelValue":o[1]||(o[1]=t=>i.loginPwd=t),placeholder:"Parol\u0103"},null,512),[[c,i.loginPwd]])]),i.usedForm=="register"?(n(),s("div",F,[e("div",R,[l(a,{icon:"fa-lock"})]),d(e("input",{type:"password","onUpdate:modelValue":o[2]||(o[2]=t=>i.registerRepeatPwd=t),placeholder:"Repeta Parola"},null,512),[[c,i.registerRepeatPwd]])])):r("",!0),i.usedForm=="register"?(n(),s("div",E,[e("div",V,[l(a,{icon:"fa-hashtag"})]),d(e("input",{type:"number","onUpdate:modelValue":o[3]||(o[3]=t=>i.loginCode=t),placeholder:"Cod de verificare"},null,512),[[c,i.loginCode]])])):r("",!0),i.usedForm=="login"?(n(),s("div",{key:2,class:"complete-action",onClick:o[4]||(o[4]=t=>i.Login())}," AUTENTIFIC\u0102-TE ")):(n(),s("div",{key:3,class:"complete-action",onClick:o[5]||(o[5]=t=>i.RegisterUser())}," \xCENREGISTREAZ\u0102-TE ")),i.usedForm=="login"?(n(),s("p",M,[U,e("span",{onClick:o[6]||(o[6]=t=>i.useLoginForm("register"))},"\xCEnregistreaz\u0103-te acum"),A,l(a,{class:"login-arrow",icon:"fa-arrow-right"})])):(n(),s("p",I,[b,e("span",{onClick:o[7]||(o[7]=t=>i.useLoginForm("login"))},"Autentific\u0103-te acum"),B,l(a,{class:"login-arrow",icon:"fa-arrow-right"})]))])])}var q=f(m,[["render",j]]);export{q as default};
