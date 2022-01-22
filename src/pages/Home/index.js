import React, { Component } from 'react';
import Categories from './Categories';
import SearchBar from '../../components/SearchBar';
import GenerateProductList from '../../helpers/generateProductList';

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Home</h1>
          <SearchBar />
          <nav>
            <ul>
              <li>produtos</li>
              <li><Categories /></li>
              <li>sobre</li>
            </ul>
          </nav>
        </header>
        <main>
          <GenerateProductList />
        </main>
      </div>
    );
  }
}
