import React from 'react';
import ProductsList from '../../components/organisms/products-list';
import Header from '../../components/organisms/header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-2/4 max-w-2xl w-full m-auto">
        <ProductsList />
      </main>
    </>
  );
}
