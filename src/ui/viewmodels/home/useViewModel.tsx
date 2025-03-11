import { useEffect, useState } from "react";
import { ProductEntity } from "../../../domain";
import { useRepositories } from "../../../core";
import toast from "react-hot-toast";

export default function useViewModel() {
    const { productsRepository, cartRepository } = useRepositories();

    /* --- States --- */
    const [news, setNews] = useState<ProductEntity[]>([]);
    const [offerts, setOfferts] = useState<ProductEntity[]>([]);
    /* --- ----- --- */
    
    const [loading, setLoading] = useState(false);
    /* --- ----- --- */

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        setLoading(true);
        try {
            const news = await productsRepository.getNews(12);
            setNews(news);

            const offerts = await productsRepository.getWithDiscount();
            setOfferts(offerts);
        }
        catch (error) {
            toast.error("Error al cargar productos");
        }
        finally {
            setLoading(false);
        }
    };

    const addProduct = (product: ProductEntity) => {
        cartRepository.editQuantity(product, 1);
        toast("🛒 Producto agregado");
    };

    return {
        loading,
        news,
        offerts,
        addProduct
    };
}