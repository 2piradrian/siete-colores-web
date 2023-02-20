import Prices from "../components/prices/Prices";
import List from "./../components/list/List";
import Layout from "./../layout/Layout";

function Cart() {
	return (
		<Layout>
			<List />
			<Prices />
		</Layout>
	);
}

export default Cart;
