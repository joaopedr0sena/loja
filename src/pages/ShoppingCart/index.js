/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Amount from '../../components/Amount';
import SearchBar from '../../components/SearchBar';
import AddToCart from '../../components/AddToCart';
import shoppingCartThunk from '../../redux/thunk/shoppingCart';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const cartListSaved = JSON.parse(localStorage.getItem('cart'));
  const [cartList, setCartList] = useState([]);
  const listInformations = useSelector(({ shoppingCartState }) => (
    shoppingCartState.shoppingCartListInformations
  ));

  useEffect(() => {
    function data() {
      dispatch(shoppingCartThunk.getInformationsAll(cartListSaved));
      if (listInformations) {
        setCartList(listInformations);
      }
    }

    data();
  }, []);

  return (
    <>
      <h1>Carrinho de compras</h1>
      <SearchBar />
      <ul>
        {
          cartList && listInformations.map(({ itemId, amount, infos }) => {
            const { thumbnail, title, price } = infos.information;
            return (
              <li key={itemId}>
                <Link to={`/description/product/${itemId}`}>
                  <img src={thumbnail} alt={title} width="100px" />
                  <h1>{title}</h1>
                  <p>{`R$ ${price}`}</p>
                </Link>
                <Amount amount={amount} itemId={itemId} />
                <AddToCart itemId={itemId} />
              </li>
            );
          })
        }
      </ul>
    </>
  );
}
