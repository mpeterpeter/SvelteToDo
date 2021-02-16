import { writable } from "svelte/store";

let _data = {
   id_count : 0,
   lists : {},
   currentList : "" 
};

function createData(){
   let data = writable(_data);
   let local = JSON.parse(localStorage.getItem("data"));

   if(local){
      data = writable(local);
   }

   const _updateLocal = new_data => {
      localStorage.setItem("data",JSON.stringify(new_data));
   };

   data.updateToLocal = old_data => {
      data.update(d => d);
      _updateLocal(old_data);
   };

   data.addList = (list_name) => data.update(old_data => {
      old_data.lists[list_name] = [];
      old_data.currentList = list_name;
      _updateLocal(old_data);
      return old_data;
   });

   data.deleteList = (list_name) => data.update(old_data => {
      if(list_name !== "default"){
         delete old_data.lists[list_name];
         old_data.currentList = "default";
         _updateLocal(old_data);
         return old_data;
      }
      else{
         alert("No List left!");
         return old_data;
      }
   });

   data.setCurrentList = new_current => data.update(old_data => {
      old_data.currentList = new_current;
      _updateLocal(old_data);
      return old_data;
   });
   
   return data;
}

export const dataStore = createData();

