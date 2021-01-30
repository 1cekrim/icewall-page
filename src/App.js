import './App.css';
import { BrowserRouter, Link, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Link to="/">
            <button>Home</button>
          </Link>
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
        </header>
        <main>
          <Route exact path="/" />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
