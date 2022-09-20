/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/organisms/header';
import shoppingCartThunk from '../../redux/thunk/shoppingCart';
import ShoppingCartList from '../../components/organisms/shopping-cart-list';
import LoadingContainer from '../../components/atoms/loading';

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

  if (!cartList) return (<LoadingContainer />);
  return (
    <>
      <Header title="Carrinho de compras" />
<<<<<<< HEAD
      <ul>
        {
          cartList && listInformations.map(({ itemId, amount, infos }) => {
            const { thumbnail, title, price } = infos.information;
            return (
              <li key={itemId}>
                <Link to={`/description/product/${itemId}`}>
                  <CustomImage url={thumbnail} alt={title} width="100px" />
                  <h1>{title}</h1>
                  <p>{`R$ ${price}`}</p>
                </Link>
                <Amount initialAmount={amount} itemId={itemId} />
                <ButtonAddCart itemId={itemId} />
              </li>
            );
          })
        }
      </ul>
=======
      <div className="w-9/12 h-9/12 mt-6 mx-auto bg-white rounded mb-10">
        <ShoppingCartList list={listInformations} />
      </div>
>>>>>>> feature/styles
    </>
  );
}
