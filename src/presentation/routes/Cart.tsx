import { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import Layout from "../layout/Layout";
import CartList from "../components/molecules/CartList/CartList";
import CartPrices from "../components/molecules/CartPrices/CartPrices";
import CartButtons from "../components/molecules/CartButtons/CartButtons";

function Cart() {
    const { products, editQuantity } = useContext(CartContext);

	useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

	return (
		<Layout>
			<CartList products={products} editQuantity={editQuantity}/>
            <CartPrices products={products}/>
            <CartButtons products={products} />
		</Layout>
	);
}

export default Cart;