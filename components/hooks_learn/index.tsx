import React, { useReducer, useState } from 'react'
import useCounter from './useCounter'

const initialState = {
    email: "abab24210@gmail.com",
    name: "akash bawa",
    firstName: "akash"
}


// state is the current state and action will contain the data we pass
const reducer = (state: any, action: any) => {
    switch(action.type) {
        case "SET_FIELD":
            return {...state, [action.field]: action.value}
        case "RESET" :
            return {...initialState}
        default:
            return {...state}
    }
}


const Index = () => {


    const [state, dispatch] = useReducer(reducer, initialState);
    const {count, setCount} = useCounter();
    return (
        <div>
           
           <input placeholder='email' value={state.email} onChange={(e)=> dispatch({type: "SET_FIELD", field: "email", value: e.target.value})} /> {state.email}
           <input placeholder='name' value={state.name} onChange={(e)=> dispatch({type: "SET_FIELD", field: "name", value: e.target.value})}/> {state.name}
           <input placeholder='firstname' value={state.firstName} onChange={(e)=> dispatch({type: "SET_FIELD", field: "firstName", value: e.target.value})}/> {state.firstName}

           <button onClick={() => dispatch({type: "RESET"})} >Reset</button>

           <div>
                <button onClick={()=> setCount(count + 1)}>Increment</button>
                <button onClick={()=> setCount(count - 1)}>Decrement</button>
                <button onClick={()=> setCount(0)}>Reset</button>
                {count}
           </div>
        </div>
    )


    // use reducer hook



}

export default Index
