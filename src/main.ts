import { createApp } from "vue";
import { store, key } from './store'
import VueApexCharts from "vue3-apexcharts";
import ElementPlus from 'element-plus'
import App from "./App.vue";
import router from "./router";
import 'element-plus/dist/index.css'
import './assets/customel.scss'
import './assets/styles/index.css'
import "./assets/main.css";
import OhVueIcon from "./icons";
const app = createApp(App);

app.use(router);

app.use(VueApexCharts);
app.use(ElementPlus)
app.use(store, key)
app.component("v-icon", OhVueIcon);

app.mount("#app");
