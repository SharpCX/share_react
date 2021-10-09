import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import {actions as CounterActions, selectCounter} from './CounterSlice'
import {actions as TodoActions, selectTodo} from './TodoSlice'


export default function (){
    const counter = useSelector(selectCounter)
    const dispatch = useDispatch()
    const todoList = useSelector(selectTodo)


    return (
        <div>
            <div>
                <input type='button' onClick={e=>dispatch(CounterActions.increase())} value='increase'/>
                <input type='button' onClick={e=>dispatch(CounterActions.decrease())} value='decrease'/>
                <div>Current Counter => {counter}</div>
            </div>
            <div>
                <input type='button' onClick={e=>{dispatch(TodoActions.increaseTodo())}} value='increaseTodo'/>
                <input type='button' onClick={e=>{dispatch(TodoActions.decreaseTodo())}} value='decreaseTodo'/>
                <ul>
                    {todoList.map(e => <li> {e} </li>)}
                </ul>
            </div>
        </div>
    )
}