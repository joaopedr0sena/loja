import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../atoms/search-bar';
import ListCategories from '../../molecules/list-categories';

export default function Header() {
  return (
    <header>
      <h1>Home</h1>
      <SearchBar />
      <nav>
        <ul>
          <li>
            <Link to="/shoppingCart">
              carrinho
            </Link>
          </li>
          <li>produtos</li>
          <li><ListCategories /></li>
          <li>sobre</li>
        </ul>
      </nav>
    </header>
  );
}
