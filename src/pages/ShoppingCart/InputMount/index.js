/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeMount from '../../../redux/reducers/shoppingCart/actions/changeMount';

const INITIAL_STATE = {
  mount: 0,
};

class InputMount extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChangeMountAdd = this.handleChangeMountAdd.bind(this);
    this.handleChangeMountLess = this.handleChangeMountLess.bind(this);
  }

  componentDidMount() {
    const { mount } = this.props;
    this.setState({ mount });
  }

  handleChangeMountAdd() {
    const { mount } = this.state;
    const { itemId, handleItme } = this.props;
    this.setState({ mount: mount + 1 });
    handleItme(itemId, mount + 1);
  }

  handleChangeMountLess() {
    const { mount } = this.state;
    const { itemId, handleItme } = this.props;
    this.setState({ mount: mount - 1 });
    handleItme(itemId, mount - 1);
  }

  render() {
    const { mount } = this.state;
    return (
      <div>
        <button type="button" onClick={this.handleChangeMountLess}>-</button>
        <p>{mount}</p>
        <button type="button" onClick={this.handleChangeMountAdd}>+</button>
      </div>
    );
  }
}

const mapStateToProps = ({ shoppingCartState }) => ({
  shoppingCartList: shoppingCartState.shoppingCartList,
});

const mapDispatchToProps = (dispatch) => ({
  handleItme: (itemId, mount) => dispatch(changeMount(itemId, mount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputMount);
