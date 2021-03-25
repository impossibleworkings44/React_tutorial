//for custom hook the fn should start with keyword use
//it copies the logic for a program and then easy to use in other page instead of writing same code again   

import React, { useEffect } from 'react'


function useDocumentTitle(count) {
    useEffect(() => {
        document.title = `the count is ${count}`

    }, [count]
    )
}

export default useDocumentTitle
