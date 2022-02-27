import React from 'react'

import './PosterCard.css'

function PosterCard() {
    return (
        <div className='postcard-container'>
            <div className='postcard-header'>
                <h3>
                    Post Something to the Class
                </h3>
            </div>
            <div className='postcard-content'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='post-title'>
                            Title
                        </label>
                        <input
                            type='text'
                            className='form-control'
                            id='post-title'
                            placeholder='Title'
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