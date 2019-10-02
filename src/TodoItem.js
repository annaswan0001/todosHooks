import React, {useContext} from 'react'
import {Context} from './context'

export default function TodoItem({title, id, completed}) {

  const {handleCheck, handledDelete} = useContext(Context)
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