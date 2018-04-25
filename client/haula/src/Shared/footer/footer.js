import React, { Component } from "react";
import "./footer.css";
import logoFooter from "../../Pages/Home/components/images/logo_blue.png";
import {Router, Link} from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
      <footer id="Footer">
        <div className="container flex-1">
          <div class="row footergrid">
            <div class="col-sm-3">
              <h2 class="logo">
                <a href="#"><img src={logoFooter} className="logoFooter" />  </a>
              </h2>
            </div>
            <div className="col-sm-2 getStarted">
              <h5>Get started</h5>
              <ul className="mainMenu">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Sign up</a>
                </li>
                <li>
                  <a href="#">Downloads</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2 getStarted">
              <h5>About us</h5>
              <ul className="firstMenu">
                <li>
                  <a href="#">Company Information</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-2">
              <h5>Support</h5>
              <ul className="secondMenu">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <Link to="/Help">Help</Link>
                </li>
                <li>
                  <a href="#">Forums</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 socialNetworks">
              <div class="social-networks">
                <a href="#" class="twitter">
                  <i class="fa fa-twitter" />
                </a>
                <a href="#" class="facebook">
                  <i class="fa fa-facebook" />
                </a>
                <a href="#" class="google">
                  <i class="fa fa-google-plus" />
                </a>
              </div>
              <button type="button" className="btn">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div className="footer-copyright flex-2">
          <p>© 2018 Copyright Text </p>
        </div>
      </footer>
    );
  }
}
