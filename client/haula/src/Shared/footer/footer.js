import React, { Component } from "react";
import "./footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer id="Footer">
        <div class="container flex-1">
          <div class="row">
            <div class="col-sm-3">
              <h2 class="logo">
                <a href="#"> LOGO </a>
              </h2>
            </div>
            <div class="col-sm-2">
              <h5>Get started</h5>
              <ul>
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
            <div class="col-sm-2">
              <h5>About us</h5>
              <ul>
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
            <div class="col-sm-2">
              <h5>Support</h5>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Help desk</a>
                </li>
                <li>
                  <a href="#">Forums</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-3">
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
              <button type="button" class="btn btn-default">
                Contact us
              </button>
            </div>
          </div>
        </div>
        <div class="footer-copyright flex-2">
          <p>© 2018 Copyright Text </p>
        </div>
      </footer>
    );
  }
}
