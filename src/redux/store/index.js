import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunk),
);

const store = createStore(rootReducer, composedEnhancer);

export default store;
