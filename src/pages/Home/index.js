/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from '../../components/SearchBar';
import Categories from './Categories';
import shoppingCartThunk from '../../redux/thunk/shoppingCart';
import GenerateProductList from '../../helpers/generateProductList';

class Home extends Component {
  componentDidMount() {
    const cartListSaved = JSON.parse(localStorage.getItem('cart'));
    const { getInformationsAll } = this.props;
    getInformationsAll(cartListSaved);
  }

  render() {
    return (
      <div>
        <header>
          <h1>Home</h1>
          <SearchBar />
          <nav>
            <ul>
              <li>
                <Link to="/shoppingCart">
                  carrinho
                </Link>
              </li>
              <li>produtos</li>
              <li><Categories /></li>
              <li>sobre</li>
            </ul>
          </nav>
        </header>
        <main>
          <GenerateProductList />
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getInformationsAll: (cart) => dispatch(shoppingCartThunk.getInformationsAll(cart)),
});

export default connect(null, mapDispatchToProps)(Home);
