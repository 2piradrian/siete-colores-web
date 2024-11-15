import { useParams } from "react-router-dom";
import { ProductsContext } from "../../core";
import { useContext, useEffect } from "react";
import Layout from "../layout/Layout";
import Title from "../components/atoms/Title/Title";
import SearchProducts from "../components/molecules/Search/SearchProducts";
import ProductList from "../components/molecules/ProductList/ProductList";

function Products() {
	const { products, updateFilters, loading, subCategories } = useContext(ProductsContext);
	const params = useParams<{ category: string }>();

	useEffect(() => {
		updateFilters({ category: params.category || "Todos" });
	}, [params.category]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [params.category]);

	return (
		<Layout>
			<Title title={params.category ? `Estás viendo ${params.category}` : "Mirá lo que tenemos para ofrecerte"} />
            <SearchProducts setFilters={updateFilters} category={params.category} subCategories={subCategories} />
           {!loading ? <ProductList list={products} /> : <p>Cargando...</p>} 
		</Layout>
	);
}

export default Products;
