import React from "react";
import { Image, Grid, Row, Col,Thumbnail, Button, Glyphicon } from "react-bootstrap";

export const MoverCard = props => (
  <div>
    <Thumbnail src="/thumbnaildiv.png" alt="242x200">
      <h3>Thumbnail label</h3>
      <p>Description </p>
      <p>{props.price}</p>
      <p>{props.toaddress}</p>
      <p>{props.fromaddress}</p>
      <p>
        <Button bsStyle="primary">
          <Glyphicon glyph="ok" /> Accept
        </Button>&nbsp;
        <Button bsStyle="default">Button</Button>
      </p>
    </Thumbnail>
  </div>
);

export default MoverCard;
