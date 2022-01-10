import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getProducts from '../utils/getProducts';

export default class GenerateProductList extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { category, noId } = this.props;
    let products = await getProducts(category);
    if (noId) {
      products = products.filter((element) => element.id !== noId);
    }
    this.setState({
      products,
    });
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
            <li key={id}>
              <Link
                to={`/description/product/${id}`}
              >
                <img src={thumbnail} width="100px" alt={title} />
                <h3>{title}</h3>
                <p>{`R$ ${price}`}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
