<script>
   import {dataStore} from "./store.js";

   let value = "";

   $: cL = $dataStore.currentList;

   const addTask = key => {
      if(key == "Enter" && value){
         $dataStore.id_count = $dataStore.id_count + 1;
         let newTask = {
            id : $dataStore.id_count.toString() + value,
            name : value,
            done : false
         }
         $dataStore.lists[cL] = [...$dataStore.lists[cL],newTask];
         value = "";
      }
   }
</script>

<div>
   <input 
      on:keyup={e=>addTask(e.key)}
      bind:value={value} 
      type="text">

      <button on:click={() => addTask("Enter")}>Add</button>
</div>

<style>
   div{
      width: min(500px,80vw);
      border: 1px blue solid;
      border-radius: 4px;
      margin-bottom: 30px;
   }
   input{
      width: min(400px,80%);
      margin:2px;
      border:none;
      outline:none;
      border-radius:3px;
      background-color: rgba(200,140,30,0.2)
   } 
   button{
      background-color: blue;
      color: white;
      font-weight: 800;
      margin:2px;
   }   
</style>