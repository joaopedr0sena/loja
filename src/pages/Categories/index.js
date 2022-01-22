/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import GenerateProductList from '../../helpers/generateProductList';

// export { default as OrderBy } from './OrderBy';
export default class Categories extends Component {
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
