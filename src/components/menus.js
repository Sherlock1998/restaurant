import React,{Component} from 'react';

export default class Menus extends Component {
  render() {
    return (
      <section className="overlap-section">
        <div className="overlap">
          <div className="menu__row--1">
            <div className="menu__text--1"></div>
            <div className="menu__pic--1"></div>
            <div className="menu__text--2"></div>
            <div className="menu__pic--2"></div>
          </div>
          <div className="menu__row--2">
            <div className="menu__pic--3"></div>
            <div className="menu__text--3"></div>
            <div className="menu__pic--4"></div>
            <div className="menu__text--4"></div>
          </div>
        </div>
      </section>
    )
  }
}
