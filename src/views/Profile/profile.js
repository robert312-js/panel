import Header from "../../components/Header.vue";
import Sidebar from "../../components/Sidebar.vue";

export default {
  data() {
    return {
      userData: [],
      userVehicles: [],
      userPunishLog: [],
      userHistory: [],
      UserLogs: [],
      LogTypes: [
        // Money Logs
        {
          name: "Money Logs",
          icon: "",
          type: false,
          logInfo: false,
          hasTarget: false,
          category: true,
        },
        {
          name: "Money Logs",
          icon: "fa-solid fa-sack-dollar",
          type: "Money",
          logInfo: false,
          hasTarget: false,
          category: false,
        },
        {
          name: "Give Money",
          icon: "fas fa-hand-holding-dollar",
          type: "Money",
          logInfo: "Ofera-Bani",
          hasTarget: false,
          category: false,
        },
        {
          name: "Receive Money",
          icon: "fas fa-money-bill-1-wave",
          type: "Money",
          logInfo: "Receive-Money",
          hasTarget: false,
          category: false,
        },
        {
          name: "Receive Money from Player",
          icon: "fas fa-money-bill-transfer",
          type: "Money",
          logInfo: "Receive-Money",
          hasTarget: true,
          category: false,
        },
        {
          name: "Give Money to Player",
          icon: "fas fa-hand-holding-dollar",
          type: "Money",
          logInfo: "Ofera-Bani",
          hasTarget: true,
          category: false,
        },
        {
          name: "Deposit Money",
          icon: "fas fa-landmark",
          type: "Money",
          logInfo: "Money-Deposit",
          hasTarget: false,
          category: false,
        },
        {
          name: "Withdraw Money",
          icon: "fas fa-money-bill-trend-up",
          type: "Money",
          logInfo: "Money-Withdraw",
          hasTarget: false,
          category: false,
        },
        {
          name: "Received Transfer",
          icon: "fas fa-money-check-dollar",
          type: "Money",
          logInfo: "Receive-Transfer",
          hasTarget: false,
          category: false,
        },
        {
          name: "Transfered Money",
          icon: "fas fa-dollar-sign",
          type: "Money",
          logInfo: "Transfer-Money",
          hasTarget: false,
          category: false,
        },
        {
          name: "Received Transfer From Player",
          icon: "fas fa-credit-card",
          type: "Money",
          logInfo: "Receive-Transfer",
          hasTarget: true,
          category: false,
        },
        {
          name: "Transfered Money to Player",
          icon: "fas fa-wallet",
          type: "Money",
          logInfo: "Transfer-Money",
          hasTarget: true,
          category: false,
        },
        {
          name: "Withdraw Faction Money",
          icon: "fas fa-circle-dollar-to-slot",
          type: "Money",
          logInfo: "Money-Faction-Withdraw",
          hasTarget: false,
          category: false,
        },
        {
          name: "Deposit Faction Money",
          icon: "fas fa-vault",
          type: "Money",
          logInfo: "Money-Faction-Deposit",
          hasTarget: false,
          category: false,
        },
        // Vehs
        {
          name: "Vehicles Logs",
          icon: "",
          type: false,
          logInfo: false,
          hasTarget: false,
          category: true,
        },
        {
          name: "Vehicles Logs",
          icon: "fa-solid fa-car",
          type: "Vehicles",
          logInfo: false,
          hasTarget: false,
          category: false,
        },
        {
          name: "Sell Vehicle",
          icon: "fas fa-car-rear",
          type: "Vehicles",
          logInfo: "Sell-Vehicle",
          hasTarget: false,
          category: false,
        },
        {
          name: "Buy Vehicle",
          icon: "fas fa-car-side",
          type: "Vehicles",
          logInfo: "Buy-Vehicle",
          hasTarget: false,
          category: false,
        },
        {
          name: "Buy Dealership",
          icon: "fas fa-car-on",
          type: "Vehicles",
          logInfo: "Buy-Dealership",
          hasTarget: false,
          category: false,
        },
        // Invests
        {
          name: "Invest Logs",
          icon: "",
          type: false,
          logInfo: false,
          hasTarget: false,
          category: true,
        },
        {
          name: "Invests Logs",
          icon: "fas fa-chart-line",
          type: "Invests",
          logInfo: false,
          hasTarget: false,
          category: false,
        },
        {
          name: "Start Invest",
          icon: "fas fa-file-invoice-dollar",
          type: "Invests",
          logInfo: "Made-Invest",
          hasTarget: false,
          category: false,
        },
        {
          name: "Finish Invest",
          icon: "fas fa-ranking-star",
          type: "Invests",
          logInfo: "Receive-Invest",
          hasTarget: false,
          category: false,
        },
        {
          name: "Losed Invest",
          icon: "fas fa-chart-simple",
          type: "Invests",
          logInfo: "Lose-Invest",
          hasTarget: false,
          category: false,
        },
        // Items Logs
        {
          name: "Items Logs",
          icon: "",
          type: false,
          logInfo: false,
          hasTarget: false,
          category: true,
        },
        {
          name: "Items Logs",
          icon: "fas fa-bag-shopping",
          type: "Items",
          logInfo: false,
          hasTarget: false,
          category: false,
        },
        {
          name: "Received Items",
          icon: "fas fa-handshake-simple",
          type: "Items",
          logInfo: "Receive-Item",
          hasTarget: false,
          category: false,
        },
        {
          name: "Give Items",
          icon: "fas fa-hand-holding-heart",
          type: "Items",
          logInfo: "Give-Item",
          hasTarget: false,
          category: false,
        },
        {
          name: "Give Inventory Item",
          icon: "fas fa-hand-sparkles",
          type: "Items",
          logInfo: "Put-Item",
          hasTarget: false,
          category: false,
        },
        {
          name: "Receive Inventory Item",
          icon: "fas fa-hand-holding",
          type: "Items",
          logInfo: "Receive-Inv-Item",
          hasTarget: false,
          category: false,
        },
        {
          name: "Depozit Chest",
          icon: "fas fa-boxes-packing",
          type: "Items",
          logInfo: "Depozit-ChestItem",
          hasTarget: false,
          category: false,
        },
        {
          name: "Receive from Chest",
          icon: "fas fa-box",
          type: "Items",
          logInfo: "Get-ChestItem",
          hasTarget: false,
          category: false,
        },
        {
          name: "Crafted Items",
          icon: "fas fa-recycle",
          type: "Items",
          logInfo: "Craft-Item",
          hasTarget: false,
          category: false,
        },
        // User Logs
        {
          name: "User Logs",
          icon: "",
          type: false,
          logInfo: false,
          hasTarget: false,
          category: true,
        },
        {
          name: "User Logs",
          icon: "fas fa-user",
          type: "UserLogs",
          logInfo: false,
          hasTarget: false,
          category: false,
        },
        {
          name: "Connect Logs",
          icon: "fas fa-signal",
          type: "UserLogs",
          logInfo: "connect",
          hasTarget: false,
          category: false,
        },
        {
          name: "Disconnect Logs",
          icon: "fas fa-person-walking-arrow-right",
          type: "UserLogs",
          logInfo: "disconnect",
          hasTarget: false,
          category: false,
        },
        {
          name: "Death Logs",
          icon: "fas fa-heart-crack",
          type: "UserLogs",
          logInfo: "death",
          hasTarget: false,
          category: false,
        },
      ],
      PaginateRange: 6,
      CurrentPage: 1,
      Pages: [],
      InfoCurrentPage: 1,
      // User Info
      UserTag: "Jucator",
      hasUserBan: false,
      userBanData: [],
      CanSeeUserInfo: false,
      adminId: 0,
      IsUserAdmin: 0,
    };
  },
  components: {
    "Profile-Header": Header,
    "Profile-Sidebar": Sidebar,
  },
  methods: {
    async SelectInfoCurrentPage(page) {
      this.InfoCurrentPage = page;
      this.Pages = [];

      if (page == 2) {
        this.setPages(this.userHistory);
        this.CurrentPage = 1;
      } else if (page == 3) {
        this.CurrentPage = 1;
        this.setPages(this.userPunishLog);
      } else if (page == 4) {
        this.UserLogs = [];
        this.CurrentPage = 1;
        const logs = await this.$axios.get(
          "https://fairplay-rp.ro/api/serverLogs/" +
            this.$route.params.id +
            "/" +
            "Money"
        );
        this.UserLogs = logs.data;
        this.setPages(this.UserLogs);
      }
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
    async selectSubMenu(type, data, target) {
      let element = $(".submenu");
      element.fadeOut();
      this.Pages = [];
      this.UserLogs = [];
      if (type && data == false && target == false) {
        const logs = await this.$axios.get(
          "https://fairplay-rp.ro/api//serverLogs/" +
            this.$route.params.id +
            "/" +
            type
        );
        this.UserLogs = logs.data;
        this.CurrentPage = 1;
        this.setPages(this.UserLogs);
      } else if (type && data && target == false) {
        const logs = await this.$axios.get(
          "https://fairplay-rp.ro/api/getServerLogsData/" +
            this.$route.params.id +
            "/" +
            type +
            "/" +
            data
        );
        this.UserLogs = logs.data;
        this.CurrentPage = 1;
        this.setPages(this.UserLogs);
      } else if (type && data && target) {
        let target = await Swal.fire({
          title: "Id-ul jucatorului",
          input: "text",
          inputAttributes: {
            autocapitalize: "off",
          },
          showCancelButton: true,
          confirmButtonText: "Cauta",
          showLoaderOnConfirm: false,
        });
        let id = parseInt(target.value);
        const logs = await this.$axios.get(
          "https://fairplay-rp.ro/api/getServerLogsTarget/" +
            this.$route.params.id +
            "/" +
            type +
            "/" +
            data +
            "/" +
            id
        );
        this.UserLogs = logs.data;
        this.CurrentPage = 1;
        this.setPages(this.UserLogs);
        Swal.close();
      }
    },
    openSubMenu(event) {
      let dom = event.target;
      let element = $(".submenu");

      if (element.css("display") == "none") {
        element.fadeIn();
      } else {
        element.fadeOut();
      }

      let itemOffset = $(dom).offset();
      element.css("top", itemOffset.top + 30);

      let leftOffset = itemOffset.left - element.width() + $(dom).width() + 25;
      if (leftOffset + element.width() > $(window).width()) {
        leftOffset = $(window).width() - element.width() - 20;
      }
      element.css("left", leftOffset);
    },
    async hasUserAdmin() {
      this.$axios
        .get("https://fairplay-rp.ro/api/admin", { withCredentials: true })
        .then((response) => {
          if (response.data.isAdmin) {
            this.IsUserAdmin = response.data["adminLvl"];
            this.adminId = response.data["adminId"];
          } else {
            this.IsUserAdmin = 0;
          }
        });
    },
    async CanSeeProfileInfo() {
      this.$axios
        .get("https://fairplay-rp.ro/api/account", { withCredentials: true })
        .then((response) => {
          let userData = response.data.user;
          if (userData["id"] == this.$route.params.id) {
            this.CanSeeUserInfo = true;
          } else {
            this.$axios
              .get("https://fairplay-rp.ro/api/admin", {
                withCredentials: true,
              })
              .then((response) => {
                if (response.data.isAdmin) {
                  if (response.data["adminLvl"] >= 2) {
                    this.CanSeeUserInfo = true;
                  }
                } else {
                  this.CanSeeUserInfo = true;
                }
              });
          }
        });
    },
    async VerifyUserBan() {
      if (this.userData["userBans"]) {
        this.hasUserBan = true;
        this.userBanData = this.userData["userBans"];
      } else {
        this.hasUserBan = false;
      }
    },
    GetUserTag() {
      if (this.userData["adminLvl"] == 1) {
        this.UserTag = "Helper in Teste";
      } else if (this.userData["adminLvl"] == 2) {
        this.UserTag = "Helper";
      } else if (this.userData["adminLvl"] == 3) {
        this.UserTag = "Moderator";
      } else if (this.userData["adminLvl"] == 4) {
        this.UserTag = "Administrator";
      } else if (this.userData["adminLvl"] == 5) {
        this.UserTag = "Developer";
      } else if (this.userData["adminLvl"] == 6) {
        this.UserTag = "Co-Fondator";
      } else if (this.userData["adminLvl"] >= 7) {
        this.UserTag = "Fondator";
      } else {
        this.UserTag = "Jucator";
      }
    },
    // Admin Actions
    async RconAction(command) {
      this.$axios.post(
        "https://fairplay-rp.ro/api/rcon",
        { command: command },
        { withCredentials: true }
      );
    },
    async BanPlayer() {
      let reason = await Swal.fire({
        title: "Motivul banului",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "OK",
        showLoaderOnConfirm: false,
      });
      let time = await Swal.fire({
        title: "Timpul banului",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "OK",
        showLoaderOnConfirm: false,
      });
      let DreptPlata = await Swal.fire({
        title: "Drept de plata [1 == Nu, 0 == Da]",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "OK",
        showLoaderOnConfirm: false,
      });
      if (
        reason.value != null &&
        time.value != null &&
        DreptPlata.value != null
      ) {
        this.RconAction(
          "banplayer " +
            this.$route.params.id +
            " " +
            time.value +
            " " +
            this.adminId +
            " " +
            dreptPlata.value +
            " " +
            reason.value
        );
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    },
    UnbanPlayer() {
      Swal.fire({
        title: "Esti sigur?",
        text: "Jucatorul va primii unban pe server!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Unban Player",
      }).then((result) => {
        if (result.isConfirmed) {
          this.RconAction(
            "unbanplayer " + this.$route.params.id + " " + this.adminId
          );
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      });
    },
    KickPlayer() {
      Swal.fire({
        title: "Esti sigur?",
        text: "Jucatorul va primi kick de pe server!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Kick Player",
      }).then((result) => {
        if (result.isConfirmed) {
          this.RconAction(
            "kickplayer " + this.$route.params.id + " " + this.adminId
          );
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      });
    },
    async GiveMoney() {
      let money = await Swal.fire({
        title: "Suma Oferita",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Give Money",
        showLoaderOnConfirm: false,
      });
      this.RconAction("givemoney " + this.$route.params.id + " " + money.value);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
    async GiveCoins() {
      let coins = await Swal.fire({
        title: "Suma Oferita",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Give Coins",
        showLoaderOnConfirm: false,
      });
      this.RconAction("givecoins " + this.$route.params.id + " " + coins.value);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
    async SetAdmin() {
      let adminLvl = await Swal.fire({
        title: "Admin Level",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Set Admin Level",
        showLoaderOnConfirm: false,
      });
      if (adminLvl.value >= 0) {
        this.RconAction(
          "setadmin " + this.$route.params.id + " " + adminLvl.value
        );
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    },
    // Paginations
    CurrentPagePlus() {
      if (this.CurrentPage < this.Pages.length) {
        this.CurrentPage++;
      }
    },
    CurrentPageMinus() {
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
  },
  computed: {
    PlayerHistory() {
      return this.paginate(this.userHistory).sort(
        (x, y) => +new Date(y.time) - +new Date(x.time)
      );
    },
    PunishLog() {
      return this.paginate(this.userPunishLog).sort(
        (x, y) => +new Date(y.time) - +new Date(x.time)
      );
    },
    LogsData() {
      return this.paginate(this.UserLogs).sort(
        (x, y) => +new Date(y.time) - +new Date(x.time)
      );
    },
    GetSelectedPage() {
      return this.CurrentPage;
    },
    HoursPlayed() {
      let hours = this.userData["hoursPlayed"];
      return hours.toFixed(2);
    },
    GetUserCharacterName() {
      if (this.userData["userIdentity"] != null) {
        return (
          this.userData["userIdentity"]["firstName"] +
          " " +
          this.userData["userIdentity"]["secondName"]
        );
      } else {
        return "Necunoscut";
      }
    },
    GetUserAge() {
      if (this.userData["userIdentity"]) {
        return this.userData["userIdentity"]["age"];
      } else {
        return "18";
      }
    },
    BankMoney() {
      const moneyFormat = new Intl.NumberFormat("us-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      });
      return moneyFormat.format(this.userData["userMoney"]["bankMoney"]);
    },
    CashMoney() {
      const moneyFormat = new Intl.NumberFormat("us-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      });
      return moneyFormat.format(this.userData["userMoney"]["walletMoney"]);
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

    this.CanSeeProfileInfo();
    this.hasUserAdmin();

    let user = await this.$axios.get(
      "https://fairplay-rp.ro/api/user/" + this.$route.params.id
    );
    this.userData = user.data;
    let punish = await this.$axios.get(
      "https://fairplay-rp.ro/api/userpunishlog/" + this.$route.params.id
    );
    this.userPunishLog = punish.data;
    let history = await this.$axios.get(
      "https://fairplay-rp.ro/api/userhistory/" + this.$route.params.id
    );
    this.userHistory = history.data;
    let vehs = await this.$axios.get(
      "https://fairplay-rp.ro/api/uservehicles/" + this.$route.params.id
    );
    this.userVehicles = vehs.data;

    this.VerifyUserBan(); // Check if user is banned
    this.GetUserTag(); // Get user tag
  },
};
