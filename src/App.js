import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import Modules from './components/Modules';
import Badges from './components/Badges';

function App() {
  return (
    <> 
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid justify-content-start">
          <a href="/" className="navbar-brand">
            Scouting Academy
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/modules" className="nav-link">
                Modules
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/badges" className="nav-link">
                Badges
              </Link>
            </li>
          </div>
        </div>
      </nav>

      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Modules />} />
          <Route path="modules" element={<Modules />} />
          <Route path="badges" element={<Badges />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
