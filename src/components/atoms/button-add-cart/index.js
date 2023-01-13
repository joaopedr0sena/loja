import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addToCart from '../../../redux/reducers/shoppingCart/actions/addToCart';
import cartRemover from '../../../redux/reducers/shoppingCart/actions/cartRemover';
import cartInfosRemover from '../../../redux/reducers/shoppingCart/actions/cartInfosRemover';

export default function ButtonAddCart({ itemId }) {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);

  const shoppingCartList = useSelector(({ shoppingCartState }) => (
    shoppingCartState.shoppingCartList
  ));

  useEffect(() => {
    if (shoppingCartList.some((element) => element.itemId === itemId)) setInCart(true);
  }, [inCart, itemId, shoppingCartList]);

  const handleChange = () => {
    if (inCart) {
      dispatch(cartRemover(itemId));
      dispatch(cartInfosRemover(itemId));
    } else {
      dispatch(addToCart(itemId));
    }
    setInCart(!inCart);
  };

  return (
    <button
      className={`p-1 ${inCart ? 'bg-tertiary' : 'bg-quaternary'} rounded-md mx-auto text-xs w-full h-9`}
      type="button"
      onClick={handleChange}
    >
      {inCart ? 'remover do carrinho' : 'adicionar ao carrinho'}
    </button>
  );
}
