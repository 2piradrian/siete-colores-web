import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Products from './routes/Products';
import Cart from './routes/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
	<CartProvider>
    	<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products" element={<Products />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/home" element={<Navigate to="/" />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	</CartProvider>
  );
}

export default App;
