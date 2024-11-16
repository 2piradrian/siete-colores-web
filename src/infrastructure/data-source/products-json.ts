import { Filters } from './../../domain/types/filters';
import { PaginatedProducts, Product, ProductsDataSourceI } from "../../domain";

export class ProductsJsonDataSource implements ProductsDataSourceI {

    constructor(){
       
    }

    private normalizeFilters(filters: Filters): Filters {
        if (filters.category === "Todos") {
            filters.category = undefined;
        }
        if (filters.subcategory === "Todos") {
            filters.subcategory = undefined;
        }
        return {
            words: filters.words?.toLowerCase(),
            category: filters.category?.toLowerCase(),
            subcategory: filters.subcategory?.toLowerCase(),
            sort: filters.sort?.toLowerCase(),
        };
    };

    public async getProducts(page: number, size: number, filters: Filters): Promise<PaginatedProducts> {
        try {
            const response = await fetch("/data/sietecolores.products.json");
            const products = await response.json();
    
            filters = this.normalizeFilters(filters);
    
            const filteredProducts = products.filter((product: Product) => {
                if (filters.category && product.category.toLowerCase() !== filters.category) {
                    return false;
                }

                product.subcategories = product.subcategories.map((subcategory: string) => subcategory.toLowerCase());
                if (filters.subcategory && !product.subcategories.includes(filters.subcategory)) {
                    return false;
                }

                product.keywords = product.keywords.map((keyword: string) => keyword.toLowerCase());
                if (filters.words) {
                    const found = filters.words.split(" ").some((keyword: string) => {
                        return product.keywords.includes(keyword);
                    });

                    if (found || product.name.toLowerCase().split(" ").includes(filters.words)) {
                        return true;
                    }
                }

                return true;
            });

            const scoredProducts = filteredProducts.map((product: Product) => {
                let score = 0;
    
                if (filters.words) {
                    const words = filters.words.split(" ");
                    score = words.reduce((acc, word) => {
                        const occurrences = (product.name.match(new RegExp(word, "gi")) || []).length;
                        return acc + occurrences;
                    }, 0);
                }
    
                return { ...product, score };
            });

            const sortedProducts = scoredProducts.sort((a: any, b: any) => b.score - a.score);
    
            const start = (page - 1) * size;
            const end = start + size;
    
            const paginatedProducts = sortedProducts.slice(start, end);
    
            return {
                products: paginatedProducts,
                page: page,
                pages: Math.ceil(filteredProducts.length / size),
            };
        } catch (error) {
            throw new Error("Error obteniendo los productos");
        }
    }

    public async getProductByCode(code: string): Promise<Product> {
        try {
            const response = await fetch("/data/sietecolores.products.json");
            const products = await response.json();

            return products.find((product: Product) => product.code === code);
        }
        catch (error) {
            throw new Error("Error obteniendo el producto");
        }
    }

    public async getNews(size: number): Promise<Product[]> {
        try {
            const response = await fetch("/data/sietecolores.products.json");
            const products = await response.json();

            return products.sort((a: Product, b: Product) => {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }).slice(0, size);
        }
        catch (error) {
            throw new Error("Error obteniendo las novedades");
        }
    }

    

}