import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
    {
        id: 1,
        text: "Hello Users"
    }
    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const todo={
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo: (state, action)=>{
            state.todos = state.todos.filter(todo=>todo.id !== action.payload)
        }
    }
})

export default todoSlice.reducer
export const {addTodo, deleteTodo} = todoSlice.actions;  //exporting the actions