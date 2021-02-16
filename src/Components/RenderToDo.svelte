<script> 
   import {dataStore} from "./store.js";
   export let task = {};

   let input = "";

   const toggle = () => {
      if(task.done === false){
         task.done = true;
      }
      else{
         task.done = false;
      }
      dataStore.updateToLocal($dataStore);
   }
</script>

<div>
   {#if task.done}
      <input
         style="text-decoration:line-through;"
         id={task.id}
         value={task.name}
         bind:this={input}
         on:dblclick={()=>input.readOnly=false}
         on:keyup={e => {e.key=="Enter"?input.readOnly=true:null}}
         type="text"
         readonly>
   {:else}
      <input
         style="text-decoration:none;"
         id={task.id}
         value={task.name}
         bind:this={input}
         on:dblclick={()=>input.readOnly=false}
         on:keyup={e => {e.key=="Enter"?input.readOnly=true:null}}
         type="text"
         readonly>
   {/if}
   <button on:click={() => toggle(task)}>Done</button>
</div>

<style>
   div{
      width: min(500px,80vw);
   }
   input{
      width: min(400px,80%);
   }  
</style>
