import { createContext } from "react";
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
    updateFilters: (newFilters: Partial<Filters>) => void;
    nextPage: () => void;
    prevPage: () => void;
    categories: string[];
    subCategories: string[];
};

export const ProductsContext = createContext<ProductsContextType>({
    products: [],
    news: [],
    loading: false,
    error: null,
    page: 1,
    totalPages: 1,
    updateFilters: () => {},
    nextPage: () => {},
    prevPage: () => {},
    categories: [],
    subCategories: [],
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