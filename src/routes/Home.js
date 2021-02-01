import React from 'react'
import { PublicFolder } from '../Tools'

const Home = () => (
  <section id="main">
    <p id="demo" />

    <div id="sponsors">
      <h1 id="headline">SPONSORS</h1>

      <div className="blob">
        <div className="box">
          <img
            className="sponsor"
            src={PublicFolder('/static/img/sponsors/HYU_initial_kor.svg')}
            alt="HYU"
          />
        </div>
        <div className="box">
          <img
            className="sponsor"
            src={PublicFolder('/static/img/sponsors/scv_soft.svg')}
            alt="scv_soft"
          />
        </div>
      </div>
    </div>
  </section>
)

export default Home
