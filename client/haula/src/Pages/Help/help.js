import React, { Component } from 'react';
import { Grid, Row, Col, Image} from 'react-bootstrap';
import './help.css'

const personHolder = require('../Home/components/images/person-icon.png')
const bg1 =require('../../Shared/main_images/background1.jpg');


export class Help extends Component {
    render() {
      return (
        <Grid>
                        <img src={bg1} className='photo-bg' />
                        <Row className="container-help">
                            
                            <Col>
                            <Image className="personIcon" src={personHolder} circle responsive />
                            <h4 className="person1">Abhi</h4>
                            </Col>
                            <Col>
                            <Image className="personIcon" src={personHolder} circle responsive />
                            <h4 className="person2">Leeland</h4>
                            </Col>
                            <Col>
                            <Image className="personIcon" src={personHolder} circle responsive />
                            <h4 className="person3">Aid</h4>
                            </Col>
                            <Col>
                            <Image className="personIcon" src={personHolder} circle responsive />
                            <h4 className="person4">Will</h4>
                            </Col>
                        </Row>
                        </Grid>

      )
    }
  }

  export default Help;