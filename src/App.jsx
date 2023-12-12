import React from 'react'
import api from './api'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

    const [Posts, setPosts] = useState([])

    var getPosts = () => {
        api('posts').then((res) => setPosts(res.data))
    }

    useEffect(() => {
        getPosts()
    })
    return (
        <div className='container'>
            <div className="row">

                {
                    Posts.map((item, index) => <div key={index} className='col-md-4'>
                        <div className="card bg-dark text-light">
                            <div className="card-header">
                                {item.id}
                                {item.title}
                            </div>
                            <div className="card-body">
                                {item.body}
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    )
}

export default App