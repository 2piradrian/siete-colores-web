import { useSelector } from "react-redux";
import { product } from "../types";

function useOrder() {
	const cartItems = useSelector((state: any) => state.cart);

	const getSubtotal = () => {
		return cartItems?.reduce(
			(acc: any, cur: any) =>
				acc + Number(cur.price) * Number(cur.quantity),
			0
		);
	};

	const getOrder = () => {
		const text = `Hola, me gustaría consultar por los siguientes articulos\n${cartItems
			?.map((products: product) => {
				return `${products.name} (${products.id}) x(${products.quantity}u.)\n`;
			})
			.join("")}
			Con un total estimado de $${subtotal + ", más envio"}
		`;
		return encodeURI(text);
	};

	let subtotal = getSubtotal();
	let order = `https://api.whatsapp.com/send?phone=543512742036&text=${getOrder()}`;

	return { order, subtotal };
}

export default useOrder;
