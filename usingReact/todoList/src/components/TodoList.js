import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,deleteTodo,checkTodo}) => {
    const allTodos=todos.map((item,index)=>{
        return <Todo key={index} id={item.id} todoItem={item} index={index} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    })
  return (
    <section className='flex bg-orange-300 p-6 justify-center mb-5'>
        <ul >
            {allTodos}
        </ul>

    </section>
  )
}

export default TodoList
