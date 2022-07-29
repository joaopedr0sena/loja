import React from 'react';
import ProductsList from '../../components/organisms/products-list';
import Header from '../../components/organisms/header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ProductsList />
      </main>
    </>
  );
}
