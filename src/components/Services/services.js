import React from 'react'
import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './services.css'

export default function Services() {
  return (
    <div className="screen_height">
      <AppNav></AppNav>
      <section className="services">
        <div className="container_1">
          <div className="col_23">
            <div className="main_title">
              <h2>My services</h2>
              <p>
                Gérez le renouvellement de vos services. Consultez leur statut
                ainsi que vos contrats.
              </p>
            </div>
            <div className="scroll_table">
              <table className="services_table">
                <thead>
                  <tr>
                    <th>Nom du service</th>
                    <th>Service</th>
                    <th>Disponibilité</th>
                    <th>Statut</th>
                    <th>Date d'effet</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="name_service">-</td>
                    <td id="service">-</td>
                    <td id="availability">-</td>
                    <td id="status_service">-</td>
                    <td id="effet">-</td>
                    <td id="action">-</td>
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
