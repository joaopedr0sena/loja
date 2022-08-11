import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../atoms/search-bar';
import Title from '../../atoms/title';
import ListCategories from '../../molecules/list-categories';

export default function Header({ title = 'Loja' }) {
  return (
    <header className="bg-primary shadow-lg sticky top-0 left-0 w-full flex flex-col justify-between">
      <div className="flex items-center">
        <div>
          <Title>{title}</Title>
        </div>
        <div className="w-3/5">
          <SearchBar />
        </div>
      </div>
      <nav className="mt-2 h-6">
        <ul className="grid grid-cols-4 divide-x h-full">
          <Link to="/shoppingCart">
            <li className="h-full text-center">
              carrinho
            </li>
          </Link>
          <Link to="/">
            <li className="h-full text-center">
              produtos
            </li>
          </Link>
          <li className="h-full flex justify-center"><ListCategories /></li>
          <li className="h-full text-center">sobre</li>
        </ul>
      </nav>
    </header>
  );
}
