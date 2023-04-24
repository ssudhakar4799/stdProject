// import React, { Component } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import React from 'react'
// import CourseDetails from "../courses/CourseDetails"
import Img from "../courses/images (1).jpg"
import { logout } from "../../Store/Redux/auth/action";
import { useDispatch, useSelector } from "react-redux";
import "./Courses.css"
//
import loginDetails from "../../Login/LoginDetails.json"
import Modal from "../../Modal/Modal";
//
export default function Courses() {

  let state = useSelector((state)=>state)
  let fetchBatchs=state.auth.registerData.stdBatch
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { id } = useParams();

  let fetchDatas = loginDetails.filter((e) => e.stdBatch === fetchBatchs)

  return (
    <>
    <Modal/>
      <div className="content-section">
        <div className="title">
          <h1>Course Enroled</h1>
        </div>
        <div className="course-enroled-list">
          {
            fetchDatas.map((data) => {
              return (
                <>
                  {
                    data.courseEnroled?.map((detail) => {
                      return (
                        <>
                          <div className="box-1" key={detail.id}>
                            {
                              detail.isCompleted === true ? (
                                <div className="completed-bx">
                                <span className="patch">Complete</span>
                                </div>
                              ) : ("")
                            }
                            <h2 >{detail.courseName}</h2>
                            <div className="action-btns">
                              <button className="btn bg-primary size-btn" onClick={() => navigate(`/StudentCard/${detail.courseName}`)}>View</button>
                              {
                                detail.isCompleted === true ? (
                                  <button className="btn bg-warning size-btn">Certificate</button>

                                ) : ("")
                              }
                            </div>
                          </div>
                        </>
                      )
                    })
                  }

                </>
              )
            })
          }

        </div>
      </div>
    </>
  )
}
