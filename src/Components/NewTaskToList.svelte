<script>
   import {count, todoDict} from "./store.js";

   let input = "";

   const addTask = e => {
      if(e.key == "Enter"){
         count.plus();
         let newTask = {
            id : $count.toString() + input.value,
            name : input.value,
            done : false
         }
         todoDict.addTask(newTask);
         console.log($todoDict,$count)
         input.value = "";
      }
   }
</script>

<div>
   <p>Object: {input.value}</p>
   <input 
      on:keyup={e=>addTask(e)}
      bind:this={input} 
      type="text"><button>Done</button>
</div>