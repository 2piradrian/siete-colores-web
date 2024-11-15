import { SubCategory } from "../types/subcategory";

export abstract class CategoriesDataSourceI {
    abstract getCategories(): Promise<SubCategory[]>;
}