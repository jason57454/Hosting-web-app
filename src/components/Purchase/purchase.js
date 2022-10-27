import React from 'react'
import FooterApp from '../footerApp/footerApp'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import AppNav from '../AppNav/appNav'
import './purchase.css'

export default function Purchase() {
  const navigate = useNavigate()

  return (
    <div className="screen_height">
      <AppNav></AppNav>
      <section className="purchase">
        <div className="container_1">
          <div className="col_23">
            <div className="main_title">
              <h2>Invoice - Purchase of server</h2>
              <div className="back" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} className="fa_left" />
                <span>Back to previous page</span>
              </div>
            </div>
            <div className="col_61">
              <div className="col_62">
                <p>Amount</p>
                <h2>$100</h2>
              </div>
              <div className="col_63">
                <div className="pay_btn">
                  <a href="/">
                    <p>Buy with Crypto</p>
                  </a>
                </div>
                <div className="pay_btn">
                  <a href="/">
                    <p>Pay by Card, Bank or more</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterApp></FooterApp>
    </div>
  )
}
