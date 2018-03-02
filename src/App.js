import React, { Component } from 'react';
import Hero from './components/hero';
import About from './components/about';
import Specialties from './components/specialties';
import Menus from './components/menus';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
        <Specialties />
        <Menus />
      </div>
    );
  }
}

export default App;
