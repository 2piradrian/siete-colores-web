export type Product = {
	id: string;
	code: string;
	name: string;
	size: string;
	price: number;
	offertPrice: number | undefined;
	category: string;
	subcategories: string[];
	keywords: string[];
	createdAt: Date;
	description: string;
	available: boolean;
	quantity: number | undefined; // Only for cart
};
