import React, {
    useState,
    useEffect
} from 'react'
import jwtDecode from 'jwt-decode'
import Nav from '../components/nav/Nav'
import './ClassRoom.css'
import PosterCard from '../components/cards/PosterCard'

function ClassRoom() {

    const [userName, setUserName] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwtDecode(token);
            if (!user) {
                localStorage.removeItem('token');
                window.location.href = "/";
            } else {
                setUserName(user.name);
            }
        }
    }, [])


    return (
        <div className='room-container'>
            <Nav
                userName={userName}
            />
            <div className='room-content'>
                <PosterCard isPostType={false} />

            </div>
        </div>
    )
}

export default ClassRoom