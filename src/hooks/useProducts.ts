import useScroll from "./useScroll";
import { useEffect, useState } from "react";
import { Filters } from "../types/filters";
import { Product } from "../types/products";

/*
 * This hook is responsible for fetching and managing the products list.
 * Products: Is the list of all products. No filters applied. User cant see this list.
 * List: Is the list of products that the user is seeing. It can be filtered.
 * paginatedList: Is the list of products that the user is seeing. It can be filtered and paginated.
 */

export default function useProducts() {
	const [list, setList] = useState<Product[][]>([]);
	const [products, setProducts] = useState<Product[]>([]);
	const [randomProducts, setRandomProducts] = useState<Product[]>([]);
	const [filters, setFilters] = useState<Filters>({category: "", words: "", sort: "default"});

	const paginatedList = useScroll(list);

	// Just load a list of products from a JSON file
	useEffect(() => {
		fetchProducts();
	}, []);

	// Apply filters when it changes
	useEffect(() => {
		filterProducts(filters);
	}, [filters, products]);

	// Gets all products
	const fetchProducts = async () => {
		const response = await fetch("/data/db.json");
		const db = await response.json();
		const products: Product[] = db.map((product: any) => {
			return { ...product };
		});

		const randomProducts = products.sort(() => Math.random() - Math.random()).slice(0, 6); // Get 6 random products

		setRandomProducts(randomProducts);
		setProducts(products);
	};

	// Apply filters to the list of products
	const filterProducts = (filters: Filters) => {
		// If there are no filters, return the original list of products
		if (filters.category === "" && filters.words === "" && filters.sort === "default") {
			const dividedProducts = divideProducts(products, 8);
			return setList(dividedProducts);
		}

		// Apply filters, and return the list of products
		const filteredProducts = products.filter((product) => {
			

			const words =
				product.code.toLowerCase().includes(filters.words.toLowerCase()) ||
				product.name.toLowerCase().includes(filters.words.toLowerCase());

			if (filters.category !== "Todos" ) { 
				const category = filters.category.includes(product.category);

				return category && words;
			}else{
				return words;
			}
		});

		// Sort the list of products
		if (filters.sort === "highest") {
			filteredProducts.sort(sortHigherPrice);
		} else if (filters.sort === "lowest") {
			filteredProducts.sort(sortLowerPrice);
		}

		const dividedProducts = divideProducts(filteredProducts, 6);
		return setList(dividedProducts);
	};

	const sortLowerPrice = (a: Product, b: Product) => {
		if (a.price > b.price) {
			return 1;
		}
		if (a.price < b.price) {
			return -1;
		}
		return 0;
	};
	
	const sortHigherPrice = (b: Product, a: Product) => {
		if (a.price > b.price) {
			return 1;
		}
		if (a.price < b.price) {
			return -1;
		}
		return 0;
	};

	const divideProducts = (data: Product[], size: number) => {
		let dividedProducts = [];
		for (let i = 0; i < data.length; i += size) {
			dividedProducts.push(data.slice(i, i + size));
		}
		return dividedProducts;
	};

	return { list, ...paginatedList, setFilters, randomProducts }
}
