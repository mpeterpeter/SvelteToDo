import { writable } from "svelte/store";


function createCount() {
    const {set, subscribe, update } = writable(0);

    return {
        subscribe,
        reset: () => set(0),
        plus: () => update(n => n + 1),
        minus: () => update(n => n - 1)
    };
}

function createStore() {
    const {set, subscribe, update } = writable([]);

    return {
        subscribe,
        reset: () => set([]),
        addTask: task => update(list => [...list, task]),
        deleteTask: task => update(list => list.filter(t => t.id != task.id)),
        cleanUp : () => update(list => list.filter(item => item.done == false))
    };
}

function createDoneCount() {
   const {set, subscribe} = writable(0);

   return {
      subscribe,
      refresh : items => set(items.filter(item => item.done == true).length),
      reset : () => set(0)
   };
}

const count = createCount();
const todoDict = createStore();
const doneCount = createDoneCount();

export {count, todoDict, doneCount}; 