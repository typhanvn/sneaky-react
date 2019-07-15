import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer-area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Top Products</h4>
            </div>
            <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Quick Links</h4>
            </div>
            <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Features</h4>
            </div>
            <div className="col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
              <h4>Resources</h4>
            </div>
            <div className="col-xl-4 col-md-8 mb-4 mb-xl-0 single-footer-widget">
              <h4>Newsletter</h4>
              <p>You can trust us. we only send promo offers,</p>
              <div className="form-wrap" id="mc_embed_signup">
                <form target="_blank" action="#" method="get">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      name="EMAIL"
                      placeholder="Your Email Address"
                    />
                    <div className="input-group-append">
                      <button className="btn click-btn" type="submit">
                        <i className="ti-arrow-right" />
                      </button>
                    </div>
                  </div>
                  <div style={{ position: 'absolute', left: '-5000px' }}>
                    <input type="text" />
                  </div>
                  <div className="info" />
                </form>
              </div>
            </div>
          </div>
          <div className="footer-bottom row align-items-center text-center text-lg-left">
            <p className="footer-text m-0 col-lg-8 col-md-12">
              Copyright © All rights reserved | This template is made with{' '}
              <i className="ti-heart" aria-hidden="true" /> by{' '}
              <Link to="https://colorlib.com" target="_blank">
                Colorlib
              </Link>
            </p>
            <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
              <Link to="/facebook">
                <i className="ti-facebook" />
              </Link>
              <Link to="/twitter">
                <i className="ti-twitter-alt" />
              </Link>
              <Link to="/dribbble">
                <i className="ti-dribbble" />
              </Link>
              <Link to="/linkedin">
                <i className="ti-linkedin" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
