import { createApp } from "vue";
import { createPinia } from "pinia";
import DefaultLayout from "./layout/DefaultLayout.vue";
import MainLayout from "./layout/MainLayout.vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import zhCn from "element-plus/es/locale/lang/zh-cn";

const app = createApp(App);
app.component("DefaultLayout", DefaultLayout);
app.component("MainLayout", MainLayout);
app.use(createPinia());
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");
