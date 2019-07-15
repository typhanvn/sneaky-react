import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TalentChef extends Component {
  render() {
    const { chefs } = this.props;
    return (
      <section className="section-margin">
        <div className="container">
          <div className="section-intro mb-75px">
            <h4 className="intro-title">Our Chef</h4>
            <h2>Talent &amp; experience member</h2>
          </div>
          {/* <div className="row">
            {chefs.map(chef => {
              return (
                <div className="col-sm-6 col-lg-4 mb-4 mb-lg-0" key={chef.id}>
                  <div className="chef-card">
                    <img
                      className="card-img rounded-0"
                      src={chef.image}
                      alt=""
                    />
                    <div className="chef-footer">
                      <h4>{chef.name}</h4>
                      <p>{chef.position}</p>
                    </div>
                    <div className="chef-overlay">
                      <ul className="social-icons">
                        <li>
                          <Link to={chef.facebook_link}>
                            <i className="ti-facebook" />
                          </Link>
                        </li>
                        <li>
                          <Link to={chef.twitter_link}>
                            <i className="ti-twitter-alt" />
                          </Link>
                        </li>
                        <li>
                          <Link to={chef.skype_link}>
                            <i className="ti-skype" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>
    );
  }
}
