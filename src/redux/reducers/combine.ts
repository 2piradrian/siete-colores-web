import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { productsReducer } from "./products";
import { shippingReducer } from "./shipping";

const reducer = combineReducers({
	shipping: shippingReducer,
	products: productsReducer,
	cart: cartReducer,
});

export default reducer;
