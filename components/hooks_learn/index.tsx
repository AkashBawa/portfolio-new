import React, { useReducer, useState } from 'react'

// const Index = () => {

//     const [text, setText] = useState('ab');
//     return (
//         <div>
//            <input onChange={(e) => setText(e.target.value)}/> {text}
//         </div>
//     )


//     // use reducer hook

// }


// use reducer hook

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, index: state.index + 1}
    }

    return  {...state}
}

const Index = () => {

    const [state , dispatch] = useReducer(reducer,  { index: 0, text: "My name is Akash"})
    return (
        <div>
           <input onChange={(e) => {dispatch({type: "INCREMENT"})}}/> {state.text} {state.index}
        </div>
    )


    // use reducer hook



}

export default Index
