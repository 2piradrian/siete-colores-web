export type Product = {
	id: string;
	code: string;
	name: string;
	size: string;
	price: number;
	category: string;
	subcategories: string[];
	keywords: string[];
	createdAt: Date;
	description: string;
	quantity?: number; // Only for cart
};
