import { CategoryEntity, Filters, ProductEntity, ProductsDataSourceI } from "../../../domain";
import { PaginatedProducts } from "../../../domain/type/paginated-products";

export class ProductsJsonDataSource implements ProductsDataSourceI {

    constructor() {}

    private normalizeFilters(filters: Filters): Filters {
        const normalizedFilters: Filters = {
            words: filters.words?.toLowerCase().trim() || undefined,
            category: filters.category === "Todos" || !filters.category ? undefined : CategoryEntity.denormalize(filters.category.toLowerCase()),
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
    }

    public async getProducts(page: number, size: number, filters: Filters): Promise<PaginatedProducts> {
        try {
            const response = await fetch("/data/products.json");
            const products = await response.json();

            const normalizedFilters = this.normalizeFilters({ ...filters });

            const filteredProducts = products.filter((product: ProductEntity) => {
                if (normalizedFilters.category && product.category.toLowerCase() !== normalizedFilters.category) {
                    return false;
                }

                if (normalizedFilters.subcategory) {
                    const productSubcategories = product.subcategories.map(s => s.toLowerCase());
                    if (!productSubcategories.includes(normalizedFilters.subcategory)) {
                        return false;
                    }
                }

                if (normalizedFilters.words) {
                    const productKeywords = product.keywords.map(k => k.toLowerCase().trim());
                    const words = normalizedFilters.words.split(" ");

                    const keywordMatch = words.some(word => productKeywords.includes(word));
                    const nameMatch = words.some(word => product.name.toLowerCase().includes(word));
                    const codeMatch = normalizedFilters.words === product.code.toLowerCase();

                    if (!(keywordMatch || nameMatch || codeMatch)) {
                        return false;
                    }
                }

                return true;
            });

            let sortedProducts: ProductEntity[];

            const sortByDateDesc = (a: ProductEntity, b: ProductEntity) =>
                new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();

            const codeExactMatch = normalizedFilters.words
                ? filteredProducts.filter((p: ProductEntity) => p.code.toLowerCase() === normalizedFilters.words)
                : [];

            if (codeExactMatch.length > 0) {
                sortedProducts = codeExactMatch;
            }
            else if (normalizedFilters.sort) {
                if (normalizedFilters.sort === "menor precio") {
                    sortedProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
                }
                else if (normalizedFilters.sort === "mayor precio") {
                    sortedProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
                }
                else {
                    sortedProducts = [...filteredProducts].sort(sortByDateDesc);
                }
            }
            else if (normalizedFilters.words) {
                const scoredProducts = filteredProducts.map((product: ProductEntity) => {
                    let score = 0;
                    const words = normalizedFilters.words!.split(" ");

                    words.forEach(word => {
                        score += (product.name.toLowerCase().match(new RegExp(word, "gi")) || []).length * 2;
                        score += (product.keywords?.join(" ").toLowerCase().match(new RegExp(word, "gi")) || []).length;
                        if (word === product.code.toLowerCase()) {
                            score += 10;
                        }
                    });

                    return { ...product, score };
                });

                sortedProducts = scoredProducts.sort((a: any, b: any) => b.score - a.score);
            }
            else {
                sortedProducts = [...filteredProducts].sort(sortByDateDesc);
            }

            const start = (page - 1) * size;
            const end = start + size;

            return {
                products: sortedProducts.slice(start, end),
                page,
                pages: Math.ceil(sortedProducts.length / size),
            };
        }
        catch {
            throw new Error("Error obteniendo los productos");
        }
    }

    public async getProductByCode(code: string): Promise<ProductEntity> {
        try {
            const response = await fetch("/data/products.json");
            const products = await response.json();
            return products.find((product: ProductEntity) => product.code === code);
        }
        catch {
            throw new Error("Error obteniendo el producto");
        }
    }

    public async getNews(size: number): Promise<ProductEntity[]> {
        try {
            const response = await fetch("/data/products.json");
            const products = await response.json();

            return [...products]
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .slice(0, size);
        }
        catch {
            throw new Error("Error obteniendo las novedades");
        }
    }

    public async getWithDiscount(): Promise<ProductEntity[]> {
        try {
            const response = await fetch("/data/products.json");
            const products = await response.json();
            return products.filter((product: ProductEntity) => product.offertPrice != undefined);
        }
        catch {
            throw new Error("Error obteniendo los productos con descuento");
        }
    }
}
