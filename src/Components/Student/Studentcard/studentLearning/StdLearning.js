import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function StdLearning() {
    let navigate = useNavigate();
    return (
        <>
            <div className="content-section">
                <div className="title">
                    <h1>{"cName"}</h1>
                </div>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-secondary" onClick={() => navigate("/StdLearning")}>Learn</button>
                    <button type="button" class="btn btn-secondary" onClick={() => navigate("/Practice")}>Practice</button>
                    <button type="button" class="btn btn-secondary" onClick={() => navigate("/Chellenging")}>Challenging</button>
                    <button type="button" class="btn btn-secondary" onClick={() => navigate("/Prove")}>Prove</button>
                </div>
                <div className="course-enroled-list">

                </div>
            </div>
        </>
    )
}
