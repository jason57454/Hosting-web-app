import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './invoices.css'

export default function Invoices() {
  return (
    <div className="screen_height">
      <AppNav></AppNav>
      <section className="invoices">
        <div className="container_1">
          <div className="col_23">
            <div className="main_title">
              <h2>My invoices</h2>
              <p>
                Retrouvez et téléchargez vos factures. Suivez l'état de vos
                paiements.
              </p>
            </div>
            <div className="scroll_table">
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
          </div>
        </div>
      </section>
      <FooterApp></FooterApp>
    </div>
  )
}
