import React, { Component } from "react";
import {
  Modal,
  // Tabs,
  // Tab,
  Table,
  Button
} from "react-bootstrap";
import API from "../../utils/apihelpers";
//import MapWithAMarker from "../../Shared/googlemap/MapContainer";
import MapWithADirectionsRenderer from "./mapwithdirection";
import IconUrl from "../Home/components/images/GRAY-PIN.png";
import IconUrlHover from "../Home/components/images/red-pin.png";
const google = window.google;
const navigator = window.navigator;
let geocoder = new window.google.maps.Geocoder();
let infowindow = new google.maps.InfoWindow();
// const { compose, withProps, lifecycle } = require("recompose");

export class Customer extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      map: null,
      infoWindow: null,
      MarkersInfo: {},
      IconUrl: "images/GRAY-PIN.png",
      IconUrlHover: "images/red-pin.png",
      FurnitureImage: "images/furniture-picture.jpg",
      moverequests: [],
      toaddress: "",
      fromaddress: "",
      show: false
    };
  }

//   autocomplete() {
//     var moveFrom = document.getElementById('moveFrom');
//     var moveTo = document.getElementById('moveTo');

//     var autocomplete = new google.maps.places.Autocomplete(moveFrom);

//       // Bind the map's bounds (viewport) property to the autocomplete object,
//       // so that the autocomplete requests use the current map bounds for the
//       // bounds option in the request.
//       autocomplete.bindTo('bounds', map);

//     var autocomplete = new google.maps.places.Autocomplete(moveTo);

//       // Bind the map's bounds (viewport) property to the autocomplete object,
//       // so that the autocomplete requests use the current map bounds for the
//       // bounds option in the request.
//       autocomplete.bindTo('bounds', map);
//   }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow(fromadd,toadd) {
    this.setState({ fromaddress: fromadd, toaddress: toadd });
    
    //this.calculateAndDisplayRoute(fromadd,toadd,this.state.map)
    this.initMap(fromadd,toadd);
  }

  componentDidMount() {
    this.getMovesInfo();
  }

  getMovesInfo = () => {
    //api call to get data from DB (moves or order information)
    API.getOrders()
      .then(res => {
         this.setState({moverequests: res.data })
         //this.initMap();
      })
      .catch(err => console.log(err));
  };

  initMap(fromaddress,toaddress) {
    var map = new google.maps.Map(this.refs.map, {
      zoom: 8,
      center: { lat: 32.715, lng: -117.161 }
    });
    this.setState({
       map: map
    })
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          map.setCenter(pos);
        },
        function() {
          this.handleLocationError(true, this.infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      this.handleLocationError(false, this.infoWindow, map.getCenter());
    }
    
    this.calculateAndDisplayRoute(fromaddress,toaddress,map)
  }

  calculateAndDisplayRoute(fromAddress, ToAddress, map) {
    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();
    directionsService.route({
      origin: fromAddress,
      destination: ToAddress,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
        new google.maps.DirectionsRenderer({
            map: map,
            directions: response
          });
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  render() {
    return (
      <div className="flex-box">
      <div className="flex-1">
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Request Name</th>
            <th>Moving From</th>
            <th>Moving To</th>
            <th>Moving Date</th>
            <th>Expected Price</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {this.state.moverequests.map((request, i) => (
            <tr>
              <td>{request.id}</td>
              <td>Customer Name</td>
              <td>{request.fromaddress}</td>
              <td>{request.toaddress}</td>
              <td>Date goes Here</td>
              <td>{request.expectedprice}</td>
              <td>{request.orderstatus}</td>
              <td>
                <Button
                  bsStyle="primary"
                  bsSize="small"
                  onClick={() => this.handleShow(request.fromaddress, request.toaddress)}
                >
                  Track Request
                </Button>
              </td>
              {/* <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4>Text in a modal</h4>
                  <hr />
                  <h4>Overflowing text to show scroll behavior</h4>
                  <MapWithADirectionsRenderer
                    from={request.fromaddress}
                    To={request.toaddress}
                  />
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
              </Modal> */}
            </tr>
          ))};
        </tbody>
      </Table>
      </div>
      <div className="flex-2">
         <div id="Map" ref="map"></div>
      </div>
      </div>
    );
  }
}

export default Customer;
