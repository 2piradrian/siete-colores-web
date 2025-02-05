import { useEffect, useState } from "react";
import { Product } from "../../domain/types/products";

export default function useScroll(list: Product[][]) {
	const [position, setPosition] = useState<number>(0);
	const [paginatedList, setPaginatedList] = useState<Product[]>([]);

	const onBottom = () => {
		const { scrollTop, clientHeight, scrollHeight } =
			document.documentElement;
		const bottom = scrollTop + clientHeight >= scrollHeight - 175;
		return bottom;
	};

    const handlePosition = () => {
        if (onBottom() && position < list.length - 1) {
            setPaginatedList([...paginatedList, ...list[position + 1]]);
            setPosition(position + 1);
        }
    };

    useEffect(() => {
        setPaginatedList(list[0]);
        setPosition(0);
    }, [list]);

    useEffect(() => {
    	window.addEventListener("scroll", handlePosition);
    	return () => {
    		window.removeEventListener("scroll", handlePosition);
    	};
    });

	return { paginatedList };
}