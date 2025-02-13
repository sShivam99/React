import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/TodoSlice";
const TodoInput = () => {
  const [todos, setTodos] = React.useState("");
  const dispatch = useDispatch();

  const AddTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(todos));
    setTodos("");
  };

  return (
    <div>
      <form onSubmit={AddTodo} className="space-x-3 mt-12">
        <input
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 
          focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 
          leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          name="title"
          placeholder="Enter a todo"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
        />
        <button className="p-2 bg-blue-950 text-white focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
