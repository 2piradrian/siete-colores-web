import { useEffect, useState } from "react";
import { Filters, ProductEntity } from "../../../domain";
import { useRepositories } from "../../../core";
import toast from "react-hot-toast";

export default function useViewModel(){

    const { productsRepository, subCategoriesRepository } = useRepositories();

    /* --- States --- */
    const [products, setProducts] = useState<ProductEntity[]>([]);
    const [subCategories, setSubCategories] = useState<string[]>([]);
    const [category, setCategory] = useState<string>("");
    
    const [filters, setFilters] = useState<Filters>({ category: "", subcategory: "", words: "", sort: "Sin Orden" });

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [loading, setLoading] = useState(false);
    /* --- ----- --- */

    useEffect(() => {
        fetch();
        getCategoryFromURL();
    }, [page, filters]);

    useEffect(() => {
		window.scrollTo(0, 0);
	}, [page]);

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

    const getCategoryFromURL = () => {
        const segments = location.pathname.split("/").filter(Boolean);
        const category = segments.length > 1 ? segments[1] : "";

        setCategory(category);
    };

    const updateFilters = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = Object.fromEntries(new FormData(e.currentTarget) as any);

        const newFilters: Filters = {
            category: category || "",
            subcategory: form?.subcategory || "Todos",
            words: form?.words || "",
            sort: form?.sort || "Sin orden"
        };

        setFilters((prev) => ({ ...prev, ...newFilters }));
        setPage(1);
    };

    const clearFilters = () => {
        setFilters({ 
            category: category || "", 
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
        updateFilters,
        clearFilters,
        addProduct,
        nextPage,
        prevPage,
        totalPages,
        page
    }
};