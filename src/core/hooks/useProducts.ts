import { useEffect, useState } from "react";
import { Filters, Product } from "../../domain";
import { ProductsRepository } from "../../infrastructure";

export default function useProducts() {

    const [products, setProducts] = useState<Product[]>([]);
    const [news, setNews] = useState<Product[]>([]);
    const [filters, setFilters] = useState<Filters>({ category: "", subcategory: "", words: "", sort: "default" });

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const productsRepository = new ProductsRepository();

    useEffect(() => {
        fetchProducts(page, 20);
        fetchNews();
    }, [page, filters]);

    const fetchProducts = async (page: number, size: number) => {
		setLoading(true);
        try {
            const result = await productsRepository.getProducts(page, size, filters);

            setProducts(result.products);
            setTotalPages(result.pages || 1);
        } 
		catch (error) {
            setError("Error obteniendo los productos.");
        } 
		finally {
            setLoading(false);
        }
    };

    const fetchProductByCode = async (code: string) => {
        setLoading(true);
        try {
            return await productsRepository.getProductByCode(code);
        }
        catch (error) {
            setError("Error obteniendo el producto.");
        }
        finally {
            setLoading(false);
        }
    };

    const fetchNews = async () => {
        setLoading(true);
        try {
            const result = await productsRepository.getNews(6);
            setNews(result);
        }
        catch (error) {
            setError("Error obteniendo las noticias.");
        }
        finally {
            setLoading(false);
        }
    };

    const updateFilters = (newFilters: Partial<Filters>) => {
        setFilters((prev) => ({ ...prev, ...newFilters }));
        setPage(1); // Reinicia a la primera página al cambiar filtros.
    };

    const clearFilters = () => {
        setFilters({ category: "", subcategory: "", words: "", sort: "default" });
    };

    const nextPage = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const prevPage = () => {
        if (page > 1) setPage(page - 1);
    };

    return {
        products,
        news,
        loading,
        error,
        page,
        totalPages,
        nextPage,
        prevPage,
        filters,
        updateFilters,
        clearFilters,
    };
}
