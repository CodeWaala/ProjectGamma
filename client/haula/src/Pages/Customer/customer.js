import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalFooter,
  Tabs,
  Tab,
  Table,
  Button
} from "react-bootstrap";
import API from "../../utils/apihelpers";
//import MapWithAMarker from "../../Shared/googlemap/MapContainer";
import MapWithADirectionsRenderer from "./mapwithdirection";
const google = window.google;
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

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount() {
    this.getMovesInfo();
  }

  getMovesInfo = () => {
    //api call to get data from DB (moves or order information)
    API.getOrders()
      .then(res => this.setState({ moverequests: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
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
                  onClick={this.handleShow}
                >
                  Track Request
                </Button>
              </td>
              <Modal show={this.state.show} onHide={this.handleClose}>
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
              </Modal>
            </tr>
          ))};
        </tbody>
      </Table>
    );
  }
}

export default Customer;
