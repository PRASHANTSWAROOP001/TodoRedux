import {configureStore} from '@reduxjs/toolkit'
import todoReducers from '../features/todoSlice'

//strore requires knowledge about reducers
export const store = configureStore({
    reducer: todoReducers
})

// now we are going to learn about useSelctor and useDispatch