/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Pages from './pages';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/category/:id" component={Pages.ProductsOfCategory} />
        <Route path="/" component={Pages.Home} />
      </Switch>
    );
  }
}
