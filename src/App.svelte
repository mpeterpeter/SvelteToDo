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