import React from 'react';
import Subtitle from '../../components/atoms/subtitle';
import Header from '../../components/organisms/header';
import ProductsList from '../../components/organisms/products-list';

export default function Categories({ match: { params: { id, name } } }) {
  return (
    <div>
      <Header title="categoria" />
      <Subtitle>{name}</Subtitle>
      <ProductsList category={id} />
    </div>
  );
}
