import React from 'react';
import GenerateProductList from '../../helpers/generateProductList';
import Header from '../../components/organisms/header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <GenerateProductList />
      </main>
    </>
  );
}
