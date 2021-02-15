<script>
   import NewList from "./Components/NewList.svelte";
   import {dataStore} from "./Components/store.js";

	let name = "Peter";
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2>Welcome to my ToDo App.</h2>

   <NewList />

</main>

<style>
	main {
      display:grid;
      place-content: center;
		text-align: center;
		padding: 1em;
		width:100%;
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