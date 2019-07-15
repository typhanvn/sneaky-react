import React, { Component, Fragment } from 'react';
import CTA from './../../components/CTA/CTA';
import TalentChef from './../../components/TalentChef/TalentChef';
import Banner from './../../components/Banner/Banner';

export default class Chef extends Component {
  render() {
    return (
      <Fragment>
        <Banner id_page={4} btn={false} />
        <TalentChef />
        <CTA />
      </Fragment>
    );
  }
}
