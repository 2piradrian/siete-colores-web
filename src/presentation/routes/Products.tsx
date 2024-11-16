import { useParams } from "react-router-dom";
import { ProductsContext } from "../../core";
import { useContext, useEffect } from "react";
import Layout from "../layout/Layout";
import Title from "../components/atoms/Title/Title";
import SearchProducts from "../components/molecules/Search/SearchProducts";
import ProductList from "../components/molecules/ProductList/ProductList";
import PageSelector from "../components/molecules/PageSelector/PageSelector";

export default function Products() {
	const { products, updateFilters, clearFilters, loading, subCategories, filters, page, totalPages, prevPage, nextPage } = useContext(ProductsContext);
	
	const params = useParams<{ category: string }>();
	
	useEffect(() => {
		window.scrollTo(0, 0);
		updateFilters({ category: params.category });
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [page]);

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
			<PageSelector currentPage={page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} />
			{ loading && <span>Cargando...</span> }
           	<ProductList list={products} />
			<PageSelector currentPage={page} totalPages={totalPages} prevPage={prevPage} nextPage={nextPage} />
		</Layout>
	);
}