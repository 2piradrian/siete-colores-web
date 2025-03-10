import { SubCategoriesDataSourceI, SubCategoriesRepositoryI, CategoryEntity } from "../../domain";
import { SubCategoriesJsonDataSource } from "../data-source/json/subcategories";

export class SubCategoriesRepository implements SubCategoriesRepositoryI {
    private dataSource: SubCategoriesDataSourceI;

    constructor(dataSource: SubCategoriesDataSourceI = new SubCategoriesJsonDataSource()){
        this.dataSource = dataSource;
    }

    public async getSubCategories(): Promise<CategoryEntity[]> {
        try {
            return await this.dataSource.getSubCategories();
        }
        catch (error) {
            throw new Error("Error obteniendo las categorias");
        }
    }

}