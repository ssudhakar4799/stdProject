import moment from 'moment/moment'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import EmployeSideNav from '../EmployeSidNav/EmployeSidNav'
import { logout, timeSheet } from '../Store/Redux/auth/action'
import DownloadPdf from '../ViewPage/DownloadPdf'
import "./Employe.css"
import { v4 as uuid } from 'uuid';
export default function Employe() {
  //---useState---//
  const [addDate, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [course, setCourses] = useState();
  const [batch, setBatch] = useState();
  const [task, setTask] = useState();
  const [createDetails, setDetails] = useState([]);
  //---useRef---//
  const inputref = useRef(null);
  //---useNavigate---//
  const navigate = useNavigate();
  //---State Data Reading---//
  const state = useSelector((state) => state);
  //---Login User Name---//
  let userName = state.auth.registerData.stafName
  const fetchEmploye_id = state.auth.registerData.employe_id
  //---update in State---//
  const dispatch = useDispatch()
  //---display in timeSheets---//
  const timeSheetData = state.auth.timesheet
  const emoloye_particularcrt = timeSheetData.filter((e) => e.emp_id == fetchEmploye_id)
  // random id generator
  const unique_id = uuid();
  const small_id = unique_id.slice(0, 8);

  useEffect(() => {

  }, [])

  let listOfBatch = ["FED04", "FED05", "FED06", "FED07", "FED08", "FED09", "FED10", "FSD11", "FCS01", "FCS02", "BED01", "BED02", "UID01", "UID02"]


  let logouts = () => {
    dispatch(logout(false))
  }

  let avatar = () => {
    let main = document.getElementsByClassName("containers")[0]
    main.classList.toggle("active")
  }


  let submit = () => {
    //---starting time---//
    let stT = startTime.split(":")
    let hr = parseInt(stT[0])
    let min = parseInt(stT[1])
    //---end time---//
    let stT1 = endTime.split(":")
    let hr1 = parseInt(stT1[0])
    let min1 = parseInt(stT1[1])
    //start and end hours
    let convertMilliSec = hr * 60 * 60 * 1000
    let convertMilliSec1 = hr1 * 60 * 60 * 1000
    let remain = convertMilliSec1 - convertMilliSec
    remain = remain / (1000 * 60 * 60)
    let minuteConvertMilliSec = min * 60000
    let minuteConvertMilliSec1 = min1 * 60000
    let remain1 = minuteConvertMilliSec1 - minuteConvertMilliSec
    remain1 = remain1 / 60000
    //finl data submiting---//
    let finalSubmition = {
      date: addDate,
      stTime: startTime,
      edTime: endTime,
      sltcrs: course,
      sltbts: batch,
      astask: task,
      time: startTime + "to" + endTime,
      timeDurations: remain + "hr" + remain1 + "mins",
      crtId: small_id,
      emp_id: fetchEmploye_id
    }
    //---push of create timeSheet details---//
    let empty = [];
    if (state.auth.timesheet.length) {
      empty = [...state.auth.timesheet, finalSubmition]
    }
    else {
      empty = [finalSubmition]
    }
    //---state in value pass & update---//
    dispatch(timeSheet(empty))
    //---reset form fill details---//
    inputref.current.reset()
  }
  return (
    <>
      <EmployeSideNav />
      <div className='content-section'>
        <header className='header ps-5'>
          <div class="d-flex header-sections">
            <div className='input-search'>
              <input type="search" placeholder="search" className='search-boxs' />
            </div>
            <div className="containers">
              <div className='avatar-size'>
                <span className='p-5'><i class="fa-solid fa-bell"></i></span>
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp" class="rounded-circle"
                  height="30px" width="30px" alt="Avatar" loading="lazy" onClick={() => avatar()} />
                <span className='ms-3'>{userName}</span>
                <span></span>
              </div>
              <div class="para">
                <div>Profile</div>
                <div onClick={() => logouts()}>Logout</div>
              </div>
            </div>
          </div>
        </header>
        <div className='main-content-sec'>
          <div className='title'>
            <h1>Employee</h1>
          </div>
          <form ref={inputref}>
            <div className="input-group mb-3 " >
              <input
                type="date"
                className="btn input-setup"
                placeholder=""
                aria-label="Example text with two button addons"
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="time"
                className="btn input-setup"
                placeholder=""
                aria-label="Example text with two button addons"
                onChange={(e) => setStartTime(e.target.value)}
              />
              <input
                type="time"
                className="btn input-setup"
                placeholder=""
                aria-label="Example text with two button addons"
                onChange={(e) => setEndTime(e.target.value)}
              />
              <select onChange={(e) => setCourses(e.target.value)}
                className="btn input-setup">
                <option>Select</option>
                <option>Train</option>
                <option>Review</option>
                <option>Coordinate</option>
                <option>Clarifying</option>
                <option>Materials</option>
                <option>Leave</option>
                <option>Others</option>
              </select>
              <select onChange={(e) => setBatch(e.target.value)}
                className="btn input-setup">
                <option>...</option>
                {
                  listOfBatch.map((btc) => {
                    return (
                      <option>{btc}</option>
                    )
                  })
                }
              </select>
              <input
                className="form-control input-color input-setup"
                placeholder='...Enter Your Task...'
                type="text"
                onChange={(e) => setTask(e.target.value)}
              />
              <button className="btn  btn-add" type="button" data-mdb-ripple-color="dark" onClick={() => submit()}>
                Add
              </button>
            </div>
          </form>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Batch</th>
              <th scope="col">Task Type</th>
              <th scope="col">Task</th>
              <th scope="col">Time</th>
              <th scope="col">Durations</th>
              <th scope="col">Status</th>
              <th scope="col">Verify</th>
            </tr>
          </thead>
          <tbody>
            {
              emoloye_particularcrt.map((item) => {
                return (
                  <tr className='list-items table-primary'>
                    <td>{item.date}</td>
                    <td>{item.sltbts}</td>
                    <td>{item.sltcrs}</td>
                    <td>{item.astask}</td>
                    <td>{item.time}</td>
                    <td>{item.timeDurations}</td>
                    <td>{"complete"}</td>
                    <td><button onClick={() => navigate(`/Download/${item.astask}`)} className="btn btn-view">View</button></td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>

      </div>
    </>
  )
}
