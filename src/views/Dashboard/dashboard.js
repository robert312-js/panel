import Header from "../../components/Header.vue";
import Sidebar from "../../components/Sidebar.vue";

export default {
  data() {
    return {
      RecentActions: [],
      UsersData: [],
      serverVehicles: [],
      TopPlayers: [],
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
    OpenLink(link) {
      window.open(link, "_blank");
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
      const actionsResponse = await this.$axios.get("http://localhost:5000/api/recentactions");
      this.RecentActions = actionsResponse.data.sort((x, y) => +new Date(y.time) - +new Date(x.time)).slice(0, 5);
      const usersResponse = await this.$axios.get("http://localhost:5000/api/users");
      this.UsersData = usersResponse.data;
      this.TopPlayers = this.UsersData.sort(
        (x, y) => y.hoursPlayed - x.hoursPlayed
      ).slice(0, 5);
  
      const vehiclesResponse = await this.$axios.get("http://localhost:5000/api/vehicles");
      this.serverVehicles = vehiclesResponse.data;
    } catch (error) {
      console.error(error);
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
    IntregistratedUsers() {
      return this.UsersData.length.toLocaleString(undefined, { minimumFractionDigits: 0 });
    },
    GetVipUsers() {
      const vipUsers = this.UsersData.filter(data => data.vipLvl > 1);
      return vipUsers.length.toLocaleString(undefined, { minimumFractionDigits: 0 });
    },
    GetVehiclesNumber() {
      return this.serverVehicles.length.toLocaleString(undefined, { minimumFractionDigits: 0 });
    },
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
