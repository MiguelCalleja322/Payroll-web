<template>
	<div v-if="loading">
		<div class="text-center text-lg text-indigo-900 mb-3">Buyer Created Tax Invoice</div>
		<div class="text-center p-3 bg-gray-600 text-white flex justify-between mb-3">
			<div>Adviser No.: {{ finalComData.commission.sales_representative.id }} {{ finalComData.commission.sales_representative.name }}</div>
			<div>{{ finalComData.commission.payslip_date }}</div>
		</div>
		<div class="flex justify-around mb-10 p-3">
			<div class="flex">
				<div class="mr-3">
					<strong><u>Produced on:</u></strong>
				</div>
				<div>
					<div>{{ changeDateToString(finalComData.commission.created_at) }}</div>
					<div>{{ finalComData.commission.sales_representative.name }}</div>
					<div>Address</div>
				</div>
			</div>
			<div class="text-center">
				<strong><u>Produced by:</u></strong>
				<div>Eliteinsure</div>
				<div>1C/39 Mackelvie Street Grey Lynn 1021 Auckland New Zealand</div>
				<div>+6493789676</div>
				<div>www.eliteinsure.com</div>
			</div>
			<div>
				<div class="flex">
					<div class="mr-3">
						<div>
							<strong><u>Statement Week:</u></strong>
						</div>
						<div>
							<strong><u>Statement Date:</u></strong>
						</div>
						<div>
							<strong><u>Payment Type:</u></strong>
						</div>
						<div>
							<strong><u>Termination Date:</u></strong>
						</div>
						<div>
							<strong><u>IRD</u></strong>
						</div>
					</div>
					<div>
						<div>test</div>
						<div>{{ changeDateToString(finalComData.commission.created_at) }}</div>
						<div>Credit Card</div>
						<div>{{ changeDateToString(finalComData.commission.created_at) }}</div>
						<div>11041994</div>
					</div>
				</div>
			</div>
		</div>

		<div class="w-full p-3">
			<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md rounded">
				<div class="rounded-t mb-0 px-4 py-3 border-0">
					<div class="flex flex-wrap items-center">
						<div class="relative w-full px-4 max-w-full flex-grow flex-1">
							<h3 class="font-semibold text-base text-blueGray-700">Buyer Created Tax Invoice:</h3>
						</div>
					</div>
				</div>

				<div class="block w-full overflow-x-auto">
					<table class="items-center bg-transparent w-full border-collapse">
						<thead>
							<tr>
								<th class="table_header">Date</th>
								<th class="table_header">Description</th>
								<th class="table_header">Debit</th>
								<th class="table_header">Credit</th>
								<th class="table_header">Balance</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<th class="">{{ changeDateToString(finalComData.commission.created_at) }}</th>
								<td class="table_item">Commission</td>
								<td class="table_item">$0</td>
								<td class="table_item">${{ finalComData.commission.commission }}</td>
								<td class="table_item">${{ finalComData.commission.commission }}</td>
							</tr>
							<tr>
								<th class="">{{ changeDateToString(finalComData.commission.created_at) }}</th>
								<td class="table_item">Bonus</td>
								<td class="table_item">$0</td>
								<td class="table_item">${{ finalComData.commission.bonus }}</td>
								<td class="table_item">${{ finalComData.commission.bonus }}</td>
							</tr>
							<tr>
								<th class="table_item text-left text-blueGray-700"></th>
								<td class="table_item text-right">
									<strong>TOTALS:</strong>
								</td>
								<td class="table_item">$0</td>
								<td class="table_item">${{ addCredit(finalComData.commission.commission, finalComData.commission.bonus) }}</td>
								<td class="table_item">${{ addCredit(finalComData.commission.commission, finalComData.commission.bonus) }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="w-full p-3">
			<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md rounded">
				<div class="rounded-t mb-0 px-4 py-3 border-0">
					<div class="flex flex-wrap items-center">
						<div class="relative w-full px-4 max-w-full flex-grow flex-1">
							<h3 class="font-semibold text-base text-blueGray-700">Agency Account Details:</h3>
						</div>
					</div>
				</div>

				<div class="block w-full overflow-x-auto">
					<table class="items-center bg-transparent w-full border-collapse">
						<thead>
							<tr>
								<th class="table_header">Date</th>
								<th class="table_header">Description</th>
								<th class="table_header">Debit</th>
								<th class="table_header">Credit</th>
								<th class="table_header">Balance</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<th class="text-sm">{{ changeDateToString(finalComData.commission.created_at) }}</th>
								<td class="table_item">Opening Balance</td>
								<td class="table_item">$0</td>
								<td class="table_item">${{ finalSalesData.opening_balance }}</td>
								<td class="table_item">${{ finalSalesData.opening_balance }}</td>
							</tr>
							<tr>
								<th class="text-sm">{{ changeDateToString(finalComData.commission.created_at) }}</th>
								<td class="table_item">Closing Balance</td>
								<td class="table_item">$0</td>
								<td class="table_item">${{ finalSalesData.opening_balance }}</td>
								<td class="table_item">${{ finalSalesData.opening_balance }}</td>
							</tr>
							<tr>
								<th class="table_item text-left text-blueGray-700"></th>
								<td class="table_item text-right">
									<strong>TOTALS:</strong>
								</td>
								<td class="table_item">$0</td>
								<td class="table_item">${{ addCredit(finalSalesData.opening_balance, 0) }}</td>
								<td class="table_item">${{ addCredit(finalSalesData.opening_balance, 0) }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>

		<div class="text-center text-lg text-indigo-900 mb-3">Buyer Created Tax Invoice</div>
		<div class="text-center p-3 bg-gray-600 text-white flex justify-between mb-3">
			<div>Adviser No.: {{ finalComData.commission.sales_representative.id }} {{ finalComData.commission.sales_representative.name }}</div>
		</div>
		<div class="text-center p-3 bg-gray-600 text-white flex justify-between mb-3">
			<div>Production</div>
			<div>{{ changeDateToString(finalSalesData.created_at) }}</div>
		</div>
		<div class="w-full p-3">
			<div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md rounded">
				<div class="rounded-t mb-0 px-4 py-3 border-0">
					<div class="flex flex-wrap items-center">
						<div class="relative w-full px-4 max-w-full flex-grow flex-1">
							<h3 class="font-semibold text-base text-blueGray-700">Agency Account Details:</h3>
						</div>
					</div>
				</div>

				<div class="block w-full overflow-x-auto">
					<table class="items-center bg-transparent w-full border-collapse">
						<thead>
							<tr>
								<th class="table_header">Client</th>
								<th class="table_header">Annual Premium</th>
								<th class="table_header">Commission</th>
								<th class="table_header">GST</th>
								<th class="table_header">Balance</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<th class="text-sm">{{ finalSalesData.client.name }}</th>
								<td class="table_item">${{ finalSalesData.opening_balance }}</td>
								<td class="table_item">${{ finalComData.commission.commission }}</td>
								<td class="table_item">$0</td>
								<td class="table_item">${{ finalComData.commission.commission }}</td>
							</tr>
							<tr>
								<th class="text-sm">Total</th>
								<td class="table_item">${{ finalSalesData.opening_balance }}</td>
								<td class="table_item">${{ finalComData.commission.commission }}</td>
								<td class="table_item">$0</td>
								<td class="table_item">${{ finalComData.commission.commission }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" src="./PDF.ts"></script>

<style lang="scss" src="./PDF.scss"></style>
