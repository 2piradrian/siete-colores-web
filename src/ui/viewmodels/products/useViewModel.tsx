import { useEffect, useState } from "react";
import { Filters, ProductEntity } from "../../../domain";
import { useRepositories } from "../../../core";
import toast from "react-hot-toast";

export default function useViewModel(){

    const { productsRepository, subCategoriesRepository } = useRepositories();

    /* --- States --- */
    const [products, setProducts] = useState<ProductEntity[]>([]);
    const [subCategories, setSubCategories] = useState<string[]>([]);
    
    const [filters, setFilters] = useState<Filters>({ category: "", subcategory: "", words: "", sort: "Sin Orden" });

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [loading, setLoading] = useState(false);
    /* --- ----- --- */

    useEffect(() => {
        fetch();
        window.scrollTo(0, 0);
    }, [page, filters]);

    useEffect(() => {
        getDataFromURL();
    }, []);

    const fetch = async () => {
        setLoading(true);
        try {
            const result = await productsRepository.getProducts(page, 21, filters);
            setProducts(result.products);
            setTotalPages(result.pages);

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

    const getDataFromURL = () => {
        const params = new URLSearchParams(location.search);
        const segments = location.pathname.split("/").filter(Boolean);
        const category = segments.length > 1 ? segments[1] : "";

        setFilters({
            category: category,
            subcategory: params.get("subcategory") || "",
            words: params.get("words") || "",
            sort: params.get("sort") || "default"
        });
        setPage(Number(params.get("page")) || 1);
    };

    const clearFilters = () => {
        setFilters({ 
            category: filters.category || "", 
            subcategory: "", 
            words: "", 
            sort: "Sin Orden" 
        });
        setPage(1);
    };

    const addProduct = (product: ProductEntity) => {
		toast("🛒Producto agregado");
    }

    const nextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const prevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    return {
        loading,
        products,
        subCategories,
        filters,
        clearFilters,
        addProduct,
        nextPage,
        prevPage,
        totalPages,
        page
    }
};