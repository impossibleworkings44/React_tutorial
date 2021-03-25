//useEffect eg for increment count of document title
//useEffect runs after every render

import React, { useState, useEffect } from 'react'

function UseEffectCounter1() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `the count is ${count}`

    },
    )

    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>Count {count}</button>
        </div>
    )
}


export default UseEffectCounter1