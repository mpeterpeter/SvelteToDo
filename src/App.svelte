<script>
	import {writable} from "svelte/store";

	const count = writable(0);

	count.plus = () => {
		count.update(n => n+1);
	}
	count.minus = () => {
		count.update(n => n-1);
	}

	let name = "Peter";
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Welcome to my ToDo App.</p>
	<p>Der Count ist: {$count}</p>
	<button on:click={count.plus}>+1</button>
	<button on:click={count.minus}>-1</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>