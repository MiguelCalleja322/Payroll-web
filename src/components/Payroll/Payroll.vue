<template>
	<div class="w-screen h-full flex">
		<div class="w-80 p-3 border-2 rounded-md m-3">
			<form @submit.prevent="">
				<input type="hidden" name="remember" value="true" />
				<div class="rounded-md shadow-sm">
					<div class="mb-3"><span>Select Representative:</span></div>
					<div class="mb-3">
						<button class="dropdown" @click="dropdown = !dropdown">{{ salesRepName }}</button>

						<div class="fixed w-80 z-10 bg-white rounded-b-md border-2" v-if="dropdown">
							<ul class="m-3 bottom-1 border-gray-600" v-for="salesrep in salesreps" :key="salesrep.id">
								<li class="border-b py-2" @click="showSalesRepCreds(salesrep), (dropdown = false)">{{ salesrep.name }}</li>
							</ul>
						</div>
					</div>

					<div class="w-full mr-2 z-0 mb-3">
						<input class="input_textbox" placeholder="Opening Balance" />
					</div>
					<div class="w-full mr-2 z-0 mb-3 flex">
						<input disabled v-model="salesRepData.commission_percentage" class="input_textbox mr-3" placeholder="Commission %" />
						<input disabled v-model="salesRepData.tax_rate" class="input_textbox" placeholder="Tax Rate" />
					</div>
					<div class="w-full mr-2 z-0 mb-3 flex">
						<input class="input_textbox mr-3" placeholder="Bonuses" />
						<input class="input_textbox" placeholder="No. of Clients" />
					</div>
					<div class="w-full mr-2 z-0 mb-3">
						<input disabled class="input_textbox" placeholder="Elitesure Commission" />
					</div>
				</div>

				<div class="mb-3"><span>Date Period:</span></div>
				<div class="rounded-md shadow-sm flex justify-center mb-3">
					<v-date-picker v-model="range" isRange="true" :available-dates="{ start: disabledStartDay, end: disabledEndDay }" />
				</div>

				<div class="flex mb-3"></div>

				<div>
					<button type="submit" class="save_button">Create Payroll</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts" src="./Payroll.ts"></script>

<style scoped lang="scss" src="./Payroll.scss"></style>
