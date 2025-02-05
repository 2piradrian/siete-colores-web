import { Category } from "../types/category";

export abstract class CategoriesRepositoryI {
    abstract getCategories(): Promise<Category[]>;
}