<template>
<div class="dashboard">
	<Dashboard-Sidebar page="1" />

	<div class="dashboard-content">
		<Dashboard-Header page="Dashboard" />

		<!-- Server Stats -->
		<div class="boxes">
			<div class="box">
				<div class="box-text">
					<h1>{{IntregistratedUsers}}</h1>
					<p>Jucatori Inregistrati</p>
				</div>
				<div class="box-icon">
					<fa icon="fa-globe" />
				</div>
			</div>
			<div class="box">
				<div class="box-text">
					<h1 id="dashboard-players">0</h1>
					<p>Jucatori Conectati</p>
				</div>
				<div class="box-icon">
					<fa icon="fa-solid fa-square-poll-vertical" />
				</div>
			</div>
			<div class="box">
				<div class="box-text">
					<h1>{{GetVipUsers}}</h1>
					<p>Jucatori VIP</p>
				</div>
				<div class="box-icon">
					<fa icon="fa-solid fa-award" />
				</div>
			</div>
			<div class="box">
				<div class="box-text">
					<h1>{{GetVehiclesNumber}}</h1>
					<p>Vehicule</p>
				</div>
				<div class="box-icon">
					<fa icon="fa-solid fa-car" />
				</div>
			</div>
		</div>

		<div class="dashboard-cards">
			<div class="dashboard-card">
				<div class="card-icon">
					<fa icon="fa-brands fa-discord" />
				</div>
				<div class="card-text">
					<h1>Discord</h1>
					<p>Ai nevoie de ajutor?</p>
					<p>Contacteaza-ne pe Discord!</p>
				</div>
				<div class="card-join-button" @click="OpenLink('https://discord.gg/fairplay')">Alatura-te</div>
			</div>
			<div class="dashboard-card">
				<div class="card-icon regulament">
					<fa icon="fa-solid fa-file-lines" />
				</div>
				<div class="card-text">
					<h1>Regulament</h1>
					<p>Citeste Regulamentul pentru a pastra linistea pe server. </p>
				</div>
				<div class="card-join-button regulament" @click="GoToRules()">Citeste</div>
			</div>
			<div class="dashboard-card">
				<div class="card-icon youtube">
					<fa icon="fa-brands fa-youtube" />
				</div>
				<div class="card-text">
					<h1>Youtube</h1>
					<p class="yt-text">Urmareste-ne activitatea si pe alte platforme!</p>
				</div>
				<div class="card-join-button youtube" @click="OpenLink('https://www.youtube.com/channel/UCWicjZL5bt673R1GTZwjZiQ')">Vizualizeaza</div>
			</div>
		</div>

		<div class="dashboard-boxes">
			<div class="recent-actions">
				<div class="recent-actions-header">
					<div class="icon">
						<fa icon="fa-solid fa-users" />
					</div>
					<div class="header-text">
						<h1>Actiuni Recente</h1>
						<p>Vezi cele mai recente actiuni de pe server</p>
					</div>
				</div>
				<div class="dashboard-hr"></div>
				<div class="recent-actions-data">
					<div class="recent-actions-box" v-for="(data, index) in RecentActions">
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
								<h1>{{GetActionName(data.user_id)}}</h1>
								<p>{{data.text}}</p>
							</div>
						</div>
						<div class="history-time">{{GetDate(data.time)}}</div>
					</div>
				</div>
			</div>

			<div class="top-players">
				<div class="top-players-header">
					<div class="icon">
						<fa icon="fa-solid fa-users" />
					</div>
					<div class="header-text">
						<h1>Top Jucatori</h1>
						<p>Vezi topul jucatorilor de pe server</p>
					</div>
				</div>
				<div class="dashboard-hr"></div>
				<div class="top-players-data">
					<div class="top-players-box" v-for="(data, index) in TopPlayers">
						<div class="box-info">
							<div class="status">
								<fa icon="fa-solid fa-user" />
							</div>
							<div class="player-data">
								<h1>{{data['username']}}</h1>
								<p>{{data['hoursPlayed'].toFixed(2)}} ore jucate</p>
							</div>
						</div>
						<div class="top-location">#{{index + 1}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>


<script src="./dashboard.js"></script>

<style lang="css">
	.dashboard-content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1vw;

		padding: 1vh 5vh;
	}

	.dashboard-content .boxes{
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 1vw;
		flex-basis: 0px;
	}
	
	.dashboard-content .boxes .box{
		display: flex;
		justify-content: space-between;
		width: 36vh;
		border-radius: .35vw;
		background-color: var(--panel-color);
		padding: 3vh;
		box-shadow: var(--shadow-1);
		transition: var(--tran-05);
		color: var(--text-color);
	}
	
	.dashboard-content .boxes .box .box-icon {
		width: 4vh;
		height: 4vh;
		background-color: var(--box-color);
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--title-icon-color);
		border-radius: .25vw;
	}

	.dashboard-content .boxes .box-text h1 {
		font-size: 1.2rem;
		font-weight: 600;
	}

	.dashboard-content .boxes .box-text p {
		font-family: 'Poppins';

		font-size: .9rem;
		font-weight: 400;
		opacity: .7;
	}

	.dashboard-content .dashboard-boxes {
		margin-top: 1.5rem;
		display: inline-flex;
		justify-content: left;
		align-items: left;
		gap: 1.5vw;
	}

	.dashboard-content .dashboard-boxes .recent-actions {
		width: 107vh;
		height: 55vh;
		background-color: var(--panel-color);
		border-radius: .50vw;
		padding: 1.5rem;

		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		gap: .8vw;
	}

	.dashboard-content .dashboard-boxes .recent-actions .recent-actions-header {
		display: inline-flex;
		gap: 0.8vw;
		justify-content: left;
		align-items: center;
	}

	.dashboard-content .dashboard-boxes .recent-actions .recent-actions-header .icon {
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

	.dashboard-content .dashboard-boxes .recent-actions .recent-actions-header .header-text h1 {
		font-family: 'Poppins';
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text-color);
	}

	.dashboard-content .dashboard-boxes .recent-actions .recent-actions-header .header-text p {
		font-family: 'Poppins';
		font-size: .7rem;
		font-weight: 400;
		opacity: .7;
		color: var(--text-color);
	}

	.dashboard-content .dashboard-boxes .recent-actions .dashboard-hr {
		opacity: .25;
		width: 100%;
		height: 0.2vh;
	
		border-radius: 0.25vw;
		background-color: var(--panel-border-color);
		margin-top: 1vh;
	}


	.dashboard-content .dashboard-boxes .recent-actions .recent-actions-data {
		margin-top: 1vh;
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		gap: 1vw;
		height: 60vh;
	}
	
	.dashboard-content .dashboard-boxes .recent-actions  .recent-actions-data  .recent-actions-box {
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		gap: 1vw;
		padding: 1vh 2vh;
	
		border: 1px solid var(--panel-history-border);
		border-radius: .25vw;
	}
	
	.dashboard-content .dashboard-boxes .recent-actions  .recent-actions-data .recent-actions-box .box-info {
		display: flex;
		justify-content: left;
		align-items: center;
		gap: 1vw;
	}
	
	.dashboard-content .dashboard-boxes .recent-actions  .recent-actions-data .recent-actions-box .box-info .status {
		width: 3vh;
		height: 3vh;
		border-radius: 0.25vw;
		color: white;
		background-color: rgb(87, 197, 87);
	
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.dashboard-content .dashboard-boxes .recent-actions  .recent-actions-data .recent-actions-box .box-info .status.uninvite {
		background-color: rgb(241, 77, 77);
	}

	.dashboard-content .dashboard-boxes .recent-actions  .recent-actions-data .recent-actions-box .box-info .status.removeadmin {
		background-color: rgb(241, 77, 77);
	}

	.dashboard-content .dashboard-boxes .recent-actions  .recent-actions-data .recent-actions-box .box-info .status.setadmin {
		background-color: #2a85ff;
	}
	
	.dashboard-content .dashboard-boxes .recent-actions  .recent-actions-data .recent-actions-box .box-info .history-data h1 {
		font-family: 'Poppins';
		font-size: 0.9rem;
		color: var(--text-color);
	}
	
	.dashboard-content .dashboard-boxes .recent-actions  .recent-actions-data .recent-actions-box .box-info .history-data p {
		font-family: 'Poppins';
		font-size: .7rem;
		color: var(--text-color);
		opacity: .7;
	}
	
	.dashboard-content .dashboard-boxes .recent-actions  .recent-actions-data .recent-actions-box .history-time {
		font-family: 'Poppins';
		font-size: .8rem;
		color: var(--text-color);
		opacity: .7;
	}

	.dashboard-content .dashboard-boxes .top-players {
		width: 40vh;
		height: 55vh;
		background-color: var(--panel-color);
		border-radius: .50vw;
		padding: 1.5rem;

		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		gap: .8vw;
	}
	
	.dashboard-content .dashboard-boxes .top-players .top-players-header {
		display: inline-flex;
		gap: 0.8vw;
		justify-content: left;
		align-items: center;
	}

	.dashboard-content .dashboard-boxes .top-players .top-players-header .icon {
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

	.dashboard-content .dashboard-boxes .top-players .top-players-header .header-text h1 {
		font-family: 'Poppins';
		font-size: 0.9rem;
		font-weight: 600;
		color: var(--text-color);
	}

	.dashboard-content .dashboard-boxes .top-players .top-players-header .header-text p {
		font-family: 'Poppins';
		font-size: .7rem;
		font-weight: 400;
		opacity: .7;
		color: var(--text-color);
	}

	.dashboard-content .dashboard-boxes .top-players .dashboard-hr {
		opacity: .25;
		width: 100%;
		height: 0.2vh;
	
		border-radius: 0.25vw;
		background-color: var(--panel-border-color);
		margin-top: 1vh;
	}

	.dashboard-content .dashboard-boxes .top-players .top-players-data {
		margin-top: 1vh;
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;
		gap: 1vw;
		height: 60vh;
	}

	.dashboard-content .dashboard-boxes .top-players .top-players-data .top-players-box {
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		gap: 1vw;
		padding: 1vh;
		width: 100%;
	
		border: 1px solid var(--panel-history-border);
		border-radius: .25vw;
	}

	.dashboard-content .dashboard-boxes .top-players .top-players-data .top-players-box .box-info {
		display: flex;
		justify-content: left;
		align-items: center;
		gap: 1vw;
	}

	.dashboard-content .dashboard-boxes .top-players .top-players-data .top-players-box .box-info .status {
		width: 3.2vh;
		height: 3vh;
		border-radius: 0.25vw;
		color: white;
		background-color: var(--box-color);
	
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.dashboard-content .dashboard-boxes .top-players .top-players-data .top-players-box .box-info .player-data h1 {
		font-family: 'Poppins';
		font-size: 0.9rem;
		color: var(--text-color);
	}

	.dashboard-content .dashboard-boxes .top-players .top-players-data .top-players-box .box-info .player-data p {
		font-family: 'Poppins';
		font-size: .7rem;
		color: var(--text-color);
		opacity: .7;
	}

	.dashboard-content .dashboard-boxes .top-players .top-players-data .top-players-box .top-location {
		font-family: 'Poppins';
		font-size: .8rem;
		color: var(--text-color);
		opacity: .7;
	}


	.dashboard-content .dashboard-cards {
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 1vw;
	}

	.dashboard-content .dashboard-cards .dashboard-card {
		margin-top: 1rem;
		width: 48vh;
		height: 12vh;
		background-color: var(--panel-color);
		border-radius: .50vw;
		padding: 1.2vh;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: .7vw;
	}

	.dashboard-content .dashboard-cards .dashboard-card .card-icon {
		background-color: #5865f2;
		color: white;
		width: 9vh;
		height: 6vh;
		border-radius: .50vw;
		line-height: 6vh;
		text-align: center;
		font-size: 2rem;
	}

	.dashboard-content .dashboard-cards .dashboard-card .card-icon.regulament {
		background-color: #40c18c
	}

	.dashboard-content .dashboard-cards .dashboard-card .card-icon.youtube {
		background-color: rgb(255, 0, 0);
	}

	.dashboard-content .dashboard-cards .dashboard-card .card-text {
		width: 30vh;
	}

	.dashboard-content .dashboard-cards .dashboard-card .card-text .yt-text {
		width: 19vh;
	}

	.dashboard-content .dashboard-cards .dashboard-card .card-text h1 {
		font-family: 'Poppins';
		font-size: 1rem;
		font-weight: 600;
		color: var(--text-color);
	}

	.dashboard-content .dashboard-cards .dashboard-card .card-text p {
		font-family: 'Poppins';
		font-size: .7rem;
		font-weight: 400;
		opacity: .7;
		color: var(--text-color);
	}

	.dashboard-content .dashboard-cards .dashboard-card .card-join-button {
		margin-right: .7vh;
		width: 16vh;
		height: 3.5vh;
		border-radius: .50vw;
		background-color: #5865f2;
		color: white;
		text-transform: uppercase;
		transition: 1s all;
		font-family: 'Poppins';
		font-size: .7rem;

		display: flex;
		justify-content: center;
		user-select: none;
		align-items: center;
	}

	.dashboard-content .dashboard-cards .dashboard-card .card-join-button:hover {
		background-color: #4756f5;
		opacity: .8;
	}

	.dashboard-content .dashboard-cards .dashboard-card .card-join-button.youtube {
		background-color: rgb(255, 0, 0);
	}

	.dashboard-content .dashboard-cards .dashboard-card .card-join-button.youtube:hover {
		background-color: rgb(197, 17, 17);
		transition: 1s all;
	}
	.dashboard-content .dashboard-cards .dashboard-card .card-join-button.regulament {
		background-color: #40c18c
	}

	.dashboard-content .dashboard-cards .dashboard-card .card-join-button.regulament:hover {
		background-color: #29885d;
		transition: 1s all;
	}

</style>