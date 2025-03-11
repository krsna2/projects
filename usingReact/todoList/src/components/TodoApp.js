import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
// import { CiTextAlignCenter } from "react-icons/ci";
import {v4 as uuid} from 'uuid';
const TodoApp=()=>{
    let arrayDummy=JSON.parse(window.localStorage.getItem('todos')||"[]");


    let[todos,setTodos]=useState(arrayDummy);
    const addTodos=(todo)=>{
        setTodos([...todos,todo]);
    }
    
    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))

    },[todos])
    // const deleteTodo=(id)=>{
    //     const newTodo=todos.filter((todo)=>todo.id!==id);
    //     setTodos(newTodo);
    // }
    const deleteTodo=(id)=>{
        setTodos((prevState)=>{
            return prevState.filter((todo)=>todo.id!==id);
        });
    }

    const checkTodo=(id)=>{
        setTodos((prevState)=>{
            return prevState.map((item)=>item.id===id ? {...item,checked :!item.checked} : item)
        })   
    }

    return(
        <div>
            <h1 className="text-4xl text- text-center mb-4 bg-orange-300 font-bold">Todo List</h1>
            <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
            <Form addTodos={addTodos} todos={todos}/>
        </div>
    )
}
 export default TodoApp;