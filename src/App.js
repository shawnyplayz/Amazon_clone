import React from "react";
import './App.css';
//import './Header';
import { Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
//import Header from './Header';
function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/checkout">checkout page</Link>
            </li>
            <li>
            <Link to="/login">Login page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path ="/checkout">
          <h1>Hi this is the checkout page</h1>
        </Route>
        <Route path="/login">
          <h1>This is the login page</h1>
        </Route>
        <Route path='/'>
          <h1>This is the main page</h1>
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
