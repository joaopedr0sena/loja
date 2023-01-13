import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBag2Fill, RiShoppingCart2Fill } from 'react-icons/ri';
import SearchBar from '../../atoms/search-bar';
import ListCategories from '../../atoms/list-categories';
import NavItem from '../../atoms/nav-item';

export default function Header() {
  return (
    <header className="bg-secondary text-primary shadow-lg sticky top-0 left-0 w-full flex flex-col justify-between py-2">
      <div className="flex items-center justify-around items-center mb-3">
        <div>
          <Link to="/">
            <h1 className="flex items-center text-2xl">
              <RiShoppingBag2Fill color="white" />
              <span className="text-primary">Marketplace</span>
            </h1>
          </Link>
        </div>
        <div className=" ml-1 mr-2 w-8/12">
          <SearchBar />
        </div>
        <div className="text-3xl">
          <Link to="/shoppingCart">
            <RiShoppingCart2Fill />
          </Link>
        </div>
      </div>
      <nav className="mt-2 h-6">
        <ul className="grid grid-cols-3 h-full">
          <NavItem to="/">PRODUTOS</NavItem>
          <li className="h-full flex justify-center hover:underline"><ListCategories /></li>
          <NavItem to="#">SOBRE</NavItem>
        </ul>
      </nav>
    </header>
  );
}
