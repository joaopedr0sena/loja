/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import GenerateProductList from '../../helpers/generateProductList';

export default class ProductsOfCategory extends Component {
  // constructor() {
  //   super();

  //   // this.state = {
  //   //   idCategory: 0,
  //   // };
  // }

  render() {
    const { id } = this.props.match.params;
    return (
      <div>
        <input type="text" />
        <GenerateProductList category={id} />
      </div>
    );
  }
}
