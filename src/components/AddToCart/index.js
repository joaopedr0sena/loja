import React, { Component } from 'react';
import { connect } from 'react-redux';
import addToCart from '../../redux/reducers/shoppingCart/actions/addToCart';

class AddToCart extends Component {
  constructor() {
    super();
    this.consolelog = this.consolelog.bind(this);
  }

  consolelog() {
    // eslint-disable-next-line react/prop-types
    const { itemId, shoppingCartList } = this.props;
    // eslint-disable-next-line no-console
    console.log(itemId, shoppingCartList);
  }

  render() {
    // eslint-disable-next-line react/prop-types
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
