import{c as s,b as o,a,t as f,d,v as g,x as u,u as p,r as m,o as n}from"./vendor.e9c094e2.js";import{_ as h}from"./index.2e5d4484.js";const _={data(){return{usedForm:"login",loginMail:"",loginPwd:"",registerRepeatPwd:"",loginCode:"",notificationType:"error",notificationText:"Acest email este deja folosit"}},methods:{useLoginForm(l){this.usedForm=l,this.registerRepeatPwd="",this.loginMail="",this.loginPwd="",this.loginCode=""},LoginNotify(l,i){this.notificationType=l,this.notificationText=i,$(".login-notification").fadeIn(0),setTimeout(()=>{$(".login-notification").fadeOut(0)},3e3)},Login(){let l={email:this.loginMail,password:this.loginPwd};this.$axios.post("https://fairplay-rp.ro/api/login",l,{withCredentials:!0}).then(i=>{i.data.success?(this.LoginNotify("success","Autentificare cu succes"),setTimeout(()=>{this.$router.push("/")},1500)):this.LoginNotify("error",i.data.msg)})},async RegisterUser(){if(this.loginPwd!=this.registerRepeatPwd){this.LoginNotify("error","Parolele introduse nu se potrivesc");return}let l={email:this.loginMail,password:this.loginPwd,code:this.loginCode};this.$axios.post("https://fairplay-rp.ro/api/register",l).then(i=>{i.data.status=="success"?(this.LoginNotify("success","Contul a fost creat cu succes"),setTimeout(()=>{this.useLoginForm("login")},1500)):this.LoginNotify("error",i.data.msg)},i=>{console.log(i)})}}},v={class:"login-page"},y={class:"login-notification"},w={key:0,class:"login-notification-data success"},T={class:"login-notification-icon"},k={key:1,class:"login-notification-data error"},x={class:"login-notification-icon"},C={class:"login-wrapper"},P={class:"login-data"},L={class:"form-icon"},N={class:"login-data"},F={class:"form-icon"},R={key:0,class:"login-data"},E={class:"form-icon"},V={key:1,class:"login-data"},M={class:"form-icon"},U={key:4},A=p("Nu e\u0219ti membru? "),b=p(),I={key:5},B=p("E\u0219ti deja membru? "),j=p();function D(l,i,S,z,e,c){const r=m("fa");return n(),s("div",v,[o("div",y,[e.notificationType=="success"?(n(),s("div",w,[o("div",T,[a(r,{icon:"fa-exclamation-triangle"})]),o("p",null,f(e.notificationText),1)])):d("",!0),e.notificationType=="error"?(n(),s("div",k,[o("div",x,[a(r,{icon:"fa-exclamation-triangle"})]),o("p",null,f(e.notificationText),1)])):d("",!0)]),o("div",C,[o("div",P,[o("div",L,[a(r,{icon:"fa-user"})]),g(o("input",{type:"email","onUpdate:modelValue":i[0]||(i[0]=t=>e.loginMail=t),placeholder:"Email"},null,512),[[u,e.loginMail]])]),o("div",N,[o("div",F,[a(r,{icon:"fa-lock"})]),g(o("input",{type:"password","onUpdate:modelValue":i[1]||(i[1]=t=>e.loginPwd=t),placeholder:"Parol\u0103"},null,512),[[u,e.loginPwd]])]),e.usedForm=="register"?(n(),s("div",R,[o("div",E,[a(r,{icon:"fa-lock"})]),g(o("input",{type:"password","onUpdate:modelValue":i[2]||(i[2]=t=>e.registerRepeatPwd=t),placeholder:"Repeta Parola"},null,512),[[u,e.registerRepeatPwd]])])):d("",!0),e.usedForm=="register"?(n(),s("div",V,[o("div",M,[a(r,{icon:"fa-hashtag"})]),g(o("input",{type:"number","onUpdate:modelValue":i[3]||(i[3]=t=>e.loginCode=t),placeholder:"Cod de verificare"},null,512),[[u,e.loginCode]])])):d("",!0),e.usedForm=="login"?(n(),s("div",{key:2,class:"complete-action",onClick:i[4]||(i[4]=t=>c.Login())}," AUTENTIFIC\u0102-TE ")):(n(),s("div",{key:3,class:"complete-action",onClick:i[5]||(i[5]=t=>c.RegisterUser())}," \xCENREGISTREAZ\u0102-TE ")),e.usedForm=="login"?(n(),s("p",U,[A,o("span",{onClick:i[6]||(i[6]=t=>c.useLoginForm("register"))},"\xCEnregistreaz\u0103-te acum"),b,a(r,{class:"login-arrow",icon:"fa-arrow-right"})])):(n(),s("p",I,[B,o("span",{onClick:i[7]||(i[7]=t=>c.useLoginForm("login"))},"Autentific\u0103-te acum"),j,a(r,{class:"login-arrow",icon:"fa-arrow-right"})]))])])}var Z=h(_,[["render",D]]);export{Z as default};
