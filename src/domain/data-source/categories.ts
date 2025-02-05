import { Category } from "../types/category";

export abstract class CategoriesDataSourceI {
    abstract getCategories(): Promise<Category[]>;
}