import { useState } from 'react';
import './App.css';
import Todos from './components/Todos'
import Todo from './models/todo'
import NewTodo from './components/NewTodo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText)

    setTodos((prev) => {
      return prev.concat(newTodo)
    })
  }

  const onRemoveHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter(item => item.id !== id)
    })
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}></NewTodo>
      <Todos onRemoveTodo={onRemoveHandler} items={todos}></Todos>
    </div>
  );
}

export default App;
