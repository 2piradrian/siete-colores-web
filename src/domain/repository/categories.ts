import { CategoryEntity } from "../entity/category";

export abstract class CategoriesRepositoryI {
    abstract getCategories(): Promise<CategoryEntity[]>;
}