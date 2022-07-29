/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAddCart from '../../atoms/button-add-cart';

export default function ItemProductsList({
  id,
  price,
  title,
  thumbnail,
}) {
  return (
    <li key={id}>
      <Link to={`/description/product/${id}`}>
        <img src={thumbnail} width="100px" alt={title} />
        <h3>{title}</h3>
        <p>{`R$ ${price}`}</p>
      </Link>
      <ButtonAddCart itemId={id} />
    </li>
  );
}
