<script>
   import {dataStore} from "./store.js";

   let newListName = "";
   let selected = "";
   $: $dataStore.currentList = selected;

   const addNewList = (key) => {
      if(key === "Enter" && newListName){
         dataStore.addList(newListName);
         newListName = "";
      }
   }
</script>

<main>
   <select on:input={() => dataStore.setCurrentList($dataStore.currentList)} bind:value={selected} name="currentList" id="Svelte-Select">
      <option value="default" disabled selected>ListenAnzeige</option>
      {#if Object.keys($dataStore.lists)}
         {#each Object.keys($dataStore.lists) as list_name}
            <option value={list_name}>{list_name}</option>
         {/each}
      {/if}
   </select>
   <div>
      {selected}   
   </div>
   <div>
      <input on:keyup={e => addNewList(e.key)} type="text" bind:value={newListName}>
      <button on:click={() => addNewList("Enter")}>Add List</button>
   </div>
</main>