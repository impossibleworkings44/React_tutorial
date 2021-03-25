//taking props and props children and displaying

import React from 'react'


//use props.name for class component

const Greet = props => {
    return (
        <div>
            <h1>hello greetings {props.name}</h1>
            {props.children}
            
        </div>)

}


export default Greet