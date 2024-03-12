export type Product = {
	id: string;
	name: string;
	size: string;
	weight: number;
	type: string;
	price: number;
	quantity?: number; // Only for cart
};
