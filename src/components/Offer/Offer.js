import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Offer extends Component {
  render() {
    return (
      <section className="bg-lightGray section-padding">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-sm">
              <img
                className="card-img rounded-0"
                src="img/home/offer-img.png"
                alt=""
              />
            </div>
            <div className="col-sm">
              <div className="offer-card offer-card-position">
                <h3>Italian Pizza Offer</h3>
                <h2>50% OFF</h2>
                <Link className="button" to="/read-more">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
