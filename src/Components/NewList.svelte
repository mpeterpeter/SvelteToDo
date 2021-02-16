<script>
   import {dataStore} from "./store.js";

   let newListName = "";

   const addNewList = (key) => {
      if(key === "Enter" && newListName){
         dataStore.addList(newListName);
         newListName = "";
      }
   }
</script>

<style>
   main{
      width: 100%;
   }   
   div{
      width: 100%;
   }
</style>

<main>
   <div>
      <input id="listSelect" on:keyup={e => addNewList(e.key)} type="text" bind:value={newListName}>
      <button on:click={() => addNewList("Enter")}>New List</button>
   </div>

   <div>
      <select
         bind:value={$dataStore.currentList}
         name="currentList" 
         id="Svelte-Select">
         
         <option 
            value="default" 
            disabled >ListenAnzeige</option>
         
         {#if Object.keys($dataStore.lists)}
            {#each Object.keys($dataStore.lists) as list_name}
               
               <option 
                  value={list_name} >{list_name}</option>
            
            {/each}
         {/if}

      </select>  

      <button on:click={() => {dataStore.deleteList($dataStore.currentList);}}>delete List</button>
   </div>

</main>