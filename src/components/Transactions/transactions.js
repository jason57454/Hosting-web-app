import React from 'react'
import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './transactions.css'

export default function Transactions() {
  return (
    <div className="screen_height">
      <AppNav></AppNav>
      <section className="transactions">
        <div className="container_1">
          <div className="col_23">
            <div className="main_title">
              <h2>My transactions</h2>
            </div>
            <div className="scroll_table">
              <table className="transactions_table">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
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
