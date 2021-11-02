import React, { Component } from 'react';
import Products from './Products';
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
          <Products />
        </main>
      </div>
    );
  }
}
