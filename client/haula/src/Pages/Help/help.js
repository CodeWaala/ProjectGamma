import React, { Component } from 'react';
import {Image} from 'react-bootstrap';

const { helpImage } = require('../../Pages/Home/components/images/background1.jpg')

export class Help extends Component {
    render() {
      return (
        <div>
        <h1>This is your HELP PAGE</h1>
        <img src={helpImage}/>
        </div>
      )
    }
  }

  export default Help;