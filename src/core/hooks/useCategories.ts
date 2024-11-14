import { useEffect, useState } from "react";

export default function useCategories() {
    const [categories, setCategories] = useState<string[]>([]);

    // Just load a list of categories from a JSON file
    useEffect(() => {
        fetchCategories();
    }, []);

    // Gets all categories
    const fetchCategories = async () => {
        const response = await fetch("/data/sietecolores.categories.json");
        const json = await response.json();

        const categories = json.map((category: any) => {
            return category.name;
        }).sort();

        setCategories(categories);
    };

    return { categories };
}