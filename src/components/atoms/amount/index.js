import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import changeAmount from '../../../redux/reducers/shoppingCart/actions/changeAmount';

export default function Amount(props) {
  const { itemId } = props;
  const [amount, setAmount] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    function amountSaved() {
      setAmount(props.amount);
    }
    amountSaved();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChangeAmountAdd() {
    setAmount(amount + 1);
    dispatch(changeAmount(itemId, amount + 1));
  }

  function handleChangeAmountLess() {
    if (amount > 1) {
      dispatch(changeAmount(itemId, amount - 1));
      setAmount(amount - 1);
    }
  }

  return (
    <div>
      <button type="button" onClick={handleChangeAmountLess}>-</button>
      <p>{amount}</p>
      <button type="button" onClick={handleChangeAmountAdd}>+</button>
    </div>
  );
}
