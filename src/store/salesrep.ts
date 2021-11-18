import { defineStore } from 'pinia';
import axios from 'axios';
const name = 'auth/salesrep';

export const useSalesrepStore = defineStore('salesrep', {
	state: () => ({
		salesrep: null,
		error: null
	}),

	actions: {
		async store(userCredentials: object) {
			await axios.post(`${name}`, userCredentials);
		},

		async index() {
			await axios
				.get(`${name}`)
				.then(response => {
					this.error = null;
					this.salesrep = response.data.salesrep;
				})
				.catch(error => {
					this.error = error;
				});
		}
	},

	getters: {
		getSalesrep(state) {
			return state.salesrep;
		},

		getError(state) {
			return state.error;
		}
	}
});
