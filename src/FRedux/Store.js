import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import CounterSlice from './CounterSlice'
import TodoSlice from './TodoSlice'

export default configureStore({
    reducer: {
        counter: CounterSlice,
        todo: TodoSlice,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    })
});
