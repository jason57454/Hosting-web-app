import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './accountDetails.css'

export default function AccountDetails() {
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
            <div className="col_86">
              <div className="box_details col_87">
                <div className="title_box_details">Email</div>
                <div className="email content_box_details">
                  exemple@gmail.com
                </div>
              </div>
              <div className="box_details row_90">
                <div className="col_88">
                  <div className="title_box_details">Password</div>
                  <div className="password content_box_details">exemple</div>
                </div>
                <Link to="/account/password">Reset Password</Link>
              </div>
              <div className="box_details col_87">
                <div className="title_box_details">Création du compte:</div>
                <div className="creation_account content_box_details">
                  10 févr. 2015 à 10:14:23
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterApp />
    </div>
  )
}
