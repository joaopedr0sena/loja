export const CHANGE_AMOUNT = 'CHANGE_AMOUNT';

const changeAmount = (id, amount) => ({ type: CHANGE_AMOUNT, id, amount });

export default changeAmount;
