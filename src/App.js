import './App.css'
import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import { Home, About, Awards, Board, Gallary, Services } from './routes'
import 'bootstrap-social'
import { GithubLogin } from './GithubLogin'
import { PublicFolder } from './Tools'

const linksLeft = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/services', text: 'Services' },
]
const linksRight = [
  { to: '/awards', text: 'Awards' },
  { to: '/board', text: 'Board' },
  { to: '/gallary', text: 'Gallary' },
]
const Nav = () => {
  const [activedLink, setActivedLink] = useState('/')
  const onClickLink = (to) => {
    setActivedLink(to)
  }

  const MapFunction = (link) => (
    <li
      className={`nav-item mx-2 my-3 ${
        link.to === activedLink ? ' active' : ''
      }`}
    >
      <Link
        to={link.to}
        className="nav-link"
        onClick={() => onClickLink(link.to)}
        onKeyDown={() => onClickLink(link.to)}
      >
        <div>{link.text}</div>
      </Link>
    </li>
  )

  return (
    <nav className="navbar navbar-expand-lg fixed-top justify-content-center navbar-dark navbar-fixed-top">
      <ul className="navbar-nav my-3">
        <div className="collapse navbar-collapse" id="navCodllapse">
          {linksLeft.map(MapFunction)}
        </div>
        <Link
          to="/"
          className="navbar-brand mx-5"
          onClick={() => onClickLink('/')}
        >
          <div>ICEWALL</div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navCollapse"
          aria-controls="navCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navdCollapse">
          {linksRight.map(MapFunction)}
        </div>
        <div className="collapse" id="navCollapse">
          {linksLeft.map(MapFunction)}
          {linksRight.map(MapFunction)}
        </div>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <section id="top">
            <div
              id="bg_grid"
              style={{ display: 'inner-block', height: '100%' }}
            />
            <img
              src={PublicFolder('/static/img/logo/icewall/icewall.svg')}
              alt="icewall-logo"
            />
            <p id="type" className="line-1 anim-typewriter">
              Hanyang Univ. Student-CERT
            </p>
            <Nav />
            <img
              src={PublicFolder(
                '/static/img/backgroud/index/background_index_1.png',
              )}
              className="top-backgroud-image ."
              alt="backgroud"
            />
          </section>
        </header>
        <main>
          <Switch>
            <Route path="/awards" component={Awards} />
            <Route path="/board" component={Board} />
            <Route path="/gallary" component={Gallary} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
        <footer id="footer">
          <img
            src={PublicFolder('/static/img/logo/icewall/icewall.svg')}
            alt="icewall-logo"
            width="226.9"
            height="48.63"
          />
          <div id="social">
            <a href="mailto:icewall.executive@gmail.com">MAIL</a>
            <a href="https://www.facebook.com/icewall.hyu/">FACEBOOK</a>
            <a href="https://m.me/icewall.hyu">MESSENGER</a>
            <a href="https://github.com/HYU-ICEWALL">GITHUB</a>
            <a href="https://www.youtube.com/channel/UCaVXnXoRT2y-8PcGXlt70Jg">
              YOUTUBE
            </a>
          </div>
          <div id="icon">
            <a href="mailto:icewall.executive@gmail.com">
              <i className="fas fa-envelope" />
            </a>
            <a href="https://www.facebook.com/icewall.hyu/">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://m.me/icewall.hyu">
              <i className="fab fa-facebook-messenger" />
            </a>
            <a href="https://github.com/HYU-ICEWALL">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.youtube.com/channel/UCaVXnXoRT2y-8PcGXlt70Jg">
              <i className="fab fa-youtube" />
            </a>
          </div>
          <GithubLogin />
          <hr />
          <p id="copyright">
            COPYRIGHT © 2020 Hanyang University Student CERT, ICEWALL. All
            rights reserved. ||
            <strong>
              <div>개인정보처리방침</div>
            </strong>
          </p>
        </footer>
      </BrowserRouter>
    </div>
  )
}

export default App
