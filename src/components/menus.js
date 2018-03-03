import React,{Component} from 'react';

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
            <div className="menu__pic--1"></div>
            <div className="menu__text--2">
              <span className="food--heading">eggplant parmigiana</span>
              <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
              <span className="menu__price price">from $15.40</span>
            </div>
            <div className="menu__pic--2"></div>
          </div>
          <div className="menu__row--2">
            <div className="menu__pic--3"></div>
            <div className="menu__text--3">
              <span className="food--heading">baricole  </span>
              <p className="body__text">lorem ipsum dolor sit amet consectetur adispcing elit, sed do eiusmod</p>
              <span className="menu__price price">from $15.40</span>
            </div>
            <div className="menu__pic--4"></div>
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
