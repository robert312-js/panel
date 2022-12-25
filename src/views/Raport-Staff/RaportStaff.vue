<template>
	
	<div class="dashboard">
		<staffraport-Sidebar page="3"/>
		<div class="staffraport-content">
			<staffraport-Header page="Rapoarte Staff"/>

			<div class="staffraport-members">
				<div class="staffraport-members-header">
					<div class="staffraport-header-data">
						<div class="icon">
							<fa icon="fa-solid fa-users" />
						</div>
						<div class="header-texts">
							<h1>Rapoarte staffraport</h1>
							<p>Vezi rapoartele membrilor staff</p>
						</div>
					</div>

					<div class="reset-rapoarte-data" @click="ResetRapoarte()">
						<div class="reset">
							<fa icon="fa-solid fa-repeat" />
						</div>
					</div>
				</div>
				<div class="staffraport-hr"></div>
	
				<div class="staffraport-members-data">
					<table class="styled-table">
						<thead>
							<tr>
								<th>Nume Admin</th>
								<th>Grad</th>
								<th>Tickete</th>
                                <th>Mute</th>
                                <th>Ban</th>
                                <th>Admin Jail</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(data, index) in StaffRaportTable">
								<td>
									<div class="staffraport-member" @click="GoToProfile(data.id)">
										<div class="icon">
											<fa icon="fa-solid fa-user" />
										</div>
										<div class="staffraport-member-texts">
											<h1>{{ data.name }}</h1>
											<p>ID: {{ data.id }}</p>
										</div>
									</div>
								</td>
								<td>
									<div class="staffraport-icon" v-if="data.adminLvl == 1">
										Helper in Teste
									</div>
									<div class="staffraport-icon" v-if="data.adminLvl == 2">
										Helper
									</div>
									<div class="staffraport-icon" v-if="data.adminLvl == 3">
										Moderator
									</div>
									<div class="staffraport-icon" v-if="data.adminLvl == 4">
										Administrator
									</div>
									<div class="staffraport-icon" v-if="data.adminLvl == 5">
										Developer
									</div>
									<div class="staffraport-icon" v-if="data.adminLvl == 6">
										Co-Fondator
									</div>
									<div class="staffraport-icon" v-if="data.adminLvl >= 7">
										Fondator
									</div>
								</td>
								<td>{{data.tickete}}</td>
								<td>0</td>
                                <td>0</td>
                                <td>0</td>
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

<script src="./raport-staff.js"></script>

<style lang="css">

.staffraport-content {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1vw;

	padding: 1vh 5vh;
}

.staffraport-content  .staffraport-members {
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

.staffraport-content  .staffraport-members .staffraport-members-header {
	display: inline-flex;
	gap: 0.8vw;
	justify-content: space-between;
	align-items: center;
}

.staffraport-content  .staffraport-members .staffraport-members-header .staffraport-header-data {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: 1vw;
}

.staffraport-content  .staffraport-members .staffraport-members-header .reset-rapoarte-data {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	gap: 1vw;

	width: 2.5vw;
	height: 4.5vh;
	border-radius: .25vw;
	background-color: var(--panel-accent-color);
	color: #ffffff80;
	transition: 1s all;
}

.staffraport-content  .staffraport-members .staffraport-members-header .reset-rapoarte-data:hover {
	background-color: var(--panel-accent-color-hover);
	color: #ffffff;
	transition: 1s all;
}

.staffraport-content  .staffraport-members .staffraport-members-header .icon {
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

.staffraport-content  .staffraport-members .staffraport-members-header .header-texts h1 {
	font-family: 'Poppins';
	font-size: 0.9rem;
	font-weight: 600;
	color: var(--text-color);
}

.staffraport-content  .staffraport-members .staffraport-members-header .header-texts p {
	font-family: 'Poppins';
	font-size: .7rem;
	font-weight: 400;
	opacity: .7;
	color: var(--text-color);
}

.staffraport-content  .staffraport-members .staffraport-hr {
	opacity: .25;
	width: 100%;
	height: 0.2vh;

	border-radius: 0.25vw;
	background-color: var(--panel-border-color);
	margin-top: 1vh;
}

.staffraport-content  .staffraport-members .staffraport-members-data {
	width: 100%;
	height: 100%;
}

.styled-table {
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 100%;
	border-collapse: collapse;
}

.styled-table thead {
	color: var(--text-color);
	text-align: left;
}

.styled-table thead tr {
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 20px;
}

.styled-table td {
	padding: 2vh 2vh;
	color: white; 
}

.styled-table tbody td .staffraport-member {
	display: inline-flex;
	gap: 0.8vw;
	justify-content: center;
	align-items: center;
}

.styled-table tbody td .staffraport-member .icon {
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

.styled-table tbody td .staffraport-member .staffraport-member-texts h1 {
	font-family: 'Poppins';
	font-size: 0.9rem;
	font-weight: 600;
	color: var(--text-color);
}

.styled-table tbody td .staffraport-member .staffraport-member-texts p {
	font-family: 'Poppins';
	font-size: .7rem;
	font-weight: 400;
	opacity: .7;
	color: var(--text-color);
}

.styled-table tbody tr {
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