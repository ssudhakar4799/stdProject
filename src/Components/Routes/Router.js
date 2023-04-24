import React from 'react'

// Routes
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom"

//components
import Login from "../../Components/Login/Login"

import Home from "../../Components/Homepage/Home"

import Employe from "../../Components/Employe/Employe"
import Profile from "../../Components/Student/profile/Profile"
import StudentCard from "../../Components/Student/Studentcard/StudentCard"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../Store/Redux/auth/action'
import Courses from "../../Components/Student/courses/Courses"
import StudentSideNav from '../Student/Studentcard/StudentSideNav'
import StdLearning from '../Student/Studentcard/studentLearning/StdLearning'
import Chellenging from '../Student/Studentcard/Challenge/Chellenging'
import Practice from '../Student/Studentcard/Practice/Practice'
import Prove from '../Student/Studentcard/Prove/Prove'
import Listcourse from '../Listcourses/Listcourse'
import Modal from '../Modal/Modal'
import EmployeSidNav from '../EmployeSidNav/EmployeSidNav'
import DownloadPdf from '../ViewPage/DownloadPdf'
export default function Router() {
  const state = useSelector((state) => state)
  const userAuthSate = useSelector((state) => state.auth.isAuthentification);
  let dispatch = useDispatch();

  return (
    <>
      <div className='rowter'>
        <BrowserRouter>
          {
            userAuthSate ? (
              <>
                <Routes>
                  <Route path='/Home' element={<Home />}>Home</Route>
                  <Route path='/Courses' element={<Courses />} />
                  {
                    state.auth.registerData.type == "employe" ? (
                      <Route path='*' element={<Navigate to={"/Employe"}></Navigate>}></Route>
                    ) : (
                      <Route path='*' element={<Navigate to={"/Courses"}></Navigate>}>Courses</Route>
                    )
                  }
                  <Route path='/Profile' element={<Profile />}>Profile</Route>
                  <Route path='/Employe' element={<Employe />}>Employe</Route>
                  <Route path='/Download/:item' element={<DownloadPdf />}>Download</Route>
                  <Route path='/StudentCard/:cName' element={<StudentCard />}>StudentCard</Route>
                  <Route path='/StdLearning/' element={<StdLearning />}></Route>
                  <Route path='/Chellenging' element={<Chellenging />}></Route>
                  <Route path='/Practice' element={<Practice />}></Route>
                  <Route path='/Prove' element={<Prove />}></Route>
                  <Route path='/StudentSideNav' element={<StudentSideNav />}>StudentSideNav</Route>
                  <Route path='/Listcourse' element={<Listcourse />}>StudentSideNav</Route>
                  <Route path='/Modal' element={<Modal />}>StudentSideNav</Route>
                  <Route path='/EmployeSidNav' element={< EmployeSidNav />}>StudentSideNav</Route>
                </Routes>
              </>
            ) : (
              <>
                <Routes>
                  <Route path='/Login' element={<Login />}>Login</Route>
                  <Route path='*' element={<Navigate to={"Login"}></Navigate>}>Home</Route>
                </Routes>
              </>
            )
          }

        </BrowserRouter>
      </div>
    </>
  )
}
