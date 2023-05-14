import Vue from "vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { setupCalendar, Calendar, DatePicker } from 'v-calendar';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import '@vuepic/vue-datepicker/dist/main.css';
import "@braks/vue-flow/dist/style.css";
import store from "./store/store.js"
import mitt from 'mitt';

const app = createApp(App);
const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router);
app.use(store)
app.use(VCalendar, {})
//app.component('Datepicker', Datepicker);
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)
app.mount("#app");

document.title = "Prosecutor Dashboard";
