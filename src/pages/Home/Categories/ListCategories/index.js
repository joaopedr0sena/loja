import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getCategories from '../../../../utils/getCategories';

const INITIAL_STATE = {
  categories: [],
};

export default class ListCategories extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
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
