import { writable } from "svelte/store";

let _data = {
   id_count : 0,
   lists : {},
   currentList : "" 
};

function createData(){
   let local = JSON.parse(localStorage.getItem("data"));
   console.log(local);
   let data = writable(_data);

   if(local){
      data = writable(local);
   }

   const updateLocal = new_data => {
      localStorage.setItem("data",JSON.stringify(new_data));
   };

   data.updateToLocal = () => data.update(old_data => {
      updateLocal(old_data);
      return old_data;
   });

   data.addList = (list_name) => data.update(old_data => {
      old_data.lists[list_name] = [];
      old_data.currentList = list_name;
      updateLocal(old_data);
      return old_data;
   });

   data.deleteList = (list_name_id) => data.update(old_data => {
      delete old_data.lists[list_name_id];
      old_data.currentList = "default";
      updateLocal(old_data);
      return old_data;
   });

   data.setCurrentList = new_current => data.update(old_data => {
      old_data.currentList = new_current;
      updateLocal(old_data);
      return old_data;
   });
   
   return data;
}

export const dataStore = createData();

