<script>
   import NewTaskToList from "./Components/NewTaskToList.svelte";
   import {count, todoDict} from "./Components/store.js";
   import ShowNewTask from "./Components/ShowNewTask.svelte";

	let name = "Peter";
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Welcome to my ToDo App.</p>
   <NewTaskToList />

   {#each $todoDict as todo}
      <ShowNewTask task = {todo}/>
   {/each}
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