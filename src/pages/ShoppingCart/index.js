/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import shoppingCartThunk from '../../redux/thunk/shoppingCart';

class ShoppingCart extends Component {
  async componentDidMount() {
    const { getInformationsAll } = this.props;
    await getInformationsAll();
  }

  render() {
    const { shoppingCartListInformations } = this.props;
    return (
      <div>
        <h1>Carrinho de compras</h1>
        <ul>
          {
            shoppingCartListInformations.map(({ itemId, mount, infos }) => {
              const { thumbnail, title, price } = infos.information;
              return (
                <li key={itemId}>
                  <img src={thumbnail} alt={title} width="100px" />
                  <h1>{title}</h1>
                  <p>{`R$ ${price}`}</p>
                  <p>{mount}</p>
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
  getInformationsAll: () => dispatch(shoppingCartThunk.getInformationsAll()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
