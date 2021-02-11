<script>
   export let task = {};

   let input = "";

   const toggle = task => {
      if(task.done == true){
         input.style.textDecoration = "none";
         task.done = false
      }
      else{
         input.style.textDecoration = "line-through";
         task.done = true
      }
   }
</script>

<div>
   <input
      id={task.id}
      value={task.name}
      bind:this={input}
      on:dblclick={()=>input.readOnly=false}
      on:keyup={e => {e.key=="Enter"?input.readOnly=true:null}}
      type="text"
      readonly>

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
