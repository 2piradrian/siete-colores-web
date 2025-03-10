import { useLocation } from "@gatsbyjs/reach-router";
import { useEffect, useState } from "react";
import { useRepositories } from "../../../core";
import { CategoryEntity } from "../../../domain";

export default function useViewModel() {

    const location = useLocation();
    const { categoriesRepository } = useRepositories();

    /* --- States --- */
    const [categories, setCategories] = useState<string[]>([]);
    const [categorySelected, setCategorySelected] = useState<string>("");
    /* --- ----- --- */

    useEffect(() => {
        fetch();
        getCategorySelected(location);
    }, []);

    const fetch = async () => {
        try {
            const categories = await categoriesRepository.getCategories();
            setCategories(categories.map((category: CategoryEntity) => category.name));
        }
        catch (error) {
            console.error(error);
        }
    };

    const getCategorySelected = (location: any) => {
        const category = location.pathname.split("/").pop();
        setCategorySelected(category || "");
    };

    return {
        categories,
        categorySelected
    };

}