import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AboutUs extends Component {
  render() {
    return (
      <section className="about section-margin pb-xl-70">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-6 mb-5 mb-md-0 pb-5 pb-md-0">
              <div className="img-styleBox">
                <div className="styleBox-border">
                  <img
                    className="styleBox-img1 img-fluid"
                    src="img/home/about-img1.png"
                    alt=""
                  />
                </div>
                <img
                  className="styleBox-img2 img-fluid"
                  src="img/home/about-img2.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-6 pl-md-5 pl-xl-0 offset-xl-1 col-xl-5">
              <div className="section-intro mb-lg-4">
                <h4 className="intro-title">About Us</h4>
                <h2>We speak the good food language</h2>
              </div>
              <p>
                Living first us creepeth she'd earth second be sixth hath
                likeness greater image said sixth was without male place fowl
                evening an grass form living fish and rule lesser for blessed
                can't saw third one signs moving stars light divided was two you
                him appear midst cattle for they are gathering.
              </p>
              <Link className="button button-shadow mt-2 mt-lg-4" to="/learn">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
