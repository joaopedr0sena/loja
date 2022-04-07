import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';
import Categories from './Categories';
import GenerateProductList from '../../helpers/generateProductList';

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
            <li><Categories /></li>
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
