import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Element3 from 'element3'

// import './assets/main.css'
// import './assets/loginPage.less'

const app = createApp(App)

app.use(router)
app.use(Element3)

app.mount('.app')
