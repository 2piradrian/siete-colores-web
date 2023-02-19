import {
	collection,
	doc,
	getDoc,
	getDocs,
	limit,
	query,
	where,
} from "firebase/firestore";
import { useState } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { product } from "../types";
import { db } from "./../firebase";
import { divideProducts, filterProducts } from "./utils";

function useProducts(onlyPopulars: boolean = false) {
	const itemsCollection = collection(db, "sietecolores");
	const priceCollection = doc(db, "price", "weightPrice");

	const [products, setProducts] = useState<product[] | product[][] | any>([]);

	const filters = useSelector((state: any) => state.products);

	/* Esta función verifica que tipo de fetch es el solicitado */
	const fetchProducts = async (onlyPopulars: boolean) => {
		if (onlyPopulars) {
			return fetchPopulars();
		} else {
			const dataDocs = getDocs(itemsCollection).then((snapshot) => {
				return snapshot.docs.map((doc) => doc.data());
			});
			return dataDocs;
		}
	};
	/* Fetch de los productos del home page */
	const fetchPopulars = () => {
		const q = query(
			itemsCollection,
			where("popular", "==", true),
			limit(3)
		);
		const dataDocs = getDocs(q).then((snapshot) => {
			return snapshot.docs.map((doc) => doc.data());
		});
		return dataDocs;
	};

	/* Fetch del precio relativo del producto */
	const fetchPrice = async () => {
		const dataDocs = getDoc(priceCollection).then((snapshot) => {
			return snapshot.data();
		});
		return dataDocs;
	};

	const onSuccess = async (data: Array<product>) => {
		const value = await fetchPrice();
		/* Seteo de los precios */
		let dataPrices = data.map((item) => {
			return { ...item, price: value!.value * item.weight };
		});
		/* Si son los de home page no hay nada más que hacer */
		if (onlyPopulars) {
			return setProducts(dataPrices);
		}

		/* Si hay filros aplicalos */
		if (filters.filter) {
			dataPrices = filterProducts(dataPrices, filters);
		}

		const dividedData = divideProducts(dataPrices, 6);
		setProducts(dividedData);
	};

	const { data, isLoading, refetch } = useQuery(
		["products"],
		() => fetchProducts(onlyPopulars),
		{
			onSuccess,
			refetchOnWindowFocus: false,
		}
	);

	return { data, products, isLoading, refetch };
}

export default useProducts;
