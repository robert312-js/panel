import Header from "../../components/Header.vue";
import Sidebar from "../../components/Sidebar.vue";

export default {
  data() {
    return {
      RapoarteStaff: [],
      PaginateRange: 7,
      CurrentPage: 1,
      Pages: [],

      // data
      IsUserAdmin: 0,
    };
  },
  components: {
    "staffraport-Header": Header,
    "staffraport-Sidebar": Sidebar,
  },
  methods: {
    async GetStaffActivity() {
      let users = await this.$axios.get("http://localhost:5000/api/staff");
      const PageData = users.data;
      const usersData = [];
      PageData.forEach((staffraport) => {
        if (staffraport.adminLvl >= 1) {
          if (staffraport["userRaport"]) {
            usersData.push({
              id: staffraport.id,
              name: staffraport.username,
              adminLvl: staffraport.adminLvl,
              tickete: staffraport["userRaport"]["tickets"],
            });
          } else {
            usersData.push({
              id: staffraport.id,
              name: staffraport.username,
              adminLvl: staffraport.adminLvl,
              tickete: 0,
            });
          }
        }
      });
      this.RapoarteStaff = usersData.sort((x, y) => x.adminLvl - y.adminLvl);
      this.setPages(this.RapoarteStaff);
    },
    GetDate(timestamp) {
      var a = new Date(timestamp * 1000);
      var year = a.getFullYear();
      var month = a.getMonth();
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var hour =
        a.getHours() > 12
          ? a.getHours() - 12
          : a.getHours() < 10
          ? "0" + a.getHours()
          : a.getHours();
      var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
      var time = date + "/" + month + "/" + year + " " + hour + ":" + min;
      return time;
    },
    async ResetRapoarte() {
      Swal.fire({
        title: "Vrei sa resetezi Rapoartele?",
        text: "Tot progresul membrilor staff va fi resetat!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Reseteaza Rapoartele!",
      }).then((result) => {
        if (result.isConfirmed) {
          let command = "resetrapoarte";
          this.$axios.post(
            "http://localhost:5000/api/rcon",
            { command: command },
            { withCredentials: true }
          );
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          Swal.fire(
            "Rapoarte Resetate",
            "Rapoartele au fost resetate!.",
            "success"
          );
        }
      });
    },
    async hasUserAdmin() {
      this.$axios
        .get("http://localhost:5000/api/admin", { withCredentials: true })
        .then((response) => {
          if (response.data.isAdmin) {
            this.IsUserAdmin = response.data["adminLvl"];
            this.adminId = response.data["adminId"];
          } else {
            this.IsUserAdmin = 0;
          }
        });
    },
    GoToProfile(id) {
      this.$router.push("/profile/" + id);
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
    paginate(posts) {
      let page = this.CurrentPage;
      let perPage = this.PaginateRange;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
    async FormatHours(hours) {
      return await hours.toFixed();
    },
  },
  computed: {
    StaffRaportTable() {
      return this.paginate(this.RapoarteStaff);
    },
  },
  async created() {
    let loader = this.$loading.show({
      container: this.fullPage ? null : this.$refs.formContainer,
      canCancel: false,
      backgroundColor: "#00000090",
      transition: "fade",
      enforceFocus: true,
      opacity: 0.9,
      loader: "dots",
      color: "#0098ff",
    });
    setTimeout(() => {
      loader.hide();
    }, 2000);
    this.GetStaffActivity();
    this.hasUserAdmin();
  },
};
