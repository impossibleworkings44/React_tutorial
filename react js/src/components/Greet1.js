//destructuring props

import React from 'react'


//use props.name for class component
//destructuring props

const Greet1 = ({ name }) => {
    //const {name}=props  //other method
    return (
        <div>
            <h1>hello greetings {name}</h1>

        </div>)

}


export default Greet1