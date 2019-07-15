import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CTA extends Component {
  render() {
    return (
      <section className="cta-area text-center">
        <div className="container">
          <p>Some Trendy And Popular Courses Offerd</p>
          <h2>Under replenish give saying thing</h2>
          <Link className="button" to="/contact">
            Reservation
          </Link>
        </div>
      </section>
    );
  }
}
