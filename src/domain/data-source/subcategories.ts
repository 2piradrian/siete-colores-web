import { SubCategoryEntity } from "../entity/subcategory";

export abstract class SubCategoriesDataSourceI {
    abstract getSubCategories(): Promise<SubCategoryEntity[]>;
}