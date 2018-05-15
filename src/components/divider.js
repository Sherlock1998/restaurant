import React, { Component } from "react";

export default class Divider extends Component {
  render() {
    const text = this.props.text;
    return (
      <section className="divider">
        <h2 className="heading--secondary">{text}</h2>
      </section>
    );
  }
}
