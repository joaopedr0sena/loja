/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getCategories from '../../../../utils/apis/getCategories';

const INITIAL_STATE = {
  categories: [],
};

export default class ListCategories extends Component {
  constructor() {
    super();
    this.state = INITIAL_STATE;
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
  }

  async componentDidMount() {
    const categories = await getCategories();

    this.setState({ categories });
  }

  handleChangeCategory(id, name) {
    const { handleCategory } = this.props;
    handleCategory(id, name);
  }

  render() {
    const { categories } = this.state;
    return (
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/category/${id}/categoryName/${name}`}>
              <p>{name}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
