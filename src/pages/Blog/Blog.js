import React, { Component, Fragment } from 'react';
import Banner from './../../components/Banner/Banner';

export default class Blog extends Component {
  render() {
    return (
      <Fragment>
        <Banner id_page={5} btn={false} />
        <div className="container">
          <h1>Blog page</h1>
        </div>
      </Fragment>
    );
  }
}
