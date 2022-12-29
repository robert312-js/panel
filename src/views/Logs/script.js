import Header from '../../components/Header.vue'
import Sidebar from '../../components/Sidebar.vue';

export default {
  data() {
    return {
      loaded: false,
      TotalMoney: 0,
      CashMoney: 0,
      BankMoney: 0,
      MediumMoney: 0,
      chartOptions: {
        chart: {
          id: 'vuechart-example',
          fill: {
            type: 'gradient'
          },
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'datetime',
        },
       },
       series: [
          {
            name: 'Cash money',
            data: []
          },
          {
            name: 'Bank Money',
            data: []
          },
          {
            name: 'Total Money',
            data: []
          },
        ]
      }
  },
  components: {
    "Logs-Header": Header,
    "Logs-Sidebar": Sidebar,
  },
  methods: {
    async fetchStatsData() {
      try {
        this.series[0].data = []
        this.series[1].data = []
        this.series[2].data = []
        const responseData = await this.$axios.get('http://localhost:5000/api/serverStats')
        let serverStats = responseData.data;
        for (const data of Object.keys(serverStats['totalBank'])) {
          let bank = Math.floor(serverStats['totalBank'][data].money)
          let time = serverStats['totalBank'][data].time;
          this.series[0].data.push([time, bank])
        }
        for (const data of Object.keys(serverStats['totalCash'])) {
          let cash = Math.floor(serverStats['totalCash'][data].money)
          let time = serverStats['totalCash'][data].time;
          this.series[1].data.push([time, cash])
        }
        for (const data of Object.keys(serverStats['totalMoney'])) {
          let total = Math.floor(serverStats['totalMoney'][data].money)
          let time = serverStats['totalMoney'][data].time;

          this.series[2].data.push([time, total])
        }
        
        this.MediumMoney = serverStats['mediumMoney'].toLocaleString(undefined, { minimumFractionDigits: 0 });
        this.BankMoney = serverStats['maxBankMoney'].toLocaleString(undefined, { minimumFractionDigits: 0 });
        this.CashMoney = serverStats['maxCashMoney'].toLocaleString(undefined, { minimumFractionDigits: 0 });
        let totalMoney = Math.floor(serverStats['maxBankMoney'] + serverStats['maxCashMoney'])
        this.TotalMoney = totalMoney.toLocaleString(undefined, { minimumFractionDigits: 0 });
        this.loaded = true;
      } catch (error) {
        console.log(error)
      }
    }
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
    this.fetchStatsData();
  }
}