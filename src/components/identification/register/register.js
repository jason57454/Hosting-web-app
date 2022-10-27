import React, { useState } from 'react'
import GetStarted from '../../getStarted/getStarted'
import Nav from '../../Nav/nav'
import Footer from '../../Footer/footer'
import './register.css'
import { Link } from 'react-router-dom'

export default function Register() {
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }
  return (
    <div>
      <Nav></Nav>
      <section className="register">
        <div className="container">
          <form className="register_box">
            <div className="row_7">
              <Link to="/id/login">
                <div className="sign_btn login_btn">
                  <div className="signIn">
                    <p>Log in</p>
                  </div>
                </div>
              </Link>
              <div className="sign_btn top_register">
                <div className="signUp">
                  <p>Register</p>
                </div>
              </div>
            </div>
            <div className="container_col_8">
              <div className="col_8">
                <div className="col_9">
                  <div className="name wrapper_col_9">
                    <p>Name</p>
                    <input type="text" required="yes"></input>
                  </div>
                </div>
                <div className="col_9">
                  <div className="email wrapper_col_9">
                    <p>Email address</p>
                    <input type="email" required="yes"></input>
                  </div>
                </div>
                <div className="col_9">
                  <div className="password wrapper_col_9">
                    <p>Password</p>
                    <input
                      type={passwordShown ? 'text' : 'password'}
                      required="yes"
                    ></input>
                  </div>
                </div>
                <div className="col_9">
                  <div className="password wrapper_col_9">
                    <p>Password confirmation</p>
                    <input
                      type={passwordShown ? 'text' : 'password'}
                      required="yes"
                    ></input>
                  </div>
                </div>
                <div className="row_11">
                  <input type="checkbox" onClick={togglePassword}></input>
                  <p>Show password</p>
                </div>
                <input
                  className="register_btn select_none"
                  type="submit"
                  value="Register"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </section>
      <GetStarted></GetStarted>
      <Footer></Footer>
    </div>
  )
}
