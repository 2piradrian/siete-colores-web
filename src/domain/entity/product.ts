export class ProductEntity {
	private constructor(
		public id: string,
		public code: string,
		public name: string,
		public size: string,
		public price: number,
		public offertPrice: number | undefined,
		public category: string,
		public subcategories: string[],
		public keywords: string[],
		public createdAt: Date,
		public description: string,
		public available: boolean,
		public quantity: number | undefined,
	){}

	static fromObject(object: {[key: string]: any}): ProductEntity {
		return new ProductEntity(
			object.id,
			object.code,
			object.name,
			object.size,
			object.price,
			object.offertPrice,
			object.category,
			object.subcategories,
			object.keywords,
			object.createdAt,
			object.description,
			object.available,
			object.quantity,
		);
	}
};