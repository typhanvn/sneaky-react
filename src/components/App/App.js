import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './../../routes/index';
import Footer from './../Footer/Footer';
import Header from './../Header/Header';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <AppRouter />
        <Footer />
      </Router>
    );
  }
}
