import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import HomeRoadmapPage from './components/HomeRoadmapPage';
import ProgressPage from './components/ProgressPage';
import FriendsPage from './components/FriendsPage';
import ProfilePage from './components/ProfilePage';
import ModulePage from './components/ModulePage';
import WorkInProgressPage from './components/WorkInProgressPage';
import ModuleSectionPage from './components/ModuleSectionPage';
import AddMethodpage from './components/AddMethodpage';

function App() {
  return (
    <> 
      <nav className="navigation navbar fixed-top navbar-expand navbar-dark">
        <div className="container my-3">
          <a href="/" className="navbar-brand">
            Scouting Academy+
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Modules
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/voortgang" className="nav-link">
                Voortgang
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/vrienden" className="nav-link">
                Vrienden
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profiel" className="nav-link">
                Profiel
              </NavLink>
            </li>
          </div>
        </div>
      </nav>

      <div className="container-fluid p-0">
        <Routes>
          <Route path="/" element={<HomeRoadmapPage />} />
          <Route path="module" element={<ModulePage />} />
          <Route path="modulesection" element={<ModuleSectionPage />} />
          <Route path="add-method" element={<AddMethodpage />} />
          <Route path="voortgang" element={<ProgressPage />} />
          <Route path="vrienden" element={<FriendsPage />} />
          <Route path="profiel" element={<ProfilePage />} />
          <Route path="wip" element={<WorkInProgressPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
