import React, { Component } from "react";
import { MyNavbar } from "../../Shared/nav/nav2";
import { Footer } from "../../Shared/footer/footer";
import { Image, Grid, Row, Col,Thumbnail, Button, Glyphicon } from "react-bootstrap";
import MapWithAMarker from "../../Shared/googlemap/MapContainer";
import './mover.css'

//import { Mover } from './Pages/Mover/mover';
import {MoveCardContainer} from "./movecardcontainer/movecardcontainer.js";
import MoverCard from "./movecard/movercard";
import API from "../../utils/API";
import orders from "./orders.json";

export class Mover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders,
      map: null,
      infoWindow: null,
      MarkersInfo: {},
      IconUrl: "images/GRAY-PIN.png",
      IconUrlHover: "images/red-pin.png",
      FurnitureImage: "images/furniture-picture.jpg",
      moverequests: {}
    };
  }

    componentDidMount() {
        this.getMovesInfo();
    }

    getMovesInfo = () => {
        //api call to get data from DB (moves or order information)
        API.getOrders()
         .then(res => this.setState({moverequests: res.data}))
         .catch(err => console.log(err));
    }

  render() {
    return (
      <div className="flex-box">
<<<<<<< HEAD
        <div className="flex-1">
        
                  <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description </p>
                    <p>
                      <Button bsStyle="primary"><Glyphicon glyph="ok" /> Accept</Button>&nbsp;
                      <Button bsStyle="default">Button</Button>
                    </p>
                  </Thumbnail>
          
                  <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary"><Glyphicon glyph="ok" /> Accept</Button>&nbsp;
                      <Button bsStyle="default">Button</Button>
                    </p>
                  </Thumbnail>
               
               
                  <Thumbnail src="/thumbnaildiv.png" alt="242x200">
                    <h3>Thumbnail label</h3>
                    <p>Description</p>
                    <p>
                      <Button bsStyle="primary"><Glyphicon glyph="ok" /> Accept</Button>&nbsp;
                      <Button bsStyle="default">Button</Button>
                    </p>
                  </Thumbnail>
        </div>
        <div className="flex-2">
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW2jclEKZ5j-zWenaspVMvdBekq60o1TQ&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
       </div> 
=======
        {console.log(this.state.orders)}
          <MoveCardContainer>
          {
            this.state.orders.map((request, i) => (
            <MoverCard
              key={request.key}
              price={request.expectedprice}
              toaddress={request.toaddress}
              fromaddress={request.fromaddress}
            />
          ))}
        </MoveCardContainer>
        <div className="flex-2">
          <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW2jclEKZ5j-zWenaspVMvdBekq60o1TQ&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
>>>>>>> 4da1d328f7bf607f8d8ff143d7c09a179937b664
      </div>
    );
  }
}

export default Mover;
