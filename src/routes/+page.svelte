<script lang="ts">
	import type Transaction from '../types/Transaction';
	import { allTransactions } from '../data/transactions-2023';

	class DaySummary {
		date: Date;
		weekday: string;
		isWeekend: boolean;
		transactions: Transaction[];

		constructor(date: Date, tx: Transaction) {
			const weekday = [
				'Sunday',
				'Monday',
				'Tuesday',
				'Wednesday',
				'Thursday',
				'Friday',
				'Saturday'
			];

			this.date = date;
			this.weekday = weekday[this.date.getDay()];
			this.isWeekend = this.date.getDay() === 0 || this.date.getDay() === 6;
			this.transactions = [tx];
		}
	}

	const beginDate = new Date('2023-01-01');
	const endDate = new Date('2023-02-01');
	const octoberTx = allTransactions
		.filter((tx) => tx.transactionDay >= beginDate && tx.transactionDay < endDate)
		.toSorted((txA, txB) => txA.transactionDay - txB.transactionDay);

	const daySummaries = octoberTx.reduce((acc: DaySummary[], tx: Transaction) => {
		if (acc.length > 0) {
			console.debug(
				acc[acc.length - 1].date.getTime(),
				tx.transactionDay.getTime(),
				acc[acc.length - 1].date.getTime() === tx.transactionDay.getTime()
			);
		}

		let dayData = acc.find((day) => day.date.getTime() == tx.transactionDay.getTime());

		if (dayData) {
			dayData.transactions.push(tx);
		} else {
			dayData = new DaySummary(tx.transactionDay, tx);
			acc.push(dayData);
		}
		return acc;
	}, []);
</script>

<h1>Welcome to SvelteKit</h1>
<p>{allTransactions.length} transactions found</p>
<p>{octoberTx.length} transactions in October</p>

<ul>
	{#each daySummaries as daySummary}
		{#each daySummary.transactions as tx}
			<li>
				<span class:weekend={daySummary.isWeekend}
					>[{daySummary.weekday} {daySummary.date.toLocaleDateString()}]</span
				>: <strong>{tx.amount}</strong> at {tx.description}
			</li>
		{/each}
		<li>----</li>
	{/each}
</ul>

<style>
	.weekend {
		color: #bc563a;
	}
</style>
