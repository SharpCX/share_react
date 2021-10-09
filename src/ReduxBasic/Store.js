import { createStore } from 'redux'
import counterReducer from "./Reducer";

let store = createStore(counterReducer)
export default store