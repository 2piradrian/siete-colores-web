import { Filters, ProductEntity, ProductsDataSourceI, ProductsRepositoryI } from "../../domain";
import { PaginatedProducts } from "../../domain/type/paginated-products";
import { ProductsJsonDataSource } from "../data-source/json/products";

export class ProductsRepository implements ProductsRepositoryI {

    private dataSource: ProductsDataSourceI;

    constructor(dataSource: ProductsDataSourceI = new ProductsJsonDataSource()){
        this.dataSource = dataSource;
    }

    public async getProducts(page: number, size: number, filters: Filters): Promise<PaginatedProducts>{
        try {
            return await this.dataSource.getProducts(page, size, filters);
        }
        catch (error) {
            throw new Error("Error obteniendo los productos");
        }
    }

    public async getProductByCode(code: string): Promise<ProductEntity> {
       try {
            return this.dataSource.getProductByCode(code);
       }
       catch (error) {
            throw new Error("Error obteniendo el producto");
       }
    }

    public async getNews(size: number): Promise<ProductEntity[]> {
        try {
            return this.dataSource.getNews(size);
        }
        catch (error) {
            throw new Error("Error obteniendo las noticias");
        }
    }

    public async getWithDiscount(): Promise<ProductEntity[]> {
        try {
            return this.dataSource.getWithDiscount();
        }
        catch (error) {
            throw new Error("Error obteniendo los productos con descuento");
        }
    }
   
}