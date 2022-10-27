import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="col_7">
          <div className="row_footer">
            <div className="row_6">
              <div className="wrapper_box_3">
                <div className="box_3">
                  <div className="col_6">
                    <div className="title_col_6">
                      <p>RDP69</p>
                    </div>
                    <div className="content_col_6">
                      <p>
                        You want a fast and good Windows RDP VM? RDP is made for
                        you!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper_box_3">
                <div className="box_3">
                  <div className="col_6">
                    <div className="title_col_6">
                      <p>Entreprise</p>
                    </div>
                    <div className="content_col_6">
                      <p>Address</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row_6">
              <div className="wrapper_box_3">
                <div className="box_3">
                  <div className="col_6">
                    <div className="title_col_6">
                      <p>Contact</p>
                    </div>
                    <div className="content_col_6">
                      <p>Discord </p>
                      <Link to="/support/tickets">Open a ticket</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper_box_3">
                <div className="box_3">
                  <div className="col_6">
                    <div className="title_col_6">
                      <p>Others</p>
                    </div>
                    <div className="content_col_6">
                      <p>
                        Status <br />
                        Terms of service <br />
                        Privacy policy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyrights">
            <p>
              @ 2021 <span className="blue_text">RDP</span>. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
