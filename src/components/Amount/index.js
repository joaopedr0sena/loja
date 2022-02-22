/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeAmount from '../../redux/reducers/shoppingCart/actions/changeAmount';

const INITIAL_STATE = { amount: 1 };

class Amount extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChangeAmountAdd = this.handleChangeAmountAdd.bind(this);
    this.handleChangeAmountLess = this.handleChangeAmountLess.bind(this);
  }

  componentDidMount() {
    const { amount } = this.props;
    this.setState({ amount });
  }

  handleChangeAmountAdd() {
    const { amount } = this.state;
    const { handleItme, itemId } = this.props;
    this.setState({ amount: amount + 1 });
    handleItme(itemId, amount + 1);
  }

  handleChangeAmountLess() {
    const { amount } = this.state;
    const { handleItme, itemId } = this.props;
    if (amount > 1) {
      handleItme(itemId, amount - 1);
      this.setState({ amount: amount - 1 });
    }
  }

  render() {
    const { amount } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleChangeAmountLess}>-</button>
        <p>{amount}</p>
        <button type="button" onClick={this.handleChangeAmountAdd}>+</button>
      </div>
    );
  }
}

const mapStateToProps = ({ shoppingCartState }) => ({
  shoppingCartList: shoppingCartState.shoppingCartList,
});

const mapDispatchToProps = (dispatch) => ({
  handleItme: (itemId, amount) => dispatch(changeAmount(itemId, amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Amount);
