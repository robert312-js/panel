import Header from "../../components/Header.vue";
import Sidebar from "../../components/Sidebar.vue";

export default {
  data() {
    return {
      RecentActions: [],
      TopPlayers: [],
      VehiclesNumber: 0,
      UsersData : [],
      TotalPlayers: 0,
      VipUsers: 0,
      onlineUsers: "",
    };
  },
  components: {
    "Dashboard-Header": Header,
    "Dashboard-Sidebar": Sidebar,
  },
  methods: {
    GetActionName(id) {
      const userData = this.UsersData.find(data => data.id === id);
      return userData ? userData.username : "Necunoscut";
    },
    GoToRules() {
      this.$router.push("/rules");
    },
    OpenLink(link) {
      window.open(link, "_blank");
    },
    GetDate(timestamp) {
      var a = new Date(timestamp * 1000);
      var year = a.getFullYear();
      var month = a.getMonth();
      var date = a.getDate();
      var hour = a.getHours();
      var min = a.getMinutes();
      var hour = a.getHours() > 12 ? a.getHours() - 12 : a.getHours() < 10 ? "0" + a.getHours() : a.getHours();
      var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
      var time = date + "/" + month + "/" + year + " " + hour + ":" + min;
      return time;
    },
  },
  async created() {
    let loader = this.$loading.show({
      container: this.fullPage ? null : this.$refs.formContainer,
      canCancel: false,
      backgroundColor: "#00000090",
      transition: "fade",
      enforceFocus: true,
      opacity: 0.6,
      loader: "dots",
      color: "#0098ff",
    });
    setTimeout(() => {
      loader.hide();
    }, 2000);
  
    try {
      const panelDataRequest = await this.$axios.get("http://localhost:5000/api/dashboard");
      const dashboardData = panelDataRequest.data;
      this.RecentActions = dashboardData['history'].sort((x, y) => +new Date(y.time) - +new Date(x.time)).slice(0, 5);
      this.TopPlayers = dashboardData['users'].sort( (x, y) => y.hoursPlayed - x.hoursPlayed).slice(0, 5);
      this.UsersData = dashboardData['users'];

      this.VehiclesNumber = dashboardData['totalVehicles'].toLocaleString(undefined, { minimumFractionDigits: 0 });
      this.TotalPlayers = dashboardData['totalUsers'].toLocaleString(undefined, { minimumFractionDigits: 0 });
      this.VipUsers = dashboardData['totalVips'].toLocaleString(undefined, { minimumFractionDigits: 0 });
    } catch (error) {
      console.log(error);
    };
  
    $.getJSON("https://servers-frontend.fivem.net/api/servers/single/2e3lgd",
      function (data) {
        $("#dashboard-players").text(
          data["Data"]["clients"] + "/" + data["Data"]["sv_maxclients"]
        );
      }
    );
  },
  computed: {

    GetOnlinePlayers() {
      $.getJSON(
        "https://servers-frontend.fivem.net/api/servers/single/2e3lgd",
        async function (data) {
          return (
            (await data["Data"]["clients"]) +
            "/" +
            data["Data"]["sv_maxclients"]
          );
        }
      );
    },
  },
};
