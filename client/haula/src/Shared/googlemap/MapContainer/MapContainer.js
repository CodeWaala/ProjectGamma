import React, { Component } from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const { compose, withProps, lifecycle } = require("recompose");

const MapWithAMarker = compose(withProps(), withScriptjs,
withGoogleMap)(props => {
  console.log('props', props)
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 32, lng: 117 }}>
        <Marker position={{lat: 32, lng: 117}} />  
    </GoogleMap>
  )
})

export default MapWithAMarker;
