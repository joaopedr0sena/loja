import { CART_INFOS_REMOVER } from './actions/cartInfosRemover';
import { ALL_INFORMATION } from './actions/allInformation';
import { CHANGE_AMOUNT } from './actions/changeAmount';
import { CART_REMOVER } from './actions/cartRemover';
import { ADD_TO_CART } from './actions/addToCart';
import shoppingCartThunk from '../../thunk/shoppingCart';

const cartListSaved = JSON.parse(localStorage.getItem('cart'));
const INITIAL_STATE = {
  shoppingCartList: !cartListSaved ? [] : cartListSaved,
  shoppingCartListInformations: [],
};

const setStorage = (key, value) => {
  localStorage.setItem(`${key}`, JSON.stringify(value));
};

const handdleChangeAmount = (id, amount, list) => {
  if (list) {
    const listNewAmount = list.map((element) => {
      const item = element;
      if (item.itemId === id) {
        item.amount = amount;
      }
      return item;
    });
    setStorage('cart', listNewAmount);
    return listNewAmount;
  }
  return list;
};

const addItem = (id, list = []) => {
  const editedList = list;
  if (id) {
    editedList.push({ itemId: id, amount: 1 });
    setStorage('cart', editedList);
    return editedList;
  }
  return editedList;
};

const removeItem = (id, list, set = false) => {
  const editedList = [];
  list.map((item) => {
    if (item.itemId !== id) {
      editedList.push(item);
    }
    return item;
  });
  if (set) {
    setStorage('cart', editedList);
  }
  if (!editedList) {
    return [];
  }
  return editedList;
};

const shoppingCartState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      shoppingCartThunk.getInformationsAll(cartListSaved);
      return {
        ...state,
        shoppingCartList: addItem(action.id, state.shoppingCartList),
      };
    case CART_REMOVER:
      shoppingCartThunk.getInformationsAll(cartListSaved);
      return {
        ...state,
        shoppingCartList: removeItem(
          action.id,
          state.shoppingCartList,
          true,
        ),

      };
    case CART_INFOS_REMOVER:
      shoppingCartThunk.getInformationsAll(cartListSaved);
      return {
        ...state,
        shoppingCartListInformations: removeItem(
          action.id,
          state.shoppingCartListInformations,
          false,
        ),
      };
    case ALL_INFORMATION:
      return {
        ...state,
        shoppingCartListInformations: action.payload,
      };
    case CHANGE_AMOUNT:
      return {
        ...state,
        shoppingCartList: handdleChangeAmount(
          action.id,
          action.amount,
          state.shoppingCartList,
        ),
      };
    default:
      return state;
  }
};

export default shoppingCartState;
