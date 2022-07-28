import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/atoms/search-bar';
import GenerateProductList from '../../helpers/generateProductList';
import ListCategories from '../../components/organisms/list-categories';

export default function Home() {
  return (
    <>
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
      <main>
        <GenerateProductList />
      </main>
    </>
  );
}
