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
    <div className="h-10 w-20 flex text-2xl flex-row items-center justify-between justify-center border-quinary border-2">
      <button type="button" className="w-full" onClick={handleChangeAmountLess}>-</button>
      <p className="w-full text-center">{amount}</p>
      <button type="button" className="w-full" onClick={handleChangeAmountAdd}>+</button>
    </div>
  );
}
