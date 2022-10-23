import React from 'react';
import ListsTemplate from '../../components/templates/lists';
import ProductsList from '../../components/organisms/products-list';
import Header from '../../components/organisms/header';

export default function Home() {
  return (
    <ListsTemplate
      header={<Header />}
      list={<ProductsList />}
    />
  );
}
