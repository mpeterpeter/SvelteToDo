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
        deleteTask: task => update(list => list.filter(t => t.id != task.id))
    };
}

const count = createCount();
const todoDict = createStore();

export {count, todoDict};