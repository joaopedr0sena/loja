import React, { Component } from 'react';
import getProducts from '../../../utils/getProducts';

class Cards extends Component {
  constructor() {
    super();
    
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    const products =  await getProducts();

    this.setState({ products });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <ul>
          {products.map(({ title, thumbnail, id }) => (
            <li key={id}>
              <img src={thumbnail} width="100px" alt={title}/>
              <h3>{title}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cards;