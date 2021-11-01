import React, { Component } from 'react';
import getCategories from '../../../../utils/getCategories'

class ListCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: []
    };
  }

  async componentDidMount() {
    const categories =  await getCategories();

    this.setState({ categories });
  }
  
  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <h3>{name}</h3>
          </li>
        ))}
      </ul>
    )
  }
}

export default ListCategories;