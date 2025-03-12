import { useEffect, useState } from "react";
import { Filters, ProductEntity } from "../../../domain";
import { useRepositories } from "../../../core";
import toast from "react-hot-toast";

export default function useViewModel() {
    const { productsRepository, subCategoriesRepository, cartRepository } = useRepositories();

    /* --- States --- */
    const [products, setProducts] = useState<ProductEntity[]>([]);
    const [subCategories, setSubCategories] = useState<string[]>([]);
    /* --- ----- --- */
    
    const [filters, setFilters] = useState<Filters>({ 
        category: "", 
        subcategory: "", 
        words: "", 
        sort: "Sin Orden", 
        page: 1 
    });

    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    const [isBrowser, setIsBrowser] = useState(false);
    /* --- ----- --- */

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsBrowser(true);
        }
    }, []);

    useEffect(() => {
        if (isBrowser) {
            getDataFromURL();
        }
    }, [isBrowser, isBrowser ? window?.location?.pathname : null, isBrowser ? window?.location?.search : null]);


    useEffect(() => {
        fetch();
        window.scrollTo(0, 0);
    }, [filters]);

    const fetch = async () => {
        setLoading(true);
        try {
            const result = await productsRepository.getProducts(filters.page, 21, filters);
            setProducts(result.products);
            setTotalPages(result.pages);

            if (subCategories.length === 0) {
                const fetchedSubCategories = await subCategoriesRepository.getSubCategories();
                setSubCategories(fetchedSubCategories.map(sc => sc.name));
            }
        }
        catch (error) {
            toast.error("Error al cargar productos");
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
            sort: params.get("sort") || "Sin Orden", 
            page: params.get("page") ? parseInt(params.get("page") as string) : 1
        });
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;

        setFilters(prev => {
            const newFilters = { ...prev, [name]: value, page: 1 };
            
            updateURL(newFilters);
            
            return newFilters;
        });
    };

    const updateURL = (newFilters: Filters) => {
        const params = new URLSearchParams();
        
        if (newFilters.subcategory) params.set("subcategory", newFilters.subcategory);
        if (newFilters.words) params.set("words", newFilters.words);
        if (newFilters.sort && newFilters.sort !== "Sin Orden") params.set("sort", newFilters.sort);
        if (newFilters.page && newFilters.page > 1) params.set("page", newFilters.page.toString());
        
        const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
        
        window.history.replaceState({}, "", newUrl);
    };

    const clearFilters = () => {
        const newFilters = { 
            category: filters.category, 
            subcategory: "", 
            words: "", 
            sort: "Sin Orden",
            page: 1
        };
        
        setFilters(newFilters);
        updateURL(newFilters);
    };

    const updateFilters = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const segments = location.pathname.split("/").filter(Boolean);
        const category = segments.length > 1 ? segments[1] : "";

        const newFilters = {
            category: category,
            subcategory: formData.get("subcategory") as string || "",
            words: formData.get("words") as string || "",
            sort: formData.get("sort") as string || "Sin Orden",
            page: 1
        };

        setFilters(newFilters);
        updateURL(newFilters);
    };

    const addProduct = (product: ProductEntity) => {
        cartRepository.editQuantity(product, 1);
        toast("🛒 Producto agregado");
    };

    const nextPage = () => {
        if (filters.page < totalPages) {
            setFilters(prev => {
                const newFilters = { ...prev, page: prev.page + 1 };
                updateURL(newFilters);
                return newFilters;
            });
        }
    };

    const prevPage = () => {
        if (filters.page > 1) {
            setFilters(prev => {
                const newFilters = { ...prev, page: prev.page - 1 };
                updateURL(newFilters);
                return newFilters;
            });
        }
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
    };
}