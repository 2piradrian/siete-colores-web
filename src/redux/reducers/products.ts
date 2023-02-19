import { Action } from "../../types";
import { CLEAR_FILTERS, SET_FILTERS } from "../types/types";

export const productsReducer = (state: object = {}, action: Action) => {
	const { payload, type } = action;
	switch (type) {
		case SET_FILTERS:
			state = { ...payload, filter: true };
			return state;
		case CLEAR_FILTERS:
			state = { ...payload };
			return state;
		default:
			return state;
	}
};
