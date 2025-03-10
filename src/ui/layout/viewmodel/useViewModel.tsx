import { useMatch } from "@reach/router";
import { useEffect, useState } from "react";
import { useRepositories } from "../../../core";
import { CategoryEntity } from "../../../domain";

export default function useViewModel() {

    const { categoriesRepository } = useRepositories();

    /* --- States --- */
    const [categories, setCategories] = useState<string[]>([]);
    const [categorySelected, setCategorySelected] = useState<string>("");
    /* --- ----- --- */

    useEffect(() => {
        fetch();
        getCategorySelected();
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

    const getCategorySelected = () => {
        const match = useMatch("/products/:category") ;
        setCategorySelected(match?.category || "");
    };

    return {
        categories,
        categorySelected
    };

}