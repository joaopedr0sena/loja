import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GenerateProductList from '../../helpers/generateProductList';
import Categories from './Categories';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Home</h1>
          <input type="text" />
          <nav>
            <ul>
              <li>Products</li>
              <li><Categories /></li>
              <li>About</li>
            </ul>
          </nav>
        </header>
        <main>
          <details>
            <summary>
              Order by:
            </summary>
            <ul>
              <li>
                <Link to="/orderBy/biggest">
                  Biggest price
                </Link>
              </li>
              <li>
                <Link to="/orderBy/lowest">
                  Lowest price
                </Link>
              </li>
            </ul>
          </details>
          <GenerateProductList />
        </main>
      </div>
    );
  }
}
