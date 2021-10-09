import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    todoList:[]
}

const TodoSlice = createSlice({
    'name': 'todo',
    initialState,
    reducers: {
        increaseTodo: (state, action) => {
            state.todoList.push("cxxxx")
        },
        decreaseTodo: (state, action) => {
            state.todoList.pop()
        }
    },
    extraReducers: (builder) => {

    }
})

export const actions = TodoSlice.actions
export const selectTodo = (state)=>state.todo.todoList


export default TodoSlice.reducer