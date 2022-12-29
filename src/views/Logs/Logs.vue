<template>
    <div class="dashboard">
        <Logs-Sidebar page="0" />
        <div class="logs-container">
            <Logs-Header page="Logs Dashboard" />

            <div class="server-cards">
                <div class="info-card">
                    <div class="data">
                        <p>Medium User Money</p>
                        <h1>{{MediumMoney}}</h1>
                        <p>Medium Money per User</p>
                    </div>
                    <div class="stats-img">
                        <img src="https://cdn.discordapp.com/attachments/934897156584796201/1057377005156454543/Promote-Growth-Purple.png">
                    </div>
                </div>
                <div class="info-card">
                    <div class="data">
                        <p>Total Money</p>
                        <h1>{{TotalMoney}}</h1>
                        <p>(Bank + Cash)</p>
                    </div>
                    <div class="stats-img">
                        <img src="https://cdn.discordapp.com/attachments/934897156584796201/1057377005156454543/Promote-Growth-Purple.png">
                    </div>
                </div>
                <div class="info-card">
                    <div class="data">
                        <p>Total Cash Money</p>
                        <h1>{{CashMoney}}</h1>
                        <p>Only Cash</p>
                    </div>
                    <div class="stats-img">
                        <img src="https://cdn.discordapp.com/attachments/934897156584796201/1057377005156454543/Promote-Growth-Purple.png">
                    </div>
                </div>
                <div class="info-card">
                    <div class="data">
                        <p>Total Bank</p>
                        <h1>{{BankMoney}}</h1>
                        <p>Only Bank</p>
                    </div>
                    <div class="stats-img">
                        <img src="https://cdn.discordapp.com/attachments/934897156584796201/1057377005156454543/Promote-Growth-Purple.png">
                    </div>
                </div>
            </div>

            <div class="server-data">
                <div class="server-stats-container">
                    <div class="header">
                        <div class="texts">
                            <h1>Cash Flow</h1>
                            <p>Vizualizeaza fluxul numerar de pe server intr-un interval de 12 ore</p>
                        </div>
                    </div>
                    <div class="line"></div>
                    <div class="chart-info">
                        <apexchart width="1200" height="400" type="line" :options="chartOptions" :series="series"></apexchart>
                    </div>
                </div>
                <div class="server-top-players"></div>
            </div>
        </div>
    </div>
</template>

<script src="./script.js"></script>

<style lang="css">
.logs-container {
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

.logs-container .server-cards {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;
}

.logs-container .server-cards .info-card {
    width: 20vw;
    height: 15vh;
    background-color: #1a1d1f;
    border-radius: .50vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1vw;
    padding: 1vh;
}

.logs-container .server-cards .info-card .data {
    margin-left: 1vh;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
}

.logs-container .server-cards .info-card .data p {
    font-size: 1.5vh;
    color: #ffffff80;
}

.logs-container .server-cards .info-card .data h1 {
    font-size: 2.5vh;
    color: #ffffff;
}

.logs-container .server-cards .info-card .stats-img {
    width: 7vw;
    height: 7vh;
}

.logs-container .server-cards .info-card .stats-img img {
    width: 100%;
    height: 100%;
}

.logs-container .server-data {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 1vw;

    width: 92%;
}

.logs-container .server-data .server-stats-container {
    width: 90%;
    height: 55vh;
    background-color: #1a1d1f;
    border-radius: .50vw;
    display: flex;
    flex-direction: column;
    gap: .50vw;
    padding: 1vh;
    overflow: hidden;
}

.logs-container .server-data .server-stats-container .header {
    width: 100%;
    height: 17%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1vh 1vw;
}

.logs-container .server-data .server-stats-container .header .texts h1 {
    font-size: 2vh;
    color: #ffffff;
}

.logs-container .server-data .server-stats-container .header .texts p {
    font-size: 1vh;
    color: #ffffff80;
}

.logs-container .server-data .server-stats-container .line {
    width: 100%;
    height: 1px;
    background-color: #ffffff30;
    border-radius: .50vw;
}

.logs-container .server-data .server-stats-container .chart-info {
    width: 100%;
    height: 75%;
}

.logs-container .server-data .server-top-players {
    width: 24%;
    height: 55vh;
    background-color: #1a1d1f;
    border-radius: .50vw;
}

</style>