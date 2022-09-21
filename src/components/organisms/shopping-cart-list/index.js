import React from 'react';
import ShoppingCartItem from '../../molecules/shopping-cart-item';

export default function ShoppingCartList({ list }) {
  return (
    <ul className="w-full h-full p-5">
      <div>
        {
          list.map(({ itemId, amount, infos }) => {
            const { thumbnail, title, price } = infos.information;
            return (
              <ShoppingCartItem
                key={itemId}
                id={itemId}
                price={price}
                title={title}
                amount={amount}
                thumbnail={thumbnail}
              />
            );
          })
        }
      </div>
    </ul>
  );
}
