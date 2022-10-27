import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons'
import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './account.css'
import { Link } from 'react-router-dom'

export default function Account() {
  return (
    <div className="screen_height">
      <AppNav></AppNav>
      <section className="account">
        <div className="container_1">
          <div className="col_23">
            <div className="main_title">
              <h2>My account</h2>
              <p>
                Affichez les informations de votre compte, téléchargez une
                archive de vos données et découvrez les options de désactivation
                de votre compte.
              </p>
            </div>
            <div className="col_81">
              <Link to="/account/details">
                <div className="row_80">
                  <div className="row_81">
                    <FontAwesomeIcon icon={faUser} className="fa_account" />
                    <div className="col_82">
                      <p>Informations du compte</p>
                      <p>
                        Affichez les informations de votre compte, comme votre
                        mot de passe et votre adresse email.
                      </p>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="fa_angleRight"
                  />
                </div>
              </Link>
              <Link to="/account/password">
                <div className="row_80">
                  <div className="row_81">
                    <FontAwesomeIcon icon={faKey} className="fa_account" />
                    <div className="col_82">
                      <p>Changez de mot de passe</p>
                      <p>Changez de mot de passe à tout moment.</p>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="fa_angleRight"
                  />
                </div>
              </Link>
              <Link to="/account/deactivate">
                <div className="row_80">
                  <div className="row_81">
                    <FontAwesomeIcon
                      icon={faHeartCrack}
                      className="fa_account"
                    />
                    <div className="col_82">
                      <p>Désactivez votre compte</p>
                      <p>Découvrez comment désactiver votre compte.</p>
                    </div>
                  </div>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="fa_angleRight"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterApp></FooterApp>
    </div>
  )
}
