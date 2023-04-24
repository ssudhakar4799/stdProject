import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LoginDetails from "../Login/LoginDetails.json"
import EmployeLoginDetails from "./EmployeLoginDetails.json"
import { login, loginData } from '../Store/Redux/auth/action';
export default function Login() {
  //---set error message---//
  const [err, setErr] = useState();
  //---useNavigate---//
  const navigate = useNavigate()
  //---state data---//
  const state = useSelector((state) => state);
  //---state data update---//
  let dispatch = useDispatch();
  //---useForm format {use of function err data}---//
  const { register, handleSubmit, formState: { errors } } = useForm();
  //---form submit---//
  let onsubmit = (data) => {
    //---student login details---//
    LoginDetails.map((user) => {
      if (user.email === data.email && user.password === data.password && user.type === data.choose) {
        dispatch(login(true))
        if (data.choose === "student") {
          navigate(`/Courses`)
          dispatch(loginData(user))
        }
      }
      else {
        setErr("Enter Valid Details")
      }
    })
    //---employee login details---//
    EmployeLoginDetails.map((user) => {
      if (user.email === data.email && user.password === data.password && user.type === data.choose) {
        dispatch(login(true))
        if (data.choose === "employe") {
          navigate("/Employe")
          dispatch(loginData(user))
        }
      }
      else {
        setErr("Enter Valid Details")
      }
    })
  }
  return (
    <div>
      <section className="h-100 gradient-form" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src="https://previews.123rf.com/images/tanyastock/tanyastock1803/tanyastock180300242/97334667-user-icon-human-person-symbol-avatar-login-sign-circle-button-with-soft-color-gradient-background-ve.jpg"
                          className='logoes' alt="logo" />
                      </div>
                      <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="form-outline mb-4">
                          <input type="radio" id='student' value={"student"} name="login"{...register("choose", {
                            required: "select your login type"
                          })} />
                          <label htmlFor="student">Student</label><br></br>
                          <div className='text-danger'>{errors.choose?.message} </div>
                          <input type="radio" id='employe' value={"employe"} name="login" {...register("choose", {
                            required: "select your login type"
                          })} />
                          <label htmlFor="employe">Employe</label>
                          <input type="email" id="form2Example11" className="form-control"
                            placeholder="Phone number or email address" {...register("email", {
                              required: "Email is Required",
                              pattern: {
                                value:
                                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Please enter a valid email",
                              },
                            })} />
                          <div className='text-danger'>{errors.email?.message} </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" id="form2Example22" placeholder='Enter Your Password' className="form-control"  {...register("password", {
                            required: "password is Required",
                            maxLength: {
                              value: 15,
                              message: "must be max 15 chars",
                            },
                            validate: (value) => {
                              return (
                                [/[a-z]/, /[A-Z]/, /[0-9]/].every((pattern) =>
                                  pattern.test(value)
                                ) ||
                                "cannot special chars, only lower, upper, number"
                              );
                            },
                          })} />
                          <div className='text-danger'>{errors.password?.message} </div>
                          <div className='text-danger'>{err}</div>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log
                            in</button><br></br>
                          <a className="text-muted" href="#!">Forgot password?</a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button type="button" className="btn btn-outline-danger">Create new</button>
                        </div>

                      </form>

                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">We are more than just a company</h4>
                      <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}
