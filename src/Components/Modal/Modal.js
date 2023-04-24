import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { logout } from '../Store/Redux/auth/action';
import "./Modal.css"
export default function Modal() {
  let userIdSate = useSelector((state) => state.auth.registerData)

  let dispatch = useDispatch();

  let logouts = () => {
    dispatch(logout(false))
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
              <div class="side-bar" id="side-bar" onClick={() => dropdown()}>
                <div class="icon" id="icon">
                  <i class="fa fa-bars active" id="open-icon" aria-hidden="true"></i>
                  <i class="fa fa-times " id="close-icon" aria-hidden="true"></i>
                </div>
                <div class="admin">
                  <h2>Fabevy</h2>
                  <h4>Menu</h4>
                  <nav className="nav-link">
                    <NavLink to={"/Course"}
                      className={({ isActive }) =>
                        isActive
                          ? "active-items"
                          : "not-Active"
                      }
                    >
                      Courses
                    </NavLink>
                    <NavLink to={"/Profile"}
                      className={({ isActive }) =>
                        isActive
                          ? "active-items"
                          : "not-Active"
                      }
                    >
                      Profile
                    </NavLink>
                  </nav>
                </div>
                <div className='logout-btns'>
                  <button onClick={() => logouts()}>Logout</button>
                </div>
              </div>
            </div>
            <div class="col-9 search justify-content-between d-flex ">
              <input type="search" placeholder="search" />
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" class="rounded-circle"
                    height="25px" width="25px" alt="Avatar" loading="lazy" />
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
