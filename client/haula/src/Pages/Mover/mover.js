import React, { Component } from "react";
import { MyNavbar } from "../../Shared/nav/nav2";
import { Footer } from "../../Shared/footer/footer";
import { Image } from "react-bootstrap";
import MapWithAMarker from "../../Shared/googlemap/MapContainer";

//import { Mover } from './Pages/Mover/mover';

export class Mover extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map : null,
      infoWindow : null,
      MarkersInfo: {},
      IconUrl: "images/GRAY-PIN.png",
      IconUrlHover: "images/red-pin.png",
      FurnitureImage: "images/furniture-picture.jpg"
    };
  }

  render() {
    return (
      <div className="flex-box">
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDW2jclEKZ5j-zWenaspVMvdBekq60o1TQ&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Mover;
