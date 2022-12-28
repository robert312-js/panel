<template>
    <div class="dashboard">
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
                        <div class="navbar-button" @click="SelectInfoCurrentPage(2)" v-if="canSeeUserInfo">
                            <fa icon="fa-solid fa-clock-rotate-left" />
                            <p>Istoric</p>
                        </div>
                        <div class="navbar-button" @click="SelectInfoCurrentPage(3)" v-if="canSeeUserInfo">
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
                        <div class="navbar-button" @click="SelectInfoCurrentPage(6)" v-if="IsUserAdmin >= 1">
                            <fa icon="fa-solid fa-list" />
                            <p>Inventar</p>
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
                                    <div class="chest-button" v-if="IsUserAdmin >= 3" @click="GetVehicleChest(data.vehicle, 'chest')">
                                        <fa icon="fa-solid fa-box" />
                                    </div>
                                    <div class="glove-chest"  v-if="IsUserAdmin >= 3" @click="GetVehicleChest(data.vehicle, 'glove_chest')">
                                        <fa icon="fa-solid fa-box-open" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div class="profile-actions-history" v-if="InfoCurrentPage == 2">
                        <div class="profile-history-header">
                            <h1>Istoric</h1>
                            <p>Vizualizezi tot istoricul pe care Robert l-a avut pe acest server</p>
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
                                <div class="logs-time">{{GetDate(data.time)}}</div>
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
    
                            <div class="profile-actions-admin-box setadmin" @click="SetAdmin()" v-if="IsUserAdmin >= 5">
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
    
                            <div class="profile-actions-admin-box money" @click="GiveMoney()" v-if="IsUserAdmin >= 5">
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
                    <div class="profile-actions-inventory" v-if="InfoCurrentPage == 6">
                        <div class="profile-inventory-header">
                            <h1>Inventory Data</h1>
                            <p>Vizualizezi toate itemele pe care {{userData['username']}} le detine.</p>
                        </div>
                        <div class="actions-hr"></div>

                        <div class="inventory-data">
                            <table class="styled-table">
                                <thead>
                                    <tr>
                                        <th>Item Key</th>
                                        <th>Cantitate Detinute</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(data, index) in GetUserItems">
                                        <td>{{data.name}}</td>
                                        <td>{{data.amount}}</td>
                                        <td>
                                            <div class="delete-button" @click="DeletePlayerItem(data.name, data.amount)">
                                                <fa icon="fa-solid fa-trash" />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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

                </div>
            </div>
        </div>
    </div>
    
    <div class="prompt-layout" style="display:none;">
        <div class="prompt-menu">
            <div class="head-texts">
                <h1>PROMPT MENU</h1>
                <span>{{promptData.title}}</span>
            </div>

            <div class="input-fields">
                <div class="field" v-for="(item, index) in promptData.fields">
                    <strong>{{item.title}}</strong>
                    <input v-model="item.text" placeholder="Raspunsul tau">
                </div>
            </div>
            <div class="confirm-prompt" id="prompt-button">
                <p>CONFIRMARE</p>
            </div>
        </div>
    </div>

    <div class="vehicle-prompt-wrapper" style="display:none;">
        <div class="vehicle-prompt">
            <div class="profile-inventory-header">
                <div class="header-texts">
                    <h1>Vehicle inventory data: {{OpenedVehiclesData.vehicle}}</h1>
                    <p>Vizualizezi toate itemele pe care {{userData['username']}} le detine.</p>
                </div>
                <div class="close-button">
                    <fa icon="fa-solid fa-times" @click="CloseVehiclePrompt()" />
                </div>
            </div>
            <div class="actions-hr"></div>

            <div class="inventory-data">
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Item Key</th>
                            <th>Cantitate Detinute</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(data, index) in VehChestData">
                            <td>{{index}}</td>
                            <td>{{data.amount}}</td>
                            <td>
                                <div class="delete-button">
                                    <fa icon="fa-solid fa-trash" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script src="./profile.js"></script>

<style lang="css">
@import url('https://fonts.cdnfonts.com/css/pf-dindisplay-pro');

.profile-container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1vw;
	padding: 1vh 5vh;
    user-select: none;
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

/** Profile Inventory Data */

.profile-actions-wrapper .profile-actions-inventory {
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

.profile-actions-wrapper .profile-actions-inventory .profile-inventory-header h1 {
    font-family: 'Poppins';
    font-size: 1.2rem;
    color: var(--text-color);
}

.profile-actions-wrapper .profile-actions-inventory .profile-inventory-header p {
    font-family: 'Poppins';
    font-size: .7rem;
    color: var(--text-color);
    opacity: .7;
}

.profile-actions-wrapper .profile-actions-inventory .actions-hr {
    opacity: .25;
    width: 100%;
    height: 0.2vh;
    border-radius: 0.25vw;
    background-color: var(--panel-border-color);
}

.profile-actions-wrapper .profile-actions-inventory .inventory-data {
    height: 100%;
    width: 100%;
}

.profile-actions-wrapper .profile-actions-inventory .inventory-data .styled-table {
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 100%;
	border-collapse: collapse;
}

.profile-actions-wrapper .profile-actions-inventory .inventory-data .styled-table thead {
	color: var(--text-color);
	text-align: left;
}

.styled-table thead tr {
    color: #ffffff;
    text-align: left;
}

.profile-actions-wrapper .profile-actions-inventory .inventory-data .styled-table th,
.profile-actions-wrapper .profile-actions-inventory .inventory-data .styled-table td {
    padding: 12px 20px;
}

.profile-actions-wrapper .profile-actions-inventory .inventory-data .styled-table td {
	padding: 2vh 2vh;
	color: white; 
}

.styled-table tbody td .delete-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .55vw;
    color: #ffffffc2;
    font-size: 1.7vh;
    font-weight: 600;
    transition: 1s all;
}

.styled-table tbody td .delete-button:hover {
    opacity: .5;
}

.profile-actions-wrapper .profile-actions-inventory .inventory-data .styled-table tbody tr {
    border-bottom: 1px solid #dddddd20;
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
    user-select: none;
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
.prompt-layout {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: .9;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
}

.prompt-layout>.prompt-menu {
    width: 50.5vh;
    padding: 1vh;
    padding-bottom: 5.5vh;
    font-family: "Akrobat";
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1vh;    
    background-color: #1a1d1f;
    border-radius: .50vw;
    border: 1px solid #ffffff30;
}

.prompt-layout>.prompt-menu>.head-texts {
    display: flex;
    flex-direction: column;
    gap: .15vh;
    justify-content: center;
    align-items: center;
    color: #FFF;
}

.prompt-layout>.prompt-menu>.head-texts>h1 {
    margin-top: 4vh;
    font-style: normal;
    font-weight: 700;
    font-size: 3.95vh;
    line-height: 120%;
    text-align: left;
    text-transform: uppercase;
    color: #FFF
}

.prompt-layout>.prompt-menu>.head-texts>span {
    font-family: 'Akrobat';
    font-style: normal;
    font-weight: 700;
    font-size: 1.9vh;
    line-height: 120%;
    text-transform: uppercase;
    color: #FFDE2A;
    text-align: left;
    letter-spacing: 1vh
}

.prompt-layout>.prompt-menu>.input-fields {
    display: flex;
    flex-direction: column;
    justify-self: center;
    padding: 2vh 0;
    align-self: center;
    margin-top: 5%;
    width: 85%;
    gap: .15vh;
    color: #FFFFFF90;
}

.prompt-layout>.prompt-menu>.input-fields>.field {
    width: 100%;
    padding: 1vh;
    display: flex;
    flex-direction: column;
    gap: 1vh
}

.prompt-layout>.prompt-menu>.input-fields>.field>strong {
    font-size: 1.35em;
    text-transform: uppercase
}

.prompt-layout>.prompt-menu>.input-fields>.field>input {
    background: rgba(255, 255, 255, 0.08);
    border-radius: .7vh;
    outline: none;
    border: none;
    color: #fff;
    text-align: center;
    width: 100%;
    height: 7.4vh;
    padding: 0 .85vw;
    font-family: "Akrobat";
    letter-spacing: .15vh;
    font-size: 1.15em
}

.prompt-layout>.prompt-menu>.input-fields>.field>input::placeholder {
    text-transform: uppercase;
    font-family: "Akrobat";
    letter-spacing: .25vh;
    font-size: 1.05em
}

.prompt-layout>.prompt-menu>.confirm-prompt {
    width: 29vh;
    height: 8vh;
    background: #292d2f;
    border-radius: .5vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
    margin-top: 5%;
    color: #ffffff80;
}

.prompt-layout>.prompt-menu>.confirm-prompt>p {
    font-size: 1.85em;
    font-weight: 700;
    letter-spacing: .25vh
}

.prompt-layout>.prompt-menu>.confirm-prompt:hover {
    transform: scale(95%);
    opacity: .75
}

.vehicle-prompt-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
}

.vehicle-prompt-wrapper .vehicle-prompt {
    width: 120.5vh;
    height: 80.5vh;
    padding: 1.5rem;
    font-family: "Akrobat";
    background-color: #1a1d1f;
    border-radius: .50vw;
    border: 1px solid #ffffff30;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    gap: .8vw;
}

.vehicle-prompt-wrapper .vehicle-prompt .profile-inventory-header {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}

.vehicle-prompt-wrapper .vehicle-prompt .profile-inventory-header .close-button {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: .50vw;
    background-color: #292d2f;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #ffffff80;
}

.vehicle-prompt-wrapper .vehicle-prompt .profile-inventory-header .close-button:hover {
    opacity: .7;
}

.vehicle-prompt-wrapper .vehicle-prompt .profile-inventory-header .header-texts h1 {
    font-family: 'Poppins';
    font-size: 1.2rem;
    color: var(--text-color);
}

.vehicle-prompt-wrapper .vehicle-prompt .profile-inventory-header .header-texts p {
    font-family: 'Poppins';
    font-size: .7rem;
    color: var(--text-color);
    opacity: .7;
}

.vehicle-prompt-wrapper .vehicle-prompt  .actions-hr{
    opacity: .25;
    width: 100%;
    height: 0.2vh;
    border-radius: 0.25vw;
    background-color: var(--panel-border-color);
}

.vehicle-prompt-wrapper .vehicle-prompt .inventory-data{
    height: 100%;
    width: 100%;
    overflow: scroll;
    overflow-x: hidden;
}

.vehicle-prompt-wrapper .vehicle-prompt .inventory-data::-webkit-scrollbar {
   width: 6px;
   height: 6px;
 }
 .vehicle-prompt-wrapper .vehicle-prompt .inventory-data::-webkit-scrollbar-track {
   border-radius: 10px;
   background: rgba(0,0,0,0.1);
 }
 .vehicle-prompt-wrapper .vehicle-prompt .inventory-data::-webkit-scrollbar-thumb{
   border-radius: 10px;
   background: rgba(0,0,0,0.2);
 }
 .vehicle-prompt-wrapper .vehicle-prompt .inventory-data::-webkit-scrollbar-thumb:hover{
 	background: rgba(0,0,0,0.4);
 }
 .vehicle-prompt-wrapper .vehicle-prompt .inventory-data::-webkit-scrollbar-thumb:active{
 	background: rgba(0,0,0,.9);
 }

.vehicle-prompt-wrapper .vehicle-prompt  .inventory-data .styled-table {
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 100%;
	border-collapse: collapse;
}

.vehicle-prompt-wrapper .vehicle-prompt .inventory-data .styled-table thead {
	color: var(--text-color);
	text-align: left;
}

.vehicle-prompt-wrapper .vehicle-prompt .inventory-data .styled-table thead tr {
    color: #ffffff;
    text-align: left;
}

.vehicle-prompt-wrapper .vehicle-prompt  .inventory-data .styled-table th,
.vehicle-prompt-wrapper .vehicle-prompt  .inventory-data .styled-table td {
    padding: 12px 20px;
}

.vehicle-prompt-wrapper .vehicle-prompt  .inventory-data .styled-table td {
	padding: 2vh 2vh;
	color: white; 
}

.vehicle-prompt-wrapper .vehicle-prompt  .inventory-data .styled-table tbody tr {
    border-bottom: 1px solid #dddddd20;
}

.vehicle-prompt-wrapper .vehicle-prompt  .inventory-data .styled-table tbody td .delete-button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .55vw;
    color: #ffffffc2;
    font-size: 1.7vh;
    font-weight: 600;
    transition: 1s all;
}

.vehicle-prompt-wrapper .vehicle-prompt  .inventory-data .styled-table tbody td .delete-button:hover {
    opacity: .5;
}

</style>