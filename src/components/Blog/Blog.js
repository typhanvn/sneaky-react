import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Blog extends Component {
  render() {
    return (
      <section className="section-margin">
        <div className="container">
          <div className="section-intro mb-75px">
            <h4 className="intro-title">Our Blog</h4>
            <h2>Latest food and recipe news</h2>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card-blog">
                <img
                  className="card-img rounded-0"
                  src="img/blog/blog1.png"
                  alt=""
                />
                <div className="blog-body">
                  <ul className="blog-info">
                    <li>
                      <Link to="/admin">Admin post</Link>
                    </li>
                    <li>
                      <Link to="/date">Jan 10, 2019</Link>
                    </li>
                  </ul>
                  <Link to="/link">
                    <h3>Huge cavity in antarctic glacie signals rapid</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card-blog">
                <img
                  className="card-img rounded-0"
                  src="img/blog/blog2.png"
                  alt=""
                />
                <div className="blog-body">
                  <ul className="blog-info">
                    <li>
                      <Link to="/admin">Admin post</Link>
                    </li>
                    <li>
                      <Link to="/date">Jan 10, 2019</Link>
                    </li>
                  </ul>
                  <Link to="/link">
                    <h3>Huge cavity in antarctic glacie signals rapid</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card-blog">
                <img
                  className="card-img rounded-0"
                  src="img/blog/blog3.png"
                  alt=""
                />
                <div className="blog-body">
                  <ul className="blog-info">
                    <li>
                      <Link to="/admin">Admin post</Link>
                    </li>
                    <li>
                      <Link to="/date">Jan 10, 2019</Link>
                    </li>
                  </ul>
                  <Link to="/link">
                    <h3>Huge cavity in antarctic glacie signals rapid</h3>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
