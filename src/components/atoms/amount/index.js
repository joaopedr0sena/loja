import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import changeAmount from '../../../redux/reducers/shoppingCart/actions/changeAmount';

export default function Amount({ itemId, initialAmount }) {
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    setAmount(initialAmount);
  }, [initialAmount]);

  const handleChangeAmountAdd = () => {
    const addToAmount = 1;
    setAmount(amount + addToAmount);
    dispatch(changeAmount(itemId, amount + addToAmount));
  };

  const handleChangeAmountLess = () => {
    const decreaseInAmount = 1;
    if (amount > 1) {
      dispatch(changeAmount(itemId, amount - decreaseInAmount));
      setAmount(amount - decreaseInAmount);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleChangeAmountLess}>-</button>
      <p>{amount}</p>
      <button type="button" onClick={handleChangeAmountAdd}>+</button>
    </div>
  );
}
