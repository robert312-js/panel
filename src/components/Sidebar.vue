<template>
	<nav class="sidebar close">
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="../assets/logo-fairplay.png" alt="">
                </span>

                <div class="text logo-text">
                    <span class="name">FairPlay Romania</span>
                    <span class="profession">Roleplay Server</span>
                </div>
            </div>

			<div class="toggle" @click="ToggleSidebar()">
				<div class="icon">
					<fa icon="fa-solid fa-arrow-right" />
				</div>
			</div>
        </header>

        <div class="menu-bar">
            <div class="menu">

                <li class="search-box">
					<div class="icon">
						<fa icon="fa-solid fa-magnifying-glass" />
					</div>
                    <input type="text" placeholder="Search...">
                </li>

                <ul class="menu-links">
					<div v-for="(data, index) in NavigationButtons">
						<li class="nav-link" @click="SelectPage(index)">
							<a>
								<div class="icon">
									<fa :icon="data.Icon" />
								</div>
								<span class="text nav-text">{{data.Text}}</span>
							</a>
						</li>
					</div>
                </ul>
            </div>

            <div class="bottom-content">
                <li>
                    <a>
                        <div class="icon">
							<fa icon="fa-solid fa-arrow-right-from-bracket" />
						</div>
                        <span class="text nav-text">Logout</span>
                    </a>
                </li>                
            </div>
        </div>
    </nav>
</template>

<script>
export default {
props: ['page'],
  data() {
	return {
		CurrentPage: 1,
		onlinePlayers: 0,
		NavigationButtons: {
				1: {
					Icon: "fa-house",
					Text: "Acasă",
					Link: "/",
					Active: false,
					AnotherPage: false,
				},
				2: {
					Icon: "fa-ban",
					Text: "Interziceri",
					Link: "/bans",
					Active: false,
					AnotherPage: false,
				},
				3: {
					Icon: "fa-shield-halved",
					Text: "Staff",
					Link: "/staff",
					Active: false,
					AnotherPage: false,
				},
				4: {
					Icon: "fas fa-book",
					Text: "Regulament",
					Link: "/rules",
					Active: false,
					AnotherPage: false,
				},
				5: {
					Icon: "fas fa-basket-shopping",
					Text: "Shop",
					Link: "https://shop.fairplay-rp.ro/",
					Active: false,
					AnotherPage: true,
				},
			}
		};
  },
  methods: {
	ToggleSidebar() {
		let navbar = $('.sidebar');
		navbar.toggleClass("close");
	},
	SelectPage(page) {
        console.log(page, this.NavigationButtons[page].AnotherPage)
        if (this.NavigationButtons[page].AnotherPage) {
            window.open(this.NavigationButtons[page].Link, '_blank');
        } else {
            this.$router.push(this.NavigationButtons[page].Link);
        }
	}
  },
  created() {
	if (this.page != 0) {
		this.NavigationButtons[this.page].Active = true;
	}
	$.getJSON("https://servers-frontend.fivem.net/api/servers/single/2e3lgd", function (data) {
		$("#navbar-players").text(data["Data"]["clients"] + " Jucători");
	});
  },
};

</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

::selection{
    background-color: var(--primary-color);
    color: #fff;
}

/* ===== Sidebar ===== */
 .sidebar{
    height: 100vh;
    width: 250px;
    padding: 10px 14px;
    background: var(--sidebar-color);
    transition: var(--tran-05);
    z-index: 100;   
}

.sidebar.close{
    width: 88px;
}

/* ===== Reusable code - Here ===== */
.sidebar li{
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 15px;
}

.sidebar header .image,
.sidebar .icon{
    min-width: 60px;
    border-radius: 6px;
}

.sidebar .icon{
    min-width: 60px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.sidebar .text,
.sidebar .icon{
    color: var(--text-color);
    transition: var(--tran-03);
}

.sidebar .text{
    font-size: 17px;
    font-weight: 500;
    white-space: nowrap;
    opacity: 1;
}
.sidebar.close .text{
    opacity: 0;
}
/* =========================== */

.sidebar header{
    position: relative;
}

.sidebar header .image-text{
	margin-top: 2rem;
    display: flex;
    align-items: center;
}
.sidebar header .logo-text{
    display: flex;
    flex-direction: column;
}
header .image-text .name {
    margin-top: 2px;
    font-size: 17px;
    font-weight: 600;
}

header .image-text .profession{
    font-size: 14px;
    display: block;
}

.sidebar header .image{
    display: flex;
    align-items: center;
    justify-content: center;
}

.sidebar header .image img{
    width: 50px;
    border-radius: 6px;
}

.sidebar header .toggle{
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(180deg);
    height: 25px;
    width: 25px;
    background-color: var(--primary-color);
    color: var(--sidebar-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: var(--tran-05);
}

.sidebar.close .toggle{
    transform: translateY(-50%) rotate(0deg);
}

.sidebar .menu{
    margin-top: 40px;
}

.sidebar li.search-box{
    border-radius: 6px;
    background-color: var(--primary-color-light);
    cursor: pointer;
    transition: var(--tran-05);
}

.sidebar li.search-box input{
    height: 100%;
    width: 100%;
    outline: none;
    border: none;
    background-color: var(--primary-color-light);
    color: var(--text-color);
    border-radius: 6px;
    font-size: 17px;
    font-weight: 500;
    transition: var(--tran-05);
}
.sidebar li a{
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: var(--tran-03);
}

.sidebar li a:hover{
    background-color: var(--primary-color);
}
.sidebar li a:hover .icon,
.sidebar li a:hover .text{
    color: var(--sidebar-color);
}

.sidebar .menu-bar{
    height: calc(100% - 55px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: scroll;
}
.menu-bar::-webkit-scrollbar{
    display: none;
}

.bottom-content {
	position: relative;
	bottom: 3vh;
}

</style>