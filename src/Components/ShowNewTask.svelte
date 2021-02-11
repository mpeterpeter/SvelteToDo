<script>
   export let task = {};

   let input = "";
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
   <button>Done</button>
</div>
