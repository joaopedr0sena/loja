import React from 'react';
import { Link } from 'react-router-dom';
import Thumbnail from '../../atoms/thumbnails';
import ButtonAddCart from '../../atoms/button-add-cart';
import ListItemTitle from '../../atoms/list-item-title';
import Price from '../../atoms/price';

export function ItemProductsList({
  id,
  price,
  title,
  thumbnail,
}) {
  return (
    <li key={id} className="bg-white shadow-mdflex flex-col justify-between my-2 w-56 h-96">
      <Link to={`/description/product/${id}`} className="w-full h-4/5 divide-y divide-quinary ml-px">
        <div className="w-52 mx-auto mb-6 h-48">
          <Thumbnail img={thumbnail} title={title} />
        </div>
        <div className="h-max mt-2">
          <div className="mb-5">
            <Price>{price}</Price>
          </div>
          <ListItemTitle>{title}</ListItemTitle>
        </div>
      </Link>
    </li>
  );
}

export function ItemProductsListSmaller({
  id,
  price,
  title,
  thumbnail,
}) {
  return (
    <li key={id} className="bg-white shadow-md flex flex-col justify-between my-2 rounded-xl w-36 h-60 mx-2">
      <Link to={`/description/product/${id}`} className="w-full h-4/5 flex flex-col justify-between ml-px">
        <div className="w-24 mx-auto">
          <Thumbnail img={thumbnail} title={title} />
        </div>
        <ListItemTitle maxCharacters={30}>{title}</ListItemTitle>
      </Link>
      <Price>{price}</Price>
      <ButtonAddCart itemId={id} />
    </li>
  );
}
