import { createSlice, configureStore } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todo',
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                text: action.payload,
                id: Date.now(),
                done: false,
            };
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            state = state.filter((task) => task.id !== action.payload);
            return state;
        },
        toogleTask: (state, action) => {
            const oneTask = state.find((task) => task.id === action.payload);
            oneTask.done = !oneTask.done;
        }
    }
})

export const {addTask, deleteTask, toogleTask} = todoSlice.actions;

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
})