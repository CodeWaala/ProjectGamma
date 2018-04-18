import React, { Component } from 'react';


class Help extends Component {
    render() {
      return (
        <Router>
            <div className='container'>
              <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/SignUp' component={SignUp} />
                  <Route exact path='/Login' component={Login} />
                  <Route render= {() => {
                    return (<p> Page Not Found 404</p>)
                  }} /> 
              </Switch>
            </div>
        </Router>
      )
    }
  }

  export default Help;