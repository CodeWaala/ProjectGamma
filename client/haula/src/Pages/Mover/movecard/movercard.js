import React from "react";
import { Thumbnail, Button, Glyphicon, Col, Row } from "react-bootstrap";
import "./movercard.css";

export const MoverCard = props => (
  <div ClassName="card" data-key={props.key} data-acceptstatus={props.orderstatus} onMouseOver={props.onMouseOver} onMouseLeave={props.onMouseLeave}>
    <Col>
    <Thumbnail src={props.Image} alt="242x200">
      <h3>Thumbnail label</h3>
      <p>Description </p>
      <p>{props.price}</p>
      <p>{props.toaddress}</p>
      <p>{props.fromaddress}</p>
      <p>
        <Button bsStyle="primary" onClick={props.onAccept} disabled={props.orderstatus == "accepted" ? "disabled" : ""} >
          <Glyphicon glyph="ok"/> {props.orderstatus == "accepted" ? "Accepted" : "Accept"}
        </Button>&nbsp;
      </p>
    </Thumbnail>
    </Col>
  </div>
);

export default MoverCard;
