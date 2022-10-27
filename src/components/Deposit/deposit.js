import React from 'react'
import { Link } from 'react-router-dom'

import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './deposit.css'

export default function Deposit() {
  return (
    <div className="screen_height">
      <AppNav></AppNav>
      <section className="addFunds">
        <div className="container_1">
          <div className="col_23">
            <div className="main_title">
              <h2>Add funds to your account</h2>
            </div>
            <div className="col_71">
              <div className="col_72">
                <p>Your current funds:</p>
                <p>$0</p>
              </div>
              <div className="content_col_71">
                <p>Add funds now:</p>
              </div>
              <div className="deposit">
                <input type="number" placeholder="Chose amount"></input>
                <Link to="/purchase">
                  <p>Deposit</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterApp></FooterApp>
    </div>
  )
}
