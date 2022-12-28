<template>
  <Line
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Line } from 'vue-chartjs'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend} from 'chart.js'
ChartJS.register(CategoryScale,LinearScale,PointElement, LineElement,Title,Tooltip,Legend)

export default {
  name: 'BarChart',
  components: {Line},
  data() {
    return {
      loaded: true,
      chartData: {
        datasets: [
              {
                data: {},
                label: 'Wallet',
                backgroundColor: (ctx) => {
                  const canvas = ctx.chart.ctx;
                  const gradient = canvas.createLinearGradient(0, 80, 0, 280);
                  gradient.addColorStop(0, 'rgba(108, 95, 252, 1)' || 'rgba(108, 95, 252, 0.8)');
                  gradient.addColorStop(1, 'rgba(108, 95, 252, 1)' || 'rgba(108, 95, 252, 0.2) ');
                  return gradient;                       
                },
                pointHoverBackgroundColor: (ctx) => {
                  const canvas = ctx.chart.ctx;
                  const gradient = canvas.createLinearGradient(0, 80, 0, 280);
                  gradient.addColorStop(0, 'rgba(108, 95, 252, 1)'  || 'rgba(108, 95, 252, 0.8)');
                  gradient.addColorStop(1, 'rgba(108, 95, 252, 1)' || 'rgba(108, 95, 252, 0.2) ');
                  return gradient;                   
                },
                pointBorderColor: "#05c3fb",
                pointHoverBorderColor: (ctx) => {
                  const canvas = ctx.chart.ctx;
                  const gradient = canvas.createLinearGradient(0, 80, 0, 280);
                  gradient.addColorStop(0, 'rgba(108, 95, 252, 1)' || 'rgba(108, 95, 252, 0.8)');
                  gradient.addColorStop(1, 'rgba(108, 95, 252, 1)' || 'rgba(108, 95, 252, 0.2) ');
                  return gradient;                       
                },
                borderColor: '#05c3fb',
                pointBackgroundColor: '#fff',
                pointBorderColor: '#05c3fb" ',
                pointBorderWidth: 0,
                pointRadius: 0,
                pointHoverRadius: 3,
                borderWidth: 3,
                fill: 'origin'
            },
            // {
            //   label: 'Bank',
            //   data: {},
            //     pointHoverBackgroundColor: (ctx) => {
            //       const canvas = ctx.chart.ctx;
            //       const gradient = canvas.createLinearGradient(0, 80, 0, 280);
            //       gradient.addColorStop(0, 'rgba(5, 195, 251, 1)');
            //       gradient.addColorStop(1, 'rgba(5, 195, 251, 1)');

            //       return gradient;                        
            //     },
            //     pointHoverBorderColor: (ctx) => {
            //       const canvas = ctx.chart.ctx;
            //       const gradient = canvas.createLinearGradient(0, 80, 0, 280);
            //       gradient.addColorStop(0, 'rgba(5, 195, 251, 1)');
            //       gradient.addColorStop(1, 'rgba(5, 195, 251, 1)');
                  
            //       return gradient;                       
            //     },
            //     backgroundColor: 'transparent',
            //     borderColor: '#16cc35 ',
            //     pointBackgroundColor: '#16cc35',
            //     pointBorderColor: '#16cc35 ',
            //     pointBorderWidth: 0,
            //     pointRadius: 0,
            //     pointHoverRadius: 3,
            //     borderWidth: 3,
            //     fill: 'origin'
            // },
            // {
            //   label: 'Total',
            //   data: {},
            //     pointHoverBackgroundColor: (ctx) => {
            //       const canvas = ctx.chart.ctx;
            //       const gradient = canvas.createLinearGradient(0, 80, 0, 280);
            //       gradient.addColorStop(0, 'rgba(5, 195, 251, 1)');
            //       gradient.addColorStop(1, 'rgba(5, 195, 251, 1)');

            //       return gradient;                        
            //     },
            //     pointHoverBorderColor: (ctx) => {
            //       const canvas = ctx.chart.ctx;
            //       const gradient = canvas.createLinearGradient(0, 80, 0, 280);
            //       gradient.addColorStop(0, 'rgba(5, 195, 251, 1)');
            //       gradient.addColorStop(1, 'rgba(5, 195, 251, 1)');
                  
            //       return gradient;                       
            //     },
            //     backgroundColor: 'transparent',
            //     borderColor: '#ebd834 ',
            //     pointBackgroundColor: '#ebd834',
            //     pointBorderColor: '#ebd834 ',
            //     pointBorderWidth: 0,
            //     pointRadius: 0,
            //     pointHoverRadius: 3,
            //     borderWidth: 3,
            //     fill: 'origin'
            // }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#b0bac9",
                        autoSkip: true,
                    },
                    gridLines: {
                        display: true,
                        drawBorder: false,
                        zeroLineColor: 'rgba(142, 156, 173,0.1)',
                        color: "rgba(142, 156, 173,0.1)",
                    },
                    scaleLabel: {
                        display: false,
                        labelString: 'sales',
                        fontColor: 'transparent'
                    }
                }]
              },
            plugins: {
              legend: {
                display: false
              },
            }
        }
    }
  },
  async created() {
    try {
      const responseData = await this.$axios.get('http://localhost:5000/api/serverStats')
      let serverStats = responseData.data;

      this.chartData.datasets[0].data = serverStats['totalCash']
      // this.chartData.datasets[1].data = serverStats['totalBank']
      // this.chartData.datasets[2].data = serverStats['totalMoney']

      console.log(JSON.stringify(this.chartData.datasets[0].data))

    } catch (error) {
      console.log(error)
    }
  }
}
</script>