import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './faq.css'

export default function Faq() {
  const [isActive, setIsActive] = useState(false)

  const handleActive = (index) => () => {
    setIsActive((state) => ({
      [index]: !state[index]
    }))
  }

  const faqGestion = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ?',
      content:
        'Mauris eget massa mattis, lobortis tortor non, ullamcorper augue. Maecenas sed odio ac nisl semper sodales. Aenean sollicitudin ultricies nisi. Pellentesque dictum convallis porttitor. Cras commodo diam ac odio fringilla malesuada. '
    },
    {
      id: 2,
      title: 'Morbi gravida justo dolor, eu mollis massa rutrum eu ?',
      content:
        'Ut ultrices tempor nisl nec molestie. Mauris magna tellus, maximus at rhoncus vel, euismod a massa.'
    },
    {
      id: 3,
      title: 'Sed lobortis tellus et lobortis ultrices ?',
      content: ' Pellentesque quis accumsan odio.'
    },
    {
      id: 4,
      title:
        'Sed porttitor orci quam, eu lobortis nunc sollicitudin vestibulum ?',
      content:
        'Nulla feugiat cursus turpis quis aliquet. Nulla aliquam interdum urna nec tempor.'
    }
  ]

  return (
    <div className="screen_height">
      <AppNav></AppNav>
      <section className="faq">
        <div className="container_1">
          <div className="col_23">
            <div className="main_title">
              <h2>Centre d'aide</h2>
              <p>
                Toutes les réponses à vos questions concernant la gestion de
                votre compte, vos factures et le suivi de vos commandes.
              </p>
            </div>
            <div className="col_120">
              <div className="row_120">
                <div className="col_121">
                  <div className="title_col_121">
                    <p>Lorem ipsum</p>
                  </div>
                  {faqGestion.map((item, index) => (
                    <div className="col_122" key={item.id}>
                      <div className="row_121" onClick={handleActive(index)}>
                        <h4>{item.title}</h4>
                        <div
                          className={
                            isActive[index]
                              ? 'arrow_faq arrow_up_faq'
                              : 'arrow_faq arrow_down_faq'
                          }
                        ></div>
                      </div>
                      <div
                        className={
                          isActive[index] ? 'faq_answer_active' : 'faq_answer'
                        }
                      >
                        <p>{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="btn_faq">
              <Link to="/support/tickets">Contactez-nous</Link>
            </div>
          </div>
        </div>
      </section>
      <FooterApp></FooterApp>
    </div>
  )
}
