import React, { Component, Fragment } from 'react';
import AboutUs from './../../components/AboutUs/AboutUs';
import FeaturedFood from './../../components/FeaturedFood/FeaturedFood';
import CTA from './../../components/CTA/CTA';
import Banner from './../../components/Banner/Banner';

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <Banner id_page={2} btn={false} />
        <AboutUs />
        <FeaturedFood />
        <CTA />
      </Fragment>
    );
  }
}
