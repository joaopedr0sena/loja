/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import GenerateProductList from '../../helpers/generateProductList';

export default class Categories extends Component {
  render() {
    const { match } = this.props;
    const { id, name } = match.params;
    return (
      <div>
        <h1>{name}</h1>
        <input type="text" />
        <GenerateProductList category={id} />
      </div>
    );
  }
}
