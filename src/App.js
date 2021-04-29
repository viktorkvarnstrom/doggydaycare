import './App.css';
import Welcome from './components/Welcome'
import Register from './components/Register'
import Info from './components/Info'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/info">
          <Info />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
