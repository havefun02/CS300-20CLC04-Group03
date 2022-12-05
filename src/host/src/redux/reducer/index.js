import { combineReducers } from 'redux';
import { productsReducer, selectedProductsReducer } from './helperReducer';
const reducer = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer
});
export default reducer;
