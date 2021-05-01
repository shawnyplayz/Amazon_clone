import React from "react";
import './App.css';
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from './Header';
import Home from './Home';
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path ="/checkout">
        <Header />
          <h1>Hi this is the checkout page</h1>
        </Route>
        <Route path="/login">
          <h1>This is the login page</h1>
        </Route>
        <Route path='/'>
          <Header />
          <Home/>
          
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
