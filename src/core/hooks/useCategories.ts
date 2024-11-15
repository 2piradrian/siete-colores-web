import { useEffect, useState } from "react";
import { CategoriesRepository } from "../../infrastructure";

export default function useCategories() {
    const [categories, setCategories] = useState<string[]>([]);

    const categoriesRepository = new CategoriesRepository();

    useEffect(() => {
        fetchCategories();
    }, []);

    // Gets all categories
    const fetchCategories = async () => {
        const categories = await categoriesRepository.getCategories();
        setCategories(categories.map(category => category.name));
    };

    return { categories };
}