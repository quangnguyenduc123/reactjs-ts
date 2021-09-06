import React from 'react'
import Todo from '../models/todo'
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{item: Todo, onRemoveTodo: () => void}> = (props) =>{

    return (
        <li onClick={props.onRemoveTodo} className = {classes.item} key = {props.item.id}>{props.item.text}</li>
    )
}

export default TodoItem