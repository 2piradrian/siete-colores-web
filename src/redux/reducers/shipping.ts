import { Action } from "../../types";
import {
	SET_ADDRESS,
	SET_METHOD,
	SET_OFFICE,
	SET_POSTALCODE,
} from "./../types/types";

const shipping: object = JSON.parse(localStorage.getItem("shipping") || "{}");

export const shippingReducer = (state: object = shipping, action: Action) => {
	const { payload, type } = action;
	switch (type) {
		case SET_POSTALCODE:
			state = { ...state, postalCode: payload.postalCode };
			saveToLocalStorage(state);
			return state;
		case SET_ADDRESS:
			state = { ...state, address: payload };
			saveToLocalStorage(state);
			return state;
		case SET_METHOD:
			state = { ...state, shipTo: payload };
			saveToLocalStorage(state);
			return state;
		case SET_OFFICE:
			state = { ...state, office: payload };
			console.log(state);
			saveToLocalStorage(state);
			return state;
		default:
			return state;
	}
};

const saveToLocalStorage = (data: object) => {
	localStorage.setItem("shipping", JSON.stringify(data));
};
