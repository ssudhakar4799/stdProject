import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Prove() {
    let navigate = useNavigate()
  return (
    <>
    <div className="content-section">
        <div className="title">
            <h1>{"Prove"}</h1>
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary" onClick={()=>navigate("/StudentCard/:cName")}>Learn</button>
        <button type="button" class="btn btn-secondary" onClick={()=>navigate("/Practice")}>Practice</button>
        <button type="button" class="btn btn-secondary" onClick={()=>navigate("/Chellenging")}>Challenging</button>
        <button type="button" class="btn btn-secondary" onClick={()=>navigate("/Prove")}>Prove</button>
      </div>
        <div className="course-enroled-list">

        </div>
    </div>
</>
  )
}
