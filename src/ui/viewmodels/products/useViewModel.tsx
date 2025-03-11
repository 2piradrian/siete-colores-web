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
        setPage(getPageState());
        getDataFromURL();
    }, []);

    useEffect(() => {
        fetch();
        savePageState(page);
        window.scrollTo(0, 0);

        console.log(filters);

    }, [page, filters]);

    
    const fetch = async () => {
        setLoading(true);
        try {
            const result = await productsRepository.getProducts(page, 21, filters);
            setProducts(result.products);
            setTotalPages(result.pages);

            if (subCategories.length === 0) {
                const subCategories = await subCategoriesRepository.getSubCategories();
                setSubCategories(subCategories.map(sc => sc.name));
            }
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
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFilters(prev => ({ ...prev, [name]: value }));
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

    const updateFilters = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setPage(1);

        const form = Object.fromEntries(new FormData(e.currentTarget) as any);

        const params = new URLSearchParams(window.location.search);
        params.set("subcategory", form.subcategory);
        params.set("words", form.words);
        params.set("sort", form.sort);

        setFilters({
            category: filters.category,
            subcategory: form.subcategory,
            words: form.words,
            sort: form.sort
        });

        window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
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

    const savePageState = (pageState: number) => {
        sessionStorage.setItem("page", pageState.toString());
    };

    const getPageState = () => {
        return parseInt(sessionStorage.getItem("page") || "1");
    };

    return {
        loading,
        products,
        subCategories,
        filters,
        handleFormChange,
        updateFilters,
        clearFilters,
        addProduct,
        nextPage,
        prevPage,
        totalPages,
        page
    }
};