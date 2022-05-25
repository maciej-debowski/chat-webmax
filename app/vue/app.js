import { createApp } from 'vue'
import App from './App.vue'

setTimeout(() => {
    const app = createApp(App).mount("#vue")    
}, 100)
