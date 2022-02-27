import React from 'react'

import './PostCard.css'

function PostCard(props) {

    const {
        title,
        description,
        author
    } = props

    return (
        <div className='post-container'>
            <div className='post-header'>
                <h3>
                    {title}
                </h3>
            </div>
            <div className='post-content'>
                <p>
                    {description}
                </p>
                <span>
                    posted by {author}
                </span>
            </div>
        </div>
    )
}

export default PostCard