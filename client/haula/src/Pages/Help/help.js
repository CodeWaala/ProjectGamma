import React, { Component } from 'react';
import { Grid, Row, Col, Image} from 'react-bootstrap';
import './help.css'

const personHolder = require('../Home/components/images/person-icon.png')


export class Help extends Component {
    render() {
      return (
        <div>
        <Grid>
                        <Row className="container">
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
                        </Grid>;

        </div>
      )
    }
  }

  export default Help;