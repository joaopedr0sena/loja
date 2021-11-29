import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getProducts from '../utils/getProducts';

export default class GenerateProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { category } = this.props;
    const products = await getProducts(category);
    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <ul>
          {products.map(({
            thumbnail,
            title,
            price,
            id,
          }) => (
            <Link to={`/description/product/${id}`}>
              <li key={id}>
                <img src={thumbnail} width="100px" alt={title} />
                <h3>{title}</h3>
                <p>{`R$ ${price}`}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
