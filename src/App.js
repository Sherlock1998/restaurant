import React, { Component } from 'react';
import Hero from './components/hero';
import About from './components/about';
import Divider from './components/divider';
import Menus from './components/menus';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        <Divider text={'our specialties'}/>
        <Menus />
        <Divider />
      </div>
    );
  }
}

export default App;
