import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todoSlice'

function AddTodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    
    }
  return (
   <div >

    <form onSubmit={addTodoHandler}>
        <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)} className=' w-52 border-2 h-8 bg-slate-500 px-2 py-1'/>
    </form>

    <button type='submit' onClick={addTodoHandler} className=' text-lg px-3 py-1 bg-green-300 my-2 rounded-md hover:bg-green-500'> Add Todo</button>
    
   </div>
  )
}
// dispatch reduceres ko use karke store me changes karta hai
export default AddTodo