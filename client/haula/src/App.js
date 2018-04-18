import React, { Component } from 'react';
import { MyNavbar } from './Shared/nav/nav2';
import { LogIn } from './Pages/LogIn/loginpage'
import { Footer } from './Shared/footer/footer';
<<<<<<< HEAD
import { Home } from './Pages/Home/home'
import { SignUpPage } from './Pages/SignUp/signuppage';
import { Customer } from './Pages/Customer/customer';
=======
import { Home } from './Pages/Home/home';
>>>>>>> 79279566f4d2e68958508cf579bfdc81365661f0

class App extends Component {
  render() {
    return (
      <div className="App">
      <MyNavbar/>
      {/* <Home/> */}
      {/* <LogIn/> */}
      {/* <SignUpPage/> */}
      <Customer/>
      <Footer/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
