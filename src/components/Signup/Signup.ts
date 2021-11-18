import { defineComponent, reactive, ref } from 'vue';
import { CashIcon } from '@heroicons/vue/outline';
import { useAuthStore } from '../../store/auth';
import Cookies from 'js-cookie';
import { useRoute } from 'vue-router';
import router from '../../router';

export default defineComponent({
	components: {
		CashIcon
	},

	setup() {
		const authStore = useAuthStore();
		const route = useRoute();
		const signupData = reactive({
			name: '',
			email: '',
			password: ''
		});

		const signup = async () => {
			const signupCredentials = {
				name: signupData.name,
				email: signupData.email,
				password: signupData.password
			};

			await authStore.signup(signupCredentials);

			if (authStore.getAccessToken) {
				await Cookies.set('auth_token', authStore.getAccessToken, { expires: 7 });
				if (!route.name) {
					await router.push('/salesrep');
				} else {
					await router.push('/salesrep');
				}
			}
		};

		return { signup, signupData };
	}
});
