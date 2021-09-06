import React from 'react'
import Todo from '../models/todo'
import TodoItem from './TodoItem'
import classes from './Todos.module.css'
import TodosContext from '../store/todos-context'

const Todos: React.FC<{ items: Todo[], onRemoveTodo: (id: string) => void }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map(item => {
                return <TodoItem item={item} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}></TodoItem>
            })}
        </ul>
    )
}

export default Todos