import { defineComponent, ref, reactive } from 'vue';
import Salesrep from '../../models/Salesrep';
import { useSalesrepStore } from '../../store/salesrep';
import { Calendar, DatePicker } from 'v-calendar';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

export default defineComponent({
	components: {
		Calendar,
		DatePicker
	},
	setup() {
		dayjs.extend(isBetween);
		const salesrepStore = useSalesrepStore();
		const salesreps: any = ref<Salesrep>();
		const salesRepData = reactive({
			commission_percentage: '',
			tax_rate: '',
			bonuses: ''
		});
		const salesRepName = ref('Select Representative');
		const dropdown = ref(false);
		const range = reactive({
			start: new Date(),
			end: new Date()
		});
		const disabledStartDay = ref('');
		const disabledEndDay = ref('');

		const comData: any = reactive({
			commisionPer: '',
			taxRate: '',
			openingBalance: '',
			bonuses: '',
			clientName: '',
			eliteInsureCommision: ''
		});

		const commissionProcessing = () => {};

		const storeSalesRep = async () => {
			await salesrepStore.index();
			salesreps.value = salesrepStore.getSalesrep;
			console.log(salesreps.value);
		};

		const showSalesRepCreds = async (salesrep: any) => {
			salesRepData.commission_percentage = salesrep.commission_percentage;
			salesRepData.tax_rate = salesrep.tax_rate;
			salesRepData.bonuses = salesrep.bonuses;
			salesRepName.value = salesrep.name;
		};

		const payrollDate = () => {
			let firstDay = dayjs(Date.now()).startOf('month').toString();
			let endOfFirstCutOff = dayjs(Date.now()).startOf('month').add(14, 'day').toString();
			let startSecondCutOff = dayjs(endOfFirstCutOff).add(1, 'day').toString();
			let lastDay = dayjs(Date.now()).endOf('month').toString();

			console.log(lastDay);

			if (dayjs(Date.now()).isBetween(firstDay, endOfFirstCutOff)) {
				range.start = new Date(firstDay);
				range.end = new Date(endOfFirstCutOff);
				disabledStartDay.value = firstDay;
				disabledEndDay.value = endOfFirstCutOff;
			} else {
				range.start = new Date(startSecondCutOff);
				range.end = new Date(lastDay);
				disabledStartDay.value = startSecondCutOff;
				disabledEndDay.value = lastDay;
			}
		};

		payrollDate();
		storeSalesRep();

		return {
			salesreps,
			storeSalesRep,
			salesRepName,
			salesRepData,
			dropdown,
			range,
			showSalesRepCreds,
			disabledStartDay,
			disabledEndDay
		};
	}
});
