import React, { Component } from 'react';
import { MyNavbar } from './Shared/nav/nav2';
import { LogIn } from './Pages/LogIn/loginpage'
import { Footer } from './Shared/footer/footer';
import { Home } from './Pages/Home/home'
import { SignUpPage } from './Pages/SignUp/signuppage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MyNavbar/>
      <Home/>
      <LogIn/>
      <SignUpPage/>
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
