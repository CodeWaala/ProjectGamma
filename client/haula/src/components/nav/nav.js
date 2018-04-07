import React from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { green500 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    appBar: {
        height: 500,
        color: green500,
    },
});

const AppBarExampleIcon = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
  <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
  </MuiThemeProvider>
);

export default AppBarExampleIcon;