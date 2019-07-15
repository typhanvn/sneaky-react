import React, { Component, Fragment } from 'react';
import AboutUs from './../../components/AboutUs/AboutUs';
import FeaturedFood from './../../components/FeaturedFood/FeaturedFood';
import Offer from './../../components/Offer/Offer';
import FoodMenu from './../../components/FoodMenu/FoodMenu';
import CTA from './../../components/CTA/CTA';
import TalentChef from './../../components/TalentChef/TalentChef';
import Reservation from './../../components/Reservation/Reservation';
import Blog from './../../components/Blog/Blog';
import Banner from './../../components/Banner/Banner';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Banner id_page={1} btn />
        <AboutUs />
        <FeaturedFood />
        <Offer />
        <FoodMenu />
        <CTA />
        <TalentChef />
        <Reservation />
        <Blog />
      </Fragment>
    );
  }
}
