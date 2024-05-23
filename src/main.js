import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import App from '@/App.vue'

import '@/assets/scss/style.scss'
import 'primevue/resources/themes/lara-light-teal/theme.css'

createApp(App).use(PrimeVue).use(ToastService).mount('#app')
