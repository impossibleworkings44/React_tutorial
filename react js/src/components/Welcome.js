import React from 'react'
const Welcome = () => {
    // return (
    //     <div>
    //         <h1>hello jsx welcome</h1>
    //     </div>
    // )

    return React.createElement('div', null, React.createElement('h1', null, 'hello jsx welcome1'))
}

export default Welcome