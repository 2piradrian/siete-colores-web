import { Filters, ProductEntity, ProductsDataSourceI } from "../../../domain";
import { PaginatedProducts } from "../../../domain/type/paginated-products";

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
        
        if (filters.sort === "Menor Precio") {
            filters.sort = "asc";
        }
        else if (filters.sort === "Mayor Precio") {
            filters.sort = "desc";
        }
        else {
            filters.sort = undefined;
        }

        return {
            words: filters.words?.toLowerCase().trim(),
            category: filters.category?.toLowerCase(),
            subcategory: filters.subcategory?.toLowerCase(),
            sort: filters.sort?.toLowerCase(),
        };
    };

    public async getProducts(page: number, size: number, filters: Filters): Promise<PaginatedProducts>{
        try {
            const response = await fetch("/data/products.json");
            const products = await response.json();
    
            filters = this.normalizeFilters(filters);
    
            const filteredProducts = products.filter((product: ProductEntity) => {
                if (filters.category && product.category.toLowerCase() !== filters.category) {
                    return false;
                }

                product.subcategories = product.subcategories.map((subcategory: string) => subcategory.toLowerCase());
                if (filters.subcategory && !product.subcategories.includes(filters.subcategory)) {
                    return false;
                }

                product.keywords = product.keywords.map((keyword: string) => keyword.toLowerCase().trim());
                if (filters.words) {
                    const found = filters.words.split(" ").some((keyword: string) => {
                        return product.keywords.includes(keyword);
                    });

                    const nameMatch = product.name.toLowerCase().split(" ").includes(filters.words);
                    const codeMatch = filters.words.toLowerCase() === product.code.toLowerCase();
                    
                    if (found || nameMatch || codeMatch) {
                        return true;
                    }
                    else {
                        if (filters.sort) return false
                    }
                }

                return true;
            });

            let scoredProducts, sortedProducts;

            if (!filters.sort) {
                scoredProducts = filteredProducts.map((product: ProductEntity) => {
                    let score = 0;
            
                    if (filters.words) {
                        const words = filters.words.split(" ");
                        score = words.reduce((acc, word) => {
                            const nameOccurrences = (product.name.match(new RegExp(word, "gi")) || []).length;
                            const keywordOccurrences = (product.keywords?.join(" ").match(new RegExp(word, "gi")) || []).length;
                            return acc + nameOccurrences + keywordOccurrences;
                        }, 0);
                    }
            
                    return { ...product, score };
                });
                sortedProducts = scoredProducts.sort((a: any, b: any) => b.score - a.score);
            }
            else {
                if (filters.sort === "asc") {
                    sortedProducts = filteredProducts.sort((a: ProductEntity, b: ProductEntity) => a.price - b.price);
                }
                else if (filters.sort === "desc") {
                    sortedProducts = filteredProducts.sort((a: ProductEntity, b: ProductEntity) => b.price - a.price);
                }
            }
            const codeFiltered = sortedProducts.filter((product: ProductEntity) => product.code.toLowerCase() === filters.words?.toLowerCase());
            if (codeFiltered.length > 0) {
                sortedProducts = codeFiltered;
            }
    
            const start = (page - 1) * size;
            const end = start + size;
    
            const paginatedProducts = sortedProducts.slice(start, end);
    
            return {
                products: paginatedProducts,
                page: page,
                pages: Math.ceil(filteredProducts.length / size),
            };
        } 
        catch (error) {
            throw new Error("Error obteniendo los productos");
        }
    }

    public async getProductByCode(code: string): Promise<ProductEntity> {
        try {
            const response = await fetch("/data/products.json");
            const products = await response.json();

            return products.find((product: ProductEntity) => product.code === code);
        }
        catch (error) {
            throw new Error("Error obteniendo el producto");
        }
    }

    public async getNews(size: number): Promise<ProductEntity[]> {
        try {
            const response = await fetch("/data/products.json");
            const products = await response.json();

            return products.sort((a: ProductEntity, b: ProductEntity) => {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            }).slice(0, size);
        }
        catch (error) {
            throw new Error("Error obteniendo las novedades");
        }
    }

    public async getWithDiscount(): Promise<ProductEntity[]> {
        try {
            const response = await fetch("/data/products.json");
            const products = await response.json();

            return products.filter((product: ProductEntity) => product.offertPrice != undefined);
        }
        catch (error) {
            throw new Error("Error obteniendo los productos con descuento");
        }
    }

}