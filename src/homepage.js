import React, {Component} from 'react';
import Hero from './components/hero';
import About from './components/about';
import Divider from './components/divider';
import Menus from './components/menus';
import MenusList from './components/menuslist';
import ContactForm from './components/contact_form';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <ContactForm />
        <Hero />
        <About />
        <Divider text={'our specialties'}/>
        <Menus />
        <Divider />
        <MenusList />
      </div>
    );
  }
}
