<template>
    <header>
        <div class="header-title">
            <h1>{{page}}</h1>
             <p>{{GetCurrentDate()}}</p>
        </div>

        <div class="user-wrapper">

            <div class="user-data-wrapper" v-if="isLogged == true">
                <div class="user-data" @click="GoToProfile()">
                    <div class="icon">
                        <fa icon="fa-solid fa-user"/>
                    </div>
                    <div class="user-name">
                        <h1>{{UserName}}</h1>
                        <p>{{UserTag}}</p>
                    </div>
                </div>
                <div class="exit-button" @click="Logout()">
                    <div class="icon">
                        <fa icon="fa-solid fa-arrow-right-from-bracket" />
                    </div>
                </div>
            </div>


            <div class="user-data" v-if="isLogged == false">
                <div class="icon">
                    <fa icon="fa-solid fa-user"/>
                </div>
                <router-link to="/login" class="button">
			        <span class="text">Logheaza-te</span>
			    </router-link>
            </div>    
        </div>
        
    </header>
</template>

<script>
	export default {
    props: ['page'],
	  data() {
		return {
			userTheme: "dark-theme",
            UserName: "Unknown",
            UserID: 0,
            isLogged: false,
            UserTag: "Jucator",
            CurrentDate: '12:15 PM 19th November 2022',
		};
	  },
	  methods: {
        GetCurrentDate() {
            var objToday = new Date(),
	        weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
	        dayOfWeek = weekday[objToday.getDay()],
	        domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	        dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	        curMonth = months[objToday.getMonth()],
	        curYear = objToday.getFullYear(),
	        curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	        curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	        curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
            var today = curHour + ":" + curMinute + ' ' + curMeridiem + " " + dayOfWeek + " " + dayOfMonth + ' ' + curMonth + ", " + curYear;
            return today;
        },
        GoToProfile() {
            this.$router.push('/profile/' + this.UserID);
        },
       async GetUserTag(user_id) {
            let user = await this.$axios.get('https://fairplay-rp.ro/api/user/' + user_id);
            let userData = user.data;
            if (userData['adminLvl'] == 1) {
                this.UserTag = "Helper in Teste"
            } else if (userData['adminLvl'] == 2) {
                this.UserTag = "Helper"
            } else if (userData['adminLvl'] == 3) {
                this.UserTag = "Moderator"
            } else if (userData['adminLvl'] == 4) {
                this.UserTag = "Administrator"
            } else if (userData['adminLvl'] == 5) {
                this.UserTag = "Developer"
            } else if (userData['adminLvl'] == 6) {
                this.UserTag = "Co-Fondator"
            } else if (userData['adminLvl'] >= 7) {
                this.UserTag = "Fondator"
            } else {
                this.UserTag = "Jucator"
            }
        },       
        IsUserLogged() {
            this.$axios.get("https://fairplay-rp.ro/api/account", { withCredentials: true }).then((response) => {
                if (response.data.status == "success") {
                    this.UserName = response.data.user['username']
                    this.UserID = response.data.user['id']
                    this.isLogged = true
                    this.GetUserTag(this.UserID);
                } else {
                    this.isLogged = false
                }
            });
        },
        Logout() {
            this.$axios.get('https://fairplay-rp.ro/api/logout', {withCredentials: true})
            setTimeout(() => {
                location.reload();
            }, 500);
        },
	  },
	mounted() {
        this.IsUserLogged();
	  },
	};
</script>

<style lang="css" scoped>

    header {
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
        border-radius: .40vw;
        background-color: var(--panel-color);
    }

    header .header-title {
        margin-left: 1vh;
    }

    header .header-title h1 {
        font-size: 1.1rem;
        color: var(--text-color);
        font-family: 'Poppins';
    }

    header .header-title p {
        font-size: .725rem;
        opacity: .7;
        color: var(--text-color);
        font-family: 'Poppins';
    }

    .user-wrapper .user-data-wrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .user-wrapper .user-data-wrapper .exit-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
        font-size: .8rem;
        width: 2.5vh;
        height: 2.5vh;
        background-color: var(--panel-accent-color);
        border-radius: .25vw;
        color: #ffffff80;
    }
    
    .user-wrapper .user-data {
        margin-right: 1.5em;
        display: inline-flex;
        justify-content: left;
        align-items: center;
        gap: 15px;
    }

    .user-wrapper .user-data .exit-button {
        width: 2vh;
        height: 2vh;
    }

    .user-wrapper .user-data .icon {
        width: 4vh;
        height: 4vh;

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: .40vw;

        background-color: var(--panel-accent-color);
        color: #ffffff80; 
    }

    .user-wrapper .user-data .user-name h1 {
        font-size: .8rem;
        font-weight: 500;
        color: var(--text-color);
        font-family: 'Poppins';
    }

    .user-wrapper .user-data .user-name p {
        font-size: .650rem;
        font-weight: 400;
        color: var(--text-color);
        font-family: 'Poppins';
        opacity: .7;
    }
    
    .user-wrapper .user-data .button {
        color: var(--title-icon-color);
        text-decoration: none !important;
    }

    .user-wrapper {
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 15px;
    }

</style>