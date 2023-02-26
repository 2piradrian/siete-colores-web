import { QueryClient, QueryClientProvider } from "react-query";
import { Navigate, Route, Routes } from "react-router-dom";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import Login from "./routes/Login";
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
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<Login />} />
					<Route path="/" element={<Navigate to="/home" />} />
					<Route path="*" element={<Navigate to="/home" />} />
				</Routes>
			</QueryClientProvider>
		</div>
	);
}

export default App;
