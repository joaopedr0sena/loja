/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getProducts from '../utils/apis/getProducts';
import AddToCart from '../components/AddToCart';

const INITIAL_STATE = {
  loading: true,
  products: [],
};

export default class GenerateProductList extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.getProductsList = this.getProductsList.bind(this);
  }

  async componentDidMount() {
    const { category, noId } = this.props;
    this.getProductsList(category, noId);
  }

  async componentDidUpdate(prevProps) {
    const { category, noId } = this.props;
    const { noId: prevNoId, category: prevCategory } = prevProps;
    if (noId !== prevNoId || category !== prevCategory) {
      this.getProductsList(category, noId);
    }
  }

  async getProductsList(category, noId) {
    let products = await getProducts(category);
    if (noId) {
      products = products.filter((element) => element.id !== noId);
    }
    this.setState({
      products,
      loading: false,
    });
  }

  render() {
    const { products, loading } = this.state;
    if (loading) {
      return (
        <p>...</p>
      );
    }
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
              <Link to={`/description/product/${id}`}>
                <img src={thumbnail} width="100px" alt={title} />
                <h3>{title}</h3>
                <p>{`R$ ${price}`}</p>
              </Link>
              <AddToCart itemId={id} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
