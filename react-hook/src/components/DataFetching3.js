//Fetching data with useEffect Part 3 using axios on button click

import React, { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching3() {

    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idbutton, setIdbutton] = useState(1)


    const handleClick = () => {
        setIdbutton(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idbutton}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })

            .catch(err => {
                console.log(err)
            })
    }, [idbutton])

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="button" onClick={handleClick}>Fetch Post</button>

            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map(i => (<li key={i.id}>{i.title}</li>))
                }
            </ul> */}

        </div >
    )
}


export default DataFetching3