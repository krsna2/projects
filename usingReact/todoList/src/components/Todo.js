import React from 'react'
import { BsTrashFill } from 'react-icons/bs'

const Todo = ({deleteTodo,checkTodo,todoItem}) => {
    const inputChangeHandler=(id)=>{
        checkTodo(id);
    }
    function deleteTodoHandler(id){
        deleteTodo(id);
    }
  return (
    <div >
        <li style={{textDecoration:`${todoItem.checked?'line-through':''}`}} className='bg-orange-200 mb-4 p-2 rounded-md'>
            <input type='checkbox' onChange={()=>{inputChangeHandler(todoItem.id)}} defaultChecked={todoItem.checked}/>
            <p className='text-xs' >--&gt; ID:{todoItem.id}-- </p>
            <p className='text-xl ml-5 mt-2'>Task:{todoItem.todo} <span  className='text-sm cursor-pointer' onClick={()=>deleteTodoHandler(todoItem.id)}><BsTrashFill/></span></p>
        </li>
    </div>
  )
}

export default Todo
