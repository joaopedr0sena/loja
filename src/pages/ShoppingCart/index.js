/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import shoppingCartThunk from '../../redux/thunk/shoppingCart';
import SearchBar from '../../components/SearchBar';
import InputMount from './InputMount';

class ShoppingCart extends Component {
  async componentDidMount() {
    const cartListSaved = JSON.parse(localStorage.getItem('cart'));
    const { getInformationsAll } = this.props;
    await getInformationsAll(cartListSaved);
  }

  render() {
    const { shoppingCartListInformations } = this.props;
    return (
      <div>
        <h1>Carrinho de compras</h1>
        <SearchBar />
        <ul>
          {
            shoppingCartListInformations.map(({ itemId, mount, infos }) => {
              const { thumbnail, title, price } = infos.information;
              return (
                <li key={itemId}>
                  <img src={thumbnail} alt={title} width="100px" />
                  <h1>{title}</h1>
                  <p>{`R$ ${price}`}</p>
                  <InputMount mount={mount} itemId={itemId} />
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
