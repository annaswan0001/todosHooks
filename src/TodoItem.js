import React from 'react'

export default function TodoItem({title, id, completed, handleCheck, handledDelete}) {
  return (
    <li className={completed?"todo completed":"todo"}>
      <label>
        <input
          type="checkbox"
          checked = {completed}
          onChange = {()=>{handleCheck(id)}}
        />
        <span>{title}</span>

        <i
          onClick = {()=>{handledDelete(id)}}
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  )
}