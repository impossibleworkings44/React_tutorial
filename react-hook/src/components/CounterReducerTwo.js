// useReducer(complex state & action) eg2 ,here action is object
//advantage - by using action as object we can use additional data in reducer fn
//advantage - keep track of multiple variable eg second counter using ...state (spread operator)

//reducer is like instead  of having multiple setState  in different functions , u can have them all on one place
//useReducer(reducer,initialState)
//reducer=(state,action)
//action -is like any instruction

import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + 1 }
        case 'decrement':
            return { firstCounter: state.firstCounter - 1 }
        case 'reset':
            return initialState
        case 'incrementfive':
            return { firstCounter: state.firstCounter + action.value }
        default:
            return state
    }
}




function CounterReducertwo() {
    //destructuring array
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count : {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'incrementfive', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

        </div >
    )
}

export default CounterReducertwo
