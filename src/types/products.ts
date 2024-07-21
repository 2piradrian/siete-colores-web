export type Product = {
	id: string;
	code: string;
	name: string;
	size: string;
	price: number;
	category: string;
	keywords: string[];
	quantity?: number; // Only for cart
};
