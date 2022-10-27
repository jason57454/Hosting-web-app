import React, { useState } from 'react'
import GetStarted from '../../getStarted/getStarted'
import Nav from '../../Nav/nav'
import Footer from '../../Footer/footer'
import './login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  const [passwordShown, setPasswordShown] = useState(false)
  const togglePassword = () => {
    setPasswordShown(!passwordShown)
  }
  return (
    <div>
      <Nav></Nav>
      <section className="login">
        <div className="container">
          <form className="login_box">
            <div className="row_7">
              <div className="sign_btn top_left log_btn">
                <div className="signIn">
                  <p>Log in</p>
                </div>
              </div>
              <Link to="/id/register">
                <div className="sign_btn top_right">
                  <div className="signUp">
                    <p>Register</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="container_col_8">
              <div className="col_8">
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
                <div className="row_11">
                  <input type="checkbox" onClick={togglePassword}></input>
                  <p>Show password</p>
                </div>
                <div className="row_8">
                  <div className="row_9">
                    <input id="remember_me" type="checkbox"></input>
                    <p>Remember me</p>
                  </div>
                  <div className="forgot_password select_none">
                    <p>Forgot your password?</p>
                  </div>
                </div>
                <input
                  className="signIn_btn select_none"
                  type="submit"
                  value="Log in"
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
