import React from 'react'
import Header from './Header'
import { BsBellFill } from 'react-icons/bs'
import { IoMdChatbubbles } from 'react-icons/io'
import { MdAccountCircle } from 'react-icons/md'

import './Nav.css'
// import { Link } from 'react-router-dom'

function Nav(props) {

    const {
        userName
    } = props

    return (
        <div className='nav-container'>
            <div className='nav-header'>
                <Header />
                <span>
                    An Online Classroom
                </span>
            </div>
            <div className='nav-body'>
                <nav>
                    <ul>
                        <li className='active'>
                            ClassRoom
                        </li>
                        <li>Assignments</li>
                        <li>Grades</li>
                    </ul>
                </nav>
            </div>
            <div className='nav-footer'>
                <div className='nav-icons'>
                    <div className='nav-icon'>
                        <BsBellFill size={30} />
                    </div>
                    <div className='nav-icon'>
                        <IoMdChatbubbles size={30} />
                    </div>
                    <div className='nav-icon'>
                        <MdAccountCircle size={30} />
                        <span>
                            {userName}
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Nav