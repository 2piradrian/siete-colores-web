export class CategoryEntity {
    private constructor(
        public name: string,
    ){}

    static fromObject(object: {[key: string]: any}): CategoryEntity {
        return new CategoryEntity(
            object.name,
        );
    }

    public static normalize(name: string): string {
        return name.replace(/\s+/g, '_');
    }

    public static denormalize(name: string): string {
        return name.replace(/_+/g, ' ');
    }
};