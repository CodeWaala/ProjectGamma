import React, { Component } from 'react';
// import AppBarExampleIcon from './components/nav';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  PrivateRoute,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
// const Router = ReactRouter.BrowserRouter;
// const Route = ReactRouter.Route;
// const Switch = ReactRouter.Switch;
import Home from './components/Home';
import Customer from './components/Customer';
import Mover from './components/Mover';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import Login from './components/Login';




class App extends Component {
  render() {
    return (
      <Router>
          <div className='container'>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/SignUp' component={SignUp} /> 
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Customer' component={Customer} />
                <Route exact path='/Mover' component={Mover} />
                <Route render= {() => <p>Page Not Found 404</p>} />  
            </Switch>
          </div>
      </Router>
    )
  }
}

export default App;








