import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import CounterReducer from './CounterSlice'
import TodoReducer from './TodoSlice'

export default configureStore({
    reducer: {
        counter: CounterReducer,
        todo: TodoReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
});

// redux-thunk redux-saga
