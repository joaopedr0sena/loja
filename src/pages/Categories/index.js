import React from 'react';
import Header from '../../components/organisms/header';
import GenerateProductList from '../../helpers/generateProductList';

export default function Categories(props) {
  const { match } = props;
  const { id, name } = match.params;
  return (
    <div>
      <Header title={name} />
      <GenerateProductList category={id} />
    </div>
  );
}
