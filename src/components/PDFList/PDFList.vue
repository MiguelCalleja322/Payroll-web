<template>
	<div class="flex flex-grow justify-center w-full">
		<div class="bg-gray-300 w-1/2 p-3 text-center overflow-auto m-3" v-for="commissions in finalComData" :key="commissions.id">
			<ul v-for="commission in commissions" :key="commission.id">
				<li class="mb-3">
					<button class="save_button" @click="createPDF(commission.slug)">{{ commission.sales_representative.name }} - {{ commission.payslip_date }} - Payslip</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" src="./PDFList.ts"></script>

<style scoped lang="scss" src="./PDFList.scss"></style>
