import { SubCategory } from "../types/subcategory";

export abstract class CategoriesRepositoryI {
    abstract getCategories(): Promise<SubCategory[]>;
}