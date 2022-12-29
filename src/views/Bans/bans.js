import Header from "../../components/Header.vue";
import Sidebar from "../../components/Sidebar.vue";

export default {
  data() {
    return {
      UsersBans: [],
      PaginateRange: 7,
      CurrentPage: 1,
      Pages: [],
    };
  },
  components: {
    "Bans-Header": Header,
    "Bans-Sidebar": Sidebar,
  },
  methods: {
    async GetBans() {
      try {
        const usersResponse = await this.$axios.get("http://localhost:5000/api/users");
        const UsersData = usersResponse.data;
        const bansData = UsersData.filter(user => user.userBans).map(user => ({
          id: user.id,
          username: user.username,
          userBans: user.userBans,
        }));
        this.UsersBans = bansData.sort((x, y) => +new Date(y.userBans.banDate) - +new Date(x.userBans.banDate));
        this.setPages(this.UsersBans);
      } catch (error) {
        console.error(error);
      }
    },
    GetDate(timestamp) {
      var a = new Date(timestamp * 1000);
      var year = a.getFullYear();
      var month = a.getMonth();
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var sec = a.getSeconds();
      var time =
        date + "/" + month + "/" + year + " " + hour + ":" + min + ":" + sec;
      return time;
    },
    GoToProfile(id) {
      this.$router.push("/profile/" + id);
    },

    
    // Paginations
    PagePlus() {
      if (this.CurrentPage < this.Pages.length) {
        console.log(this.CurrentPage);
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
    GetBanlist() {
      return this.paginate(this.UsersBans);
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
    this.GetBans();
  },
};
