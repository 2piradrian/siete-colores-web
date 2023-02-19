export type product = {
	id: string;
	name: string;
	price: number;
	tamaprox: string;
	weight: number;
	type: string;
	popular?: boolean;
	quantity?: number;
	description?: Array<String>;
};

export type Action = {
	type: string;
	payload: any;
};
