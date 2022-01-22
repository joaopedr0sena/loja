import { combineReducers } from 'redux';
import shoppingCartState from './shoppingCart';

const rootReducer = combineReducers({
  shoppingCartState,
});

export default rootReducer;
