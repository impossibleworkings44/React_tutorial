//useReducer(simple state & action)

//reducer is like instead  of having multiple setState  in different functions , u can have them all on one place
//useReducer(reducer,initialState)
//reducer=(state,action)
//action -is like any instruction

import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}




function CounterReducer() {
    //destructuring array
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count : {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

        </div>
    )
}

export default CounterReducer
