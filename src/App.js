import './App.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

const public_folder = (url) => process.env.PUBLIC_URL + url

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <section id="top">
            <div id="bg_grid" style={{height: 100 + '%'}}></div>
            <img src={public_folder("/static/img/logo/icewall/icewall.svg")} alt="icewall-logo"/>
            <p id="type" className="line-1 anim-typewriter">
            Hanyang Univ. Student-CERT 
            </p>
            <nav className="navbar navbar-expand-sm fixed-top justify-content-center navbar-dark navbar-fixed-top">
              <ul className="navbar-nav my-3">
                <li className="nav-item active mx-2 my-3">
                  <Link to="/" className="nav-link">
                    <div>Home</div>
                  </Link>
                </li>
              </ul>
            </nav>
            
            <Link to="/about">
              <button>About</button>
            </Link>
            <Link to="/services">
              <button>Services</button>
            </Link>
            <Link to="/awards">
              <button>Awards</button>
            </Link>
            <Link to="/board">
              <button>Board</button>
            </Link>
          </section>
        </header>
        <main>
          <Switch>
            <Route path="/">
              
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
