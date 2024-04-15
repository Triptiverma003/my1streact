import {configureStore} from '@reduxjs/toolkit';
import  todoReducer from '../feautres/todo/todoSlice';


export const store = configureStore({
    reducer : todoReducer 
})