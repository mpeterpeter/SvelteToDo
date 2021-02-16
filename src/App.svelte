<script>
   import NewList from "./Components/NewList.svelte";
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
	<h1>ToDo</h1>

   <NewList />

   {#if $dataStore.currentList !== "default"}
      <div class="task-list-container">
         <h2 id="Progress"> {doneCount} | {$dataStore.lists[cL].length}</h2>
         <NewTaskToList />

         {#if $dataStore.lists[cL]}
            {#each $dataStore.lists[cL] as task}
               <RenderToDo {task} />
            {/each}
         {/if}
         <button style="margin: 15px 0 15px auto; width: 40%;" on:click={dataStore.cleanUpCurrentList}>CleanUp</button>
      </div>
   {:else}
      <div>No List selected.</div>
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
		font-size: 3em;
		font-weight: 100;
	}

   .task-list-container{
      margin: 30px 0;
      padding: 5px;
      border: 2px solid orangered;
      border-radius: 4px;
      padding: 5px 20px;
   }
   div{
      display: grid;
      place-content: center;
   }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>