import { ADD_TO_CART } from './actions/addToCart';

const INITIAL_STATE = {
  idList: [],
};

const addItem = (id, idList) => {
  if (id) {
    idList.push(id);
  }
  return idList;
};

const shoppingCartState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, idList: addItem(action.id, state.idList) };
    default:
      return state;
  }
};

export default shoppingCartState;
