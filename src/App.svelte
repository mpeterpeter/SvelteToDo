<script>
   import NewTaskToList from "./Components/NewTaskToList.svelte";
   import {count, todoDict, doneCount} from "./Components/store.js";
   import ShowNewTask from "./Components/ShowNewTask.svelte";
   import ProgressInfo from "./Components/ProgressInfo.svelte";

	let name = "Peter";
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2>Welcome to my ToDo App.</h2>
   <ProgressInfo doneCount={$doneCount} tasks={$todoDict}/>
   <NewTaskToList />

   {#each $todoDict as todo}
      <ShowNewTask task = {todo}/>
   {/each}
   <button 
      on:click={todoDict.cleanUp}
      on:click={() => doneCount.refresh($todoDict)}>Clean</button>
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