import { defineStore } from 'pinia';
import axios from 'axios';
const name = 'auth/commission';

export const useCommissionStore = defineStore('commission', {
	state: () => ({
		commission: null,
		client: null,
		sales: null,
		error: null
	}),

	actions: {
		async store(commissionData: object) {
			await axios.post(`${name}`, commissionData);
		},

		async index() {
			await axios
				.get(`${name}`)
				.then(response => {
					this.error = null;
					this.client = response.data.client;
					this.sales = response.data.sales;
					this.commission = response.data.commission;
				})
				.catch(error => {
					this.error = error;
				});
		}
	},

	getters: {
		getCommission(state) {
			return state.commission;
		},

		getClient(state) {
			return state.client;
		},

		getsales(state) {
			return state.sales;
		},

		getError(state) {
			return state.error;
		}
	}
});
