<script>
   import NewList from "./Components/NewList.svelte";
   import ProgressInfo from "./Components/ProgressInfo.svelte";
   import NewTaskToList from "./Components/NewTaskToList.svelte";
   import RenderToDo from "./Components/RenderToDo.svelte";
   import {dataStore} from "./Components/store.js";
   
   let doneCount = 0;
   $: cL = $dataStore.currentList;
   $: { 
      if(cL !== "default"){
         doneCount = $dataStore.lists[cL].filter(item => item.done).length
      }
   }
   $: {
      dataStore.updateToLocal($dataStore);
   }
</script>

<main>
	<h2>Welcome to my ToDo App.</h2>

   <NewList />

   {#if $dataStore.currentList !== "default"}
      <div class="task-list-container">
         <ProgressInfo {doneCount} tasks={$dataStore.lists[cL]}/>
         <NewTaskToList />

         {#if $dataStore.lists[cL]}
            {#each $dataStore.lists[cL] as task}
               <RenderToDo {task} />
            {/each}
         {/if}
      </div>
   {/if}
   
   
</main>

<style>
	main {
      display:grid;
      place-content: center;
		text-align: center;
		padding: 1em;
		width: min(600px,80vw);
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

   .task-list-container{
      margin: 30px 0;
      padding: 5px;
      border: 1px solid orangered;
   }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>