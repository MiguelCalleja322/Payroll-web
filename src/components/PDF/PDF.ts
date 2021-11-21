import { defineComponent, onMounted, ref, nextTick } from 'vue';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useRoute } from 'vue-router';
import { useCommissionStore } from '../../store/commission';
import dayjs from 'dayjs';

export default defineComponent({
	setup() {
		const route = useRoute();
		const commissionStore = useCommissionStore();

		const doc = new jsPDF('portrait', 'mm', 'a4');
		const loading = ref(false);
		const finalComData: any = ref('');
		const finalSalesData: any = ref('');

		onMounted(async () => {
			await commissionStore.show(route.params.slug);
			finalComData.value = await commissionStore.getCommission;
			finalSalesData.value = await commissionStore.getSales;

			await nextTick();
			loading.value = true;
			await nextTick();

			const page2Canvas = html2canvas;
			if (commissionStore.getCommission && commissionStore.getSales && loading) {
				await page2Canvas(document.querySelector('#app')).then(async canvas => {
					let img = canvas.toDataURL('image/png');
					await doc.addImage(img, 'PNG', 7, 13, 200, 200);
					await doc.save(`${finalComData.value.commission.sales_representative.name}_${finalComData.value.commission.payslip_date}.pdf`);
				});
			}
		});

		const changeDateToString = (dateTostr: any) => {
			return dayjs(dateTostr).format('MM/DD/YYYY');
		};

		const addCredit = (commission: any, bonus: any) => {
			return commission + bonus;
		};

		return {
			finalComData,
			changeDateToString,
			addCredit,
			finalSalesData,
			loading
		};
	}
});
