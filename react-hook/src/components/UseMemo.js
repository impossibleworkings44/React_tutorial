//calllback() - if you want to cache the fn
//useMemo() ->if you want to cache the result
//both are used for performance optimisation

//here in eg counter 1 is slow and counter 2 is fast 

import React, { useState, useMemo } from 'react'



function UseMemo() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 220000000) i++
        return counterOne % 2 === 0

    }, [counterOne])

    return (
        <div>
            <button onClick={incrementOne}>Count One-{counterOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span><br></br>
            <button onClick={incrementTwo}>Count Two-{counterTwo}</button>
        </div>
    )
}


export default UseMemo