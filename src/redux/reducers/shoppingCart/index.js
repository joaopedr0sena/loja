import { ADD_TO_CART } from './actions/addToCart';

const cartListSaved = JSON.parse(localStorage.getItem('cart'));
const INITIAL_STATE = {
  shoppingCartList: !cartListSaved ? [] : cartListSaved,
};

const setStorage = (key, value) => {
  localStorage.setItem(`${key}`, JSON.stringify(value));
};

const addItem = (id, list) => {
  let inList = false;
  if (id) {
    list.map((item) => {
      if (item.itemId === id) {
        // eslint-disable-next-line no-param-reassign
        item.mount += 1;
        inList = true;
      }
      setStorage('cart', list);
      return list;
    });
    if (!inList) {
      list.push({ itemId: id, mount: 1 });
      setStorage('cart', list);
      return list;
    }
  }
  return list;
};

const shoppingCartState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, shoppingCartList: addItem(action.id, state.shoppingCartList) };
    default:
      return state;
  }
};

export default shoppingCartState;
