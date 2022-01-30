import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShoppingCart extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { shoppingCartList } = this.props;
    const cartList = shoppingCartList;
    return (
      <div>
        <h1>Carrinho de compras</h1>
        <ul>
          {
            shoppingCartList && cartList.map(({
              itemId,
              mount,
            }) => (
              <li key={itemId}>
                <h2>{itemId}</h2>
                <p>{mount}</p>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ shoppingCartState }) => ({
  shoppingCartList: shoppingCartState.shoppingCartList,
});

export default connect(mapStateToProps)(ShoppingCart);
