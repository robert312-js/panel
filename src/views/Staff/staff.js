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
    GoToProfile(id) {
        this.$router.push('/profile/' + id);
    },
    GoToRapoarte() {
        this.$router.push("/rapoartestaff")
    },
    async hasUserAdmin() {
        this.$axios.get("http://localhost:5000/api/admin", { withCredentials: true }).then((response) => {
            if (response.data.isAdmin) {
                this.IsUserAdmin = response.data['adminLvl'];
                this.adminId = response.data['adminId'];
            } else {
                this.IsUserAdmin = 0;
            }
        });
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

    try {
        let users = await this.$axios.get('http://localhost:5000/api/staff')
        const staffMembers = users.data;		
        this.StaffMembers = staffMembers.sort((x, y) => y.adminLvl - x.adminLvl);
        this.setPages(this.StaffMembers)
    } catch(error) {
        console.log(error)
    }
    this.hasUserAdmin();
  }
}