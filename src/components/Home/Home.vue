<template>
	<div class="w-screen h-screen">
		<nav class="bg-gray-800">
			<div class="navbar_container">
				<div class="nav_sm_container_child">
					<div class="navbar_sm_container_child_child">
						<button type="button" class="nav_sm_button" aria-controls="mobile-menu" aria-expanded="false">
							<span class="sr-only">Open main menu</span>
							<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
							<svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
					<div class="navbar_sm_container_second_child">
						<div class="navbar_sm_link_container">
							<div class="flex space-x-4">
								<router-link to="/" class="navbar_sm_links">Home</router-link>

								<router-link to="/" class="navbar_sm_links">Adviser</router-link>

								<router-link to="/" class="navbar_sm_links">Clients</router-link>

								<router-link to="/" class="navbar_sm_links">Create Payroll</router-link>

								<router-link to="/" class="navbar_sm_links">Create/Edit Payroll</router-link>

								<router-link to="/" class="navbar_sm_links">PDFs</router-link>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Mobile menu, show/hide based on menu state. -->
			<div class="sm:hidden" id="mobile-menu">
				<div class="px-2 pt-2 pb-3 space-y-1">
					<router-link to="/" class="" aria-current="page">Home</router-link>

					<router-link to="/" class="navbar_mobile_links">Adviser</router-link>

					<router-link to="/" class="navbar_mobile_links">Clients</router-link>

					<router-link to="/" class="navbar_mobile_links">Create Payroll</router-link>

					<router-link to="/" class="navbar_mobile_links">Create/Edit Payroll</router-link>

					<router-link to="/" class="navbar_mobile_links">PDFs</router-link>
				</div>
			</div>
		</nav>

		<div>
			<RouterView />
		</div>
	</div>
	<!-- <Login class="main_container" v-else></Login> -->
</template>

<script lang="ts" src="./Home.ts"></script>

<style scoped lang="scss" src="./Home.scss"></style>
