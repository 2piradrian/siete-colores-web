import { SubCategory } from "../types/subcategory";

export abstract class SubCategoriesRepositoryI {
    abstract getSubCategories(): Promise<SubCategory[]>;
}