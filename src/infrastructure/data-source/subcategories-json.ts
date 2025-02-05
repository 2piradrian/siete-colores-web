import { SubCategoriesDataSourceI, SubCategory } from "../../domain";

export class SubCategoriesJsonDataSource implements SubCategoriesDataSourceI {

    constructor() {

    }

    public async getSubCategories(): Promise<SubCategory[]> {
        try {
            const response = await fetch("/data/subcategories.json");
            const categories = await response.json();

            return categories;
        }
        catch (error) {
            throw new Error("Error obteniendo las subcategorias")
        }
    }

}