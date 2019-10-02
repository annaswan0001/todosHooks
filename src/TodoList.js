import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos,  handleCheck, handledDelete}) {
  return (
    <ul>
      {todos.map(item => <TodoItem
       key={item.id}
       handleCheck = {handleCheck}
       handledDelete = {handledDelete}
        {...item} />)}
    </ul>
  )
}