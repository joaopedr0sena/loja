/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAddCart from '../../atoms/button-add-cart';
import CustomImage from '../../atoms/image';

export default function ItemProductsList({
  id,
  price,
  title,
  thumbnail,
}) {
  return (
    <li>
      <Link to={`/description/product/${id}`}>
        <CustomImage url={thumbnail} width="100px" alt={title} />
        <h3>{title}</h3>
        <p>{`R$ ${price}`}</p>
      </Link>
      <ButtonAddCart itemId={id} />
    </li>
  );
}
