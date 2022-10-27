import React from 'react'
import './nav.css'
import logo from '../../assets/NicePng_laptop-cartoon-png_4104963.png'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <header>
      <nav>
        <div className="left_nav">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#offers">Presentation</a>
            </li>
            <li>
              <Link to="/order">Get started</Link>
            </li>
          </ul>
        </div>
        <div className="right_nav">
          <Link to="/dashboard" className="connect_btn select_none">
            Client area
          </Link>
        </div>
      </nav>
    </header>
  )
}
