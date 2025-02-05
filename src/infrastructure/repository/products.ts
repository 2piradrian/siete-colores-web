import { Filters, PaginatedProducts, Product, ProductsDataSourceI, ProductsRepositoryI } from "../../domain";
import { ProductsJsonDataSource } from "../data-source/products-json";

export class ProductsRepository implements ProductsRepositoryI {

    private dataSource: ProductsDataSourceI;

    constructor(dataSource: ProductsDataSourceI = new ProductsJsonDataSource()){
        this.dataSource = dataSource;
    }

    public async getProducts(page: number, size: number, filters: Filters): Promise<PaginatedProducts> {
        try {
            return await this.dataSource.getProducts(page, size, filters);
        }
        catch (error) {
            throw new Error("Error obteniendo los productos");
        }
    }

    public async getProductByCode(code: string): Promise<Product> {
       try {
            return this.dataSource.getProductByCode(code);
       }
       catch (error) {
            throw new Error("Error obteniendo el producto");
       }
    }

    public async getNews(size: number): Promise<Product[]> {
        try {
            return this.dataSource.getNews(size);
        }
        catch (error) {
            throw new Error("Error obteniendo las noticias");
        }
    }
   
}