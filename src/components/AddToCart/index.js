/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import addToCart from '../../redux/reducers/shoppingCart/actions/addToCart';

class AddToCart extends Component {
  render() {
    const { handleAddItem, itemId } = this.props;
    return (
      <button
        type="button"
        onClick={() => {
          handleAddItem(itemId);
        }}
      >
        adicionar ao carrinho
      </button>
    );
  }
}

const mapStateToProps = ({ shoppingCartState }) => ({
  shoppingCartList: shoppingCartState.shoppingCartList,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddItem: (id) => (dispatch(addToCart(id))),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
