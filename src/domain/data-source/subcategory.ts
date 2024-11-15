import { SubCategory } from "../types/subcategory";

export abstract class SubCategoriesDataSourceI {
    abstract getCategories(): Promise<SubCategory[]>;
}