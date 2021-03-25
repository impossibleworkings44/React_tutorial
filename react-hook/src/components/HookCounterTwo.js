//prevcount (prevstate) eg
//new state value depends on prev state : pass fn to setter fn

import React, { useState } from 'react'

function HookCounterTwo() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevcount => prevcount + 1)
        }

    }

    //incrementfive uses previus state and adds to it prevcount calls fn prevcount+1


    return (
        <div>
            Count:{count}<br></br>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <button onClick={() => setCount(count - 1)}>decrement</button>
            <button onClick={incrementFive}>Incrementfive</button>

        </div >
    )
}

export default HookCounterTwo