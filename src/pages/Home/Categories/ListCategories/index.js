import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getCategories from '../../../../utils/getCategories';

export default class ListCategories extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const categories = await getCategories();

    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/category/${id}`}>
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
