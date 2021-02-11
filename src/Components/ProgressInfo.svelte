<script>
   import {count, todoDict} from "./store.js";
</script>

<h2>
   {$todoDict.filter(task => task.done == true).length} | {$count} Tasks done
</h2>