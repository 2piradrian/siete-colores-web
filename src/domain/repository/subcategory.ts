import { SubCategory } from "../types/subcategory";

export abstract class SubCategoriesRepositoryI {
    abstract getCategories(): Promise<SubCategory[]>;
}