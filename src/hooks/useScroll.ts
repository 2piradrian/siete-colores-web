import { useEffect, useState } from "react";
import { product } from "../types";
import useProducts from "./useProducts";

function useScroll() {
	const { products, isLoading } = useProducts();
	const [position, setPosition] = useState<number>(0);
	const [list, setList] = useState<product[]>([]);

	const onBottom = () => {
		const { scrollTop, clientHeight, scrollHeight } =
			document.documentElement;
		const bottom = scrollTop + clientHeight >= scrollHeight - 175;
		return bottom;
	};

	const handlePosition = () => {
		if (onBottom() && position < products.length - 1) {
			setList(list.concat(...products[position + 1]));
			setPosition(position + 1);
		}
	};

	useEffect(() => {
		setList(products[0]);
		setPosition(0);
	}, [products]);

	useEffect(() => {
		window.addEventListener("scroll", handlePosition);
		return () => {
			window.removeEventListener("scroll", handlePosition);
		};
	});

	return { list, isLoading };
}

export default useScroll;
