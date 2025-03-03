import { SubCategoriesDataSourceI, SubCategoriesRepositoryI, Category } from "../../domain";
import { SubCategoriesJsonDataSource } from "../data-source/subcategories-json";

export class SubCategoriesRepository implements SubCategoriesRepositoryI {
    private dataSource: SubCategoriesDataSourceI;

    constructor(dataSource: SubCategoriesDataSourceI = new SubCategoriesJsonDataSource()){
        this.dataSource = dataSource;
    }

    public async getSubCategories(): Promise<Category[]> {
        try {
            return await this.dataSource.getSubCategories();
        }
        catch (error) {
            throw new Error("Error obteniendo las categorias");
        }
    }

}