import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles/global.scss";
import router from "./router";
import store from "./store";
import { createI18n } from "vue-i18n";
import Toastification from "vue-toastification";
import "vue-toastification/dist/index.css";
import en from "./locales/en.json";
import vi from "./locales/vi.json";

const messages = {
  en: en,
  vi: vi,
};

const i18n = createI18n({
  locale: "vi", // set locale
  messages, // set locale messages
});

createApp(App)
  .use(store)
  .use(router)
  .use(Toastification)
  .use(i18n)
  .mount("#app");
