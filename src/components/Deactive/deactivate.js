import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './deactivate.css'

export default function Deactivate() {
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="screen_height">
      <AppNav />
      <section className="deactivate">
        <div className="container_1">
          <div className="col_23" style={{ opacity: isOpen ? '0.5' : '1' }}>
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
            <div className="col_96">
              <p>Ceci désactivera votre compte.</p>
              <div className="deactivate_btn" onClick={togglePopup}>
                <p>Deactivate</p>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="col_97">
              <div className="title_col_97">
                <p>
                  Finalisez votre demande de désactivation en saisissant le mot
                  de passe associé à votre compte.
                </p>
              </div>
              <div className="row_97">
                <div className="cancel" onClick={togglePopup}>
                  Cancel
                </div>
                <div className="confirm">Deactivate</div>
              </div>
            </div>
          )}
        </div>
      </section>
      <FooterApp />
    </div>
  )
}
