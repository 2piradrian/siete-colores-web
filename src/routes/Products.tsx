import { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Title from "../components/atoms/Title/Title";
import ProductList from "../components/molecules/ProductList/ProductList";
import SearchProducts from "../components/molecules/Search/SearchProducts";
import useProducts from "../hooks/useProducts";
import Layout from "../layout/Layout";

function Products() {
    const { paginatedList: list, setFilters } = useProducts();
	const params = useParams<{ category: string }>();

	return (
		<Layout>
			<Title title={params.category ? `Estas viendo: ${params.category}` : "Mirá lo que tenemos para ofrecerte"} />
            <SearchProducts setFilters={setFilters} />
            <ProductList list={list} />
            <Toaster />
		</Layout>
	);
}

export default Products;
