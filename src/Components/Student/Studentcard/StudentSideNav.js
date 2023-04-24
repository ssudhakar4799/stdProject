import React from 'react'
import Img from "../courses/images (1).jpg"
import LoginDetails from "../../Login/LoginDetails.json"
import { NavLink, useNavigation } from 'react-router-dom'
import { logout } from '../../Store/Redux/auth/action'
import { useDispatch, useSelector } from 'react-redux'
import './StudentSideNav.css';

export default function StudentSideNav() {
    let userIdSate = useSelector((state)=>state.auth.registerData)
    
    let dispatch = useDispatch();
    let logouts = () => {
        dispatch(logout(false))
    }
    return (
        <>
            <div className='sidebar'>
                <div className='user-profile'>
                    <div className='user-picture'>
                        <img className='images' src={Img} alt="" />
                    </div>
                    <div className='user-info'>
                        <h1>{userIdSate.stName}</h1>
                        <p>{userIdSate.email}</p>
                    </div>
                </div>

                <ul className='side-nav'>
                    <li><a href="/Profile">Profile</a></li>
                    <li><a href="/Courses">Course</a></li>

                </ul>

                <div className='logout-btns'>
                    <button onClick={() => logouts()}>Logout</button>
                </div>

            </div>
        </>
    )
}
