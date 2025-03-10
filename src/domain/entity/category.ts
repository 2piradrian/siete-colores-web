export class CategoryEntity {
    private constructor(
        public name: string,
    ){}

    static fromObject(object: {[key: string]: any}): CategoryEntity {
        return new CategoryEntity(
            object.name,
        );
    }
};