/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import addToCart from '../../redux/reducers/shoppingCart/actions/addToCart';
import cartRemover from '../../redux/reducers/shoppingCart/actions/cartRemover';
import cartInfosRemover from '../../redux/reducers/shoppingCart/actions/cartInfosRemover';

const INITIAL_STATE = {
  message: 'adicionar ao carrinho',
  inCart: false,
};

class AddToCart extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { shoppingCartList, itemId } = this.props;
    shoppingCartList.map((item) => {
      if (itemId === item.itemId) {
        this.setState({
          message: 'remover do carrinho',
          inCart: true,
        });
      }
      return item;
    });
  }

  handleChange() {
    const {
      handleAddItem,
      handleRemoveItem,
      handleRemoveItemListInfo,
      itemId,
    } = this.props;
    const { inCart } = this.state;
    let message = '';
    if (inCart) {
      handleRemoveItem(itemId);
      handleRemoveItemListInfo(itemId);
      message = 'adicionar ao carrinho';
    } else {
      handleAddItem(itemId);
      message = 'remover do carrinho';
    }
    this.setState({
      inCart: !inCart,
      message,
    });
  }

  render() {
    const { message } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={this.handleChange}
        >
          {message}
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ shoppingCartState }) => ({
  shoppingCartList: shoppingCartState.shoppingCartList,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddItem: (id) => (dispatch(addToCart(id))),
  handleRemoveItem: (id) => (dispatch(cartRemover(id))),
  handleRemoveItemListInfo: (id) => (dispatch(cartInfosRemover(id))),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
