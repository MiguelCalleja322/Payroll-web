import { defineComponent, reactive } from 'vue';
import { LockClosedIcon, CashIcon } from '@heroicons/vue/outline';
import { useAuthStore } from '../../store/auth';
import Cookies from 'js-cookie';
import router from '../../router';
import { useRoute } from 'vue-router';
export default defineComponent({
	setup() {
		const authStore = useAuthStore();
		const loginData = reactive({
			email: '',
			password: ''
		});
		const route = useRoute();

		const login = async () => {
			const userCredentials = {
				email: loginData.email,
				password: loginData.password
			};

			await authStore.Login(userCredentials);

			if (authStore.getAccessToken) {
				await Cookies.set('auth_token', authStore.getAccessToken, { expires: 7 });
				if (!route.name) await router.push('/payroll');
				else await router.push('/');
			}
		};

		return {
			login,
			loginData
		};
	},
	components: {
		LockClosedIcon,
		CashIcon
	}
});
