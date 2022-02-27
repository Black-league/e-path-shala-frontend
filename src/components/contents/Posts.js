import React, {
    useState,
    useEffect
} from 'react'
import PostCard from '../cards/PostCard';

const api = process.env.REACT_APP_BACKEND_URI || 'http://localhost:6969';

function Posts() {

    const [posts, setPosts] = useState([])

    useEffect(async () => {

        try {
            const response = await fetch(`${api}/api/posts`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            if (data) {
                setPosts(data)
            }
        } catch (err) {
            console.log(err)
        }

    }, [])

    return (
        <React.Fragment>
            {posts.length <= 0 ? (<h3>No Posts to show . . .</h3>) : (
                <React.Fragment>
                    {posts.map((post, index) => (
                        <div key={index}>
                            <PostCard
                                title={post.title}
                                description={post.description}
                                author={post.author}
                            />
                        </div>
                    ))}
                </React.Fragment>
            )
            }
        </React.Fragment >
    )
}

export default Posts