import React, { useState } from 'react'
import {v4 as uuid} from 'uuid';


const Form = (props) => {
  
    let [input,setInput]=useState('');
    function inputChangeHandler(e){
      setInput(e.target.value);
      if(input.trim().length>0){
        setIsValid(true);
      }
  
    }

    let[isValid,setIsValid]=useState(true);
    

    function formSubmitHandler(e){
        e.preventDefault();//preventing from gettiNG SUBMITTED

        if(input.trim().length===0){
          setIsValid(false);
          return;
        }
        const newTodo={
            id:uuid(),
            todo:input,
            checked:false
        }
        props.addTodos(newTodo);
        // console.log(input);
        setInput('');
    }

  return (
    <form className='flex ml-10 ' onSubmit={formSubmitHandler}>
        {/* <input className=' bg-slate-100'  onChange={inputChangeHandler} type='text' placeholder='enter your taask' value={input}/> */}
        <div class="mb-5">
            {/* <label for="to" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Task</label> */}
            <input type="input" id="to" class="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter Your Task" onChange={inputChangeHandler} value={input}/>
        </div>
        <button type="submit" class="text-gray-900 h-7 mt-0.5 ml-4  bg-orange-300 px-5 rounded-md text-center hover:bg-orange-200 hover:border border-black">Add</button>
      
    </form>
  )
}

export default Form
