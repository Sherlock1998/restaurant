import React, { Component } from 'react';
import { connect } from 'react-redux';

import Hero from './components/hero';
import About from './components/about';
import Divider from './components/divider';
import Menus from './components/menus';
import MenusList from './components/menuslist';
import Modal from './components/modal';

class Homepage extends Component {
  state = { showModal: false };

  renderModal() {
    console.log(this.state);

    function preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault) e.preventDefault();
      e.returnValue = false;
    }

    if (this.state.showModal) {
      return <Modal onCancel={() => this.setState({ showModal: false })} />;
      document.body.addEventListener('touchmove', preventDefault, {
        passive: false
      });
    }
  }
  render() {
    return (
      <div>
        {this.renderModal()}
        <Hero />
        <About onShowModal={() => this.setState({ showModal: true })} />
        <Divider text={'our specialties'} />
        <Menus />
        <Divider />
        <MenusList />
      </div>
    );
  }
}

function mapStateToProps({ form }) {
  return {
    form
  };
}

export default connect(mapStateToProps)(Homepage);
