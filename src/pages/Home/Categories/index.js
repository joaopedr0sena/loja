import React, { Component } from 'react';
import ListCategories from './ListCategories';

const INITIAL_STATE = {
  readCategotries: false,
};

export default class Categories extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChangeReadCategotries = this.handleChangeReadCategotries.bind(this);
  }

  handleChangeReadCategotries() {
    const { readCategotries } = this.state;
    this.setState({ readCategotries: !readCategotries });
  }

  render() {
    const { readCategotries } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={this.handleChangeReadCategotries}
        >
          categorias
        </button>
        {readCategotries && <ListCategories />}
      </div>
    );
  }
}
