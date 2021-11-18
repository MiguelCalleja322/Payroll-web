import { defineComponent, ref, reactive } from 'vue';
import Salesrep from '../../models/Salesrep';
import { useSalesrepStore } from '../../store/salesrep';

export default defineComponent({
	setup() {
		const salesrepStore = useSalesrepStore();
		const salesrep: any = ref<Salesrep>();

		const salesRepData = reactive({
			name: '',
			commission_percentage: '',
			tax_rate: ''
		});

		const storeSalesRep = async () => {
			const salesRepDataToStore = {
				name: salesRepData.name,
				commission_percentage: salesRepData.commission_percentage,
				tax_rate: salesRepData.tax_rate
			};

			await salesrepStore.store(salesRepDataToStore);
		};
		return {
			salesRepData,
			storeSalesRep
		};
	}
});
