import { PaginatedProducts, Product, ProductsDataSourceI } from "../../domain";

export class ProductsJsonDataSource implements ProductsDataSourceI {

    constructor(){
       
    }

    public async getProducts(page: number, size: number): Promise<PaginatedProducts> {
        try {
            const response = await fetch("/data/sietecolores.products.json");
            const products = await response.json();

            // filter products
            const filteredProducts = products.filter((product: Product) => {
                
            });

            const start = (page - 1) * size;
            const end = start + size;

            const paginatedProducts = products.slice(start, end);

            return {
                products: paginatedProducts,
                page: page,
                pages: Math.ceil(products.length / size),
            };

        }
        catch (error) {
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