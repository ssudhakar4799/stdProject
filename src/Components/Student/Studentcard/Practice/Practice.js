import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import "./Practice.css"
import { practiceStoreDetails } from '../../../Store/Redux/auth/action'
import { useDispatch, useSelector } from 'react-redux'
export default function Practice(props) {

  //Common State Value
  const state = useSelector((state) => state);
  console.log(state);

  //User State Value Update In Course Topics
  let stateValueUpdate = state.auth.PracDetails.flatMap((e) => e.courseTopics)
  console.log(stateValueUpdate);

  //List Items Of Html,Css,Js,React-js,ext...
  let dataPorps = props.data;

  // Dispatch
  let dispatch = useDispatch();

  // User Select and Popup Open
  let [popUp, setPopup] = useState({ isPop: false, val: null });

  //User Input Value
  let [url, setUrl] = useState();

  // UseForm 
  const { register, handleSubmit, formState: { errors } } = useForm();


  let onsubmit = (datas) => {
    // State All Values List Find Particular Data & Change The Value 
    let finalStateValue = stateValueUpdate.find((e) => e.topic == popUp.val)
    finalStateValue.gitLink = url;
    console.log(finalStateValue);
    // Final State Value Update 
    // dispatch(practiceStoreDetails(finalStateValue));
    setPopup({ isPop: false });

  }


  return (
    <>
      <ul className="list-group list-group-flush">
        {dataPorps.map((item, id) => {
          return (
            <li className="list-group-item" key={item.topicNo}>
              <div className='seprate' >
                <h6>{item.topic}</h6>
                <div>
                  <i className="fa fa-link log" aria-hidden="true" onClick={() => { setPopup({ isPop: true, val: item.topic }) }}></i>
                  <span className='crl-noActive'>
                  </span>
                </div>
              </div>
              {
                popUp.isPop && popUp.val == item.topic &&
                <form onSubmit={handleSubmit(onsubmit)}>

                  <input className='inout-box' placeholder='Enter Your Url' defaultValue={!item.gitLink ? "" : item.gitLink} onChange={(e) => { setUrl(e.target.value) }} />

                  <span className='text-danger'>{errors.url?.message}</span>

                  <button className="btns bg-danger" type='submit' onClick={() => setPopup({ isPop: false })}>cancel</button>

                  {
                    !url ? null : (<button className="btns bg-success" type='submit'>Submit</button>)
                  }

                </form>
              }
            </li>
          )
        })}
      </ul>

    </>
  )
}
