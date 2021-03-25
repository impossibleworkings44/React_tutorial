//usestate with objects
//a object can be string ,boolean,array etc

//{...name,firstname:e.target.value} --> spread the name and in that change the firstname
//e.target.value for taking the input of form

import React, { useState } from 'react'


function HookCounterThree() {

    const [name, setName] = useState({ firstName: '', lastName: '' })


    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input type="text" value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            </form>
        </div>


    )


}


export default HookCounterThree