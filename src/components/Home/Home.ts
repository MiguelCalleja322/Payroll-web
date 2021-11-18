import Cookies from 'js-cookie';
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import User from '../../models/User';
import router from '../../router';
import { useAuthStore } from '../../store/auth';
import Login from '../Login/Login.vue';

export default defineComponent({
	components: {
		Login
	},
	setup() {
		const route = useRoute();
		const authToken: any = ref();
		const user: any = ref<User>();
		const authStore = useAuthStore();
		authToken.value = Cookies.get('authToken');

		if (authToken.value) {
			user.value = authStore.getUser;
		}

		const getAuthUser = async () => {
			await authStore.get();
			user.value = authStore.getUser;

			console.log(user.value);

			if (user.value && !route.name) {
				await router.push('/payroll');
			}
		};

		watch(
			() => route.name,
			() => {
				getAuthUser();
			}
		);

		getAuthUser();

		return {
			user
		};
	}
});
