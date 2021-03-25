//eg of useRef hoooks to access dom node in functional components

import React, { useEffect, useRef } from 'react'

function UseRefone() {

    const inputRef = useRef(null)

    useEffect(() => {

        inputRef.current.focus()

    }, [])


    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    )
}


export default UseRefone