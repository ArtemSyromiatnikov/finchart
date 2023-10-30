<script lang="ts">
	import Transaction from '../types/Transaction';
	import { allTransactions } from '../data/transactions-2023';

	const beginDate = new Date('2023-10-01');
	const endDate = new Date('2023-11-01');
	const octoberTx = allTransactions
		.filter((tx) => tx.transactionDay >= beginDate && tx.transactionDay < endDate)
		.toSorted((txA, txB) => txA.transactionDay - txB.transactionDay);
</script>

<h1>Welcome to SvelteKit</h1>
<p>{allTransactions.length} transactions found</p>
<p>{octoberTx.length} transactions in October</p>

<ul>
	{#each octoberTx as tx}
		<li>
			[{tx.transactionDay.toLocaleDateString()}]: <strong>{tx.amount}</strong> at {tx.description}
		</li>
	{/each}
</ul>
