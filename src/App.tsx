import { CartProvider } from './context/CartContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './presentation/routes/Home';
import Products from './presentation/routes/Products';
import Details from './presentation/routes/Details';
import Cart from './presentation/routes/Cart';

function App() {
  return (
	<CartProvider>
    	<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Products />} />
			<Route path="/products/:category" element={<Products />} />
			<Route path="/details/:code" element={<Details />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/home" element={<Navigate to="/" />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	</CartProvider>
  );
}

export default App;
