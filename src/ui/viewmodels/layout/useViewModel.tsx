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
    }, []);

    useEffect(() => {
        getCategorySelected(location);
    }, [location]);

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
        const segments = location.pathname.split("/").filter(Boolean);
        const category = segments[1];
        setCategorySelected(category || "");
    };

    return {
        categories,
        categorySelected
    };

}