import { SET_AUTH } from "./../types/types";
import { Action } from "../../types";

export const authReducer = (state = null, action: Action) => {
	const { payload, type } = action;
	switch (type) {
		case SET_AUTH:
			state = payload;
			return state;
		default:
			return state;
	}
};
