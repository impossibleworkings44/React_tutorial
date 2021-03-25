//useeffect return for clearing the useffect after its removed
//[] in useffect for calling it once

import React, { useState, useEffect } from 'react'

function IntervalTickCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)


        return () => {
            clearInterval(interval)

        }, [count]

    })



    return (
        <div>
            {count}
        </div>
    )
}


export default IntervalTickCounter