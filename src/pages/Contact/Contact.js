import React, { Component, Fragment } from 'react';
import ContactUs from './../../components/ContactUs/ContactUs';
import Banner from './../../components/Banner/Banner';

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Banner id_page={6} btn={false} />
        <ContactUs />
      </Fragment>
    );
  }
}
