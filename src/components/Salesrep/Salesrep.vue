<template>
	<div class="w-screen flex justify-center">
		<div class="w-1/4">
			<form class="mt-8" @submit.prevent="storeSalesRep">
				<input type="hidden" name="remember" value="true" />
				<div class="rounded-md shadow-sm">
					<div class="mb-3">
						<input class="input_textbox" placeholder="Fullname" v-model="salesRepData.name" />
					</div>
					<div class="mb-3">
						<input class="input_textbox" placeholder="Commision Rate" v-model="salesRepData.commission_percentage" />
					</div>
					<div class="mb-3">
						<input class="input_textbox" placeholder="Tax Rate" v-model="salesRepData.tax_rate" />
					</div>
				</div>

				<div>
					<button type="submit" class="save_button">Save Representative</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts" src="./Salesrep.ts"></script>

<style scoped lang="scss" src="./Salesrep.scss"></style>
