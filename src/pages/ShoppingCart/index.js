/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import shoppingCartThunk from '../../redux/thunk/shoppingCart';
import SearchBar from '../../components/SearchBar';
import InputMount from './InputMount';
import AddToCart from '../../components/AddToCart';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = { cartList: [] };
    this.upDateStateByProps = this.upDateStateByProps.bind(this);
  }

  componentDidMount() {
    const cartListSaved = JSON.parse(localStorage.getItem('cart'));
    const {
      getInformationsAll,
      shoppingCartListInformations,
    } = this.props;
    getInformationsAll(cartListSaved);
    this.setState({
      cartList: shoppingCartListInformations,
    });
  }

  componentDidUpdate(prevProps) {
    this.upDateStateByProps(prevProps);
  }

  upDateStateByProps(prevProps) {
    const { props } = this;
    const {
      shoppingCartListInformations,
    } = props;
    try {
      if (prevProps.shoppingCartListInformations !== shoppingCartListInformations) {
        this.setState({
          cartList: shoppingCartListInformations,
        });
      }
    } catch (error) {
      // console.log(error.message);
    }
  }

  render() {
    const { cartList } = this.state;
    return (
      <div>
        <h1>Carrinho de compras</h1>
        <SearchBar />
        <ul>
          {
            cartList && cartList.map(({ itemId, mount, infos }) => {
              const { thumbnail, title, price } = infos.information;
              return (
                <li key={itemId}>
                  <Link to={`/description/product/${itemId}`}>
                    <img src={thumbnail} alt={title} width="100px" />
                    <h1>{title}</h1>
                    <p>{`R$ ${price}`}</p>
                  </Link>
                  <InputMount mount={mount} itemId={itemId} />
                  <AddToCart itemId={itemId} />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ shoppingCartState }) => ({
  shoppingCartList: shoppingCartState.shoppingCartList,
  shoppingCartListInformations: shoppingCartState.shoppingCartListInformations,
});

const mapDispatchToProps = (dispatch) => ({
  getInformationsAll: (cart) => dispatch(shoppingCartThunk.getInformationsAll(cart)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
