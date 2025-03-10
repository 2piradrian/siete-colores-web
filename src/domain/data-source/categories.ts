import { CategoryEntity } from "../entity/category";

export abstract class CategoriesDataSourceI {
    abstract getCategories(): Promise<CategoryEntity[]>;
}