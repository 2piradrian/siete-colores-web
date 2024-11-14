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
	const [loading, setLoading] = useState(true);
	const [list, setList] = useState<Product[][]>([]);
	const [products, setProducts] = useState<Product[]>([]);
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
		const response = await fetch("/data/sietecolores.products.json");
		const db = await response.json();
		const products: Product[] = db.map((product: any) => {
			return { ...product };
		});

		setProducts(products);
		setLoading(false);
	};

	// Get one product by its code
	const getProduct = (code: string) => {
		return products.find((product) => product.code === code);
	};

	// Get random products
	const getRandomProducts = (quantity: number) => {
		if (products.length === 0) return [];

		const randomProducts: Product[] = [];
		for(let i = 0; i < quantity; i++){
			const random = Math.floor(Math.random() * products.length);
			randomProducts.push(products[random]);
		}
		return randomProducts;
	}

	// Apply filters to the list of products
	const filterProducts = (filters: Filters) => {
		// If there are no filters, return the original list of products
		if (filters.category === "Todos" && filters.words === "" && filters.sort === "default") {
			const dividedProducts = divideProducts(products, 12);
			return setList(dividedProducts);
		}

		const filterArray: string[] = [];
		if (filters.words) {
			filterArray.push(...filters.words.split(" ").flat().map((word) => word.toLowerCase()));
		}

		// Apply filters, and return the list of products
		const filteredProducts = products.filter((product) => {
			const keywordsArray = [
				product.code.toLowerCase(),
				product.code.slice(1).toLowerCase(),
				...product.name.toLowerCase().split(" ").flat(), 
				...product.keywords.map(k => k.toLowerCase())
			];
			
       		let words = false;
			if (filters.words !== "") {
				for (const word of filterArray) {
					for (const keyword of keywordsArray) {
						if (keyword === word || keyword.startsWith(word)) {
							words = true;
							break;
						}
					}
				}
			}
			else {
				words = true;
			}
       		
			if (filters.category !== "Todos") {
				const category = filters.category.toLowerCase() === product.category.toLowerCase();
				return category && words;
			}
			else{
				return words;
			}
		});

		// Sort the list of products
		if (filters.sort === "highest") {
			filteredProducts.sort(sortHigherPrice);
		} 
		else if (filters.sort === "lowest") {
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

	return { list, ...paginatedList, setFilters, getProduct, getRandomProducts, loading };
}
