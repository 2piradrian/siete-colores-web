import { useParams } from "react-router-dom";
import { ProductsContext } from "../../core";
import { useContext, useEffect } from "react";
import Layout from "../layout/Layout";
import Title from "../components/atoms/Title/Title";
import SearchProducts from "../components/molecules/Search/SearchProducts";
import ProductList from "../components/molecules/ProductList/ProductList";

export default function Products() {
	const { products, updateFilters, clearFilters, loading, subCategories, filters } = useContext(ProductsContext);
	
	const params = useParams<{ category: string }>();
	
	useEffect(() => {
		window.scrollTo(0, 0);
		updateFilters({ category: params.category });
	}, [params.category]);

	return (
		<Layout>
			<Title title={params.category ? `Estás viendo ${params.category}` : "Mirá lo que tenemos para ofrecerte"} />
            <SearchProducts 
				filters={filters} 
				setFilters={updateFilters} 
				clearFilters={clearFilters} 
				category={params.category} 
				subCategories={subCategories} 
			/>
			{ loading && <span>Cargando...</span> }
           	<ProductList list={products} />
		</Layout>
	);
}