import React from 'react';
import Subtitle from '../../components/atoms/subtitle';
import Header from '../../components/organisms/header';
import ProductsList from '../../components/organisms/products-list';
import ListsTemplate from '../../components/templates/lists';

export default function Categories({ match: { params: { id, name } } }) {
  return (
    <ListsTemplate
      header={<Header title="categoria" />}
      subtitle={<Subtitle>{name}</Subtitle>}
      list={<ProductsList category={id} />}
    />
  );
}
