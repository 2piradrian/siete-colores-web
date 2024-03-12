import { Toaster } from "react-hot-toast";
import Title from "../components/atoms/Title/Title";
import ProductList from "../components/molecules/ProductList/ProductList";
import SearchProducts from "../components/molecules/Search/SearchProducts";
import Layout from "../layout/Layout";
import useProducts from "../hooks/useProducts";

function Products() {
    const { paginatedList: list, setFilters } = useProducts();

	return (
		<Layout>
			<Title title="Mirá lo que tenemos para ofrecerte" />
            <SearchProducts setFilters={setFilters} />
            <ProductList list={list} />
            <Toaster />
		</Layout>
	);
}

export default Products;
