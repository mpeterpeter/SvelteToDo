<script>
   import {count, todoDict} from "./store.js";

   let value = "";

   const addTask = key => {
      if(key == "Enter" && value){
         count.plus();
         let newTask = {
            id : $count.toString() + value,
            name : value,
            done : false
         }
         todoDict.addTask(newTask);
         console.log($todoDict,$count)
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
      background-color: yellow;
      color: black;
      font-weight: 800;
      margin:2px;
   }   
</style>