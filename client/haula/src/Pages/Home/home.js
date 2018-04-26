import React, { Component } from 'react';
import { Image, Grid, Row, Col, Button } from 'react-bootstrap';
import './home.css';//
import bg1 from '../../Shared/main_images/main_bg.jpg';
import boxes from '../../Shared/main_images/main_boxes.png';
import step1 from '../../Shared/main_images/step1.jpg';
import step2 from '../../Shared/main_images/step2.jpg';


const personHolder = require('./components/images/person-icon.png')

// const styles = {
//     fontFamily: 'Menlo-Regular, Menlo, monospace',
//     fontSize: 14,
//     color: 'white',
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
// }


export class Home extends Component {
    render() {
      return (
        <div className="App">
                <div className='parallax bg1' style={{backgroundColor:"#50dfbf"}}>
                    <div>
                        <img src={bg1} className='boxes'/>;
                    </div>
                    <Button className="customer-btn">Customer</Button>
                    <Button className="mover-btn">Mover</Button>

                </div>

                <div className='containerTwo' style={{height: "500px", backgroundColor: "white",display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                    <div class="row-container">
                        <Grid>
                            <Row>
                                <Col>
                                <Image className="personIcon" src={personHolder} circle responsive />
                                </Col>
                                <Col>
                                <Image className="personIcon" src={personHolder} circle responsive />
                                </Col>
                                <Col>
                                <Image className="personIcon" src={personHolder} circle responsive />
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>

                <div className='stepOne-box' style={{height: "500px", backgroundColor: "white",display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                    <div class="row-containerTwo">
                        <Grid>
                            <Row>
                                <Col>
                                <Image className="stepOne" src={step1} responsive />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Image className="stepTwo" src={step2} responsive />
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </div>




                {/*<div style={{height: "500px", backgroundColor: "white",display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                    <div class="row-container">
                    <Grid>
                        <Row>
                            <Col>
                            <Image className="personIcon" src={personHolder} circle responsive />
                            </Col>
                            <Col>
                            <Image className="personIcon" src={personHolder} circle responsive />
                            </Col>
                            <Col>
                            <Image className="personIcon" src={personHolder} circle responsive />
                            </Col>
                        </Row>
                    </Grid>
                    </div>
                </div>
                <div className='parallax'>
                </div>
             {/* <Parallax ref="parallax" pages={3}>

                        <Parallax.Layer 
                            offset={0}
                            speed={0.2} 
                            factor={0}
                            style={{ backgroundColor: 'red'}}
                        />
                        <Parallax.Layer 
                            factor={0}
                            offset={1}
                            speed={0.2}
                            style={{ backgroundColor: 'blue' }}
                        />
                        <Parallax.Layer
                            offset={2}
                            speed={0.2}
                            style={{ backgroundColor: 'green' }}
                            factor={0}
                        />

                        <Parallax.Layer
                            factor={0.7}
                            offset={0}
                            speed={0.5}
                            style={styles}
                            onClick={() => this.refs.parallax.scrollTo(1)}
                        ><Image src={imgSource1} responsive/>
                        </Parallax.Layer>
                        

                        <Parallax.Layer
                            offset={1}
                            speed={-0.5}
                            style={{ backgroundColor: 'white'}}
                            onClick={() => this.refs.parallax.scrollTo(0)}
                            >
                            Another page ... <Button/>
                        </Parallax.Layer>

                        <Parallax.Layer
                            offset={2}
                            speed={0.5}
                            style={styles}
                            onClick={() => this.refs.parallax.scrollTo(0)}>
                            The end.
                        </Parallax.Layer>

                    </Parallax> */}
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