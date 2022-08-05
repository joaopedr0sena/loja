import React from 'react';
import { Link } from 'react-router-dom';
import Thumbnail from '../../atoms/thumbnails';
import ButtonAddCart from '../../atoms/button-add-cart';
import ListItemTitle from '../../atoms/list-item-title';

export default function ItemProductsList({
  id,
  price,
  title,
  thumbnail,
}) {
  return (
    <li key={id} className="flex justify-between">
      <Link to={`/description/product/${id}`}>
        <Thumbnail img={thumbnail} title={title} />
        <ListItemTitle>{title}</ListItemTitle>
        <p>{`R$ ${price}`}</p>
      </Link>
      <ButtonAddCart itemId={id} />
    </li>
  );
}
