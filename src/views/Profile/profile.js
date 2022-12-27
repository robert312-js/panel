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
      UserItemsData: [],
      VehChestData: [],
      OpenedVehiclesData: {
        vehicle: '',
        type: '',
      },
      // Prompt Data
      promptData: {
        active: false,
        title: "",
        fields: {},
      },
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
      canSeeUserInfo: false,
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
        const logs = await this.$axios.get("https://api.fairplay-rp.ro/api/serverLogs/" + this.$route.params.id + "/" +"Money");
        this.UserLogs = logs.data;
        this.setPages(this.UserLogs);
      } else if (page == 6) {
        this.CurrentPage = 1;
        this.setPages(this.UserItemsData);
      }
    },
    GetDate(timestamp) {
      const date = new Date(timestamp * 1000);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // getMonth returns a 0-based index, so we need to add 1
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      // Pad the hours and minutes with leading zeros if needed
      const paddedHours = hours < 10 ? `0${hours}` : hours;
      const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      return `${day}/${month}/${year} ${paddedHours}:${paddedMinutes}`;
    },
    async selectSubMenu(type, data, target) {
      $(".submenu").fadeOut();
      this.Pages = [];
      this.UserLogs = [];
      let logs;
      if (type && !data && !target) {
        logs = await this.$axios.get(`https://api.fairplay-rp.ro/api/serverLogs/${this.$route.params.id}/${type}`);
      } else if (type && data && !target) {
        logs = await this.$axios.get(`https://api.fairplay-rp.ro/api/getServerLogsData/${this.$route.params.id}/${type}/${data}`);
      } else if (type && data && target) {
        const promptData = await this.createPrompt("TARGET ID", [{field: "target", title: "Introduceti id-ul jucatorului"}]);
        const id = parseInt(promptData['target']);
        logs = await this.$axios.get(`https://api.fairplay-rp.ro/api/getServerLogsTarget/${this.$route.params.id}/${type}/${data}/${id}`);
      }
      this.UserLogs = logs.data;
      this.CurrentPage = 1;
      this.setPages(this.UserLogs);
    },
    openSubMenu(event) {
      const element = $(".submenu");
      element.fadeToggle();
    
      const itemOffset = $(event.target).offset();
      element.css("top", itemOffset.top + 30);
    
      let leftOffset = itemOffset.left - element.width() + $(event.target).width() + 25;
      if (leftOffset + element.width() > $(window).width()) {
        leftOffset = $(window).width() - element.width() - 20;
      }
      element.css("left", leftOffset);    
    },
    async hasUserAdmin() {
      try {
        const response = await this.$axios.get("https://api.fairplay-rp.ro/api/admin", { withCredentials: true });
        if (response.data.isAdmin) {
          this.IsUserAdmin = response.data.adminLvl;
          this.adminId = response.data.adminId;
          return;
        }
        this.IsUserAdmin = 0;
      } catch (error) {
        console.error(error);
      }
    },
    async CanSeeProfileInfo() {
      try {
        const accountResponse = await this.$axios.get("https://api.fairplay-rp.ro/api/account", { withCredentials: true });
        const userData = accountResponse.data.user;
        if (userData.id == this.$route.params.id) {
          this.canSeeUserInfo = true;
          return;
        }
    
        const adminResponse = await this.$axios.get("https://api.fairplay-rp.ro/api/admin", { withCredentials: true });
        if (adminResponse.data.isAdmin) {
          this.canSeeUserInfo = adminResponse.data.adminLvl >= 2;
          return;
        } 

        this.canSeeUserInfo = false;
      } catch (error) {
        console.error(error);
      }
    },
    async VerifyUserBan() {
      this.hasUserBan = this.userData.userBans ? true : false;
      if (this.hasUserBan) {
        this.userBanData = this.userData.userBans;
      }
    },
    // Prompt Data
		createPrompt(title, fields) {
      this.promptData.active = true;
      var self = this;
      return new Promise((resolve, reject) => {
        $(".prompt-layout").fadeIn();
        this.promptData.title = title;
        this.promptData.fields = fields;
        $(document).on("click", '#prompt-button', async function(event) {
          event.preventDefault();
          const responses = self.promptData.fields || {};
          const responseData = {};
          if (responses.length > 0) {
            for (const data of responses) {
              responseData[data.field] = data.text;
            }
          }
          self.hidePrompt();
          resolve(responseData);
        });
      });
    },
    hidePrompt() {
			$(".prompt-layout").fadeOut(200);
			setTimeout(() => {
				this.promptData.active = false
				this.promptData.fields = [];
			}, 190);
		},
    async GetVehicleChest(vehicle, type) {
      try {
        let vehicleResponse = await this.$axios.get(`https://api.fairplay-rp.ro/api/getVehicleChest/${this.$route.params.id}/${vehicle}/${type}`);
        let vehicleData = vehicleResponse.data;
        if (vehicleData['dvalue'] == undefined) {
          Swal.fire({
            title: 'Eroare',
            text: 'Nu sunt iteme in acest chest!',
            icon: 'error',
            confirmButtonText: 'Ok'
          });
          return;
        }
        this.VehChestData = vehicleData['dvalue'] ? JSON.parse(vehicleData['dvalue']) : [];
        this.OpenedVehiclesData = {
          vehicle: vehicle,
          type: type
        }
        $('.vehicle-prompt-wrapper').fadeIn();
      } catch (error) {
        console.error(error);
      }
    },
    async DeleteChestItem(item, amount) {
      try {
        let removeItemAmount = amount;
        var chestData = '';
        if (this.OpenedVehiclesData.type == 'chest') {
          chestData = 'chest:vehTrunk_' + this.OpenedVehiclesData.vehicle + '_u' + this.$route.params.id;
        } else {
          chestData = 'chest:vehGlovebox_' + this.OpenedVehiclesData.vehicle + '_u' + this.$route.params.id;
        }
        if (amount > 1) {
          let promptData = await this.createPrompt("Sterge item din chest", [{field: "amount", title: "Cantitatea de iteme pe care vrei sa le stergi (Maxim: " + amount + ")"}])
          if (promptData['amount'] > amount) {
            return Swal.fire({
              title: 'Eroare',
              text: 'Suma introdusa este invalida!',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          };
          if (promptData['amount'] < 1) { 
            return Swal.fire({
              title: 'Eroare',
              text: 'Suma introdusa este invalida!',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          } ;
          removeItemAmount = promptData['amount'];
        }
        this.RconAction('removeitemfromveh' + ' ' + item + ' ' + removeItemAmount + ' ' + chestData);
        setTimeout(() => {
          this.GetVehicleChest(this.OpenedVehiclesData.vehicle, this.OpenedVehiclesData.type);
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    },
    async DeletePlayerItem(item, amount) {
      try {
        let removeItemAmount = amount;
        if (amount > 1) {
          let promptData = await this.createPrompt("Sterge item din chest", [{field: "amount", title: "Cantitatea de iteme pe care vrei sa le stergi (Maxim: " + amount + ")"}])
          if (promptData['amount'] > amount) {
            return Swal.fire({
              title: 'Eroare',
              text: 'Suma introdusa este invalida!',
              icon: 'error',
              confirmButtonText: 'Ok'
            })
          };
          if (promptData['amount'] < 1) {
            return Swal.fire({
              title: 'Eroare',
              text: 'Suma introdusa este invalida!',
              icon: 'error',
              confirmButtonText: 'Ok'
            });
          }
          removeItemAmount = promptData['amount'];
        }
        this.RconAction('removeitemfromplayer' + ' ' + this.$route.params.id + ' ' + item + ' ' + removeItemAmount);
        setTimeout(() => {
          this.GetUserInventory();
        }, 3000);
      } catch (error) {
        console.error(error);
      }
    },
    CloseVehiclePrompt() {
      $('.vehicle-prompt-wrapper').fadeOut();
      this.VehChestData = [];
    },
    async GetUserInventory() {
      try {
        this.UserItemsData = [];
        const userResponse = await this.$axios.get(`https://api.fairplay-rp.ro/api/getUdata/${this.$route.params.id}`);
        const uData = userResponse.data;
        const inventoryData = JSON.parse(uData.dvalue).inventory;

        for (const [key, data] of Object.entries(inventoryData)) {    
          this.UserItemsData.push({
            name: key,
            amount: data.amount,
          });
        }
      } catch (error) {
        console.error(error);
      }
    },
    GetUserTag() {
      switch (this.userData['adminLvl']) {
        case 1:
          this.UserTag = "Helper in Teste";
          break;
        case 2:
          this.UserTag= "Helper";
          break;
        case 3:
          this.UserTag = "Moderator";
          break;
        case 4:
          this.UserTag = "Administrator";
          break;
        case 5:
          this.UserTag = "Developer";
          break;
        case 6:
          this.UserTag = "Co-Fondator";
          break;
        case 7:
        case 8:
        case 9:
        case 10:
          this.UserTag = "Fondator";
          break;
        default:
          this.UserTag = "Jucator";
          break;
      }
    },
    // Admin Actions
    async RconAction(command) {
      this.$axios.post("https://api.fairplay-rp.ro/api/rcon",{ command: command },{ withCredentials: true });
    },
    async BanPlayer() {
        let promptData = await this.createPrompt("BAN PLAYER", [{field: "reason", title:"Motiv"}, {field: "time", title:"Timp"}, {field: "dreptPlata", title:"Drept de plata (1 == DA, 0 == NU)"}]);
        let reason = promptData ? promptData.reason : null;
        let time = promptData ? promptData.time : null;
        let dreptPlata = promptData ? promptData.dreptPlata : null;
        if (!reason || !time || !dreptPlata) return Swal.fire("Eroare", "Toate campurile sunt obligatorii!", "error");

        this.RconAction("banplayer " + this.$route.params.id + " " + time + " " + this.adminId + " " + dreptPlata +  " " + reason);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
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
          this.RconAction("unbanplayer " + this.$route.params.id + " " + this.adminId);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        }
      });
    },
    async KickPlayer() {
      let promptData = await this.createPrompt("Unban Player", [{field: "reason", title:"Motiv"}]);
      let reason = promptData ? promptData['reason'] : null;
      if (reason != null) {
        this.RconAction("kickplayer " + this.$route.params.id + " " + this.adminId + " " + reason);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    },
    async GiveMoney() {
      let promptData = await this.createPrompt("GIVE MONEY", [{field: "money", title:"Suma Oferita"}]);
      let money = promptData ? promptData['money'] : null;
      if (money != null) {
        this.RconAction("givemoney " + this.$route.params.id + " " + money);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      };
    },
    async GiveCoins() {
      let promptData = await this.createPrompt("GIVE COINS", [{field: "coins", title:"Suma Oferita"}]);
      let coins = promptData ? promptData['coins'] : null;
      if (coins != null) {
        this.RconAction("givecoins " + this.$route.params.id + " " + coins);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      };
    },
    async SetAdmin() {
      let promptData = await this.createPrompt("GIVE COINS", [{field: "admin", title:"Admin Level"}]);
      let admin = promptData ? promptData['admin'] : null;
      if (admin != null) {
        this.RconAction("setadmin " + this.$route.params.id + " " + admin);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      };
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
      return this.paginate(this.userHistory).sort( (x, y) => +new Date(y.time) - +new Date(x.time));
    },
    PunishLog() {
      return this.paginate(this.userPunishLog).sort((x, y) => +new Date(y.time) - +new Date(x.time));
    },
    LogsData() {
      return this.paginate(this.UserLogs)
    },
    GetSelectedPage() {
      return this.CurrentPage;
    },
    GetUserItems() {
      return this.paginate(this.UserItemsData);
    },
    HoursPlayed() {
      const hours = this.userData["hoursPlayed"];
      return hours ? hours.toFixed(2) : "0.00";
    },
    GetUserCharacterName() {
      return this.userData.userIdentity ? `${this.userData.userIdentity.firstName} ${this.userData.userIdentity.secondName}` : "Necunoscut";
    },
    GetUserAge() {
      return this.userData.userIdentity ? this.userData.userIdentity.age : "18";
    },
    BankMoney() {
      const money = this.userData.userMoney ? this.userData.userMoney.bankMoney : 0;
      const moneyFormat = new Intl.NumberFormat("us-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      });
      return moneyFormat.format(money);
    },
    CashMoney() {
      const money = this.userData.userMoney ? this.userData.userMoney.walletMoney : 0;
      const moneyFormat = new Intl.NumberFormat("us-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
      });
      return moneyFormat.format(money);
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
      const userResponse = await this.$axios.get(`https://api.fairplay-rp.ro/api/user/${this.$route.params.id}`);
      this.userData = userResponse.data;
  
      const punishResponse = await this.$axios.get(`https://api.fairplay-rp.ro/api/userpunishlog/${this.$route.params.id}`);
      this.userPunishLog = punishResponse.data;
  
      const historyResponse = await this.$axios.get(`https://api.fairplay-rp.ro/api/userhistory/${this.$route.params.id}`);
      this.userHistory = historyResponse.data;
  
      const vehsResponse = await this.$axios.get(`https://api.fairplay-rp.ro/api/uservehicles/${this.$route.params.id}`);
      this.userVehicles = vehsResponse.data;
    } catch (error) {
      console.error(error);
    }

    this.CanSeeProfileInfo();
    this.hasUserAdmin();
    this.VerifyUserBan();
    this.GetUserTag();
    this.GetUserInventory();
  }
};