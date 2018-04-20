import React, { Component } from 'react';
// import AppBarExampleIcon from './components/nav';
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
// import Home from './components/Home';
// import Customer from './components/Customer';
// import Mover from './components/Mover';
import SignUp from './components/SignUp/SignUp';
import Nav from './components/nav/nav';
import Login from './components/Login/Login';



import { MyNavbar } from './Shared/nav/nav2';
import { LogIn } from './Pages/LogIn/loginpage'
import { Footer } from './Shared/footer/footer';
import Home from './Pages/Home';
import { SignUpPage } from './Pages/SignUp/signuppage';
import { Customer } from './Pages/Customer/customer';
import { Home } from './Pages/Home/home';
import { Mover } from './Pages/Mover/mover';

class App extends Component {
  render() {
    return (
      <div>
      <Router>
          <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/SignUp' component={SignUp} /> 
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Customer' component={Customer} />
                <Route exact path='/Mover' component={Mover} />
                <Route render= {() => <p>Page Not Found 404</p>} />  
            </Switch>
            <MyNavbar/>
          </div>
          </Router>
      <div className="App">
<<<<<<< HEAD
      {/* <Home/> */}
      {/* <LogIn/> */}
      {/* <SignUpPage/> */}
      {/* <Customer/> */}
      {/* <Mover/>
      <Footer/> */}
         {/* <header className="App-header">
=======
      <MyNavbar/>
      <Home/>
      <LogIn/>
      <Mover/>
      <Footer/>
        {/* <header className="App-header">
>>>>>>> 4da1d328f7bf607f8d8ff143d7c09a179937b664
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
       </div>
      </div>
    )
  }
}

export default App;








