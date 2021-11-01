import React, { Component } from 'react';
import ListCategories  from './ListCategories';

class Categories extends Component {
  constructor() {
    super();
    this.handleChangeReadCategotries = this.handleChangeReadCategotries.bind(this);

    this.state = {
      readCategotries: false
    };
  }

  handleChangeReadCategotries() {
    this.setState({ readCategotries: !this.state.readCategotries });
  }
  
  render() {
    const { readCategotries } = this.state;
    return (
      <div>
        <a href="#" onClick={this.handleChangeReadCategotries}>Categories</a>
        {readCategotries? <ListCategories />: null}
      </div>
    )
  }
}

export default Categories;
