import { useEffect, useState } from "react";
import { Filters, ProductEntity } from "../../../domain";
import { useRepositories } from "../../../core";
import toast from "react-hot-toast";

export default function useViewModel(){

    const { productsRepository, subCategoriesRepository } = useRepositories();

    /* --- States --- */
    const [products, setProducts] = useState<ProductEntity[]>([]);
    const [subCategories, setSubCategories] = useState<string[]>([]);
    
    const [filters, setFilters] = useState<Filters>({ category: "", subcategory: "", words: "", sort: "default" });
    const [loading, setLoading] = useState(false);
    /* --- ----- --- */

    useEffect(() => {
        fetch();
    }, [filters]);

    useEffect(() => {
        getFiltersFromURL();
    }, []);

    const fetch = async () => {
        setLoading(true);
        try {
            const products = await productsRepository.getProducts(filters);
            setProducts(products);

            const subCategories = await subCategoriesRepository.getSubCategories();
            setSubCategories(subCategories.map(sc => sc.name));
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };

    const getFiltersFromURL = () => {
        const params = new URLSearchParams(location.search);
        const segments = location.pathname.split("/").filter(Boolean);
        const category = segments.length > 1 ? segments[1] : "";

        setFilters({
            category: category,
            subcategory: params.get("subcategory") || "",
            words: params.get("words") || "",
            sort: params.get("sort") || "default"
        });
    };

    const clearFilters = () => {
        setFilters({ 
            category: filters.category || "", 
            subcategory: "", 
            words: "", 
            sort: "default" 
        });
    };

    const addProduct = (product: ProductEntity) => {
		toast("🛒Producto agregado");
    }

    return {
        loading,
        products,
        subCategories,
        filters,
        clearFilters,
        addProduct
    }
};