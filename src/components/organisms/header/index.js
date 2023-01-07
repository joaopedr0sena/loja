import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBag2Fill, RiShoppingCart2Fill } from 'react-icons/ri';
import SearchBar from '../../atoms/search-bar';
import ListCategories from '../../atoms/list-categories';
import NavItem from '../../atoms/nav-item';

export default function Header() {
  return (
    <header className="bg-secondary text-primary shadow-lg sticky top-0 left-0 w-full flex flex-col justify-between py-2">
      <div className="flex items-center justify-around mb-3">
        <div>
          <Link to="/">
            <h1 className="flex items-center text-xl">
              <RiShoppingBag2Fill color="white" />
              <span className="text-primary">Marketplace</span>
            </h1>
          </Link>
        </div>
        <div className="mx-2">
          <SearchBar />
        </div>
        <div className="text-4xl">
          <Link to="/shoppingCart">
            <RiShoppingCart2Fill />
          </Link>
        </div>
      </div>
      <nav className="mt-2 h-6">
        <ul className="grid grid-cols-4 h-full">
          <NavItem to="/shoppingCart">carrinho</NavItem>
          <NavItem to="/">produtos</NavItem>
          <li className="h-full flex justify-center hover:underline"><ListCategories /></li>
          <NavItem to="#">sobre</NavItem>
        </ul>
      </nav>
    </header>
  );
}
