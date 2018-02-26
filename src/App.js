import React, { Component } from 'react';
import Hero from './components/hero';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div>
        <Hero />
        <About />
      </div>
    );
  }
}

export default App;
