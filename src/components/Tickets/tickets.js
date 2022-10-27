import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './tickets.css'

export default function Tickets() {
  const navigate = useNavigate()

  const [activeSubject, isActiveSubject] = useState(false)
  const [activeQuestion, isActiveQuestion] = useState(false)
  const [activeAnswer, isActiveAnswer] = useState(false)
  const [subjectTitle, setSubjectTitle] = useState(null)
  const [questionTitle, setQuestionTitle] = useState(null)
  const [answerTitle, setAnswerTitle] = useState(null)

  const handleSubject = () => {
    isActiveSubject(!activeSubject)
  }

  const handleSubjectChange = () => {
    if (subjectTitle !== null) {
      setQuestionTitle(null)
      setAnswerTitle(null)
    }
  }

  const handleQuestion = () => {
    isActiveQuestion(!activeQuestion)
  }

  const handleQuestionChange = () => {
    if (questionTitle !== null) {
      setAnswerTitle(null)
    }
  }

  const handleAnswer = () => {
    isActiveAnswer(!activeAnswer)
  }

  const subject = [
    {
      id: 1,
      title: 'Gestion du compte client',
      content:
        'Question relative à la gestion de votre compte client, et qui ne concernent aucun produit'
    },
    {
      id: 2,
      title: 'Conseil technique',
      content:
        'Question relative à la gestion de votre compte client, et qui ne concernent aucun produit'
    },
    {
      id: 3,
      title: 'Facturation et suivi de commande',
      content:
        'Question relative à la gestion de votre compte client, et qui ne concernent aucun produit'
    },
    {
      id: 4,
      title: 'Incident',
      content:
        'Question relative à la gestion de votre compte client, et qui ne concernent aucun produit'
    }
  ]

  const gestion = [
    // Gestion du compte client

    { id: 5, title: 'Je veux modifier mes informations personnelles' },
    { id: 6, title: 'Gérer mes moyens de paiements' },
    { id: 7, title: 'Je veux fermer mon compte client' }
  ]

  const question = [
    // id 2, 3 et 4
    { id: 8, title: 'Accès internet' },
    { id: 9, title: 'Hébergement web' },
    { id: 10, title: 'Serveurs privés virtuels' },
    { id: 11, title: 'Zone DNS' }
  ]

  const infos = [
    // Modifier infos personnelles

    { id: 12, title: 'Je veux modifier mes coordonnées' },
    { id: 13, title: "Je n'arrive pas à modifier mon e-mail de contact" }
  ]

  const paiement = [
    // Gérer moyens de paiements

    { id: 14, title: 'Ajouter un moyen de paiement' },
    { id: 15, title: 'Supprimer un moyen de paiement' },
    { id: 16, title: 'Je veux enregistrer mon compte bancaire SEPA' }
  ]

  const fermerCompte = [
    // Fermer compte client

    { id: 17, title: "J'ai encore des services actifs sur mon compte client" },
    { id: 18, title: "Je n'ai plus aucun service actif sur mon compte client" }
  ]

  const accesInternetConseil = [
    // Accès internet conseil technique

    { id: 19, title: 'Je souhaite configurer mon modem à distance' },
    {
      id: 20,
      title: 'Je veux modifier le propriétaire ou les contacts de mon service'
    },
    { id: 21, title: 'Autre demande' }
  ]

  const facturationCommande = [
    // Général facturation et suivi de commande

    { id: 22, title: "J'ai une question sur mes factures" },
    { id: 23, title: "J'ai reçu un mail frauduleux" },
    { id: 24, title: "J'ai une question sur le renouvellement" },
    { id: 25, title: "J'ai une question sur mon compte prépayé" },
    { id: 26, title: "J'ai une question sur mes commandes" },
    { id: 27, title: "J'ai une réclamation" }
  ]

  const accesInternetIncident = [
    // Accès internet incident

    { id: 28, title: 'Je n’ai pas accès à internet' },
    { id: 29, title: "Je n'arrive pas à déménager ma ligne" }
  ]
  const hebergementConseil = [
    // Hébergement web conseil technique

    { id: 30, title: 'Je veux mettre mon site en ligne' },
    { id: 31, title: 'Je veux gérer une option de mon hébergement' }
  ]

  const hebergementIncident = [
    // Hébergement web incident

    { id: 32, title: "J'ai un problème sur mon hébergement" },
    { id: 33, title: 'Je rencontre un problème sur mon site' }
  ]

  // Serveurs privés virtuels conseil technique
  const vpsConseil = [
    {
      id: 34,
      title: 'Je veux modifier le propriétaire ou les contacts de mon service'
    },
    { id: 35, title: "J'ai une question sur ma licence" },
    {
      id: 36,
      title: 'Je souhaite envoyer et recevoir des e-mails depuis mon VPS'
    }
  ]

  // Serveurs privés virtuels incident
  const vpsIncident = [
    { id: 37, title: 'Mon VPS est inaccessible' },
    { id: 38, title: 'Je rencontre un problème avec mon VPS' },
    { id: 39, title: "J'ai un problème avec ma licence" },
    {
      id: 40,
      title: 'Je ne parviens pas à envoyer des e-mails depuis mon VPS'
    }
  ]

  const dnsConseil = [
    // Zone DNS conseil technique

    { id: 41, title: 'Je veux créer une zone DNS' },
    { id: 42, title: 'Je veux faire un paramétrage DNS' },
    { id: 43, title: 'Je veux gérer une option sur mes DNS' },
    {
      id: 44,
      title: 'Je veux modifier le propriétaire ou les contacts de mon service'
    }
  ]

  const dnsIncident = [
    // Zone DNS incident

    { id: 45, title: 'Je rencontre une erreur pour lancer une opération' },
    { id: 46, title: 'Mon domaine ne fonctionne pas' },
    { id: 47, title: 'Autre demande' }
  ]

  return (
    <div className="screen_height">
      <AppNav></AppNav>
      <section className="support">
        <div className="container_1">
          <form className="col_23">
            <div className="main_title">
              <h2>Support</h2>
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
            <div className="col_107">
              <div className="col_support">
                <div className="col_108">
                  <div className="title_col_108">
                    <p>Subject</p>
                  </div>
                  <div className="select_match" onClick={handleSubject}>
                    <p className="content_select">{subjectTitle}</p>
                    <FontAwesomeIcon icon={faChevronDown} className="fa_down" />
                  </div>
                </div>

                {/* SUBJECT  */}

                <div className={activeSubject ? 'col_109' : 'col_109-hidden'}>
                  {subject.map((subject, i) => (
                    <div
                      className="col_110"
                      key={subject.id}
                      onClick={() => {
                        setSubjectTitle(subject.title)
                        handleSubject()
                        handleSubjectChange()
                      }}
                    >
                      <p className="title_col_110">{subject.title}</p>
                      <p>{subject.content}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={subjectTitle ? 'col_support' : 'question_hidden'}>
                <div className="col_108">
                  <div className="title_col_108">
                    <p>Question</p>
                  </div>
                  <div className="select_match" onClick={handleQuestion}>
                    <p className="content_select">{questionTitle}</p>
                    <FontAwesomeIcon icon={faChevronDown} className="fa_down" />
                  </div>
                </div>

                {/* GESTION  */}

                {subjectTitle === 'Gestion du compte client' && (
                  <div
                    className={activeQuestion ? 'col_109' : 'col_109-hidden'}
                  >
                    {gestion.map((gestion) => (
                      <div
                        className="row_question"
                        key={gestion.id}
                        onClick={() => {
                          setQuestionTitle(gestion.title)
                          handleQuestion()
                          handleQuestionChange()
                        }}
                      >
                        <p className="title_question">{gestion.title}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* QUESTION  */}

                {subjectTitle !== 'Gestion du compte client' && (
                  <div
                    className={activeQuestion ? 'col_109' : 'col_109-hidden'}
                  >
                    {question.map((question, i) => (
                      <div
                        className="row_question"
                        key={question.id}
                        onClick={() => {
                          setQuestionTitle(question.title)
                          handleQuestion()
                          handleQuestionChange()
                        }}
                      >
                        <p className="title_question">{question.title}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div
                className={questionTitle ? 'col_support' : 'sc_question_hidden'}
              >
                <div className="col_108">
                  <div className="title_col_108">
                    <p className="margin_0">Question</p>
                  </div>
                  <div className="select_match" onClick={handleAnswer}>
                    <p className="content_select">{answerTitle}</p>
                    <FontAwesomeIcon icon={faChevronDown} className="fa_down" />
                  </div>
                </div>

                {/* INFOS  */}

                {subjectTitle === 'Gestion du compte client' &&
                  questionTitle ===
                    'Je veux modifier mes informations personnelles' && (
                    <div
                      className={
                        activeAnswer ? 'col_109 margin_0' : 'col_109-hidden'
                      }
                    >
                      {infos.map((infos, i) => (
                        <div
                          className="row_question"
                          key={i}
                          id={infos.id}
                          onClick={() => {
                            setAnswerTitle(infos.title)
                            handleAnswer()
                          }}
                        >
                          <p className="title_question">{infos.title}</p>
                        </div>
                      ))}
                    </div>
                  )}

                {/* PAIEMENT  */}

                {subjectTitle === 'Gestion du compte client' &&
                  questionTitle === 'Gérer mes moyens de paiements' && (
                    <div
                      className={
                        activeAnswer ? 'col_109 margin_0' : 'col_109-hidden'
                      }
                    >
                      {paiement.map((paiement, i) => (
                        <div
                          className="row_question"
                          key={i}
                          id={paiement.id}
                          onClick={() => {
                            setAnswerTitle(paiement.title)
                            handleAnswer()
                          }}
                        >
                          <p className="title_question">{paiement.title}</p>
                        </div>
                      ))}
                    </div>
                  )}

                {/* COMPTE */}

                {subjectTitle === 'Gestion du compte client' &&
                  questionTitle === 'Je veux fermer mon compte client' && (
                    <div
                      className={
                        activeAnswer ? 'col_109 margin_0' : 'col_109-hidden'
                      }
                    >
                      {fermerCompte.map((fermerCompte, i) => (
                        <div
                          className="row_question"
                          key={i}
                          id={fermerCompte.id}
                          onClick={() => {
                            setAnswerTitle(fermerCompte.title)
                            handleAnswer()
                          }}
                        >
                          <p className="title_question">{fermerCompte.title}</p>
                        </div>
                      ))}
                    </div>
                  )}

                {/* ACCES INTERNET CONSEIL  */}

                {subjectTitle === 'Conseil technique' &&
                  questionTitle === 'Accès internet' && (
                    <div
                      className={
                        activeAnswer ? 'col_109 margin_0' : 'col_109-hidden'
                      }
                    >
                      {accesInternetConseil.map((internetConseil, i) => (
                        <div
                          className="row_question"
                          key={i}
                          id={internetConseil.id}
                          onClick={() => {
                            setAnswerTitle(internetConseil.title)
                            handleAnswer()
                          }}
                        >
                          <p className="title_question">
                            {internetConseil.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                {/* FACTURATION  */}

                {subjectTitle === 'Facturation et suivi de commande' &&
                  questionTitle !== null && (
                    <div
                      className={
                        activeAnswer ? 'col_109 margin_0' : 'col_109-hidden'
                      }
                    >
                      {facturationCommande.map((facturation, i) => (
                        <div
                          className="row_question"
                          key={i}
                          id={facturation.id}
                          onClick={() => {
                            setAnswerTitle(facturation.title)
                            handleAnswer()
                          }}
                        >
                          <p className="title_question">{facturation.title}</p>
                        </div>
                      ))}
                    </div>
                  )}

                {/* ACCES INTERNET INCIDENT  */}

                {subjectTitle === 'Incident' &&
                  questionTitle === 'Accès internet' && (
                    <div
                      className={
                        activeAnswer ? 'col_109 margin_0' : 'col_109-hidden'
                      }
                    >
                      {accesInternetIncident.map((internetIncident, i) => (
                        <div
                          className="row_question"
                          key={i}
                          id={internetIncident.id}
                          onClick={() => {
                            setAnswerTitle(internetIncident.title)
                            handleAnswer()
                          }}
                        >
                          <p className="title_question">
                            {internetIncident.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                {/* HEBERGEMENT CONSEIL  */}

                {subjectTitle === 'Conseil technique' &&
                  questionTitle === 'Hébergement web' && (
                    <div
                      className={
                        activeAnswer ? 'col_109 margin_0' : 'col_109-hidden'
                      }
                    >
                      {hebergementConseil.map((hebergementConseil, i) => (
                        <div
                          className="row_question"
                          key={i}
                          id={hebergementConseil.id}
                          onClick={() => {
                            setAnswerTitle(hebergementConseil.title)
                            handleAnswer()
                          }}
                        >
                          <p className="title_question">
                            {hebergementConseil.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                {/* HEBERGEMENT INCIDENT  */}

                {subjectTitle === 'Incident' &&
                  questionTitle === 'Hébergement web' && (
                    <div
                      className={
                        activeAnswer ? 'col_109 margin_0' : 'col_109-hidden'
                      }
                    >
                      {hebergementIncident.map((hebergementIncident, i) => (
                        <div
                          className="row_question"
                          key={i}
                          id={hebergementIncident.id}
                          onClick={() => {
                            setAnswerTitle(hebergementIncident.title)
                            handleAnswer()
                          }}
                        >
                          <p className="title_question">
                            {hebergementIncident.title}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                {/* VPS CONSEIL  */}

                {subjectTitle === 'Conseil technique' &&
                  questionTitle === 'Serveurs privés virtuels' && (
                    <div
                      className={
                        activeAnswer ? 'col_109 margin_0' : 'col_109-hidden'
                      }
                    >
                      {vpsConseil.map((vpsConseil, i) => (
                        <div
                          className="row_question"
                          key={i}
                          id={vpsConseil.id}
                          onClick={() => {
                            setAnswerTitle(vpsConseil.title)
                            handleAnswer()
                          }}
                        >
                          <p className="title_question">{vpsConseil.title}</p>
                        </div>
                      ))}
                    </div>
                  )}

                {/* VPS INCIDENT  */}

                {subjectTitle === 'Incident' &&
                  questionTitle === 'Serveurs privés virtuels' && (
                    <div
                      className={
                        activeAnswer ? 'col_109 margin_0' : 'col_109-hidden'
                      }
                    >
                      {vpsIncident.map((vpsIncident, i) => (
                        <div
                          className="row_question"
                          key={i}
                          id={vpsIncident.id}
                          onClick={() => {
                            setAnswerTitle(vpsIncident.title)
                            handleAnswer()
                          }}
                        >
                          <p className="title_question">{vpsIncident.title}</p>
                        </div>
                      ))}
                    </div>
                  )}

                {/* DNS CONSEIL  */}

                {subjectTitle === 'Conseil technique' &&
                  questionTitle === 'Zone DNS' && (
                    <div
                      className={
                        activeAnswer ? 'col_109 margin_0' : 'col_109-hidden'
                      }
                    >
                      {dnsConseil.map((dnsConseil, i) => (
                        <div
                          className="row_question"
                          key={i}
                          id={dnsConseil.id}
                          onClick={() => {
                            setAnswerTitle(dnsConseil.title)
                            handleAnswer()
                          }}
                        >
                          <p className="title_question">{dnsConseil.title}</p>
                        </div>
                      ))}
                    </div>
                  )}

                {/*   DNS INCIDENT  */}

                {subjectTitle === 'Incident' && questionTitle === 'Zone DNS' && (
                  <div
                    className={
                      activeAnswer ? 'col_109 margin_0' : 'col_109-hidden'
                    }
                  >
                    {dnsIncident.map((dnsIncident, i) => (
                      <div
                        className="row_question"
                        key={i}
                        id={dnsIncident.id}
                        onClick={() => {
                          setAnswerTitle(dnsIncident.title)
                          handleAnswer()
                        }}
                      >
                        <p className="title_question">{dnsIncident.title}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className={answerTitle ? 'col_119' : 'col_119_hidden'}>
                <p>Informations complémentaires :</p>
                <textarea required="yes"></textarea>
                <input type="submit" />
              </div>
            </div>
          </form>
        </div>
      </section>
      <FooterApp></FooterApp>
    </div>
  )
}
