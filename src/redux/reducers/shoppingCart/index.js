import { ADD_TO_CART } from './actions/addToCart';
import { ALL_INFORMATION } from './actions/allInformation';
import { CHANGE_MOUNT } from './actions/changeMount';
import { CART_REMOVER } from './actions/cartRemover';

const cartListSaved = JSON.parse(localStorage.getItem('cart'));
const INITIAL_STATE = {
  shoppingCartList: !cartListSaved ? [] : cartListSaved,
  shoppingCartListInformations: [],
};

const setStorage = (key, value) => {
  localStorage.setItem(`${key}`, JSON.stringify(value));
};

const handdleChangeMount = (id, mount, list) => {
  const listNewMount = list.map((element) => {
    const item = element;
    if (item.itemId === id) {
      item.mount = mount;
    }
    return item;
  });
  setStorage('cart', list);
  return listNewMount;
};

const addItem = (id, list) => {
  let inList = false;
  if (id) {
    list.map((element) => {
      const item = element;
      if (item.itemId === id) {
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

const removeItem = (id, list) => {
  const editedList = [];
  list.map((item) => {
    if (item.itemId !== id) {
      editedList.push(item);
    }
    return item;
  });
  setStorage('cart', editedList);
  return editedList;
};

const shoppingCartState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        shoppingCartList: addItem(action.id, state.shoppingCartList),
      };
    case CART_REMOVER:
      return {
        ...state,
        shoppingCartList: removeItem(
          action.id,
          state.shoppingCartList,
        ),
        shoppingCartListInformations: removeItem(
          action.id,
          state.shoppingCartListInformations,
        ),
      };
    case ALL_INFORMATION:
      return {
        ...state,
        shoppingCartListInformations: action.payload,
      };
    case CHANGE_MOUNT:
      return {
        ...state,
        shoppingCartList: handdleChangeMount(
          action.id,
          action.mount,
          state.shoppingCartList,
        ),
      };
    default:
      return state;
  }
};

export default shoppingCartState;
