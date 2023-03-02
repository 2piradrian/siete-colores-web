export type product = {
	id: string;
	name: string;
	tamaprox: string;
	weight: number;
	type: string;
	price: number;
	popular?: boolean;
	quantity?: number;
	description?: Array<String>;
};

export type Action = {
	type: string;
	payload: any;
};
