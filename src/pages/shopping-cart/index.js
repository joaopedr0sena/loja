/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shoppingCartThunk from '../../redux/thunk/shoppingCart';
import ShoppingCartList from '../../components/organisms/shopping-cart-list';
import DefaultPage from '../../components/templates/default-page/inde';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cartListSaved = JSON.parse(localStorage.getItem('cart'));
  const [cartList, setCartList] = useState([]);
  const listInformations = useSelector(({ shoppingCartState }) => (
    shoppingCartState.shoppingCartListInformations
  ));

  useEffect(() => {
    const data = () => {
      dispatch(shoppingCartThunk.getInformationsAll(cartListSaved));
      if (listInformations) {
        setCartList(listInformations);
      }
    };

    data();
  }, []);

  return (
    <DefaultPage loading={!cartList}>
      <div className="max-w-4xl w-full h-9/12 mt-6 mx-auto bg-white rounded mb-10">
        <ShoppingCartList list={listInformations} />
      </div>
    </DefaultPage>
  );
}
