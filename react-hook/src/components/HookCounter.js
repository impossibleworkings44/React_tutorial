///e of usesate

import React, { useState } from 'react'

function HookCounter() {

    //count->current value of state , //setcount==> state setter fn
    //new state value depends on prev state : pass fn to setter fn
    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count{count}</button>
        </div>
    )
}

export default HookCounter
//passing parameter (count+1) so called it as fn
//else just do {increment}