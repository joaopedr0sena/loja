/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Pages from './pages';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/category/:id/categoryName/:name" component={Pages.Categories} />
        <Route path="/description/product/:id" component={Pages.Description} />
        <Route path="/search/:searchItem" component={Pages.Search} />
        <Route path="/shoppingCart" component={Pages.ShoppingCart} />
        <Route path="/" component={Pages.Home} />
      </Switch>
    );
  }
}
