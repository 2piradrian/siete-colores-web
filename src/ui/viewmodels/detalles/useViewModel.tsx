import { useEffect, useState } from "react";
import { ProductEntity } from "../../../domain";
import { useRepositories } from "../../../core";
import toast from "react-hot-toast";

export default function useViewModel() {
    const { productsRepository } = useRepositories();

    /* --- States --- */
    const [code, setCode] = useState("");
    const [product, setProduct] = useState<ProductEntity | undefined>();
    const [loading, setLoading] = useState(false);
    /* --- ----- --- */

    useEffect(() => {
        getDataFromURL();
    }, []);

    useEffect(() => {
        if (code){
            fetch();
        }
        window.scrollTo(0, 0);
    }, [code]);

    const fetch = async () => {
        setLoading(true);
        try {
            const product = await productsRepository.getProductByCode(code);
            setProduct(product);
        }
        catch (error) {
            toast.error("Error al cargar productos");
        }
        finally {
            setLoading(false);
        }
    };

    const getDataFromURL = () => {
        const segments = location.pathname.split("/").filter(Boolean);
        const code = segments.length > 1 ? segments[1] : "";

        setCode(code);
    };

    const addProduct = (product: ProductEntity) => {
        toast("🛒Producto agregado");
    };

    return {
        loading,
        product,
        addProduct,
    };
}