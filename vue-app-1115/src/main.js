import { createApp } from "vue"; // node_modules 資料夾載入 vue 物件的 createApp 方法
import router from "./router";
import App from "./App.vue"; // 匯入 App.vue 進來

// import "./assets/main.css";

createApp(App).use(router).mount("#app");
