import { createContext, useEffect } from "react";
import { Filters, Product } from "../../domain";
import useProducts from "../hooks/useProducts";
import useCategories from "../hooks/useCategories";
import useSubCategories from "../hooks/useSubCategories";

type ProductsContextType = {
    products: Product[];
    news: Product[];
    loading: boolean;
    error: string | null;
    page: number;
    totalPages: number;
    nextPage: () => void;
    prevPage: () => void;
    categories: string[];
    subCategories: string[];
    filters: Filters;
    updateFilters: (newFilters: Partial<Filters>) => void;
    clearFilters: () => void;
    fetchProductByCode: (code: string) => Promise<Product | undefined>;
};

export const ProductsContext = createContext<ProductsContextType>({
    products: [],
    news: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
    nextPage: () => {},
    prevPage: () => {},
    categories: [],
    subCategories: [],
    filters: { category: "", subcategory: "", words: "", sort: "default" },
    updateFilters: () => {},
    clearFilters: () => {},
    fetchProductByCode: async () => undefined,
});

type ProductProviderProps = {
    children: React.ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
    const contextValue = useProducts();    
    const { categories } = useCategories();
    const { subCategories } = useSubCategories();

    return (
        <ProductsContext.Provider value={{ ...contextValue, categories, subCategories }}>
            {children}
        </ProductsContext.Provider>
    );
};