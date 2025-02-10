import TodoForm from "./components/Todoform";
import { TodosProvider } from "./contexts";
import {useEffect,useState} from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(prevTodo.id === id ? todo : prevTodo));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(prevTodo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map(
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    setTodos(storedTodos)
  },[])

  useEffect(()=>{
    JSON.stringify(localStorage.setItem('todo',todos))
  },[todos])

  return (
    <TodosProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodosProvider>
  );
}

export default App;
