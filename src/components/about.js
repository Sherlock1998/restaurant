import React, {Component} from 'react';

export default class About extends Component {
  render() {
    return (
      <section className="overlap-section">
        <div className="reservation">
          <div className="col-4-md col-12-xs reservation__text">
            <h4 className="reservation__text--heading">Reservations</h4>
            <p clasNames="reservation__text--paragraph">Contact us now to book a table. Reservations must be made on the same day</p>
            <button className="reservation__text--button">book a table</button>
          </div>
          <div className="col-8-md reservation__pic"></div>
          </div>
        <div className="about">
        <div className="col-4-md  col-12-xs about__pic"></div>
          <div className="col-8-md about__text">
            <h4 className="about__text--heading">About</h4>
            <p className="about__text--paragraph">La Granda is a third generation family owned restaurant that have received numerous fine-dining awards over the years. The restaurant is well known for preserving its authentic flavours throughout the years.</p>
          </div>
        </div>
      </section>
    )
  }
}
