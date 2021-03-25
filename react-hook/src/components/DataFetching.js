//Fetching data with useEffect Part 1 using axios
//Fetching data with useEffect Part 2 using axios when a particular input given , only 1 post so in usestate object passed

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })

            .catch(err => {
                console.log(err)
            })
    }, [id])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />

            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(i => (<li key={i.id}>{i.title}</li>))
                }
            </ul> */}

        </div >
    )
}


export default DataFetching