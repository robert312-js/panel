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
    GetDate(timestamp) {
      var date = new Date(timestamp * 1000);
      return date.toLocaleDateString("en-GB");
    },
    GetActionName(id) {
      return this.UsersData.filter((data) => data.id == id)[0]["username"];
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
    const actions = await this.$axios.get(
      "https://fairplay-rp.ro/api/recentactions"
    );
    this.RecentActions = actions.data
      .sort((x, y) => +new Date(y.time) - +new Date(x.time))
      .slice(0, 5);
    let users = await this.$axios.get("https://fairplay-rp.ro/api/users");

    this.UsersData = users.data;
    this.TopPlayers = this.UsersData.sort(
      (x, y) => y.hoursPlayed - x.hoursPlayed
    ).slice(0, 5);
    let vehicles = await this.$axios.get("https://fairplay-rp.ro/api/vehicles");
    this.serverVehicles = vehicles.data;

    $.getJSON(
      "https://servers-frontend.fivem.net/api/servers/single/2e3lgd",
      function (data) {
        $("#dashboard-players").text(
          data["Data"]["clients"] + "/" + data["Data"]["sv_maxclients"]
        );
      }
    );
  },
  computed: {
    IntregistratedUsers() {
      let counter = 0;
      this.UsersData.forEach((data) => {
        counter++;
      });
      return counter.toLocaleString(undefined, { minimumFractionDigits: 0 });
    },
    GetVipUsers() {
      let counter = 0;
      this.UsersData.forEach((data) => {
        if (data.vipLvl > 1) {
          counter++;
        }
      });
      return counter.toLocaleString(undefined, { minimumFractionDigits: 0 });
    },
    GetVehiclesNumber() {
      let counter = 0;
      this.serverVehicles.forEach((data) => {
        counter++;
      });
      return counter.toLocaleString(undefined, { minimumFractionDigits: 0 });
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
