import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBacon, fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import VueApexCharts from "vue3-apexcharts";

import axios from 'axios';

library.add(fas, fab)

const app = createApp(App);
  app.use(router)
  app.use(VueApexCharts);
  app.use(LoadingPlugin)
  app.component("fa", FontAwesomeIcon)
  app.mount("#app");
  app.config.globalProperties.$axios = axios
