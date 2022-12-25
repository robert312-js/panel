<template>

	<div class="login-page">
		
		<div class="login-notification">
			<div class="login-notification-data success" v-if="notificationType == 'success'">
				<div class="login-notification-icon">
					<fa icon="fa-exclamation-triangle" />
				</div>
				<p>{{ notificationText }}</p>
			</div>

			<div class="login-notification-data error" v-if="notificationType == 'error'">
				<div class="login-notification-icon">
					<fa icon="fa-exclamation-triangle" />
				</div>
				<p>{{ notificationText }}</p>
			</div>
		</div>
		<div class="login-wrapper">
			<div class="login-data">
				<div class="form-icon">
					<fa icon="fa-user" />
				</div>

				<input type="email" v-model="loginMail" placeholder="Email">
			</div>
		
			<div class="login-data">
				<div class="form-icon">
					<fa icon="fa-lock" />
				</div>

				<input type="password" v-model="loginPwd" placeholder="Parolă">
			</div>

			<div class="login-data" v-if="usedForm == 'register'">
				<div class="form-icon">
					<fa icon="fa-lock" />
				</div>

				<input type="password" v-model="registerRepeatPwd" placeholder="Repeta Parola">
			</div>

			<div class="login-data" v-if="usedForm == 'register'">
				<div class="form-icon">
					<fa icon="fa-hashtag" />
				</div>

				<input type="number" v-model="loginCode" placeholder="Cod de verificare">
			</div>

						
			<div class="complete-action" @click="Login()" v-if="usedForm == 'login'">
				AUTENTIFICĂ-TE
			</div>

			<div class="complete-action" @click="RegisterUser()" v-else>
				ÎNREGISTREAZĂ-TE
			</div>

			<p v-if="usedForm == 'login'" >Nu ești membru? <span @click="useLoginForm('register')">Înregistrează-te acum</span> <fa class="login-arrow" icon="fa-arrow-right" /></p>
			<p v-else>Ești deja membru? <span @click="useLoginForm('login')">Autentifică-te acum</span> <fa class="login-arrow" icon="fa-arrow-right" /></p>
		</div>



	</div>
</template>
    
<script src="./login.js"></script>
        
<style lang="css">	

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

* {
	box-sizing: border-box;
}

.login-page {
	position: absolute;
	left: 0px;
	top: 0;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	font-family: 'Montserrat', sans-serif;
	background: #1f2124;
	padding: 0;
	margin: 0;
}

.login-wrapper{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
	width: 40%;
	height: 65%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 3vh;
	gap: 2.5vh;
}

.login-wrapper > .login-data{
	width: 75%;
	height: 9vh;
	background: #3a414975;
	border-radius: .25vw;
	display: flex;
	align-items: center;
}

.login-wrapper > .login-data > .form-icon{
	width: 4.5vw;
	height: 100%;
	background: #18191a20;
	border-top-right-radius: .25vw;
	border-bottom-right-radius: .25vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: rgba(255, 255, 255, .350);
}

.login-wrapper > .login-data > input{
	margin-left: 1vw;
	height: 100%;
	background: transparent;
	border: none;
	font-family: "Poppins";
	font-size: 1em;
	color: white;
	width: 75%;
}

.login-wrapper > .login-data > input:focus{
	outline: none;
}

.login-wrapper > .login-data > input::-webkit-outer-spin-button,
.login-wrapper > .login-data > input::-webkit-inner-spin-button {
  appearance: none;
  margin: 0;
}

.login-wrapper > .complete-action{
	width: 75%;
	height: 8vh;
	background: #5DA7DB;
	border-radius: .25vw;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	color: white;
	font-family: "Poppins";
	font-size: 1.150em;
	user-select: none;
	transition: 1s;
}

.login-wrapper > .complete-action:hover{
	opacity: .5;
}

.login-wrapper > p{
	color: white;
	margin-top: 2.5vh;
	font-family: "Poppins";
	color: rgba(255, 255, 255, .450);	
}

.login-wrapper > p > span{
	font-weight: 550;
	color: #fff;
	opacity: .7;
	user-select: none;
	transition: .550s;
}

.login-wrapper > p > span:hover{
	opacity: 1;
	text-shadow: 0 0 10px white;
	padding: .5vh 0;
	border-bottom: 1.250px solid #ffffff60;
	cursor: pointer;
}

.login-wrapper > p > .login-arrow{
	font-size: 1.150em;
	margin-left: .350vw;
}


.login-page .login-notification {
	margin-bottom: 33%;
	width: 80vh;
	height: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	transition: .550s;
	display: none;
}


.login-page .login-notification-data {
	width: 100%;
	height: 100%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: .5vw;
	color: white;
	font-family: "Poppins";
	font-size: 1.150em;
	border-radius: .50vw;
}

.login-page .login-notification-data.success {
	color: rgb(48, 187, 48);
}

.login-page .login-notification-data.error {
	color: rgb(187, 48, 48);
}

</style>