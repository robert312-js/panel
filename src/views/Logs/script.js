import Header from '../../components/Header.vue'
import Sidebar from '../../components/Sidebar.vue';
import LineChart from '../../components/Status.vue';

export default {
  data() {
    return {

    };
  },
  components: {
    "Logs-Header": Header,
    "Logs-Sidebar": Sidebar,
    LineChart,
  },
  methods: {},
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
  }
}