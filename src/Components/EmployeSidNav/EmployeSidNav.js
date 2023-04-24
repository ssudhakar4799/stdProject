import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logout } from '../Store/Redux/auth/action';
import "./EmployeSidNav.css"
import fabevy from "../EmployeSidNav/logo(White).png"
export default function EmployeSideNav() {

    let userIdSate = useSelector((state) => state.auth.registerData)
    console.log(userIdSate);
    const [drop, setDrop] = useState(false)
    let dispatch = useDispatch();
    let logouts = () => {
        dispatch(logout(false))
    }
    let avatar = () => {
        let main = document.getElementsByClassName("containers")[0]
        main.classList.toggle("active")
    }

    let dropdown = () => {
        let sideBar = document.getElementById("side-bar")
        let icon = document.getElementById("icon");
        let openIcon = document.getElementById("open-icon");
        let closeIcon = document.getElementById("close-icon");

        sideBar.classList.toggle("active");
        openIcon.classList.toggle("active");
        closeIcon.classList.toggle("active");
    }
    return (
        <>
            <header class="header">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-3">
                            <div class="side-bar" id="side-bar">
                                <div class="icon" id="icon" onClick={() => dropdown()}>
                                    <i class="fa fa-bars active" id="open-icon" aria-hidden="true"></i>
                                    <i class="fa fa-times " id="close-icon" aria-hidden="true"></i>
                                </div>
                                <div class="admin">
                                    <img src={fabevy} width="80%" ></img>
                                    <div className='name-branc'>
                                        <h5>{userIdSate.stafName}</h5>
                                        <h6>{userIdSate.branch}</h6>
                                    </div>
                                    <nav className="nav-link">
                                        <NavLink to={"/Employe"}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? "active-items"
                                                    : "not-Active"
                                            }
                                        >
                                            TimeSheet
                                        </NavLink>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </header>
        </>
    )
}
