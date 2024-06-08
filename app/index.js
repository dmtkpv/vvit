import { createApp } from 'vue'
import App from './index.vue'

import WebApp from '@twa-dev/sdk'
WebApp.ready();
WebApp.expand();

const app = createApp(App);
app.mount('body');