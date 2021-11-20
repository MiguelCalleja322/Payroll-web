import { defineComponent, ref, reactive } from 'vue';
import Salesrep from '../../models/Salesrep';
import { useSalesrepStore } from '../../store/salesrep';
import { Calendar, DatePicker } from 'v-calendar';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { useCommissionStore } from '../../store/commission';

export default defineComponent({
	components: {
		Calendar,
		DatePicker
	},
	setup() {
		dayjs.extend(isBetween);

		const commissionStore = useCommissionStore();
		const salesrepStore = useSalesrepStore();
		const salesreps: any = ref<Salesrep>();
		const salesRepData: any = reactive({
			commission_percentage: 0,
			tax_rate: 0,
			bonuses: 0
		});
		const salesRepName = ref('Select Representative');
		const salesRepId = ref('');
		const dropdown = ref(false);
		const range = reactive({
			start: new Date(),
			end: new Date()
		});
		const disabledStartDay = ref('');
		const disabledEndDay = ref('');
		const comData: any = reactive({
			openingBalance: '',
			bonuses: '',
			clientName: '',
			eliteInsureCommision: '',
			numberOfClients: '',
			taxable: '',
			salesRepCommission: ''
		});

		const storeSalesRep = async () => {
			await salesrepStore.index();
			salesreps.value = salesrepStore.getSalesrep;
		};

		const showSalesRepCreds = async (salesrep: any) => {
			salesRepData.commission_percentage = salesrep.commission_percentage;
			salesRepData.tax_rate = salesrep.tax_rate;
			salesRepData.bonuses = salesrep.bonuses;
			salesRepName.value = salesrep.name;
			salesRepId.value = salesrep.id;
		};

		const payrollDate = () => {
			let firstDay = dayjs(Date.now()).startOf('month').toString();
			let endOfFirstCutOff = dayjs(Date.now()).startOf('month').add(14, 'day').toString();
			let startSecondCutOff = dayjs(endOfFirstCutOff).add(1, 'day').toString();
			let lastDay = dayjs(Date.now()).endOf('month').toString();

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

		const commissionProcessing = async () => {
			let commission: any = (salesRepData.commission_percentage / 100) * comData.openingBalance;
			let tax: any = (salesRepData.tax_rate / 100) * commission; //120
			let bonusTax: any = (2 / 100) * comData.bonuses; // 4
			let bonus: any = comData.bonuses - bonusTax.toFixed(); // 196
			let earnedCom: any = commission.toFixed(2) - tax;
			comData.salesRepCommission = earnedCom + bonus;
			comData.eliteInsureCommision = comData.openingBalance - earnedCom;
			comData.taxable = commission - tax;

			const commissionData = {
				sales_rep_id: salesRepId.value,
				commission: comData.salesRepCommission,
				bonus: comData.bonuses,
				name: comData.clientName,
				opening_balance: comData.openingBalance,
				elite_insure_commission: comData.eliteInsureCommision,
				payslip_date: `${dayjs(range.start).format('MM/DD/YYYY')} - ${dayjs(range.end).format('MM/DD/YYYY')}`
			};

			await commissionStore.store(commissionData);
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
			disabledEndDay,
			commissionProcessing,
			comData
		};
	}
});
