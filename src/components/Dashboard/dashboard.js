import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import './dashboard.css'
import AppNav from '../AppNav/appNav'
import FooterApp from '../footerApp/footerApp'

export default function Dashboard() {
  return (
    <div className="screen_height">
      <AppNav></AppNav>
      <section className="dashboard">
        <div className="container_1">
          <div className="col_23">
            <div className="main_title">
              <h2>Dashboard</h2>
            </div>
            <div className="wrapper_row_25">
              <div className="row_25">
                <div className="box_dashboard">
                  <div className="wrapper_box_db">
                    <div className="col_24">
                      <div className="title_box_db">
                        <p>Balance</p>
                      </div>
                      <div className="number_db" id="funds">
                        $0.00
                      </div>
                      <div className="btn_db" id="add_funds">
                        <FontAwesomeIcon
                          icon={faCirclePlus}
                          className="fas_db"
                        />
                        Add funds
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box_dashboard margin_db">
                  <div className="wrapper_box_db">
                    <div className="col_24">
                      <div className="title_box_db">
                        <p>Active service</p>
                      </div>
                      <div className="number_db" id="service">
                        0
                      </div>
                      <div className="btn_db" id="order_service">
                        <FontAwesomeIcon
                          icon={faCirclePlus}
                          className="fas_db"
                        />
                        Order a service
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row_25">
                <div className="box_dashboard margin_right_db">
                  <div className="wrapper_box_db">
                    <div className="col_24">
                      <div className="title_box_db">
                        <p>Unpaid invoice</p>
                      </div>
                      <div className="number_db" id="invoices">
                        0
                      </div>
                      <div className="btn_db" id="pay_invoices">
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="fas_db"
                        />
                        Pay invoices
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box_dashboard">
                  <div className="wrapper_box_db">
                    <div className="col_24">
                      <div className="title_box_db">
                        <p>Today visitors</p>
                      </div>
                      <div className="number_db" id="visitor">
                        0
                      </div>
                      <div className="number_visitors" id="number_visitors">
                        <span>0.00</span> vs. last week
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row_28">
              <div className="size_table">
                <table className="invoices_table">
                  <thead>
                    <tr>
                      <th>Invoice ID</th>
                      <th>Service</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="ref white">-</td>
                      <td className="order_number white">-</td>
                      <td className="date_emission white">-</td>
                      <td className="amount white">-</td>
                      <td className="status white">-</td>
                      <td></td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="ref" id="ref">
                        #1
                      </td>
                      <td className="service_order">
                        <FontAwesomeIcon icon={faServer} className="fa_serv" />
                        <p>RDP-12</p>
                      </td>
                      <td className="date">21 Aug 2021, 12:27 AM</td>
                      <td className="amount">$34.99</td>
                      <td className="status">
                        <span></span>Paid
                      </td>
                      <td className="show_invoice">
                        {' '}
                        <FontAwesomeIcon icon={faEye} className="fa_show" />
                        Show
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col_27">
                <div className="row_29">
                  <div className="col_28">
                    <p>RDP-12</p>
                    <span>$69.99</span>
                  </div>
                  <div className="status_serv">
                    <p>Suspended</p>
                  </div>
                </div>
                <div className="row_30">
                  <div className="time_left">
                    <p>0 days left</p>
                  </div>
                  <div className="progression">100%</div>
                </div>
                <div className="progressbar">
                  <span></span>
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
