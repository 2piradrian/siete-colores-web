import { useEffect, useState } from "react";
import { SubCategoriesRepository } from "../../infrastructure";

export default function useSubCategories() {
    const [subCategories, setSubCategories] = useState<string[]>([]);

    const subCategoriesRepository = new SubCategoriesRepository();

    useEffect(() => {
        fetchSubCategories();
    }, []);

    // Gets all subcategories
    const fetchSubCategories = async () => {
        const subCategories = await subCategoriesRepository.getSubCategories();
        setSubCategories(subCategories.map(subCategory => subCategory.name));
    };

    return { subCategories };
}