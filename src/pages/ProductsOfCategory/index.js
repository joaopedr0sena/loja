/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import getProducts from '../../utils/getProducts';

export default class ProductsOfCategory extends Component {
  constructor() {
    super();

    this.sendProducts = this.sendProducts.bind(this);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.sendProducts(id);
  }

  async sendProducts(id) {
    const products = await getProducts(id);
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <ul>
          {products.map(({ title, thumbnail, id }) => (
            <li key={id}>
              <img src={thumbnail} width="100px" alt={title} />
              <h3>{title}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
