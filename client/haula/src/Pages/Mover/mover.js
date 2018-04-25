import React, { Component } from "react";
import { MyNavbar } from "../../Shared/nav/nav2";
import { Footer } from "../../Shared/footer/footer";
import { Image, Grid, Row, Col,Thumbnail, Button, Glyphicon } from "react-bootstrap";
import MapWithAMarker from "../../Shared/googlemap/MapContainer";
import './mover.css'

//import { Mover } from './Pages/Mover/mover';
import {MoveCardContainer} from "./movecardcontainer/movecardcontainer.js";
import MoverCard from "./movecard/movercard";
import API from "../../utils/api";
import orders from "./orders.json";
const google = window.google;
const navigator = window.navigator;

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
      moverequests: [],
      latlongs: [],
      lat : null,
      lng : null
    };
  }

    componentDidMount() {
        this.getMovesInfo();
        this.getlatlng();
    }

    getMovesInfo = () => {
        //api call to get data from DB (moves or order information)
        API.getOrders()
         .then(res => this.setState({moverequests: res.data}))
         .catch(err => console.log(err));
    }

    getlatlng() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({ lat: position.coords.latitude, lng: position.coords.longitude});
          alert(position.coords.latitude);
        },
        error => console.log(error)
      );
    }

  render() {
    return (
      <div className="flex-box">
        <div className="flex-1">
        {console.log(this.state.moverequests)}
          <MoveCardContainer>
          {
            this.state.moverequests.map((request, i) => (
            <MoverCard
              key={request.key}
              price={request.expectedprice}
              toaddress={request.toaddress}
              fromaddress={request.fromaddress}
            />
          ))}
        </MoveCardContainer>
        </div>
        <div className="flex-2">
        <MapWithAMarker
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW2jclEKZ5j-zWenaspVMvdBekq60o1TQ&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
              test="test"
            /> 
        </div>
      </div>
    );
  }
}

export default Mover;
