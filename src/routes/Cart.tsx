import Prices from "../components/prices/Prices";
import ButtonRouter from "./../components/button-router/ButtonRouter";
import List from "./../components/list/List";
import Layout from "./../layout/Layout";

function Cart() {
	return (
		<Layout>
			<List />
			<Prices />
			<ButtonRouter />
		</Layout>
	);
}

export default Cart;
