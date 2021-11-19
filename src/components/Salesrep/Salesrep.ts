import { defineComponent, ref, reactive } from 'vue';

import { useSalesrepStore } from '../../store/salesrep';

export default defineComponent({
	setup() {
		const salesrepStore = useSalesrepStore();

		const salesRepData = reactive({
			name: '',
			commission_percentage: '',
			tax_rate: '',
			bonuses: ''
		});

		const storeSalesRep = async () => {
			const salesRepDataToStore = {
				name: salesRepData.name,
				commission_percentage: salesRepData.commission_percentage,
				tax_rate: salesRepData.tax_rate,
				bonuses: salesRepData.bonuses
			};

			await salesrepStore.store(salesRepDataToStore);
		};
		return {
			salesRepData,
			storeSalesRep
		};
	}
});
