import React, { useState } from 'react'

import './PosterCard.css'

const api = process.env.REACT_APP_API_URL || 'http://localhost:6969';

function PosterCard(props) {

    const {
        author
    } = props

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    async function postSubmit() {
        try {
            const response = await fetch(`${api}/api/post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    title: title,
                    description: description,
                    author: author
                })
            });

            const data = await response.json();

            if (data.status === 'success') {
                window.location.reload()
            } else {
                alert("An Error Occured...")
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='postcard-container'>
            <div className='postcard-header'>
                <h3>
                    Post Something to the Class
                </h3>
            </div>
            <div className='postcard-content'>
                <form onSubmit={postSubmit}>
                    <div className='form-group'>
                        <label htmlFor='post-title'>
                            Title
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='post-title'
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='post-desc'>
                            Description
                        </label>
                        <textarea
                            type='text'
                            className='form-control'
                            id='post-desc'
                            placeholder='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className='form-footer'>
                        <button type='submit'>
                            Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PosterCard