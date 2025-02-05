import { CategoriesDataSourceI, CategoriesRepositoryI, Category } from "../../domain";
import { CategoriesJsonDataSource } from "../data-source/categories-json";

export class CategoriesRepository implements CategoriesRepositoryI {
    private dataSource: CategoriesDataSourceI;

    constructor(dataSource: CategoriesDataSourceI = new CategoriesJsonDataSource()){
        this.dataSource = dataSource;
    }

    public async getCategories(): Promise<Category[]> {
        try {
            return await this.dataSource.getCategories();
        }
        catch (error) {
            throw new Error("Error obteniendo las categorias");
        }
    }

}