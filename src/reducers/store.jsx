import { createStore, combineReducers } from 'react-redux';
import cartReducer from './cartReducer';
import productReducer from './productReducers';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const store = createStore(rootReducer);

export default store;