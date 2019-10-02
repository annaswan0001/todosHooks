import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";

export default function App() {
  const [todos, addTodo] = useState([
    { id: 1, title: "First todo", completed: false },
    { id: 2, title: "Second todo", completed: true }
  ]);

  const [todo, setTodo] = useState("");

  const addTodoToTheList = e => {
    if ((e.key === "Enter")) {
      addTodo([
        ...todos,
        {
          id: Date.now(),
          completed: false,
          title: todo
        }
      ]);
    }
  };

  useEffect(()=>{
    if(localStorage.getItem("todos")){
      const todos = (localStorage.getItem("todos"))
      addTodo(JSON.parse(todos))
    }

  }, [])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const handleCheck = (id)=>{
    addTodo(todos.map(todo=>  todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  const handledDelete = (id)=>
    addTodo(todos.filter(todo=> todo.id !== id))
  
  return (
    <div className="container">
      <h1>Todo app</h1>

      <div className="input-field">
        <input
          onChange={e => setTodo(e.target.value)}
          type="text"
          value={todo}
          onKeyPress={addTodoToTheList}
        />
        <label>Todo name</label>
      </div>

      <TodoList 
      handleCheck = {handleCheck}
      handledDelete = {handledDelete}
      todos={todos} />
    </div>
  );
}
