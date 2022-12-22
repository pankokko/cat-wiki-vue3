//この中で各vueファイルに必要な設定を読み込んでいる。

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
// import './assets/main.css'

const app = createApp(App);

app.use(router);

app.mount("#app");
