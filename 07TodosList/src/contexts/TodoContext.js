import {createContext,useContext} from 'react';

export const TodosContext = createContext({
    todos:[{
        id:1,
        title:"",
        completed:false
        }
    ],

    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}

});

export const useTodos =()=>{
    return useContext(TodosContext);
}

export const TodosProvider=TodosContext.Provider;