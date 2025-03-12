import { SubCategoryEntity } from "../entity/subcategory";

export abstract class SubCategoriesRepositoryI {
    abstract getSubCategories(): Promise<SubCategoryEntity[]>;
}