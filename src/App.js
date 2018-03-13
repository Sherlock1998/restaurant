import React, { Component } from 'react';
import Homepage from './homepage';
import Bookings from './bookings';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Homepage} />
          <Route path="/booking" component={Bookings} />
        </div>
      </Router>
    );
  }
}

export default App;
