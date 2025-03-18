import { data } from "./todos";
const { createStore, combineReducers } = require("redux");

const ADD_TODO = "ADD_TODO"

const initState = data

export const addTodo = (todo)=>{
    return{
        type:ADD_TODO,
        payload:todo
    }
}

const todoReducer = (state=initState,action)=>{
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}

export const store = createStore(todoReducer)
