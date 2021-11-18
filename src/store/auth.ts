import { defineStore } from 'pinia';
import axios from 'axios';
const name = '/auth';

export const useAuthStore = defineStore('auth', {
	state: () => ({
		accessToken: null,
		error: null,
		user: null
	}),

	actions: {
		async Login(userCredentials: object) {
			await axios
				.post(`${name}/login`, userCredentials)
				.then(response => {
					this.error = null;
					this.accessToken = response.data.access_token;
				})
				.catch(error => {
					this.error = error;
				});
		},

		async signup(signupCredentials: object) {
			await axios
				.post(`${name}/signup`, signupCredentials)
				.then(response => {
					this.error = null;
					this.accessToken = response.data.access_token;
				})
				.catch(error => {
					this.error = error;
				});
		},

		async logout() {
			await axios.post(`${name}/logout`);
		},

		async get() {
			await axios
				.get(`${name}/get`)
				.then(response => {
					this.user = response.data.user;
				})
				.catch(error => {
					this.error = error;
				});
		}
	},

	getters: {
		getAccessToken(state) {
			return state.accessToken;
		},

		getError(state) {
			return state.error;
		},

		getUser(state) {
			return state.user;
		}
	}
});
