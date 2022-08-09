import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../atoms/search-bar';
import Title from '../../atoms/title';
import ListCategories from '../../molecules/list-categories';

export default function Header({ title = 'Loja' }) {
  return (
    <header className="bg-primary w-full flex flex-col justify-between">
      <div className="flex items-center">
        <div>
          <Title>{title}</Title>
        </div>
        <div className="w-3/5">
          <SearchBar />
        </div>
      </div>
      <nav className="my-2">
        <ul className="flex flex-row justify-between">
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
