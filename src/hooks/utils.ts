import { product } from "../types";

export const divideProducts = (data: Array<product>, size: number) => {
	let dividedProducts = [];
	for (let i = 0; i < data.length; i += size) {
		dividedProducts.push(data.slice(i, i + size));
	}
	return dividedProducts;
};

const filterByName = (data: Array<product>, filterData: any) => {
	data = data.filter(
		(product) =>
			product.name.toLowerCase().includes(filterData.name.toLowerCase()) ||
			product.type.toLowerCase().includes(filterData.name.toLowerCase()) ||
			product.id.toLowerCase().includes(filterData.name.toLowerCase())
	);
	return data;
};

const filterByType = (data: Array<product>, filterData: any) => {
	data = data.filter((product) => product.type.toLowerCase() === filterData.type.toLowerCase());
	return data;
};

const sortLowerPrice = (a: product, b: product) => {
	if (a.price > b.price) {
		return 1;
	}
	if (a.price < b.price) {
		return -1;
	}
	return 0;
};

const sortHigherPrice = (b: product, a: product) => {
	if (a.price > b.price) {
		return 1;
	}
	if (a.price < b.price) {
		return -1;
	}
	return 0;
};

export const filterProducts = (data: Array<product>, filterData: any) => {
	if (filterData.name.length !== 0) {
		data = filterByName(data, filterData);
	}
	if (filterData.type !== "Categorias" && filterData.type !== "Todos") {
		data = filterByType(data, filterData);
	}
	if (filterData.order === "Menor Precio") {
		data = data.sort((a, b) => sortLowerPrice(a, b));
	}
	if (filterData.order === "Mayor Precio") {
		data = data.sort((a, b) => sortHigherPrice(a, b));
	}
	return data;
};
