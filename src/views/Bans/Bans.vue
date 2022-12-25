<template>
    
    <div class="dashboard">
        <Bans-Sidebar page="2"/>
            <div class="banlist-content">
                <Bans-Header page="Lista Jucatori Banati"/>
    
                <div class="banlist-members">
                    <div class="banlist-members-header">
                        <div class="icon">
                            <fa icon="fa-solid fa-users" />
                        </div>
                        <div class="header-texts">
                            <h1>Ban List</h1>
                            <p>Vezi lista cu membri banati de pe server.</p>
                        </div>
                    </div>
                    <div class="banlist-hr"></div>
        
                    <div class="banlist-members-data">
                        <table class="banlist-table">
                            <thead>
                                <tr>
                                    <th>Nume</th>
                                    <th>De Catre</th>
                                    <th>Motiv</th>
                                    <th>La data</th>
                                    <th>Data expirării</th>
                                    <th>Drept de Plata</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(data, index) in GetBanlist">
                                    <td>
                                        <div class="banlist-member" @click="GoToProfile(data.id)">
                                            <div class="icon">
                                                <fa icon="fa-solid fa-user" />
                                            </div>
                                            <div class="banlist-member-texts">
                                                <h1>{{ data['username'] }}</h1>
                                                <p>ID: {{ data.id }}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{{data['userBans'].bannedBy}}</td>
                                    <td>{{data['userBans'].banReason}}</td>
                                    <td>{{data['userBans'].bannedDate}}</td>
                                    <td>
                                        <div class="banlist-bantype permanent" v-if="data['userBans'].expireDate == 'never'">
                                            <div class="icon">
                                                <fa icon="fa-solid fa-ban" />
                                            </div>
                                            Permanent
                                        </div>
                                        <div class="banlist-bantype" v-if="data['userBans'].expireDate != 'never'">
                                            {{data['userBans'].expireDate}}
                                        </div>
                                    </td>
                                    <td>
                                        <div class="drept-plata canpay" v-if="data['userBans']['dreptPlata'] == true">
                                            <fa icon="fa-solid fa-circle-check" />
                                        </div>
                                        <div class="drept-plata cantpay" v-if="data['userBans']['dreptPlata'] == false">
                                            <fa icon="fa-solid fa-ban" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
    
                    <div class="pagination">
                        <div class="page-button" @click="PageMinus()">
                            <div class="icon">
                                <fa icon="fa-solid fa-angle-left" />
                            </div>
                        </div>
                        <div class="page-selected"> {{CurrentPage}}</div>
                        <div class="page-button" @click="PagePlus()">
                            <div class="icon">
                                <fa icon="fa-solid fa-chevron-right" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    
    <script src="./bans.js"> </script>
    
    <style lang="css">
    
    .banlist-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1vw;
    
        padding: 1vh 5vh;
    }
    
    .banlist-content  .banlist-members {
        margin-top: 2rem;
        width: 90%;
        height: 80vh;
        background-color: var(--panel-color);
        border-radius: .50vw;
        padding: 1.5rem;
    
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
        gap: .8vw;
    }
    
    .banlist-content  .banlist-members .banlist-members-header {
        display: inline-flex;
        gap: 0.8vw;
        justify-content: left;
        align-items: center;
    }
    
    .banlist-content  .banlist-members .banlist-members-header .icon {
        width: 3.5vh;
        height: 3.5vh;
        padding: 2vh;
        background-color: var(--box-color);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--title-icon-color);
        border-radius: .35vw;
    }
    
    .banlist-content  .banlist-members .banlist-members-header .header-texts h1 {
        font-family: 'Poppins';
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-color);
    }
    
    .banlist-content  .banlist-members .banlist-members-header .header-texts p {
        font-family: 'Poppins';
        font-size: .7rem;
        font-weight: 400;
        opacity: .7;
        color: var(--text-color);
    }
    
    .banlist-content  .banlist-members .banlist-hr {
        opacity: .25;
        width: 100%;
        height: 0.2vh;
    
        border-radius: 0.25vw;
        background-color: var(--panel-border-color);
        margin-top: 1vh;
    }
    
    .banlist-content  .banlist-members .banlist-members-data {
        width: 100%;
        height: 100%;
    }
    
    .banlist-table {
        font-size: 0.9em;
        font-family: sans-serif;
        min-width: 100%;
        border-collapse: collapse;
    }
    
    .banlist-table thead {
        color: var(--text-color);
        text-align: left;
    }
    
    .banlist-table thead tr {
        color: #ffffff;
        text-align: left;
    }
    
    .banlist-table th,
    .banlist-table td {
        padding: 12px 20px;
    }
    
    .banlist-table td {
        padding: 2vh 2vh;
        color: white; 
    }
    
    .banlist-table tbody td .banlist-bantype {
        color: white;
    }


    .banlist-table tbody td .drept-plata {
        width: 10vh;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
    }

    .banlist-table tbody td .drept-plata.canpay {
        color: #14bb14;
    }

    .banlist-table tbody td .drept-plata.cantpay {
        color: #e43a3a;
    }
    

    .banlist-table tbody td .banlist-bantype.permanent  {
        color: rgb(209, 28, 28);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: .5vw;
    }
    
    .banlist-table tbody td .banlist-member {
        display: inline-flex;
        gap: 0.8vw;
        justify-content: center;
        align-items: center;
    }
    
    .banlist-table tbody td .banlist-member .icon {
        width: 3.5vh;
        height: 3.5vh;
        padding: 2vh;
        background-color: var(--box-color);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--title-icon-color);
        border-radius: .35vw;
    }
    
    .banlist-table tbody td .banlist-member .banlist-member-texts h1 {
        font-family: 'Poppins';
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-color);
    }
    
    .banlist-table tbody td .banlist-member .banlist-member-texts p {
        font-family: 'Poppins';
        font-size: .7rem;
        font-weight: 400;
        opacity: .7;
        color: var(--text-color);
    }
    
    .banlist-table tbody tr {
        border-bottom: 1px solid #dddddd20;
    }
    
    /** Pagination */
    
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