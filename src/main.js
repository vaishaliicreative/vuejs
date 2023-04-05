import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import './assets/main.css'
import myModule from './modules/myModule.js';

const app = createApp(App)

app.mixin(myModule)

app.use(router)

app.mount('#app')
