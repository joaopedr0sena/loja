import React from 'react';
import GenerateProductList from '../../helpers/generateProductList';

export default function Categories(props) {
  const { match } = props;
  const { id, name } = match.params;
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" />
      <GenerateProductList category={id} />
    </div>
  );
}
