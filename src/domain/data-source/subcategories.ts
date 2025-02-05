import { SubCategory } from "../types/subcategory";

export abstract class SubCategoriesDataSourceI {
    abstract getSubCategories(): Promise<SubCategory[]>;
}