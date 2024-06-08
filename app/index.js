import { createApp } from 'vue'
import App from './index.vue'

import WebApp from '@twa-dev/sdk'
WebApp.expand();

const app = createApp(App);
app.mount('body');