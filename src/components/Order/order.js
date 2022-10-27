import React from 'react'
import { Link } from 'react-router-dom'
import FooterApp from '../footerApp/footerApp'
import AppNav from '../AppNav/appNav'
import './order.css'

export default function Order() {
  return (
    <div className="screen_height">
      <AppNav></AppNav>
      <section className="order">
        <div className="container_1">
          <div className="col_23">
            <div className="title_order">
              <h2>Select plan</h2>
              <p>Decide how much resources you need</p>
            </div>
            <div className="row_49">
              <div className="box_order border">
                <div className="row_50">
                  <div className="col_47">
                    <h2>RDP-01</h2>
                    <p>40 GB NVMe - 6 GB Ram </p>
                  </div>
                  <div className="prices">
                    <p>
                      10€<span>/mo</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box_order border">
                <div className="row_50">
                  <div className="col_47">
                    <h2>RDP-01</h2>
                    <p>40 GB NVMe - 6 GB Ram </p>
                  </div>
                  <div className="prices">
                    <p>
                      10€<span>/mo</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box_order border">
                <div className="row_50">
                  <div className="col_47">
                    <h2>RDP-01</h2>
                    <p>40 GB NVMe - 6 GB Ram </p>
                  </div>
                  <div className="prices">
                    <p>
                      10€<span>/mo</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box_order border">
                <div className="row_50">
                  <div className="col_47">
                    <h2>RDP-01</h2>
                    <p>40 GB NVMe - 6 GB Ram </p>
                  </div>
                  <div className="prices">
                    <p>
                      10€<span>/mo</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box_order border">
                <div className="row_50">
                  <div className="col_47">
                    <h2>RDP-01</h2>
                    <p>40 GB NVMe - 6 GB Ram </p>
                  </div>
                  <div className="prices">
                    <p>
                      10€<span>/mo</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="title_order">
              <h2>Select region</h2>
              <p>Close to your home network</p>
            </div>
            <div className="row_49">
              <div className="box_order border">
                <div className="row_50">
                  <div className="col_47">
                    <h2 className="margin_0">Amsterdam, Netherlands</h2>
                  </div>
                  <div className="prices">
                    <p>
                      10€<span>/mo</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="title_order">
              <h2>Select Operating System</h2>
              <p>Every server can be reinstalled as many times as you want</p>
            </div>
            <div className="row_49">
              <div className="box_order border">
                <div className="row_50">
                  <div className="col_47">
                    <h2 className="margin_0">Ubuntu 20.04 LTS</h2>
                  </div>
                  <div className="prices">
                    <p>
                      10€<span>/mo</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box_order border">
                <div className="row_50">
                  <div className="col_47">
                    <h2 className="margin_0">Debian 9.11</h2>
                  </div>
                  <div className="prices">
                    <p>
                      10€<span>/mo</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="box_order border">
                <div className="row_50">
                  <div className="col_47">
                    <h2 className="margin_0">Windows Server 2019</h2>
                  </div>
                  <div className="prices">
                    <p>
                      10€<span>/mo</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="purchase_btn">
              <Link to="/purchase">Purchase</Link>
            </div>
          </div>
        </div>
      </section>
      <FooterApp></FooterApp>
    </div>
  )
}
