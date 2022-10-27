import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './changePassword.css'

export default function ChangePassword() {
  const navigate = useNavigate()

  return (
    <div className="screen_height">
      <AppNav />
      <section className="accountDetails">
        <div className="container_1">
          <div className="col_23">
            <div className="main_title">
              <h2>My account</h2>
              <p>
                Affichez les informations de votre compte, téléchargez une
                archive de vos données et découvrez les options de désactivation
                de votre compte.
              </p>
              <div className="back" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} className="fa_left" />
                <span>Back to previous page</span>
              </div>
            </div>
            <form className="col_91">
              <div className="col_92">
                <input
                  type="text"
                  placeholder="Mot de passe actuel"
                  required="yes"
                ></input>
                <a href="/">Forgot Password?</a>
              </div>
              <div className="col_92">
                <div className="new_password">
                  <input
                    type="text"
                    placeholder="Nouveau mot de passe"
                    required="yes"
                  ></input>
                </div>
                <div className="confirm_password">
                  <input
                    type="text"
                    placeholder="Confirmer le mot de passe"
                    required="yes"
                  ></input>
                </div>
              </div>
              <div className="col_93">
                <p>
                  La modification de votre mot de passe vous déconnectera de
                  toutes vos sessions actives à l'exception de celle que vous
                  êtes en train d'utiliser.
                </p>
                <input type="submit" value="Enregistrer"></input>
              </div>
            </form>
          </div>
        </div>
      </section>
      <FooterApp />
    </div>
  )
}
