//in this the style is not string but object
//and its key is camelCase and value is string

import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue',
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
