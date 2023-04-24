import React, { useEffect, useState } from 'react'
import StudentSideNav from './StudentSideNav'

import "./StudentCard.css"
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom'
import CourseDetails from "../courses/CourseDetails"
import { useDispatch, useSelector } from 'react-redux'
import { isDisabled } from '@testing-library/user-event/dist/utils'
import Listcourse from '../../Listcourses/Listcourse'
import Practice from './Practice/Practice'
import PacData from './Practice/PracticeData'
import { practiceStoreDetails } from '../../Store/Redux/auth/action'
import Modal from '../../Modal/Modal'
let isLoad = true;
export default function () {

  let { cName } = useParams();
  // let navigate = useNavigate();
  let dispatch = useDispatch()
  let getSate = useSelector((state) => state);
  let userIdSate = useSelector((state) => state.auth.registerData);
  let practiceState = useSelector((state) => state.auth.PracDetails);

  let id = userIdSate.stdBatch;
  let Course = CourseDetails.find((e) => e.batch === id);
  let courseData = Course.courseData;
  let practicFetch = PacData.find((e) => e.batch === id)
  let practiceCrse = practicFetch.courseData;
  let [userLevels, setLevels] = useState("Learn")
  
  // dispatch(practiceStoreDetails(practiceCrse))
  // let listData=practiceCrse.map((e)=>e.courseTopics)

  useEffect(() => {    
    if(!isLoad){
      isLoad = false; 
      return;
    }
    dispatch(practiceStoreDetails(practiceCrse));
  }, [practiceState, dispatch])
  console.log(practiceState);
  console.log(getSate)
  return (
    <>
    <Modal/>
      <div className="content-section">
        <div className="title">
          <h1>{cName}</h1>
        </div>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary" onClick={() => setLevels("Learn")}>Learn</button>
          <button type="button" className="btn btn-secondary" onClick={() => setLevels("Practice")}>Practice</button>
          <button type="button" className="btn btn-secondary" onClick={() => setLevels("Challenging")}>Challenging</button>
          <button type="button" className="btn btn-secondary" onClick={() => setLevels("Prove")}>Prove</button>
        </div>
        {
          userLevels === "Learn" ? (
            <div className="course-enroled-list data-list-grid">
              {courseData.map((items) => {
                return <div key={items.courseTitle} className="card style-card">
                  <div className="card-header">
                    <span>{items.courseTitle}</span>
                  </div>
                  <Listcourse data={items.courseTopics} />
                </div>
              })}
            </div>
          ) : ("")
        }
        
        {
          userLevels === "Practice" ? (
            <div className="course-enroled-list data-list-grid">
              {
                practiceState?.map((items) => {
      
                  return (
                    <div key={items.courseTitle}  className="card style-card">
                      <div className="card-header">
                        <span>{items.courseTitle}</span>
                      </div>
                      <Practice data={items.courseTopics} />
                    </div>
                  )
                })
              }
            </div>
          ) : ("")
        }
        {
          userLevels === "Challenging" ? (
            <div className="course-enroled-list data-list-grid">
              {
                    <div  className="card style-card">
                      <div className="card-header">
                        <span>Challenging</span>
                      </div>
                    </div>
              }
            </div>
          ) : ("")
        }
        {
          userLevels === "Prove" ? (
            <div className="course-enroled-list data-list-grid">
              {
                    <div  className="card style-card">
                      <div className="card-header">
                        <span>Prove</span>
                      </div>
                    </div>
              }
            </div>
          ) : ("")
        }

      </div>
    </>
  )
}

