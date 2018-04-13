import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green500, blue200, red200, red500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import './nav.css';

const muiTheme = getMuiTheme({
    appBar: {
        height: 60,
        color: green500,
    },
    raisedButton: {
      color: red500
    },
    flatButton: {
      color: blue200
    }
});

const AppBarExampleIcon = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
  <AppBar
    title className="Haula"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementRight={
    <div>
    <RaisedButton
      label="Log In"
      className="button1"
       />
    <FlatButton
     label="Save" />
    </div>}
  />
  </MuiThemeProvider>
);

export default AppBarExampleIcon;