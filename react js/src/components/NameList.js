//list rendering

import React from 'react'

function NameList() {
    const names = ['srk', 'salman', 'aamir']
    const namelist = names.map(name => <h2>{name}</h2>)
    return (

        < div >
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

            {namelist}
        </div>
    )
}

export default NameList
