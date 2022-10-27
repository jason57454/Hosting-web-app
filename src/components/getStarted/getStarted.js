import React from 'react'
import { Link } from 'react-router-dom'
import './getStarted.css'

export default function getStarted() {
  return (
    <div className="get_started">
      <div className="col_10">
        <p>Want to get started? Launch your cloud server. </p>
        <div className="row_10">
          <Link to="/order" className="start">
            <p>Start your server </p>
          </Link>
          <p className="start_text">
            You're all set in <br /> less than 5 minutes!
          </p>
        </div>
      </div>
    </div>
  )
}
