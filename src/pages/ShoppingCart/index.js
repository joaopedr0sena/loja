/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Amount from '../../components/Amount';
import SearchBar from '../../components/SearchBar';
import AddToCart from '../../components/AddToCart';
import shoppingCartThunk from '../../redux/thunk/shoppingCart';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = { cartList: [] };
    this.upDateStateByProps = this.upDateStateByProps.bind(this);
  }

  componentDidMount() {
    const cartListSaved = JSON.parse(localStorage.getItem('cart'));
    const {
      shoppingCartListInformations,
      getInformationsAll,
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
    const {
      shoppingCartListInformations,
    } = this.props;
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
    const { shoppingCartListInformations } = this.props;
    const { cartList } = this.state;
    return (
      <div>
        <h1>Carrinho de compras</h1>
        <SearchBar />
        <ul>
          {
            shoppingCartListInformations && cartList.map(({ itemId, amount, infos }) => {
              const { thumbnail, title, price } = infos.information;
              return (
                <li key={itemId}>
                  <Link to={`/description/product/${itemId}`}>
                    <img src={thumbnail} alt={title} width="100px" />
                    <h1>{title}</h1>
                    <p>{`R$ ${price}`}</p>
                  </Link>
                  <Amount amount={amount} itemId={itemId} />
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
