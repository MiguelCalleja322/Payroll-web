import { defineComponent, ref, onMounted, nextTick } from 'vue';
import router from '../../router';
import { useRoute } from 'vue-router';
import { useCommissionStore } from '../../store/commission';

export default defineComponent({
	setup() {
		const commissionStore = useCommissionStore();
		const finalComData: any = ref('');

		onMounted(async () => {
			await commissionStore.index();
			finalComData.value = commissionStore.getCommission;
		});

		const createPDF = (slug: any) => {
			router.push({
				name: 'pdf',
				params: { slug: slug }
			});
		};

		return {
			finalComData,
			createPDF
		};
	}
});
