/* eslint-disable no-undef */
import React, { Component } from 'react';
import ListCategories from './ListCategories';

export default class Categories extends Component {
  constructor() {
    super();
    this.handleChangeReadCategotries = this.handleChangeReadCategotries.bind(this);

    this.state = {
      readCategotries: false,
    };
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
          Categories
        </button>
        {readCategotries && <ListCategories />}
      </div>
    );
  }
}
