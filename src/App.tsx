import { QueryClient, QueryClientProvider } from "react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Products from "./routes/Products";
import "./styles/global.css";
import "./styles/var.css";

const queryClient = new QueryClient();

function App() {
	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/products" element={<Products />} />
					{/*<Route path="/cart" element={<Cart />} />
					<Route path="/cart/shipping" element={<Shipping />} /> */}
					<Route path="/" element={<Navigate to="/home" />} />
				</Routes>
			</QueryClientProvider>
		</div>
	);
}

export default App;
