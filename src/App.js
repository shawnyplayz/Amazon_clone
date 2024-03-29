import React from "react";
import './App.css';
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route path ="/checkout">
        <Header />
        <Checkout/>
          
        </Route>
        <Route path="/login">
          <Login/>
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
