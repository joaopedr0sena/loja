import React from 'react';
import { Link } from 'react-router-dom';
import Thumbnail from '../../atoms/thumbnails';
import ButtonAddCart from '../../atoms/button-add-cart';
import ListItemTitle from '../../atoms/list-item-title';
import Price from '../../atoms/price';

export default function ItemProductsList({
  id,
  price,
  title,
  thumbnail,
}) {
  return (
    <li key={id} className="bg-quinary shadow-md flex flex-col justify-between my-2 rounded-xl w-56 max-w-sm h-96">
      <Link to={`/description/product/${id}`} className="w-full h-4/5 flex flex-col justify-between ml-px">
        <div className="w-48 w-48 mx-auto">
          <Thumbnail img={thumbnail} title={title} />
        </div>
        <ListItemTitle>{title}</ListItemTitle>
        <Price>{price}</Price>
      </Link>
      <ButtonAddCart itemId={id} />
    </li>
  );
}
