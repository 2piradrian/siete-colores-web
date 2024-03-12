import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Toaster } from "react-hot-toast";
import CartList from "../components/molecules/CartList/CartList";
import CartPrices from "../components/molecules/CartPrices/CartPrices";
import CartButtons from "../components/molecules/CartButtons/CartButtons";
import Layout from "../layout/Layout";

function Cart() {
    const { products, editQuantity } = useContext(CartContext);

	return (
		<Layout>
			<CartList products={products} editQuantity={editQuantity}/>
            <CartPrices products={products}/>
            <CartButtons products={products} />
			<Toaster />
		</Layout>
	);
}

export default Cart;
