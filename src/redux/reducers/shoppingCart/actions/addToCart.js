// eslint-disable-next-line import/prefer-default-export
export const ADD_TO_CART = 'ADD_TO_CART';

const addToCart = (id) => ({ type: ADD_TO_CART, id });

export default addToCart;
