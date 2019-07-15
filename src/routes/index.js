import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';

export default class AppRouter extends Component {
  showContentMenu = routes => {
    let result = null;

    if (routes.length > 0) {
      result = routes.map(route => {
        return (
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }

    return result;
  };

  render() {
    return <Switch>{this.showContentMenu(routes)}</Switch>;
  }
}
