import { useEffect, useState } from "react";
import { ProductEntity } from "../../../domain";
import { useRepositories } from "../../../core";
import toast from "react-hot-toast";

export default function useViewModel() {
    const { cartRepository } = useRepositories();

    /* --- States --- */
    const [products, setProducts] = useState<ProductEntity[]>([]);
    const [subtotal, setSubtotal] = useState(0);
    const [loading, setLoading] = useState(false);
    /* --- ----- --- */

    useEffect(() => {
        fetch();
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
		const price = products.reduce((acc, product) => {
			const finalPrice = product.offertPrice || product.price;
			return acc + finalPrice * product.quantity!
		}, 0) || 0;
		setSubtotal(price);
	}, [products]);

    const fetch = async () => {
        setLoading(true);
        try {
            const products = await cartRepository.getCart();
            console.log(products);
            setProducts(products);
        }
        catch (error) {
            toast.error("Error al cargar productos");
        }
        finally {
            setLoading(false);
        }
    };

    const editQuantity = async (product: ProductEntity, quantity: number) => {
        try {
            await cartRepository.editQuantity(product, quantity);
            fetch();
        }
        catch (error) {
            toast.error("Error al editar la cantidad");
        }
    };

    const getOrder = () => {
		const text = `Hola, me gustaría consultar por los siguientes articulos
		${products?.map((products: ProductEntity) => {return `\n${products.name} (${products.code}) x (${products.quantity}un.)\n`}).join("")}`;
		return `https://api.whatsapp.com/send?phone=543512742036&text=${encodeURI(text)}`;
	};

    return {
        loading,
        products,
        editQuantity,
        subtotal,
        getOrder
    };
}