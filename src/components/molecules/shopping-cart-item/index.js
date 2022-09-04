import React from 'react';
import { Link } from 'react-router-dom';
import ButtonAddCart from '../../atoms/button-add-cart';
import Price from '../../atoms/price';
import ListItemTitle from '../../atoms/list-item-title';
import Amount from '../../atoms/amount';

export default function ShoppingCartItem({
  id,
  price,
  title,
  amount,
  thumbnail,
}) {
  return (
    <li className="border-quinary border-b-2 ">
      <div className="flex flex-row items-center justify-between">
        <Link to={`/description/product/${id}`} className="flex w-full items-center">
          <img src={thumbnail} alt={title} width="100px" />
          <ListItemTitle>{title}</ListItemTitle>
        </Link>
        <Amount initialAmount={amount} itemId={id} />
        <div className="ml-4">
          <Price>{price}</Price>
          <ButtonAddCart itemId={id} />
        </div>
      </div>
    </li>
  );
}
