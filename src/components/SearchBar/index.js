import React, { Component } from 'react';

const INITIAL_STATE = {
  value: '',
};

export default class SearchBar extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;
    return (
      <input type="text" value={value} onChange={this.handleChange} />
    );
  }
}
