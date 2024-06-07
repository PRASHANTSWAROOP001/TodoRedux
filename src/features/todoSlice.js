import { createSlice,nanoid } from "@reduxjs/toolkit";

// reducers are known as Slice in redux toolkit
// We can use one method only to create here Hitesh will be using two methods
//  nano id for creating unique IDE
// createSlice for creating Reducers
// we have to provide initial state of store

const initialState = {
    todos:[{id:1,text:"hello world"}]
}

export const todoSlice = createSlice({
    name:"todo", // name of slice given by createSlice
    initialState, // intial state of every slice
    reducers:{
        addTodo: (state, action) =>{
            const todo = {
                id:nanoid(),
                text: action.payload //action and payload gives the text
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action)=>{
               state.todos = state.todos.filter((todo)=> todo.id != action.payload)
        },
        updateTodo: (state,action)=>{
            const {id, text} = action.payload

            const existingTodo = state.todos.find(todo => todo.id === id)

            if(existingTodo){
                existingTodo.text = text
            }
        }


    } // it has properties and methods. each method has action and state
})

// now we have to export two parts

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

// exporting individual functions so that it can be used.
export default todoSlice.reducer
// exporting all the reducers

// now we have to register/notify store that we have these reducers
