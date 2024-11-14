import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useProducts from "../../core/hooks/useProducts";
import Layout from "../layout/Layout";
import Title from "../components/atoms/Title/Title";
import SearchProducts from "../components/molecules/Search/SearchProducts";
import ProductList from "../components/molecules/ProductList/ProductList";

function Products() {
    const { paginatedList: list, setFilters } = useProducts();
	const params = useParams<{ category: string }>();

	useEffect(() => {
		setFilters((prevFilters) => ({ ...prevFilters, category: params.category || "Todos" }));
	}, [params.category]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [params.category]);

	return (
		<Layout>
			<Title title={params.category ? `Estás viendo ${params.category}` : "Mirá lo que tenemos para ofrecerte"} />
            <SearchProducts setFilters={setFilters} category={params.category} />
            <ProductList list={list} />
		</Layout>
	);
}

export default Products;
