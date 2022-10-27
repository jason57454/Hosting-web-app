import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeadset } from '@fortawesome/free-solid-svg-icons'
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import './appNav.css'
import leftNav_logo from '../../assets/NicePng_laptop-cartoon-png_4104963.png'

export default function AppNav() {
  const [active, setActive] = useState(false)

  const setMenu = () => {
    setActive(!active)
  }
  return (
    <div>
      <div id="leftNav" className={active ? 'leftNav_open' : 'leftNav'}>
        <div className="container_leftNav">
          <div className="col_16">
            <div className="row_15">
              <Link to="/">
                <div className="leftNav_logo">
                  <img src={leftNav_logo} alt=""></img>
                </div>
              </Link>
              <div className="menu-active" onClick={setMenu}>
                <span className="top_menu"></span>
                <span className="bot_menu"></span>
              </div>
            </div>
            <div className="col_17">
              <div className="title_col_17">
                <p>Dashboard</p>
              </div>
              <div className="col_18">
                <div className="row_16">
                  <FontAwesomeIcon icon={faHouse} className="fas" />
                  <Link to="/dashboard">Home</Link>
                </div>
                <div className="row_16">
                  <FontAwesomeIcon icon={faServer} className="fas" />
                  <Link to="/services">Services</Link>
                </div>
                <div className="row_16">
                  <FontAwesomeIcon icon={faCartShopping} className="fas" />
                  <Link to="/order">Order</Link>
                </div>
              </div>
            </div>
            <div className="col_17">
              <div className="title_col_17">
                <p>Payments</p>
              </div>
              <div className="col_18">
                <div className="row_16">
                  <FontAwesomeIcon icon={faFileLines} className="fas" />
                  <Link to="/invoices">Invoices</Link>
                </div>
                <div className="row_16">
                  <FontAwesomeIcon icon={faCreditCard} className="fas" />
                  <Link to="/transactions">Transactions</Link>
                </div>
                <div className="row_16">
                  <FontAwesomeIcon icon={faDollarSign} className="fas" />
                  <Link to="/deposit">Deposit</Link>
                </div>
              </div>
            </div>
            <div className="col_17">
              <div className="title_col_17">
                <p>Miscellaneous</p>
              </div>
              <div className="col_18">
                <div className="row_16">
                  <FontAwesomeIcon icon={faUser} className="fas" />
                  <Link to="/account">Account</Link>
                </div>
                <div className="row_16">
                  <FontAwesomeIcon icon={faHeadset} className="fas" />
                  <Link to="/support">Support</Link>
                </div>
                <div className="row_16">
                  <FontAwesomeIcon icon={faCircleQuestion} className="fas" />
                  <Link to="/faq">F.A.Q</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="topNav">
        <div className="row_20">
          <div className="left_topNav">
            <div className="menu" onClick={setMenu}>
              <span className="top_menu"></span>
              <span className="mid_menu"></span>
              <span className="bot_menu"></span>
            </div>
            <div className="row_leftNav">
              <FontAwesomeIcon icon={faMessage} className="fas_msg" />
              <p>Welcome User</p>
            </div>
          </div>
          <div className="right_topNav">
            <FontAwesomeIcon icon={faUser} className="fas_user" />{' '}
            <div className="col_21">
              <p className="client admin">Administrator</p>
              <p>User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
