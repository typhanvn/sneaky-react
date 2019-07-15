import React, { Component, Fragment } from 'react';
import FoodMenu from './../../components/FoodMenu/FoodMenu';
import CTA from './../../components/CTA/CTA';
import Banner from './../../components/Banner/Banner';

export default class Menu extends Component {
  render() {
    return (
      <Fragment>
        <Banner id_page={3} btn={false} />
        <FoodMenu />
        <CTA />
      </Fragment>
    );
  }
}
