/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addToCart from '../../redux/reducers/shoppingCart/actions/addToCart';
import cartRemover from '../../redux/reducers/shoppingCart/actions/cartRemover';
import cartInfosRemover from '../../redux/reducers/shoppingCart/actions/cartInfosRemover';

export default function AddToCart(props) {
  const { itemId } = props;
  const dispatch = useDispatch();
  const [message, setMessage] = useState('adicionar ao carrinho');
  const [inCart, setInCart] = useState(false);
  const shoppingCartList = useSelector(({ shoppingCartState }) => (
    shoppingCartState.shoppingCartList
  ));
  useEffect(() => {
    function checkCart() {
      shoppingCartList.map((item) => {
        if (itemId === item.itemId) {
          setMessage('remover do carrinho');
          setInCart(true);
        }
        return item;
      });
    }
    checkCart();
  });

  function handleChange() {
    if (inCart) {
      dispatch(cartRemover(itemId));
      dispatch(cartInfosRemover(itemId));
      setMessage('adicionar ao carrinho');
    } else {
      dispatch(addToCart(itemId));
      setMessage('remover do carrinho');
    }
    setInCart(!inCart);
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleChange}
      >
        {message}
      </button>
    </div>
  );
}
