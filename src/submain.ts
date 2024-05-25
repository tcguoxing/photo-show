import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'
// import './assets/loginPage.less'

const app = createApp(App)

app.use(router)

app.mount('.sub')
