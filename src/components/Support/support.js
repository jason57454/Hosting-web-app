import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'
import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './support.css'

export default function Support() {
  return (
    <div className="screen_height">
      <AppNav></AppNav>
      <section className="support">
        <div className="container_1">
          <div className="col_23">
            <div className="main_title">
              <h2>Support</h2>
              <p>
                Créez et suivez vos demandes d'assistance en fonction de vos
                besoins. Vous pouvez les consulter, les trier et accéder à
                celles déjà archivées.
              </p>
            </div>
            <div className="col_106">
              <div className="btn_ticket">
                <Link to="/support/tickets">
                  <FontAwesomeIcon icon={faPlus} className="fa_plus" />
                  <p>Create new ticket</p>
                </Link>
              </div>
              <div className="scroll_table">
                <table className="support_table">
                  <thead>
                    <tr>
                      <th>Numéro de ticket </th>
                      <th>Sujet</th>
                      <th>Dernier intervenant</th>
                      <th>Date de création</th>
                      <th>Date de dernière mise à jour</th>
                      <th>Etat</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <Link to="/support/tickets/id">
                          <FontAwesomeIcon
                            icon={faArrowRightToBracket}
                            className="fa_enter"
                          />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterApp></FooterApp>
    </div>
  )
}
