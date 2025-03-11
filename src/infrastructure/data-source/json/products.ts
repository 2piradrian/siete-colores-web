import { Filters, ProductEntity, ProductsDataSourceI } from "../../../domain";
import { PaginatedProducts } from "../../../domain/type/paginated-products";

export class ProductsJsonDataSource implements ProductsDataSourceI {

    constructor(){

    }

    private normalizeFilters(filters: Filters): Filters {
        const normalizedFilters: Filters = {
            words: filters.words?.toLowerCase().trim() || undefined,
            category: filters.category === "Todos" ? undefined : filters.category?.toLowerCase(),
            subcategory: filters.subcategory === "Todos" ? undefined : filters.subcategory?.toLowerCase(),
            sort: filters.sort === "Sin Orden" ? undefined : filters.sort?.toLowerCase(),
            page: filters.page || 1,
        };
        
        Object.keys(normalizedFilters).forEach(key => {
            const typedKey = key as keyof Filters;
            if (normalizedFilters[typedKey] === undefined || normalizedFilters[typedKey] === "") {
                delete normalizedFilters[typedKey];
            }
        });
        
        return normalizedFilters;
    };

    public async getProducts(page: number, size: number, filters: Filters): Promise<PaginatedProducts> {
        try {
            const response = await fetch("/data/products.json");
            const products = await response.json();
    
            const normalizedFilters = this.normalizeFilters({...filters});
    
            const filteredProducts = products.filter((product: ProductEntity) => {
                if (normalizedFilters.category && product.category.toLowerCase() !== normalizedFilters.category) {
                    return false;
                }
    
                if (normalizedFilters.subcategory) {
                    const productSubcategories = product.subcategories.map((subcategory: string) => 
                        subcategory.toLowerCase());
                    
                    if (!productSubcategories.includes(normalizedFilters.subcategory)) {
                        return false;
                    }
                }
    
                if (normalizedFilters.words) {
                    const productKeywords = product.keywords.map((keyword: string) => 
                        keyword.toLowerCase().trim());
                    
                    const words = normalizedFilters.words.split(" ");
                    
                    const keywordMatch = words.some(word => 
                        productKeywords.includes(word));
                    
                    const nameMatch = words.some(word => 
                        product.name.toLowerCase().includes(word));
                    
                    const codeMatch = normalizedFilters.words === product.code.toLowerCase();
                    
                    if (!(keywordMatch || nameMatch || codeMatch)) {
                        return false;
                    }
                }
    
                return true;
            });
    
            let sortedProducts;
            
            const codeExactMatch = normalizedFilters.words 
                ? filteredProducts.filter((product: ProductEntity) => 
                    product.code.toLowerCase() === normalizedFilters.words)
                : [];
                
            if (codeExactMatch.length > 0) {
                sortedProducts = codeExactMatch;
            }
            else if (normalizedFilters.sort) {
                if (normalizedFilters.sort === "menor precio") {
                    sortedProducts = [...filteredProducts].sort((a: ProductEntity, b: ProductEntity) => 
                        a.price - b.price);
                }
                else if (normalizedFilters.sort === "mayor precio") {
                    sortedProducts = [...filteredProducts].sort((a: ProductEntity, b: ProductEntity) => 
                        b.price - a.price);
                }
                else {
                    sortedProducts = filteredProducts;
                }
            }
            else {
                const scoredProducts = filteredProducts.map((product: ProductEntity) => {
                    let score = 0;
                    
                    if (normalizedFilters.words) {
                        const words = normalizedFilters.words.split(" ");
                        words.forEach(word => {
                            const nameOccurrences = (product.name.toLowerCase().match(new RegExp(word, "gi")) || []).length;
                            score += nameOccurrences * 2;
                            
                            const keywordOccurrences = (product.keywords?.join(" ").toLowerCase().match(new RegExp(word, "gi")) || []).length;
                            score += keywordOccurrences;
                            
                            if (word === product.code.toLowerCase()) {
                                score += 10;
                            }
                        });
                    }
                    
                    return { ...product, score };
                });
                
                sortedProducts = scoredProducts.sort((a: any, b: any) => b.score - a.score);
            }
    
            const start = (page - 1) * size;
            const end = start + size;
            const paginatedProducts = sortedProducts.slice(start, end);
            
            return {
                products: paginatedProducts,
                page: page,
                pages: Math.ceil(sortedProducts.length / size),
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