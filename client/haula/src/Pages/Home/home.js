import React, { Component } from 'react';
import { MyNavbar } from '../../Shared/nav/nav2';
import { Footer } from '../../Shared/footer/footer';
import { Image } from 'react-bootstrap';
import { Parallax } from 'react-spring'

const imgSource = require("./components/images/background1.jpg")

export class Home extends Component {
    render() {
      return (
        <div className="App">
        <MyNavbar/>
        <img src="/components/images/background1.jpg" alt="banana"/>
        <Image src={imgSource} responsive />;
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

  export default Home;