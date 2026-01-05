import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { priceFormatter, useRepositories } from "../../../core";
import { ProductEntity } from "../../../domain";

export interface Shipping {
    _id: string;
    value: number;
    branch: number;
    home: number;
}

export default function useViewModel() {
    const { cartRepository } = useRepositories();

    /* --- States --- */
    const [products, setProducts] = useState<ProductEntity[]>([]);
    const [subtotal, setSubtotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [shippings, setShippings] = useState<Shipping[]>([]);
    const [selectedShipping, setSelectedShipping] = useState<string>("none");
    const [shippingCost, setShippingCost] = useState(0);
    /* --- ----- --- */

    useEffect(() => {
        window.scrollTo(0, 0);
        fetch();
        fetchShippings();
    }, []);

    useEffect(() => {
        const price = products.reduce((acc, product) => {
            const finalPrice = product.offertPrice || product.price;
            return acc + finalPrice * product.quantity!
        }, 0) || 0;
        setSubtotal(price);
    }, [products]);

    useEffect(() => {
        if (selectedShipping === "none" || shippings.length === 0) {
            setShippingCost(0);
            return;
        }

        const shipping = shippings[0];
        if (selectedShipping === "branch") {
            setShippingCost(shipping.branch);
        }
        else if (selectedShipping === "home") {
            setShippingCost(shipping.home);
        }
    }, [selectedShipping, shippings]);

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

    const fetchShippings = async () => {
        try {
            const response = await window.fetch("/data/shippings.json");
            const data = await response.json();
            setShippings(data);
        }
        catch (error) {
            console.error("Error fetching shippings:", error);
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

        const shippingText = selectedShipping === "none" ? "A convenir" : (selectedShipping === "branch" ? "Retiro en sucursal" : "Envío a domicilio");

        const text = `Hola, me gustaría consultar por los siguientes articulos

    		${products?.map((products: ProductEntity) => { return `\n${products.name} (${products.code}) x (${products.quantity}un.)\n` }).join("")}

---- ---- ---- ---- ----
Valor estimado del pedido:

Subtotal: ${priceFormatter(subtotal)}

Envío: ${shippingText} ${shippingCost > 0 ? `(${priceFormatter(shippingCost)})` : ""}

Total: ${priceFormatter(subtotal + shippingCost)}`;

        return `https://api.whatsapp.com/send?phone=543512742036&text=${encodeURI(text)}`;

    };

    return {
        loading,
        products,
        editQuantity,
        subtotal,
        getOrder,
        selectedShipping,
        setSelectedShipping,
        shippingCost,
        total: subtotal + shippingCost
    };
}