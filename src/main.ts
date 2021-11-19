import { createApp } from 'vue';
import App from './App.vue';
import './index.sass';
import router from './router';
import axios from 'axios';
import Cookies from 'js-cookie';
import { createPinia } from 'pinia';
import VCalendar from 'v-calendar';
const app = createApp(App);

app.use(createPinia());

const API_ENDPOINT = import.meta.env.VITE_API_URL;

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

axios.interceptors.request.use(
	async config => {
		let authToken = Cookies.get('auth_token');
		config.headers = {
			Authorization: `Bearer ${authToken}`
		};

		config.url = `${API_ENDPOINT}/${config.url}`;
		return await config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

app.use(router);
app.use(VCalendar, {});
app.mount('#app');
