<template>
	<div class="main_container">
		<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div class="max-w-md w-full space-y-8">
				<div class="flex justify-center">
					<CashIcon class="h-40 w-40 text-gray-500"></CashIcon>
				</div>

				<div>
					<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up now to create payroll</h2>
				</div>
				<form class="mt-8 space-y-6" @submit.prevent="signup">
					<input type="hidden" name="remember" value="true" />
					<div class="rounded-md shadow-sm -space-y-px">
						<div>
							<label for="email-address" class="sr-only">Fullname</label>
							<input id="email-address" required class="input_textbox" placeholder="Fullname" v-model="signupData.name" />
						</div>
						<div>
							<label for="email-address" class="sr-only">Email</label>
							<input id="email-address" autocomplete="email" required class="input_textbox" placeholder="Email" v-model="signupData.email" />
						</div>
						<div>
							<label for="password" class="sr-only">Password</label>
							<input id="password" name="password" type="password" autocomplete="current-password" required class="input_textbox" placeholder="Password" v-model="signupData.password" />
						</div>
					</div>

					<div>
						<button type="submit" class="signup_button">Sign up</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./Signup.ts"></script>

<style scoped lang="scss" src="./Signup.scss"></style>
