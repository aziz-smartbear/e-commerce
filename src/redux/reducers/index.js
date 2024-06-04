import { combineReducers } from "redux";
import { productReducer } from "../../pages/Product/reducer/productReducer";
import { cartReducer } from "../../pages/MyCart/reducer/cartReducer";

const reducers = combineReducers({
  productReducer,
  cartReducer,
});

export default reducers;
