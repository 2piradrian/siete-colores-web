export class SubCategoryEntity {
    private constructor(
        public name: string,
    ){}

    static fromObject(object: {[key: string]: any}): SubCategoryEntity {
        return new SubCategoryEntity(
            object.name,
        );
    }
};