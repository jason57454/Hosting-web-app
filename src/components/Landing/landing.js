import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'
import Nav from '../Nav/nav'
import Footer from '../Footer/footer'
import homePic from '../../assets/landing.png'
import cpu from '../../assets/cpu.png'

export default function Landing() {
  return (
    <div>
      <Nav></Nav>
      <section className="home">
        <div className="container">
          <div className="row_1">
            <div className="col_1">
              <div className="title_col_1">
                <p>
                  <span className="blue_text">Windows RDP</span> Hosting, Fast
                  and
                  <span className="blue_text"> simple</span>.
                </p>
              </div>
              <div className="content_col_1">
                <p>
                  You want a fast and good Windows RDP VM?
                  <span className="blue_text"> RDP</span> is made for you!
                </p>
              </div>
              <div className="sign_btns">
                <Link to="/id/register">
                  <div id="sign_up" className="select_none">
                    Sign up
                  </div>
                </Link>
                <Link to="/id/login">
                  <div id="sign_in" className="blue_text select_none">
                    Sign in
                  </div>
                </Link>
              </div>
            </div>
            <div className="img_home">
              <img src={homePic} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="presentation">
        <div className="container">
          <div className="col_2">
            <div className="title_col_2">
              <p>
                Why you should use <span className="blue_text">RDP </span>
                services?
              </p>
            </div>
            <div className="row_2">
              <div className="wrapper_box">
                <div className="box">
                  <div className="col_3">
                    <div className="logo_col_3">
                      <img src={cpu} alt="" />
                    </div>
                    <div className="title_col_3">
                      Lorem <span className="blue_text">Ipsum</span>
                    </div>
                    <div className="content_col_3">
                      Vivamus condimentum pulvinar nulla non egestas. Quisque
                      auctor sollicitudin ullamcorper.
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper_box">
                <div className="box">
                  <div className="col_3">
                    <div className="logo_col_3">
                      <img src={cpu} alt="" />
                    </div>
                    <div className="title_col_3">
                      Sed non <span className="blue_text">Augue</span>
                    </div>
                    <div className="content_col_3">
                      Vivamus condimentum pulvinar nulla non egestas. Quisque
                      auctor sollicitudin ullamcorper.
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper_box">
                <div className="box">
                  <div className="col_3">
                    <div className="logo_col_3">
                      <img src={cpu} alt="" />
                    </div>
                    <div className="title_col_3">
                      Nulla <span className="blue_text">Mattis</span>
                    </div>
                    <div className="content_col_3">
                      Vivamus condimentum pulvinar nulla non egestas. Quisque
                      auctor sollicitudin ullamcorper.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col_4" id="offers">
            <div className="title_col_4">
              <p>
                Our <span className="blue_text">offers</span>
              </p>
            </div>
            <div className="row_3">
              <div className="wrapper_box_2">
                <div className="box_2">
                  <div className="col_5">
                    <div className="title_col_5">
                      <p>RDP-01</p>
                    </div>
                    <div className="col_6">
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          2x Xeon <span className="font-700">E5-2680 v2</span>
                        </p>
                      </div>
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          8 Go <span className="font-700">RAM</span>
                        </p>
                      </div>
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          100 Go <span className="font-700">SSD NVMe</span>
                        </p>
                      </div>
                    </div>
                    <div className="order_btn">
                      <Link to="/order" className="select_none">
                        Order for 9.95€
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper_box_2">
                <div className="box_2">
                  <div className="col_5">
                    <div className="title_col_5">
                      <p>RDP-02</p>
                    </div>
                    <div className="col_6">
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          2x Xeon <span className="font-700">E5-2680 v2</span>
                        </p>
                      </div>
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          8 Go <span className="font-700">RAM</span>
                        </p>
                      </div>
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          100 Go <span className="font-700">SSD NVMe</span>
                        </p>
                      </div>
                    </div>
                    <div className="order_btn">
                      <Link to="/order" className="select_none">
                        Order for 19.95€
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper_box_2">
                <div className="box_2">
                  <div className="col_5">
                    <div className="title_col_5">
                      <p>RDP-03</p>
                    </div>
                    <div className="col_6">
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          2x Xeon <span className="font-700">E5-2680 v2</span>
                        </p>
                      </div>
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          8 Go <span className="font-700">RAM</span>
                        </p>
                      </div>
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          100 Go <span className="font-700">SSD NVMe</span>
                        </p>
                      </div>
                    </div>
                    <div className="order_btn">
                      <Link to="/order" className="select_none">
                        Order for 29.95€
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper_box_2">
                <div className="box_2">
                  <div className="col_5">
                    <div className="title_col_5">
                      <p>RDP-04</p>
                    </div>
                    <div className="col_6">
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          2x Xeon <span className="font-700">E5-2680 v2</span>
                        </p>
                      </div>
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          8 Go <span className="font-700">RAM</span>
                        </p>
                      </div>
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          100 Go <span className="font-700">SSD NVMe</span>
                        </p>
                      </div>
                    </div>
                    <div className="order_btn">
                      <Link to="/order" className="select_none">
                        Order for 39.95€
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrapper_box_2">
                <div className="box_2">
                  <div className="col_5">
                    <div className="title_col_5">
                      <p>RDP-05</p>
                    </div>
                    <div className="col_6">
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          2x Xeon <span className="font-700">E5-2680 v2</span>
                        </p>
                      </div>
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          8 Go <span className="font-700">RAM</span>
                        </p>
                      </div>
                      <div className="row_5">
                        <img src={cpu} alt="" />
                        <p>
                          100 Go <span className="font-700">SSD NVMe</span>
                        </p>
                      </div>
                    </div>
                    <div className="order_btn">
                      <Link to="/order" className="select_none">
                        Order for 49.95€
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}
