import React,{Component} from 'react';
import baricole from '../img/baricole.jpg';
import eggplant from '../img/eggplant.jpg';
import lasagna from '../img/lasagna.jpg';
import spaghetti from '../img/spaghetti.jpg';

export default class Menus extends Component {
  render() {
    return (
      <section className="menu-section">
        <div className="menu">
          <div className="menu__row--1">
            <div className="menu__text--1">
              <span className="food--heading">lasagna</span>
              <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
              <span className="menu__price price">from $15.40</span>
            </div>
            <div className="menu__pic--1"><img src={lasagna} alt="lasagna" /></div>
            <div className="menu__text--2">
              <span className="food--heading">eggplant parmigiana</span>
              <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
              <span className="menu__price price">from $15.40</span>
            </div>
            <div className="menu__pic--2"><img src={eggplant} alt="eggplant" /></div>
          </div>
          <div className="menu__row--2">
            <div className="menu__pic--3"><img src={baricole} alt="baricole" /></div>
            <div className="menu__text--3">
              <span className="food--heading">baricole  </span>
              <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
              <span className="menu__price price">from $15.40</span>
            </div>
            <div className="menu__pic--4"><img src={spaghetti} alt="spaghetti" /></div>
            <div className="menu__text--4">
              <span className="food--heading">spaghetti with meatballs</span>\
              <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
              <span className="menu__price price">from $15.40</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
