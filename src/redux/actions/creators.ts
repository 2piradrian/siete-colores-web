import { User } from "firebase/auth";
import { product } from "../../types";

import {
	ADD_ITEM,
	CLEAN_CART,
	CLEAR_FILTERS,
	DELETE_ITEM,
	SET_ADDRESS,
	SET_FILTERS,
	SET_METHOD,
	SET_OFFICE,
	SET_POSTALCODE,
	UPDATE_ITEM,
	SET_AUTH,
} from "../types/types";

export const set_postalcode = (data: object) => ({
	type: SET_POSTALCODE,
	payload: data,
});

export const set_address = (data: object) => ({
	type: SET_ADDRESS,
	payload: data,
});

export const set_method = (data: object) => ({
	type: SET_METHOD,
	payload: data,
});

export const set_office = (data: object) => ({
	type: SET_OFFICE,
	payload: data,
});

export const set_filters = (data: any) => ({
	type: SET_FILTERS,
	payload: data,
});

export const clear_filters = () => ({
	type: CLEAR_FILTERS,
	payload: { filter: false },
});

export const add_item = (item: product) => ({
	type: ADD_ITEM,
	payload: item,
});

export const delete_item = (item: product[]) => ({
	type: DELETE_ITEM,
	payload: item[0],
});

export const update_item = (item: product) => ({
	type: UPDATE_ITEM,
	payload: item,
});

export const clean_cart = () => ({
	type: CLEAN_CART,
});

export const set_auth = (user: User | null | undefined) => ({
	type: SET_AUTH,
	payload: user,
});
