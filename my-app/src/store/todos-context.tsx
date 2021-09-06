import React, { useState } from 'react'
import Todo from '../models/todo'

type TodosContextObj = {
    items: Todo[],
    addTodo: (text: string) => void,
    removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: () => { },
    removeTodo: (id: string) => { }
})

const TodoContextProvider: React.FC = (props) => {

    const [todos, setTodos] = useState<Todo[]>([])

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText)

        setTodos((prev) => {
            return prev.concat(newTodo)
        })
    }

    const onRemoveHandler = (id: string) => {
        setTodos((prev) => {
            return prev.filter(todo => todo.id !== id)
        })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: onRemoveHandler
    }

    return <TodosContext.Provider value ={ contextValue }> { props.children } </TodosContext.Provider>
}

export default TodoContextProvider