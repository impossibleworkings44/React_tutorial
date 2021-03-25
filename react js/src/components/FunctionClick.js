//event handler in function example


import React from 'react'


//eventhandler is a fn and not a fn call    
function FunctionClick() {

    function clickHandler() {
        console.log('Button clicked')
    }

    return (
        <div>
            <button onClick={clickHandler}>click eventhandler eg</button>
        </div>
    )
}

export default FunctionClick
