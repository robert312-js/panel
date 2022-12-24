<template>
    <profile-page>
        <Profile-Sidebar page="0" />
        <div class="profile-container">
            <Profile-Header page="Profil Jucator" />
    
            <div class="profile-wrapper">
                <div class="profile-wrapper-2">
                    <div class="ban-container" v-if="hasUserBan">
                        <div class="ban-header">
                            <div class="icon">
                                <fa icon="fa-solid fa-ban" />
                            </div>
                            Jucatorul este Banat
                        </div>
    
                        <div class="ban-data">
                            <div class="ban-content reason">
                                <div class="ban-content-item">
                                    <h1>Motiv</h1>
                                    <p>{{userBanData['banReason']}}</p>
                                </div>
                            </div>
                            <div class="ban-hr"></div>
                            <div class="ban-content">
                                <div class="ban-content-item">
                                    <h1>Data Banarii</h1>
                                    <p>{{userBanData['bannedDate']}}</p>
                                </div>
                                <div class="ban-content-item">
                                    <h1>Data Expirarii</h1>
                                    <p v-if="userBanData['expireDate'] != 'never'" >{{userBanData['expireDate']}}</p>
                                    <p v-if="userBanData['expireDate'] == 'never'" style="color: rgb(209, 28, 28);" >ACEST BAN NU EXPIRA</p>
                                </div>
                            </div>
                            <div class="ban-hr"></div>
                            <div class="ban-content">
                                <div class="ban-content-item">
                                    <h1>Banat de catre</h1>
                                    <p>{{userBanData['bannedBy']}}</p>
                                </div>
                                <div class="ban-content-item">
                                    <h1>Drept de Plata</h1>
                                    <div class="icon canpay" v-if="userBanData['dreptPlata'] == true">
                                        <fa icon="fa-solid fa-circle-check" />
                                    </div>
                                    <div class="icon cantpay" v-if="userBanData['dreptPlata'] == false">
                                        <fa icon="fa-solid fa-ban" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="profile">
                        <div class="profile-header-wrapper">
                            <div class="profile-header">
                                <div class="icon">
                                    <fa icon="fa-solid fa-user" />
                                </div>
                                <div class="profile-header-data">
                                    <h1>Caracterul lui {{userData['username']}}</h1>
                                    <p>Vizualizezi Caracterul lui {{userData['username']}}</p>
                                </div>
                            </div>
                            <div class="profile-hr"></div>
                        </div>
    
                        <div class="profile-info-wrapper">
                            <div class="profile-info">
                                <div class="profile-image">
                                    <fa icon="fa-solid fa-user" />
                                </div>
    
                                <div class="profile-info-data">
                                    <h1>{{GetUserCharacterName}}</h1>
                                    <p>{{UserTag}}</p>
                                </div>
                            </div>
                            <div class="profile-hr"></div>
                        </div>
    
                        <div class="profile-data">
                            <div class="profile-data-item">
                                <p>Varsta</p>
                                <h1>{{GetUserAge}}</h1>
                            </div>
                            <div class="profile-data-item">
                                <p>Ore Jucate</p>
                                <h1>{{HoursPlayed}}</h1>
                            </div>
                            <div class="profile-data-item">
                                <p>Bani Cash</p>
                                <h1>{{BankMoney}}</h1>
                            </div>
                            <div class="profile-data-item">
                                <p>Bani in banca</p>
                                <h1>{{CashMoney}}</h1>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="profile-actions-wrapper">
                    <div class="profile-actions-navbar">
                        <div class="navbar-button" @click="SelectInfoCurrentPage(1)">
                            <fa icon="fa-solid fa-car" />
                            <p>Vehicule</p>
                        </div>
                        <div class="navbar-button" @click="SelectInfoCurrentPage(2)" v-if="CanSeeUserInfo">
                            <fa icon="fa-solid fa-clock-rotate-left" />
                            <p>Istoric</p>
                        </div>
                        <div class="navbar-button" @click="SelectInfoCurrentPage(3)" v-if="CanSeeUserInfo">
                            <fa icon="fa-solid fa-ban" />
                            <p>Punish Log</p>
                        </div>
                        <div class="navbar-button" @click="SelectInfoCurrentPage(4)" v-if="IsUserAdmin >= 2">
                            <fa icon="fa-solid fa-database" />
                            <p>User Logs</p>
                        </div>
                        <div class="navbar-button" @click="SelectInfoCurrentPage(5)" v-if="IsUserAdmin >= 1">
                            <fa icon="fa-solid fa-list" />
                            <p>Admin Actions</p>
                        </div>
                    </div>
    
                    <div class="profile-actions-vehicles" v-if="InfoCurrentPage == 1">
                        <div class="profile-history-header">
                            <h1>Vehicule</h1>
                            <p>Vizualizezi toate vehiculele pe care {{userData['username']}} le detine</p>
                        </div>
                        <div class="actions-hr"></div>
    
                        <div class="profile-actions-vehicles-wrapper">
                            <div class="profile-actions-vehicles-box" v-for="(data, index) in userVehicles">
                                <div class="vehicle-info">
                                    <div class="vehicle" v-if="data.vtype == 'ds' ">
                                        <fa icon="fa-solid fa-car" />
                                    </div>
                                    <div class="vehicle" v-if="data.vtype == 'camion' ">
                                        <fa icon="fa-solid fa-truck" />
                                    </div>
                                    <div class="vehicle" v-if="data.vtype == 'remorca' ">
                                        <fa icon="fa-solid fa-trailer" />
                                    </div>
                                    <div class="vehicle" v-if="data.vtype == 'barca' ">
                                        <fa icon="fa-solid fa-ship" />
                                    </div>
                                    <h1>{{data.name}}</h1>
                                </div>
    
                                <div class="vehicle-status">
                                    <div class="premium" v-if="data.premium">
                                        <fa icon="fa-solid fa-star" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="profile-actions-history" v-if="InfoCurrentPage == 2">
                        <div class="profile-history-header">
                            <h1>Istoric</h1>
                            <p>Vizualizezi tot istoricul pe care {{userData['username']}}l-a avut pe acest server</p>
                        </div>
                        <div class="actions-hr"></div>
    
                        <div class="panel-actions-history-data">
                            <div class="panel-actions-history-box" v-for="(data, index) in PlayerHistory">
                                <div class="box-info">
                                    <div class="status" v-if="data.type == 'add'">
                                        <fa icon="fa-solid fa-user-plus" />
                                    </div>
                                    <div class="status uninvite" v-if="data.type == 'uninvite'">
                                        <fa icon="fa-solid fa-user-slash" />
                                    </div>
                                    <div class="status setadmin" v-if="data.type == 'setadmin'">
                                        <fa icon="fa-solid fa-check" />
                                    </div>
                                    <div class="status removeadmin" v-if="data.type == 'removeadmin'">
                                        <fa icon="fa-solid fa-ban" />
                                    </div>
                                    <div class="history-data">
                                        <h1>{{userData['username']}}</h1>
                                        <p>{{data.text}}</p>
                                    </div>
                                </div>
                                <div class="history-time">{{GetDate(data.time)}}</div>
                            </div>
                        </div>
    
                        <div class="pagination">
                            <div class="page-button" @click="CurrentPageMinus()">
                                <div class="icon">
                                    <fa icon="fa-solid fa-angle-left" />
                                </div>
                            </div>
                            <div class="page-selected">{{GetSelectedPage}}</div>
                            <div class="page-button" @click="CurrentPagePlus()">
                                <div class="icon">
                                    <fa icon="fa-solid fa-chevron-right" />
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="profile-actions-punishlog" v-if="InfoCurrentPage == 3">
                        <div class="profile-punishlog-header">
                            <h1>Punish Log</h1>
                            <p>Vizualizezi istoricul sanctiunilor pe care {{userData['username']}} l-a avut pe server.</p>
                        </div>
                        <div class="actions-hr"></div>
    
                        <div class="panel-actions-punishlog-data">
                            <div class="panel-actions-punishlog-box" v-for="(data, index) in PunishLog">
                                <div class="box-info">
                                    <div class="status ban" v-if="data.type == 'ban'">
                                        <fa icon="fa-solid fa-ban" />
                                    </div>
                                    <div class="status warn" v-if="data.type == 'warn'">
                                        <fa icon="fa-solid fa-triangle-exclamation" />
                                    </div>
                                    <div class="status unwarn" v-if="data.type == 'unwarn'">
                                        <fa icon="fa-solid fa-circle-exclamation" />
                                    </div>
                                    <div class="status jail" v-if="data.type == 'jail'">
                                        <fa icon="fa-solid fa-handcuffs" />
                                    </div>
                                    <div class="status banPermanent" v-if="data.type == 'banPermanent' ">
                                        <fa icon="fa-solid fa-gavel" />
                                    </div>
    
                                    <div class="punishlog-data">
                                        <h1>{{userData['username']}}</h1>
                                        <p>{{data.text}}</p>
                                    </div>
                                </div>
                                <div class="punishlog-time">{{GetDate(data.time)}}</div>
                            </div>
                        </div>
                        <div class="pagination">
                            <div class="page-button" @click="CurrentPageMinus()">
                                <div class="icon">
                                    <fa icon="fa-solid fa-angle-left" />
                                </div>
                            </div>
                            <div class="page-selected">{{GetSelectedPage}}</div>
                            <div class="page-button" @click="CurrentPagePlus()">
                                <div class="icon">
                                    <fa icon="fa-solid fa-chevron-right" />
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="profile-actions-logs" v-if="InfoCurrentPage == 4">
                        <div class="profile-actions-logs-headers">
                            <div class="header-info">
                                <h1>Logs</h1>
                                <p>Aici poti vizualiza toate actiunile facute de catre {{userData['username']}} pe server</p>
                            </div>
    
                            <div class="submenu-button" @click="openSubMenu($event)">
                                <fa icon="fa-solid fa-gear" />
                            </div>
                        </div>
    
                        <div class="actions-hr"></div>
                        <div class="profile-actions-logs-data">
                            <div class="profile-actions-logs-box" v-for="(data, index) in LogsData">
                                <div class="box-info">
                                    <div class="status">
                                        <div class="status-icon">
                                            <fa :icon="data.icon" />
                                        </div>
                                    </div>
                                    <div class="logs-data">
                                        <h1>{{userData['username']}}</h1>
                                        <p>{{data.text}}</p>
                                    </div>
                                </div>
                                <div class="logs-time">{{data.date}}</div>
                            </div>
                        </div>
    
                        <div class="submenu" style="display: none;">
                            <div class="submenu-item" v-for="(data, index) in LogTypes" @click="selectSubMenu(data.type, data.logInfo, data.hasTarget)">
                                <div class="submenu-item-data" v-if="data.category == false">
                                    <div class="data">
                                        <div class="icon">
                                            <fa :icon="data.icon" />
                                        </div>
                                        <p>{{data.name}}</p>
                                    </div>
                                    <fa icon="fa-solid fa-right-long" />
                                </div>
                                <div class="submenu-item-category" v-if="data.category == true">
                                    <fa icon="fa-solid fa-left-long" />
                                    <p>{{data.name}}</p>
                                    <fa icon="fa-solid fa-right-long" />
                                </div>
                            </div>
                        </div>
    
                        <div class="pagination">
                            <div class="page-button" @click="CurrentPageMinus()">
                                <div class="icon">
                                    <fa icon="fa-solid fa-angle-left" />
                                </div>
                            </div>
                            <div class="page-selected">{{GetSelectedPage}}</div>
                            <div class="page-button" @click="CurrentPagePlus()">
                                <div class="icon">
                                    <fa icon="fa-solid fa-chevron-right" />
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="profile-actions-admin" v-if="InfoCurrentPage == 5">
                        <div class="profile-actions-admin-header">
                            <h1>Admin Actions</h1>
                            <p>Aici poti efectua actiuni asupra jucatorului</p>
                        </div>
                        <div class="actions-hr"></div>
                        <div class="profile-actions-admin-data">
                            <div class="profile-actions-admin-box bans" @click="BanPlayer()" v-if="IsUserAdmin >= 2">
                                <div class="admin-data">
                                    <div class="icon">
                                        <fa icon="fa-solid fa-gavel" />
                                    </div>
                                    Ban Player
                                </div>
                            </div>
    
                            <div class="profile-actions-admin-box setadmin" @click="SetAdmin()" v-if="IsUserAdmin >= 4 || adminId == 3770">
                                <div class="admin-data">
                                    <div class="icon">
                                        <fa icon="fa-solid fa-user-shield" />
                                    </div>
                                    Setează Staff
                                </div>
                            </div>
    
                            <div class="profile-actions-admin-box kick" @click="KickPlayer()" v-if="IsUserAdmin >= 2">
                                <div class="admin-data">
                                    <div class="icon">
                                        <fa icon="fa-solid fa-ban" />
                                    </div>
                                    Kick Jucator
                                </div>
                            </div>
    
                            <div class="profile-actions-admin-box coins" @click="GiveCoins()" v-if="IsUserAdmin >= 5">
                                <div class="admin-data">
                                    <div class="icon">
                                        <fa icon="fa-solid fa-coins" />
                                    </div>
                                    Give Coins
                                </div>
                            </div>
    
                            <div class="profile-actions-admin-box money" @click="GiveMoney()" v-if="IsUserAdmin >= 4">
                                <div class="admin-data">
                                    <div class="icon">
                                        <fa icon="fa-solid fa-sack-dollar" />
                                    </div>
                                    Give Money
                                </div>
                            </div>
    
                            <div class="profile-actions-admin-box unban" v-if="hasUserBan && IsUserAdmin >= 3" @click="UnbanPlayer()">
                                <div class="admin-data">
                                    <div class="icon">
                                        <fa icon="fa-solid fa-ban" />
                                    </div>
                                    Unban Player
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </profile-page> 

</template>


<script>
	import Header from '../components/Header.vue';
    import Sidebar from '../components/Sidebar.vue';
    
	export default {
	  data() {
		return {
			userData: [],
            userVehicles: [],
            userPunishLog: [],
            userHistory: [],
            UserLogs: [],
            LogTypes: [
                // Money Logs
                {name: "Money Logs", icon: "", type: false, logInfo: false, hasTarget: false, category: true},
                {name: "Money Logs", icon: "fa-solid fa-sack-dollar", type: "Money", logInfo: false, hasTarget: false, category: false},
                {name: "Give Money", icon: "fas fa-hand-holding-dollar", type: "Money", logInfo: "Ofera-Bani", hasTarget: false, category: false},
                {name: "Receive Money", icon: "fas fa-money-bill-1-wave", type: "Money", logInfo: "Receive-Money", hasTarget: false, category: false},
                {name: "Receive Money from Player", icon: "fas fa-money-bill-transfer", type: "Money", logInfo: "Receive-Money", hasTarget: true, category: false},
                {name: "Give Money to Player", icon: "fas fa-hand-holding-dollar", type: "Money", logInfo: "Ofera-Bani", hasTarget: true, category: false},
                {name: "Deposit Money", icon: "fas fa-landmark", type: "Money", logInfo: "Money-Deposit", hasTarget: false, category: false},
                {name: "Withdraw Money", icon: "fas fa-money-bill-trend-up", type: "Money", logInfo: "Money-Withdraw", hasTarget: false, category: false},
                {name: "Received Transfer", icon: "fas fa-money-check-dollar", type: "Money", logInfo: "Receive-Transfer", hasTarget: false, category: false},
                {name: "Transfered Money", icon: "fas fa-dollar-sign", type: "Money", logInfo: "Transfer-Money", hasTarget: false, category: false},
                {name: "Received Transfer From Player", icon: "fas fa-credit-card", type: "Money", logInfo: "Receive-Transfer", hasTarget: true, category: false},
                {name: "Transfered Money to Player", icon: "fas fa-wallet", type: "Money", logInfo: "Transfer-Money", hasTarget: true, category: false},
                {name: "Withdraw Faction Money", icon: "fas fa-circle-dollar-to-slot", type: "Money", logInfo: "Money-Faction-Withdraw", hasTarget: false, category: false},
                {name: "Deposit Faction Money", icon: "fas fa-vault", type: "Money", logInfo: "Money-Faction-Deposit", hasTarget: false, category: false},
                // Vehs
                {name: "Vehicles Logs", icon: "", type: false, logInfo: false, hasTarget: false, category: true},
                {name: "Vehicles Logs", icon: "fa-solid fa-car", type: "Vehicles", logInfo: false, hasTarget: false, category: false},
                {name: "Sell Vehicle", icon: "fas fa-car-rear", type: "Vehicles", logInfo: "Sell-Vehicle", hasTarget: false, category: false},
                {name: "Buy Vehicle", icon: "fas fa-car-side", type: "Vehicles", logInfo: "Buy-Vehicle", hasTarget: false, category: false},
                {name: "Buy Dealership", icon: "fas fa-car-on", type: "Vehicles", logInfo: "Buy-Dealership", hasTarget: false, category: false},
                // Invests
                {name: "Invest Logs", icon: "", type: false, logInfo: false, hasTarget: false, category: true},
                {name: "Invests Logs", icon: "fas fa-chart-line", type: "Invests", logInfo: false, hasTarget: false, category: false},
                {name: "Start Invest", icon: "fas fa-file-invoice-dollar", type: "Invests", logInfo: "Made-Invest", hasTarget: false, category: false},
                {name: "Finish Invest",icon: "fas fa-ranking-star", type: "Invests", logInfo: "Receive-Invest", hasTarget: false, category: false},
                {name: "Losed Invest", icon: "fas fa-chart-simple", type: "Invests", logInfo: "Lose-Invest", hasTarget: false, category: false},
                // Items Logs
                {name: "Items Logs", icon: "", type: false, logInfo: false, hasTarget: false, category: true},
                {name: "Items Logs", icon: "fas fa-bag-shopping", type: "Items", logInfo: false, hasTarget: false, category: false},
                {name: "Received Items", icon: "fas fa-handshake-simple", type: "Items", logInfo: "Receive-Item", hasTarget: false, category: false},
                {name: "Give Items", icon: "fas fa-hand-holding-heart", type: "Items", logInfo: "Give-Item", hasTarget: false, category: false},
                {name: "Give Inventory Item", icon: "fas fa-hand-sparkles", type: "Items", logInfo: "Put-Item", hasTarget: false, category: false},
                {name: "Receive Inventory Item", icon: "fas fa-hand-holding", type: "Items", logInfo: "Receive-Inv-Item", hasTarget: false, category: false},
                {name: "Depozit Chest", icon: "fas fa-boxes-packing", type: "Items", logInfo: "Depozit-ChestItem", hasTarget: false, category: false},
                {name: "Receive from Chest", icon: "fas fa-box", type: "Items", logInfo: "Get-ChestItem", hasTarget: false, category: false},
                {name: "Crafted Items", icon: "fas fa-recycle", type: "Items", logInfo: "Craft-Item", hasTarget: false, category: false},
                // User Logs
                {name: "User Logs", icon: "", type: false, logInfo: false, hasTarget: false, category: true},
                {name: "User Logs", icon: "fas fa-user", type: "UserLogs", logInfo: false, hasTarget: false, category: false},
                {name: "Connect Logs", icon: "fas fa-signal", type: "UserLogs", logInfo: "connect", hasTarget: false, category: false},
                {name: "Disconnect Logs", icon: "fas fa-person-walking-arrow-right", type: "UserLogs", logInfo: "disconnect", hasTarget: false, category: false},
                {name: "Death Logs", icon: "fas fa-heart-crack", type: "UserLogs", logInfo: "death", hasTarget: false, category: false},
            ],
            PaginateRange: 6,
            CurrentPage: 1,
            Pages: [],
            InfoCurrentPage: 1,
            // User Info
            UserTag: "Jucator",
            hasUserBan: false,
            userBanData: [],
            CanSeeUserInfo: false,
            adminId: 0,
            IsUserAdmin: 0,
		};
	  },
      components: {
             "Profile-Header": Header,
             "Profile-Sidebar": Sidebar,
      },
	  methods: {
        async SelectInfoCurrentPage(page) {
            this.InfoCurrentPage = page;
            this.Pages= [];

            if (page == 2) {
                this.setPages(this.userHistory)
                this.CurrentPage = 1;
            } else if (page == 3){
                this.CurrentPage = 1;
                this.setPages(this.userPunishLog)
            } else if (page == 4) {
                this.UserLogs = [];
                this.CurrentPage = 1;
                const logs = await this.$axios.get('https://fairplay-rp.ro/api/serverLogs/' + this.$route.params.id + '/' + 'Money')
                this.UserLogs = logs.data;
                this.setPages(this.UserLogs);
            }
        },
        GetDate(timestamp) {
			var a = new Date(timestamp * 1000);
 			var year = a.getFullYear();
 			var month = a.getMonth()
 			var date = a.getDate();
 			var hour = a.getHours();
 			var min = a.getMinutes();
			var hour = a.getHours() > 12 ? a.getHours() - 12 : (a.getHours() < 10 ? "0" + a.getHours() : a.getHours());
	        var min  = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
 			var time = date + '/' + month + '/' + year + ' ' + hour + ':' + min;
 			return time;
		},
        async selectSubMenu(type, data, target) {
            let element = $('.submenu');
            element.fadeOut();
            this.Pages= [];
            this.UserLogs = [];
            if (type && data == false && target == false) {
                const logs = await this.$axios.get('https://fairplay-rp.ro/api//serverLogs/' + this.$route.params.id + '/' + type)
                this.UserLogs = logs.data;
                this.CurrentPage = 1;
                this.setPages(this.UserLogs)
            } else if (type && data && target == false) {
                const logs = await this.$axios.get('https://fairplay-rp.ro/api/getServerLogsData/' + this.$route.params.id + '/' + type + '/' + data)
                this.UserLogs = logs.data;
                this.CurrentPage = 1;
                this.setPages(this.UserLogs)
            } else if (type && data && target) {
                let target = await Swal.fire({
                     title: 'Id-ul jucatorului',
                     input: 'text',
                     inputAttributes: {
                       autocapitalize: 'off'
                     },
                     showCancelButton: true,
                     confirmButtonText: 'Cauta',
                     showLoaderOnConfirm: false,
                })
                let id = parseInt(target.value);
                const logs = await this.$axios.get('https://fairplay-rp.ro/api/getServerLogsTarget/' + this.$route.params.id + '/' + type + '/' + data + '/' + id)
                this.UserLogs = logs.data;
                this.CurrentPage = 1;
                this.setPages(this.UserLogs)
                Swal.close();
            }
        },
        openSubMenu(event) {
            let dom = event.target;
            let element = $('.submenu');

            if (element.css('display') == 'none') {
                element.fadeIn();
            } else {
                element.fadeOut();
            }

            let itemOffset = $(dom).offset();
            element.css('top', itemOffset.top + 30);

            let leftOffset = itemOffset.left - element.width() + $(dom).width() + 25;
            if (leftOffset + element.width() > $(window).width()) {
                leftOffset = $(window).width() - element.width() - 20;
            }
            element.css('left', leftOffset);
        },
        async hasUserAdmin() {
            this.$axios.get("https://fairplay-rp.ro/api/admin", { withCredentials: true }).then((response) => {
                if (response.data.isAdmin) {
                    this.IsUserAdmin = response.data['adminLvl'];
                    this.adminId = response.data['adminId'];
                } else {
                    this.IsUserAdmin = 0;
                }
            });
        },
        async CanSeeProfileInfo() {
            this.$axios.get("https://fairplay-rp.ro/api/account", { withCredentials: true }).then((response) => {
                let userData = response.data.user
                if (userData['id'] == this.$route.params.id) {
                    this.CanSeeUserInfo = true;
                } else {
                    this.$axios.get("https://fairplay-rp.ro/api/admin", { withCredentials: true }).then((response) => {
                        if (response.data.isAdmin) {
                            if (response.data['adminLvl'] >= 2 ) {
                                this.CanSeeUserInfo = true;
                            }
                         } else {
                            this.CanSeeUserInfo = true;
                         }
                    });
                }
            });
        },
        async VerifyUserBan() {
            if (this.userData['userBans']) {
                this.hasUserBan = true;
                this.userBanData = this.userData['userBans'];
            } else {
                this.hasUserBan = false;
            }
        },
        GetUserTag() {
            if (this.userData['adminLvl'] == 1) {
                this.UserTag = "Helper in Teste"
            } else if (this.userData['adminLvl'] == 2) {
                this.UserTag = "Helper"
            } else if (this.userData['adminLvl'] == 3) {
                this.UserTag = "Moderator"
            } else if (this.userData['adminLvl'] == 4) {
                this.UserTag = "Administrator"
            } else if (this.userData['adminLvl'] == 5) {
                this.UserTag = "Developer"
            } else if (this.userData['adminLvl'] == 6) {
                this.UserTag = "Co-Fondator"
            } else if (this.userData['adminLvl'] >= 7) {
                this.UserTag = "Fondator"
            } else {
                this.UserTag = "Jucator"
            }
        },
        // Admin Actions
        async RconAction(command) {
            this.$axios.post('https://fairplay-rp.ro/api/rcon', {command: command}, {withCredentials: true})
        },
        async BanPlayer() {
            let reason = await Swal.fire({
                title: 'Motivul banului',
                input: 'text',
                inputAttributes: {
                  autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'OK',
                showLoaderOnConfirm: false,
            })
            let time = await Swal.fire({
                title: 'Timpul banului',
                input: 'text',
                inputAttributes: {
                  autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'OK',
                showLoaderOnConfirm: false,
            })
            let DreptPlata = await Swal.fire({
                title: 'Drept de plata [1 == Nu, 0 == Da]',
                input: 'text',
                inputAttributes: {
                  autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'OK',
                showLoaderOnConfirm: false,
            })
            if (reason.value != null && time.value != null && DreptPlata.value != null) {
                this.RconAction('banplayer ' + this.$route.params.id + ' ' + time.value + ' ' + this.adminId + ' ' + dreptPlata.value + ' ' + reason.value);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }

        },
        UnbanPlayer() {
            Swal.fire({
              title: 'Esti sigur?',
              text: "Jucatorul va primii unban pe server!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Unban Player'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.RconAction('unbanplayer ' + this.$route.params.id + ' ' + this.adminId);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            })
        },
        KickPlayer() {
            Swal.fire({
              title: 'Esti sigur?',
              text: "Jucatorul va primi kick de pe server!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Kick Player'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.RconAction('kickplayer ' + this.$route.params.id + ' ' + this.adminId);
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);
                }
            })
        },
        async GiveMoney() {
            let money = await Swal.fire({
                title: 'Suma Oferita',
                input: 'text',
                inputAttributes: {
                  autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Give Money',
                showLoaderOnConfirm: false,
            })
            this.RconAction('givemoney ' + this.$route.params.id + ' ' + money.value);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        },
        async GiveCoins() {
            let coins = await Swal.fire({
                title: 'Suma Oferita',
                input: 'text',
                inputAttributes: {
                  autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Give Coins',
                showLoaderOnConfirm: false,
            })
            this.RconAction('givecoins ' + this.$route.params.id + ' ' + coins.value);
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        },
        async SetAdmin() {
            let adminLvl = await Swal.fire({
                title: 'Admin Level',
                input: 'text',
                inputAttributes: {
                  autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Set Admin Level',
                showLoaderOnConfirm: false,
            });
            if (adminLvl.value >= 0) {
                this.RconAction("setadmin " + this.$route.params.id + " " + adminLvl.value)
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        },
        // Paginations
        CurrentPagePlus() {
            if (this.CurrentPage < this.Pages.length) {
                this.CurrentPage++;
            }
        },
        CurrentPageMinus() {
            if (this.CurrentPage != 1) {
                this.CurrentPage--;
            }
        },
        setPages(pages) {
            let numberOfPages = Math.ceil(pages.length / this.PaginateRange);
            for (let index = 1; index <= numberOfPages; index++) {
				this.Pages.push(index);
			}
        },
        paginate (posts) {
			let page = this.CurrentPage;
			let perPage = this.PaginateRange;
			let from = (page * perPage) - perPage;
			let to = (page * perPage);
			return  posts.slice(from, to);
		},

    },
    computed: {
		PlayerHistory() {
			return this.paginate(this.userHistory).sort((x, y) => +new Date(y.time) - +new Date(x.time));
		},
        PunishLog() {
            return this.paginate(this.userPunishLog).sort((x, y) => +new Date(y.time) - +new Date(x.time));
        },
        LogsData() {
            return this.paginate(this.UserLogs).sort((x, y) => +new Date(y.time) - +new Date(x.time));
        },
        GetSelectedPage() {
            return this.CurrentPage;
        },
        HoursPlayed() {
            let hours = this.userData['hoursPlayed'];
            return hours.toFixed(2);
        },
        GetUserCharacterName() {
            if (this.userData['userIdentity'] != null) {
                return this.userData['userIdentity']['firstName'] + ' ' + this.userData['userIdentity']['secondName'];
            } else {
                return 'Necunoscut'
            }
        },
        GetUserAge() {
            if (this.userData['userIdentity']) {
                return this.userData['userIdentity']['age'];
            } else {
                return '18'
            }
        },
        BankMoney() {
            const moneyFormat = new Intl.NumberFormat("us-US", {style: 'currency', currency: "USD", maximumFractionDigits: 0, minimumFractionDigits: 0});
            return moneyFormat.format(this.userData['userMoney']['bankMoney']);
        },
        CashMoney() {
            const moneyFormat = new Intl.NumberFormat("us-US", {style: 'currency', currency: "USD", maximumFractionDigits: 0, minimumFractionDigits: 0});
            return moneyFormat.format(this.userData['userMoney']['walletMoney']);
        },
    },
    async created() {
        let loader = this.$loading.show({
            container: this.fullPage ? null : this.$refs.formContainer,
            canCancel: false,
			backgroundColor: '#00000090',
			transition: 'fade',
			enforceFocus: true,
			opacity: 0.6,
			loader: 'dots',
			color: '#0098ff',
        });
        setTimeout(() => {
            loader.hide()
        }, 2000)

        this.CanSeeProfileInfo();
        this.hasUserAdmin();

        let user = await this.$axios.get('https://fairplay-rp.ro/api/user/' + this.$route.params.id)
        this.userData = user.data;
        let punish = await this.$axios.get('https://fairplay-rp.ro/api/userpunishlog/' + this.$route.params.id)
        this.userPunishLog = punish.data;
        let history = await this.$axios.get('https://fairplay-rp.ro/api/userhistory/' + this.$route.params.id)
        this.userHistory = history.data;
        let vehs = await this.$axios.get('https://fairplay-rp.ro/api/uservehicles/' + this.$route.params.id)
        this.userVehicles = vehs.data;

        this.VerifyUserBan() // Check if user is banned
        this.GetUserTag() // Get user tag
    },
}
</script>

<style lang="css">
@import url('https://fonts.cdnfonts.com/css/pf-dindisplay-pro');

profile-page {
    width: 100%;
    height: 100%;
    position: relative;
    transition: var(--tran-05);

    display: inline-flex;
    justify-content: left;
    align-items: left;
}

.profile-container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1vw;
	padding: 1vh 5vh;
}

.profile-container .profile-wrapper {
    margin-top: 4rem;
    display: inline-flex;
    gap: 1vw;
    justify-content: left;
    align-items: left;
}

.profile-wrapper-2 {
    width: 50vh;
    min-height: 60vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 1vw;
}

.ban-container {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: 1vw;

    border-radius: .25vw;
    background-color: var(--panel-color);
    width: 50vh;
    height: 32vh;
}

.ban-container .ban-header {
    display: inline-flex;
    justify-content: left;
    align-items: center;
    gap: 1vh;
    height: 5vh;
    background-color: var(--panel-accent-color);
    text-transform: uppercase;
    color: white;
}

.ban-container .ban-header .icon {
    margin-left: 1vw;
    color: rgb(212, 58, 58);
}

.ban-container .ban-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1vw;
}

.ban-container .ban-data  .ban-hr {
    width: 100%;
    height: 1px;
    background-color: #ffffff10;
}

.ban-container .ban-data .ban-content {
    display: inline-flex;
    justify-content: space-between;
    gap: 1vh;
    width: 80%;
}

.ban-container .ban-data .ban-content.reason {
    margin-left: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 1vh;
    width: 100%;
}

.ban-container .ban-content .ban-content-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 19vh;
}

.ban-container .ban-content .ban-content-item .icon.canpay {
    color: rgb(35, 145, 35);
}

.ban-container .ban-content .ban-content-item .icon.cantpay {
    color: rgb(212, 58, 58);
}

.ban-container .ban-content .ban-content-item h1 {
    font-size: .9rem;
    color: #ffffff70
}

.ban-container .ban-content .ban-content-item p {
    font-size: .9rem;
    color: #ffffff50
}

.profile {
    width: 50vh;
    height: 60vh;
    padding: 2vh 2.5vh;
    background-color: var(--panel-color);
    border-radius: .50vw;

    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: 2vh;
}

.profile .profile-header-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
}

.profile .profile-header-wrapper .profile-header {
    display: inline-flex;
    justify-content: left;
    align-items: center;
    gap: 0.6vw;
}

.profile .profile-header-wrapper .profile-hr {
    margin-top: 2vh;
    opacity: .25;
    width: 100%;
    height: 0.2vh;

    border-radius: 0.25vw;
    background-color: var(--panel-border-color);
}

.profile .profile-header-wrapper .profile-header .profile-header-data {
    display: inline-flex;
    flex-direction: column;
    justify-content: left;
    align-items: left; 

    max-width: 100%;
    max-height: 100%;
}

.profile .profile-header-wrapper .profile-header .icon {
    margin-top: .3vh;
    width: 4.8vh;
    height: 4.8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.40vw;
    background-color: var(--panel-accent-color);

    color: #5DA7DB;
}

.profile .profile-header-wrapper .profile-header .profile-header-data {
    display: flex;
    justify-content: left;
    align-items: left;

    flex-direction: column;
}

.profile .profile-header-wrapper .profile-header .profile-header-data h1{
    font-size: 1.1rem;
    color: var(--text-color);
    font-family: 'Poppins';
}

.profile .profile-header-wrapper .profile-header .profile-header-data p{
    font-size: .6rem;
    color: var(--text-color);
    opacity: .7;
    font-family: 'Poppins';
    
}

.profile .profile-info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1vw;
}

.profile .profile-info-wrapper .profile-hr {
    opacity: .25;
    width: 100%;
    height: 0.2vh;

    border-radius: 0.25vw;
    background-color: var(--panel-border-color);
}

.profile .profile-info-wrapper .profile-info {
    display: inline-flex;
    gap: .8vw;
    justify-content: left;
    align-items: center;
}

.profile .profile-info-wrapper .profile-info .profile-image {
    width: 7.5vh;
    height: 7.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.50vw;
    background-color: var(--panel-accent-color);

    font-size: 3.2vh;
    color: rgba(255, 255, 255, 0.699);
}

.profile .profile-info-wrapper .profile-info .profile-info-data h1 {
    font-size: 1.1rem;
    color: var(--text-color);
    font-family: 'Poppins';
}

.profile .profile-info-wrapper .profile-info .profile-info-data p {
    font-size: .65rem;
    color: var(--text-color);
    opacity: .7;
    font-family: 'Poppins';
}

.profile .profile-data {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2vh;
}

.profile .profile-data .profile-data-item p{
    font-family: 'Poppins';
    font-size: .6rem;
    color: var(--text-color);
    opacity: .7;
}

.profile .profile-data .profile-data-item h1{
    font-family: 'Poppins';
    font-size: 0.9rem;
    color: var(--text-color);
}

.profile-actions-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1vw;
}

.profile-actions-wrapper .profile-actions-navbar {
    padding: 1.5vh  2.5vh;
    width: 95vh;
    height: 7vh;
    background-color: var(--panel-color);
    border-radius: .50vw;

    display: inline-flex;
    justify-content: left;
    align-items: left;
    gap: .5vw;
}

.profile-actions-wrapper .profile-actions-navbar .navbar-button {
    padding: 1vh 2vh;
    background-color: var(--panel-accent-color);
    border-radius: .40vw;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .65vw;
    color: #ffffffc2;
    font-family: 'Poppins';
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    transition: 1s all;
}

.profile-actions-wrapper .profile-actions-navbar .navbar-button:hover {
    user-select: none;
    background-color: var(--panel-accent-color-hover);
    transition: 1s all;
}

/** Profile History Info */

.profile-actions-wrapper .profile-actions-history {
    width: 95vh;
    height: 65vh;
    background-color: var(--panel-color);
    border-radius: .50vw;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: .8vw;
}

.profile-actions-wrapper .profile-actions-history .profile-history-header h1 {
    font-family: 'Poppins';
    font-size: 1.2rem;
    color: var(--text-color);
}

.profile-actions-wrapper .profile-actions-history .profile-history-header p {
    font-family: 'Poppins';
    font-size: .7rem;
    color: var(--text-color);
    opacity: .7;
}

.profile-actions-wrapper .profile-actions-history .actions-hr {
    opacity: .25;
    width: 100%;
    height: 0.2vh;

    border-radius: 0.25vw;
    background-color: var(--panel-border-color);
}

.profile-actions-wrapper .profile-actions-history .panel-actions-history-data {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: 1vw;
    height: 60vh;
}

.profile-actions-wrapper .profile-actions-history .panel-actions-history-data .panel-actions-history-box {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    gap: 1vw;
    padding: 1vh 2vh;

    border: 1px solid var(--panel-history-border);
    border-radius: .25vw;
}

.profile-actions-wrapper .profile-actions-history .panel-actions-history-data .panel-actions-history-box .box-info {
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 1vw;
}

.profile-actions-wrapper .profile-actions-history .panel-actions-history-data .panel-actions-history-box .box-info .status {
    width: 3vh;
    height: 3vh;
    border-radius: 0.25vw;
    color: white;
    background-color: rgb(87, 197, 87);

    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-actions-wrapper .profile-actions-history .panel-actions-history-data .panel-actions-history-box .box-info .status.uninvite {
    background-color: rgb(241, 77, 77);
}

.profile-actions-wrapper .profile-actions-history .panel-actions-history-data .panel-actions-history-box .box-info .status.removeadmin {
    background-color: rgb(241, 77, 77);
}

.profile-actions-wrapper .profile-actions-history .panel-actions-history-data .panel-actions-history-box .box-info .status.setadmin {
    background-color: #2a85ff;
}

.profile-actions-wrapper .profile-actions-history .panel-actions-history-data .panel-actions-history-box .box-info .history-data h1 {
    font-family: 'Poppins';
    font-size: 0.9rem;
    color: var(--text-color);
}

.profile-actions-wrapper .profile-actions-history .panel-actions-history-data .panel-actions-history-box .box-info .history-data p {
    font-family: 'Poppins';
    font-size: .7rem;
    color: var(--text-color);
    opacity: .7;
}

.profile-actions-wrapper .profile-actions-history .panel-actions-history-data .panel-actions-history-box .history-time {
    font-family: 'Poppins';
    font-size: .8rem;
    color: var(--text-color);
    opacity: .7;
}

/** Profile Vehicles Info */

.profile-actions-wrapper .profile-actions-vehicles {
    width: 95vh;
    height: 65vh;
    background-color: var(--panel-color);
    border-radius: .50vw;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: .8vw;
}

.profile-actions-wrapper .profile-actions-vehicles .profile-history-header h1 {
    font-family: 'Poppins';
    font-size: 1.2rem;
    color: var(--text-color);
}

.profile-actions-wrapper .profile-actions-vehicles .profile-history-header p {
    font-family: 'Poppins';
    font-size: .7rem;
    color: var(--text-color);
    opacity: .7;
}

.profile-actions-wrapper .profile-actions-vehicles .actions-hr {
    opacity: .25;
    width: 100%;
    height: 0.2vh;

    border-radius: 0.25vw;
    background-color: var(--panel-border-color);
}

.profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: 1vw;
    min-height: 75%;
    max-height: 85%;
    padding: 1rem;
    overflow-y: scroll;
    overflow-x: hidden;
}

.profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  .profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0,0,0,0.1);
  }
  .profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background: rgba(0,0,0,0.2);
  }
  .profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper::-webkit-scrollbar-thumb:hover{
  	background: rgba(0,0,0,0.4);
  }
  .profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper::-webkit-scrollbar-thumb:active{
  	background: rgba(0,0,0,.9);
  }
  

.profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper .profile-actions-vehicles-box {
    width: 100%;
    padding: 1.5vh;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;

    border: 2px solid var(--panel-vehicle-border);
    border-radius: .25vw;
}

.profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper .profile-actions-vehicles-box .vehicle-info {
    margin-left: 1.5rem;
    display: inline-flex;
    gap: 1vw;
    justify-content: center;
    align-items: center;
}

.profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper .profile-actions-vehicles-box .vehicle-info .vehicle {
    color: white;
    opacity: .7;
}

.profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper .profile-actions-vehicles-box .vehicle-info h1 {
    font-family: 'Poppins';
    font-size: .8rem;
    color: var(--text-color);
    text-transform: uppercase;
}

.profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper .profile-actions-vehicles-box .vehicle-status {
    display: inline-flex;
    gap: 1vw;

    margin-right: 1rem;
    color: white;
}
.profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper .profile-actions-vehicles-box .vehicle-status .premium {
    color: yellow;
}

.profile-actions-wrapper .profile-actions-vehicles .profile-actions-vehicles-wrapper .profile-actions-vehicles-box .vehicle-status .tunning {
    color: rgb(247, 250, 252);
}

/** Profile Punish Log */

.profile-actions-wrapper .profile-actions-punishlog {
    width: 95vh;
    height: 65vh;
    background-color: var(--panel-color);
    border-radius: .50vw;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: .8vw;
}

.profile-actions-wrapper .profile-actions-punishlog .actions-hr {
    opacity: .25;
    width: 100%;
    height: 0.2vh;

    border-radius: 0.25vw;
    background-color: var(--panel-border-color);
}

.profile-actions-wrapper .profile-actions-punishlog .profile-punishlog-header h1 {
    font-family: 'Poppins';
    font-size: 1.2rem;
    color: var(--text-color);
}

.profile-actions-wrapper .profile-actions-punishlog .profile-punishlog-header p {
    font-family: 'Poppins';
    font-size: .7rem;
    color: var(--text-color);
    opacity: .7;
}


.profile-actions-wrapper .profile-actions-punishlog .panel-actions-punishlog-data {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: 1vw;
    height: 60vh;
}

.profile-actions-wrapper .profile-actions-punishlog .panel-actions-punishlog-data .panel-actions-punishlog-box {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    gap: 1vw;
    padding: 1vh 2vh;

    border: 1px solid var(--panel-history-border);
    border-radius: .25vw;
}

.profile-actions-wrapper .profile-actions-punishlog .panel-actions-punishlog-data .panel-actions-punishlog-box .box-info {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
}

.profile-actions-wrapper .profile-actions-punishlog .panel-actions-punishlog-data .panel-actions-punishlog-box .box-info .punishlog-data h1{
    font-family: 'Poppins';
    font-size: 0.9rem;
    color: var(--text-color);
}

.profile-actions-wrapper .profile-actions-punishlog .panel-actions-punishlog-data .panel-actions-punishlog-box .box-info .punishlog-data p {
    font-family: 'Poppins';
    font-size: .7rem;
    color: var(--text-color);
    opacity: .7;
}

.profile-actions-wrapper .profile-actions-punishlog .panel-actions-punishlog-data .panel-actions-punishlog-box .box-info .status{
    width: 3vh;
    height: 3vh;
    border-radius: 0.25vw;
    color: white;
    background-color: rgb(87, 197, 87);

    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-actions-wrapper .profile-actions-punishlog .panel-actions-punishlog-data .panel-actions-punishlog-box .box-info .status.ban {
    background-color: rgb(248, 77, 77);
    color: white;
}

.profile-actions-wrapper .profile-actions-punishlog .panel-actions-punishlog-data .panel-actions-punishlog-box .box-info .status.banPermanent {
    background-color: rgb(245, 26, 26);
    color: white;
}

.profile-actions-wrapper .profile-actions-punishlog .panel-actions-punishlog-data .panel-actions-punishlog-box .box-info .status.warn {
    background-color: rgb(206, 190, 46);
    color: white;
}

.profile-actions-wrapper .profile-actions-punishlog .panel-actions-punishlog-data .panel-actions-punishlog-box .box-info .status.unwarn {
    background-color: rgb(228, 67, 38);
    color: white;
}

.profile-actions-wrapper .profile-actions-punishlog .panel-actions-punishlog-data .panel-actions-punishlog-box .box-info .status.jail {
    background-color: rgb(46, 147, 206);
    color: white;
}

.profile-actions-wrapper .profile-actions-punishlog .panel-actions-punishlog-data .panel-actions-punishlog-box .punishlog-time {
    font-family: 'Poppins';
    font-size: .8rem;
    color: var(--text-color);
    opacity: .7;
}

/** User Logs */

.profile-actions-wrapper .profile-actions-logs {
    width: 95vh;
    height: 65vh;
    background-color: var(--panel-color);
    border-radius: .50vw;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: .8vw;
}

.profile-actions-wrapper .profile-actions-logs .profile-actions-logs-headers {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}

.profile-actions-wrapper .profile-actions-logs .profile-actions-logs-headers .header-info h1 {
    font-family: 'Poppins';
    font-size: 1.2rem;
    color: var(--text-color);
}

.profile-actions-wrapper .profile-actions-logs .profile-actions-logs-headers .header-info p {
    font-family: 'Poppins';
    font-size: .7rem;
    color: var(--text-color);
    opacity: .7;
}

.profile-actions-wrapper .profile-actions-logs .profile-actions-logs-headers .submenu-button {
    margin-right: 1vh;
    margin-top: 1vhn;
    color: var(--text-color);
    font-family: 'Poppins';
    font-size: 1.2rem;
    display: flex;
    justify-content: right;
    align-items: right;
    transition: 1s all;
    user-select: none;
}

.profile-actions-wrapper .profile-actions-logs .submenu {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: var(--panel-accent-color);
    width: 27vh;
    border-radius: .50vw;
    height: 41.5vh;
    overflow-y: scroll;
    overflow-x: hidden;
}

.profile-actions-wrapper .profile-actions-logs .submenu::-webkit-scrollbar {
    display: none;
  }

.profile-actions-wrapper .profile-actions-logs .submenu .submenu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;

    border-top: 1px solid var(--panel-history-border);
    background-color: var(--panel-accent-color);
    height: 6vh;
    padding: 1.1vh;
    border-radius: .50vw;
    color: white;
    transition: 1s all;
}

.profile-actions-wrapper .profile-actions-logs .submenu .submenu-item .submenu-item-data {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1vw;
}

.profile-actions-wrapper .profile-actions-logs .submenu .submenu-item .submenu-item-category {
    width: 100%;
    display: flex;
    gap: 1vw;
    justify-content: center;
    align-items: center;

    font-family: 'Poppins';
    font-size: .8rem;
    text-transform: uppercase;
    color: var(--text-color);
    opacity: 1;
}

.profile-actions-wrapper .profile-actions-logs .submenu .submenu-item .submenu-item-data .data {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: .5vw;
}

.profile-actions-wrapper .profile-actions-logs .submenu .submenu-item .data p {
    font-family: 'Poppins';
    font-size: .8rem;
    color: var(--text-color);
    opacity: .9;
}

.profile-actions-wrapper .profile-actions-logs .submenu .submenu-item:hover {
    background-color: var(--panel-accent-color-hover);
    transition: 1s all;
}

.profile-actions-wrapper .profile-actions-logs .actions-hr {
    width: 100%;
    height: 1px;
    background-color: var(--panel-history-border);
    margin-top: 1vh;
}

.profile-actions-wrapper .profile-actions-logs .profile-actions-logs-data {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: .8vw;
    height: 60vh;
}


.profile-actions-wrapper .profile-actions-logs .profile-actions-logs-data .profile-actions-logs-box {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    gap: 1vw;
    padding: 1vh 2vh;

    border: 1px solid var(--panel-history-border);
    border-radius: .25vw;
}

.profile-actions-wrapper .profile-actions-logs .profile-actions-logs-data .profile-actions-logs-box .box-info {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
}

.profile-actions-wrapper .profile-actions-logs .profile-actions-logs-data .profile-actions-logs-box .box-info h1{
    font-family: 'Poppins';
    font-size: 0.9rem;
    color: var(--text-color);
}

.profile-actions-wrapper .profile-actions-logs .profile-actions-logs-data .profile-actions-logs-box .box-info p {
    font-family: 'Poppins';
    font-size: .7rem;
    color: var(--text-color);
    opacity: .7;
}

.profile-actions-wrapper .profile-actions-logs .profile-actions-logs-data .profile-actions-logs-box .box-info .status{
    width: 3vh;
    height: 3vh;
    border-radius: 0.25vw;
    color: white;
    background-color: rgb(87, 197, 87);

    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-actions-wrapper .profile-actions-logs .profile-actions-logs-data .profile-actions-logs-box .logs-time {
    font-family: 'Poppins';
    font-size: .8rem;
    color: var(--text-color);
}

/** Admin Actions */


.profile-actions-wrapper .profile-actions-admin {
    width: 95vh;
    height: 65vh;
    background-color: var(--panel-color);
    border-radius: .50vw;
    padding: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: .8vw;
}

.profile-actions-wrapper .profile-actions-admin .profile-actions-admin-header h1 {
    font-family: 'Poppins';
    font-size: 1.2rem;
    color: var(--text-color);
}

.profile-actions-wrapper .profile-actions-admin .profile-actions-admin-header p {
    font-family: 'Poppins';
    font-size: .7rem;
    color: var(--text-color);
    opacity: .7;
}

.profile-actions-wrapper .profile-actions-admin .actions-hr {
    width: 100%;
    height: 1px;
    background-color: var(--panel-history-border);
    margin-top: 1vh;
}

.profile-actions-wrapper .profile-actions-admin .profile-actions-admin-data {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: .8vw;
    height: 60vh;
}

.profile-actions-wrapper .profile-actions-admin .profile-actions-admin-data .profile-actions-admin-box {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 1vh 2vh;
	font-family: 'Proxima Nova', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    border-radius: .10vw;
    transition: 1s all;
    background-color: #202020;
    border: 2px solid #ffffff30;
    user-select: none;
}

.profile-actions-wrapper .profile-actions-admin .profile-actions-admin-data .profile-actions-admin-box:hover {
    background-color: #1d1d1d;
    transition: 1s all;
}

.profile-actions-wrapper .profile-actions-admin .profile-actions-admin-data .profile-actions-admin-box .admin-data {
    margin-left: 6vh;
    width:25%;
    display: inline-flex;
    justify-content: left;
    align-items: left;
    gap: .5vw;
}


.profile-actions-wrapper .profile-actions-admin .profile-actions-admin-data .profile-actions-admin-box.bans {
    color: rgb(211, 52, 52);
}

.profile-actions-wrapper .profile-actions-admin .profile-actions-admin-data .profile-actions-admin-box.setadmin {
    color: rgb(52, 126, 211);
}

.profile-actions-wrapper .profile-actions-admin .profile-actions-admin-data .profile-actions-admin-box.money {
    color: green;
}

.profile-actions-wrapper .profile-actions-admin .profile-actions-admin-data .profile-actions-admin-box.kick {
    color: rgb(160, 160, 25);
}

.profile-actions-wrapper .profile-actions-admin .profile-actions-admin-data .profile-actions-admin-box.coins {
    color: rgb(38, 163, 136);
}

.profile-actions-wrapper .profile-actions-admin .profile-actions-admin-data .profile-actions-admin-box.unban {
    color: rgb(255, 0, 0);
}


/** Profile Pagination */

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .60vw;
    margin-left: 85%;
}

.pagination .page-selected {
    font-family: 'Poppins';
    font-size: 1rem;
    color: var(--pagination-accent-color);
    width: 3vh;
    height: 3vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--pagination-accent-color);
    border-radius: .25vw;
}

.pagination .page-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--panel-history-border);

    border-radius: .25vw;
    width: 3vh;
    height: 3vh;

}

.pagination .page-button .icon {
    color: var(--pagination-text-color);
    font-size: .8rem;
}

.pagination .page-button:hover {
  background-color: #2988c8;
}

</style>