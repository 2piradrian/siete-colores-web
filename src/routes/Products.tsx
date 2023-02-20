import ProductList from "./../components/product-list/ProductList";
import Search from "./../components/search/Search";
import Layout from "./../layout/Layout";

function Products() {
	return (
		<Layout>
			<Search />
			<ProductList />
		</Layout>
	);
}

export default Products;
