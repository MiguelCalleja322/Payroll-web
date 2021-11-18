<template>
	<div class="main_container">
		<div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div class="max-w-md w-full space-y-8">
				<div class="flex justify-center">
					<CashIcon class="h-40 w-40 text-gray-500"></CashIcon>
				</div>

				<div>
					<h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
				</div>
				<form class="mt-8 space-y-6" @submit.prevent="login">
					<input type="hidden" name="remember" value="true" />
					<div class="rounded-md shadow-sm -space-y-px">
						<div class="mb-3">
							<label for="email-address" class="sr-only">Email address</label>
							<input id="email-address" name="email" type="email" autocomplete="email" required class="input_textbox" placeholder="Email Address" v-model="loginData.email" />
						</div>
						<div>
							<label for="password" class="sr-only">Password</label>
							<input id="password" name="password" type="password" autocomplete="current-password" required class="input_textbox" placeholder="Password" v-model="loginData.password" />
						</div>
					</div>

					<div>
						<button type="submit" class="login_button">
							<span class="absolute left-0 inset-y-0 flex items-center pl-3">
								<LockClosedIcon class="h-5 w-5 text-gray-500 group-hover:text-white"></LockClosedIcon>
							</span>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./Login.ts"></script>

<style scoped lang="scss" src="./Login.scss"></style>
