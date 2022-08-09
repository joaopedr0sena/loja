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
    <li key={id} className="bg-quinary shadow-md flex flex-col justify-between my-2 rounded-xl w-56 max-w-sm h-96">
      <Thumbnail img={thumbnail} title={title} />
      <Link to={`/description/product/${id}`} className="w-full flex flex-col justify-between ml-px">
        <ListItemTitle>{title}</ListItemTitle>
        <p>{`R$ ${price}`}</p>
      </Link>
      <ButtonAddCart itemId={id} />
    </li>
  );
}
