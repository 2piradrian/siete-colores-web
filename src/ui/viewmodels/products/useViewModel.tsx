import { useEffect, useState } from "react";
import { Filters, ProductEntity } from "../../../domain";
import { useRepositories } from "../../../core";
import toast from "react-hot-toast";

export default function useViewModel(){

    const { productsRepository, subCategoriesRepository } = useRepositories();

    /* --- States --- */
    const [products, setProducts] = useState<ProductEntity[]>([]);
    const [categorySelected, setCategorySelected] = useState<string>("");
    const [subCategories, setSubCategories] = useState<string[]>([]);
    
    const [filters, setFilters] = useState<Filters>({ category: "", subcategory: "", words: "", sort: "default" });
    const [loading, setLoading] = useState(false);
    /* --- ----- --- */

    useEffect(() => {
        fetch();
        getCategorySelected(location);

        console.log(filters);
    }, [filters, location]);

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

    const getCategorySelected = (location: any) => {
        const segments = location.pathname.split("/").filter(Boolean);
        const category = segments[1];
        setCategorySelected(category || "");
    };

    const updateFilters = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = Object.fromEntries(new FormData(e.currentTarget) as any);

        const newFilters: Filters = {
            category: categorySelected || "",
            subcategory: form.subcategory || "Todos",
            words: form.words || "",
            sort: form.sort || "Sin orden"
        };

        setFilters((prev) => ({ ...prev, ...newFilters }));
    };

    const clearFilters = () => {
        setFilters({ 
            category: categorySelected || "", 
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
        categorySelected,
        subCategories,
        filters,
        updateFilters,
        clearFilters,
        addProduct
    }
};