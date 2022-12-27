import Header from '../../components/Header.vue'
import Sidebar from '../../components/Sidebar.vue';

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
        let users = await this.$axios.get('https://api.fairplay-rp.ro/api/staff')
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
        this.$axios.get("https://api.fairplay-rp.ro/api/admin", { withCredentials: true }).then((response) => {
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