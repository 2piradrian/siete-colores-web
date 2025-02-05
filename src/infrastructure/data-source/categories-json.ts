import { CategoriesDataSourceI, Category } from "../../domain";

export class CategoriesJsonDataSource implements CategoriesDataSourceI {

    constructor() {

    }

    public async getCategories(): Promise<Category[]> {
        try {
            const response = await fetch("/data/categories.json");
            const categories = await response.json();

            return categories;
        }
        catch (error) {
            throw new Error("Error obteniendo las categorias")
        }
    }

}