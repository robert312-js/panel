<template>
	
	<div class="dashboard">
		<Staff-Sidebar page="3"/>
		<div class="staff-content">
			<Staff-Header page="Membrii Staff"/>

			<div class="staff-members">
				<div class="staff-members-header">
					<div class="staff-header-data">
						<div class="icon">
							<fa icon="fa-solid fa-users" />
						</div>
						<div class="header-texts">
							<h1>Membrii Staff</h1>
							<p>Vezi toti membrii din staff-ul FairPlay Romania.</p>
						</div>
					</div>
					<div class="staff-raport-button" v-if="IsUserAdmin >= 4" @click="GoToRapoarte()">
						<div class="file">
							<fa icon="fa-solid fa-file-shield" />
						</div>
						Rapoarte Staff
					</div>
				</div>
				<div class="staff-hr"></div>
	
				<div class="staff-members-data">
					<table class="styled-table">
						<thead>
							<tr>
								<th>Nume Admin</th>
								<th>Grad</th>
								<th>Ore jucate</th>
								<th>Ultima Conectare</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="(data, index) in StaffMembersTable">
								<td>
									<div class="staff-member" @click="GoToProfile(data.id)">
										<div class="icon">
											<fa icon="fa-solid fa-user" />
										</div>
										<div class="staff-member-texts">
											<h1>{{ data.name }}</h1>
											<p>ID: {{ data.id }}</p>
										</div>
									</div>
								</td>
								<td>
									<div class="staff-icon" v-if="data.adminLvl == 1">
										Helper in Teste
									</div>
									<div class="staff-icon helper" v-if="data.adminLvl == 2">
										Helper
									</div>
									<div class="staff-icon moderator" v-if="data.adminLvl == 3">
										<div class="icon">
											<fa icon="fa-solid fa-shield-halved" />
										</div>
										Moderator
									</div>
									<div class="staff-icon administrator" v-if="data.adminLvl == 4">
										<div class="icon">
											<fa icon="fa-solid fa-gavel" />
										</div>
										Administrator
									</div>
									<div class="staff-icon developer" v-if="data.adminLvl == 5">
										<div class="icon">
											<fa icon="fa-solid fa-code" />
										</div>
										Developer
									</div>
									<div class="staff-icon fondator" v-if="data.adminLvl == 6">
										<div class="icon">
											<fa icon="fa-solid fa-user-shield" />
										</div>
										Co-Fondator
									</div>
									<div class="staff-icon fondator" v-if="data.adminLvl >= 7">
										<div class="icon">
											<fa icon="fa-solid fa-user-shield" />
										</div>
										Fondator
									</div>
								</td>
								<td>{{data.hoursPlayed}}</td>
								<td>{{data.lastLogin}}</td>
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

<script>
	import Header from '../components/Header.vue'
	import Sidebar from '../components/Sidebar.vue';

	export default {
	  data() {
		return {
			StaffMembers: [],
			PaginateRange: 7,
            CurrentPage: 1,
            Pages: [],
			// Data
			IsUserAdmin: 0,
		};
	  },
	  components: {
        "Staff-Header": Header,
        "Staff-Sidebar": Sidebar,
      },
	  methods: {
		async GetStaffMembers() {
			let users = await this.$axios.get('https://fairplay-rp.ro/api/staff')
			const PageData = users.data;		
			const staffMembers = []
			PageData.forEach((staff) => {
				if (staff.adminLvl >= 1 ) {
					staffMembers.push({
						id: staff.id,
						name: staff.username,
						adminLvl: staff.adminLvl,
						lastLogin: this.GetDate(staff.last_login),
						hoursPlayed: staff.hoursPlayed.toFixed(2),
					})
				}
			});
			this.StaffMembers = staffMembers.sort((x, y) => y.adminLvl - x.adminLvl);
			this.setPages(this.StaffMembers)
		},
		GoToProfile(id) {
			this.$router.push('/profile/' + id);
		},
		GoToRapoarte() {
			this.$router.push("/rapoartestaff")
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
		 // Paginations
		PagePlus() {
            if (this.CurrentPage < this.Pages.length) {
                this.CurrentPage++;
            }
        },
        PageMinus() {
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
		async FormatHours(hours) {
			return await hours.toFixed();
		}
	  },
	  computed: {
		StaffMembersTable() {
            return this.paginate(this.StaffMembers);
    	},
	 },
	  async created() {
		let loader = this.$loading.show({
            container: this.fullPage ? null : this.$refs.formContainer,
            canCancel: false,
			backgroundColor: '#00000090',
			transition: 'fade',
			enforceFocus: true,
			opacity: 0.9,
			loader: 'dots',
			color: '#0098ff',
        });
        setTimeout(() => {
            loader.hide()
        }, 2000)
		this.GetStaffMembers();
		this.hasUserAdmin();
	  }
}
</script>

<style lang="css">

.staff-content {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1vw;

	padding: 1vh 5vh;
}

.staff-content  .staff-members {
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

.staff-content  .staff-members .staff-members-header {
	display: inline-flex;
	gap: 0.8vw;
	justify-content: space-between;
	align-items: center;
}

.staff-content  .staff-members .staff-members-header .staff-header-data {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 1vw;
}

.staff-content  .staff-members .staff-members-header .staff-raport-button {
	width: 10vw;
	height: 4.5vh;
	background-color: var(--panel-accent-color);
	color: #ffffff80;
	text-transform: uppercase;
	border-radius: .25vw;
	padding: 0.5rem;

	user-select: none;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	gap: .6vw;
	transition: 1s all;
}

.staff-content  .staff-members .staff-members-header .staff-raport-button:hover {
	background-color: var(--panel-accent-color-hover);
	color: #ffffff80;
	transition: 1s all;
}

.staff-content  .staff-members .staff-members-header .icon {
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

.staff-content  .staff-members .staff-members-header .header-texts h1 {
	font-family: 'Poppins';
	font-size: 0.9rem;
	font-weight: 600;
	color: var(--text-color);
}

.staff-content  .staff-members .staff-members-header .header-texts p {
	font-family: 'Poppins';
	font-size: .7rem;
	font-weight: 400;
	opacity: .7;
	color: var(--text-color);
}

.staff-content  .staff-members .staff-hr {
	opacity: .25;
	width: 100%;
	height: 0.2vh;

	border-radius: 0.25vw;
	background-color: var(--panel-border-color);
	margin-top: 1vh;
}

.staff-content  .staff-members .staff-members-data {
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

.styled-table tbody td .staff-icon {
	display: inline-flex;
	gap: 0.4vw;
	justify-content: left;
	align-items: center;

	width: 13vh;
	height: 3.5vh;
	color: white;
	background-color: #40c18c;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: .35vw;
	font-size: .8rem;
}

.styled-table tbody td .staff-icon.helper {
	background-color: #40c160;
}

.styled-table tbody td .staff-icon.moderator {
	background-color: #0098ff;
}

.styled-table tbody td .staff-icon.developer {
	background-color: #4638c2;
}

.styled-table tbody td .staff-icon.fondator {
	background-color: #ec3c3c;
	font-size: .8rem;
}

.styled-table tbody td .staff-member {
	display: inline-flex;
	gap: 0.8vw;
	justify-content: center;
	align-items: center;
}

.styled-table tbody td .staff-member .icon {
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

.styled-table tbody td .staff-member .staff-member-texts h1 {
	font-family: 'Poppins';
	font-size: 0.9rem;
	font-weight: 600;
	color: var(--text-color);
}

.styled-table tbody td .staff-member .staff-member-texts p {
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