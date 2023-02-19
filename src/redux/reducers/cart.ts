import { Action, product } from "../../types";
import {
	ADD_ITEM,
	CLEAN_CART,
	DELETE_ITEM,
	UPDATE_ITEM,
} from "./../types/types";

const cart: product[] = JSON.parse(localStorage.getItem("cart") || "[]");

export const cartReducer = (state: product[] = cart, action: Action) => {
	const { payload, type } = action;
	switch (type) {
		case ADD_ITEM:
			const item = { ...payload, quantity: 1 };
			state = [...state, item].sort(sortCart);
			saveToLocalStorage(state);
			return state;
		case DELETE_ITEM:
			state = state.filter((item: product) => item.id !== payload.id);
			saveToLocalStorage(state);
			return state;
		case UPDATE_ITEM:
			state = state.filter((item: product) => item.id !== payload.id);
			state = [...state, payload].sort(sortCart);
			saveToLocalStorage(state);
			return state;
		case CLEAN_CART:
			state = [];
			saveToLocalStorage(state);
			return state;
		default:
			return state;
	}
};

const saveToLocalStorage = (data: product[]) => {
	localStorage.setItem("cart", JSON.stringify(data));
};

const sortCart = (a: product, b: product) => {
	if (a.id > b.id) {
		return -1;
	}
	if (b.id > a.id) {
		return 1;
	}
	return 0;
};
