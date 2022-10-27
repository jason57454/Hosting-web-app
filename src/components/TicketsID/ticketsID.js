import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './ticketsID.css'

export default function TicketsID() {
  const navigate = useNavigate()

  return (
    <div className="screen_height">
      <AppNav />
      <section className="support">
        <div className="container_1">
          <div className="col_23">
            <div className="main_title">
              <h2>Support - Détail</h2>
              <p>
                Créez et suivez vos demandes d'assistance en fonction de vos
                besoins. Vous pouvez les consulter, les trier et accéder à
                celles déjà archivées.
              </p>
              <div className="back" onClick={() => navigate(-1)}>
                <FontAwesomeIcon icon={faArrowLeft} className="fa_left" />
                <span>Back to previous page</span>
              </div>
            </div>
            <div className="col_113">
              <div className="row_110">
                <div className="col_114">
                  <div className="row_111">
                    <div className="left_row_111">
                      <p>Sujet</p>
                    </div>
                    <div className="right_row_111">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="row_111">
                    <div className="left_row_111">
                      <p>Service</p>
                    </div>
                    <div className="right_row_111">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="row_111">
                    <div className="left_row_111">
                      <p>Etat</p>
                    </div>
                    <div className="right_row_111">
                      <p>-</p>
                    </div>
                  </div>
                </div>
                <div className="col_114">
                  <div className="row_111">
                    <div className="left_row_111">
                      <p>Numéro</p>
                    </div>
                    <div className="right_row_111">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="row_111">
                    <div className="left_row_111">
                      <p>Date d'ouverture</p>
                    </div>
                    <div className="right_row_111">
                      <p>-</p>
                    </div>
                  </div>
                  <div className="row_111">
                    <div className="left_row_111">
                      <p>Date de dernière modification</p>
                    </div>
                    <div className="right_row_111">
                      <p>-</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col_115">
                <div className="send_msg">
                  <div className="col_msg">
                    <div className="title_col_115">
                      <p>Envoyer un message</p>
                    </div>
                    <textarea></textarea>
                  </div>
                  <div className="row_msg">
                    <button className="close">Fermer le ticket</button>
                    <button className="send">Envoyer</button>
                  </div>
                </div>
                <div className="title_col_115">
                  <p>Correspondance</p>
                </div>
                <div className="col_116">
                  <div className="container_tickets">
                    <div className="row_112">
                      <div className="col_117">
                        <div className="col_118">
                          <div className="row_113">
                            <p>De</p>
                            <span>-</span>
                          </div>
                          <div className="content_tickets">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris ultricies risus euismod augue
                              vestibulum tempus.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row_113">
                        <p>Date de réception</p>
                        <span>-</span>
                      </div>
                    </div>
                  </div>
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
